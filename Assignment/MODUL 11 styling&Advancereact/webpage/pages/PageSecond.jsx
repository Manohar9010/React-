import React from 'react'
import './PageSecond.css'
import aboutimg from '../images/about1.jpg'
import aboutimg1 from '../images/about2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBreadSlice, faUtensils } from '@fortawesome/free-solid-svg-icons'

export default function PageSecond() {
  return (
    <div>
     <div className="mainlearn">
        <div className="container">
            <div className="learn_flex">
                <div className="learn_text">
                    <h1>Learn how to cook</h1>
                    <h1>from your house</h1>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. Mumquam eius modi tempora incidunt ut labore et.</p>
                    <div className="learn_small_text">
                        <div className="easy_text">
                           <h4>Easy Manual</h4>
                           <span className='rasy_icon'><FontAwesomeIcon icon={faBreadSlice} /></span> 
                           <p>Sed ut perspiciatis unde omnis iste natus.</p>
                        </div>
                        <div className="for_text">
                            <h4>For Everyone</h4> 
                           <span className='rasy_icon'><FontAwesomeIcon icon={faUtensils} /></span> 
                            <p>Sed ut perspiciatis unde omnis iste natus.</p>
                        </div>
                    </div>
                </div>
                <div className="learn_image">
                    <div className='learn_smimg'>
                    <img src={aboutimg} alt="" />
                    </div>
                    <div>
                    <img src={aboutimg1} alt="" />
                    </div>
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}
