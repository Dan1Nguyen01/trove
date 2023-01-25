import React, { useEffect, useState } from 'react';
import {
    FaHome,FaBars,FaSearch,FaMusic,FaCloudDownloadAlt,FaRegStar,FaCloudUploadAlt
}from "react-icons/fa";
import {CiStreamOn} from 'react-icons/ci'
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import img from '../../imgs/testing.jpg'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/stream",
            name:"Stream",
            icon:<CiStreamOn/>
        },
        {
            path:"/search",
            name:"Search",
            icon:<FaSearch/>
        },
        {
            path:"/music",
            name:"Music",
            icon:<FaMusic/>
        },
        {
            path:"/download",
            name:"Download",
            icon:<FaCloudDownloadAlt/>
        },
        {
            path:"/top100",
            name:"Top 100",
            icon:<FaRegStar/>
        },

        {
            path:'/upload',
            name:'Upload',
            icon:<FaCloudUploadAlt/>
        }
        
    ]

    const [showLogo, setShowLogo] = React.useState(window.innerWidth>480);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setShowLogo(window.innerWidth>480);
        })
    },[])

    
    return (
        <div className="container">
           <div className="sidebar">
               <div className="top_section">
                    {showLogo ? <h1  className="logo">Trove </h1> :<img src={img} width='75px' alt="" />}
                    
                    
                  
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;