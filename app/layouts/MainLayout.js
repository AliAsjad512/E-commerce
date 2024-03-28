"use client"
import MainHeader from "./includes/MainHeader"
import TopMenu from './includes/TopMenu'
import SubMenu from './includes/SubMenu'
import Footer from './includes/Footer'

export default function MainLayout({ children}) {
    return (
        <>
        <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
            <div>
                <TopMenu/>
                <MainHeader/>
                <SubMenu />
                {children}
                <Footer/>
                
            </div>
            
        </div>
        
        </>
    )
}