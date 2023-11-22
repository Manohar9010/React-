import React from 'react'
import './Header.css'
import './Header.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBreadSlice,faChevronDown,faMagnifyingGlass, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div>
     <div className="mainhead" id='bgcol'>
        <div className="container">
            <div className="head_flex">
                <div className="brand">
                    <h1 id='textcol'>Cooking</h1>
                  
                   <p id='textcol'><FontAwesomeIcon icon={faBreadSlice} /></p> 
                </div>
                <div className="navbar">
                    <ul>
                        <li className='home_c' id='textcol'><a href="">Home</a></li>
                        <li><a href="" id='textcol'>About us</a></li>
                        <li><a href="" id='textcol'>Classes</a></li>
                        <li className='downarrow' id='textcol'><a href="">Blog</a>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </li>
                        <li className='downarrow'><a href="" id='textcol'>Pages</a>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </li>
                        <li><a href="" id='textcol'>Contact</a></li>
                        {/* <FontAwesomeIcon icon="fa-solid fa-phone" /> */}

                    </ul>
                </div>
                <div className="search_bar">
                      <input type="text" placeholder='Enter Keyword...'/>
                      <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className="theme" id='textcol'>
                <FontAwesomeIcon icon={faMoon} />
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}
