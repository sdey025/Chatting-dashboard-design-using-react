import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import Side_Nav_Data from './Side_Nav_Data'
import './Side_Nav.css'
import dp from './dp.jpg'

function Side_Nav() {
    const [sidebar, setsidebar] = useState(false)
    const showSidebar = () => setsidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <img src={dp} className="img"/>
                    <br/>
                    <Link className="para"><span>Henry Jabbawockiez</span><BiIcons.BiChevronDown className="down"></BiIcons.BiChevronDown></Link><br/><br/>
                    {Side_Nav_Data.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ) 
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Side_Nav
