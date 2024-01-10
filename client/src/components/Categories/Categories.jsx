import React from 'react'
import "./Categories.scss"
import { FaAngleRight } from "react-icons/fa";
const Categories = () => {
  return (
    <div className='categories'>
        <div className="categoriesContents">
            <div className="header">Select Category</div>
            <div className="contents">
                <span className="link">
                    Politics
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link">
                    Business
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link">
                    Technology
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link">
                    Education
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link">
                    Science
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link">
                    Literature
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link">
                    Sports
                    <FaAngleRight className='icon'/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Categories