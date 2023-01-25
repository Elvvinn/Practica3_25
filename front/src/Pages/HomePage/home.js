import React from 'react'
import PortfolioSection from '../../Components/OurPortfolio/portfolio'
import ServicesSection from '../../Components/ServicesHome/services'
import WelcomeSection from '../../Components/WelcomeHome/welcome'
import NavbarSection from '../../Layout/Navbar/navbar'

function HomePage() {
    return (
        <>
            <NavbarSection />
            <WelcomeSection />
            <ServicesSection />
            <PortfolioSection />
        </>
    )
}

export default HomePage