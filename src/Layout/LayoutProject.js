import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Project from "../Project/Project";
import Search from "../Search/Search";



const Layoutproject=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Search className="Search"/>
            <Project className="Project" />
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default Layoutproject;