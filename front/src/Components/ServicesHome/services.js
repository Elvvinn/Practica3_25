import React, { useEffect, useState } from 'react'
import "./services.scss"
import axios from 'axios'
function ServicesSection() {

    const [datam, setDatam] = useState([])
    const [search, setSearch] = useState("")
    function getfunc() {
        axios.get("http://localhost:5000/users").then(({ data }) => {
            setDatam(data);
        });
    }

    const deleteclick = (_id) => {

        axios.delete(`http://localhost:5000/users/${_id}`).then(() => {
            getfunc()
        }
        )

    }

    useEffect(() => {
        getfunc()
    }, [])


    return (

        <>

            <section className='sectiondiv'>
                <div className='servicessec'>
                    <h3> Services </h3>
                    <p> Lorem Ipsum dolor sit amet consectetur </p>
                    <input type={"text"} placeholder="Search now" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='generalelementdiv'>
                    {
                        datam.filter(data => data.name.toLowerCase().includes(search)).map((element) => (

                            <div className='elementdiv'>
                                <i class={element.iconUrl}></i>
                                <p> {element.name} </p>
                                <h4> {element.title} </h4>
                                <button onClick={() => { (deleteclick(element._id)) }}> Delete This item </button>
                            </div>

                        )

                        )}
                </div>
            </section>

        </>
    )
}

export default ServicesSection