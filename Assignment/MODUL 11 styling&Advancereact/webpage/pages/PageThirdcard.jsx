import React from 'react'
import './PageThird.css'
import courseimg from '../images/c1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
export default function PageThirdcard(props) {
  return (
    <div>
    <div className="course_card">
        <div className="image_card">
            <img src={props.imgpath} alt="" />
            <div className='course_tag'>
                <div className="course_tag1">
                    {props.tag1}
                </div>
                <div className="course_tag2">
                    {props.tag2}
                </div>
            </div>
        </div>
        <div className="text_card">
            <div className="rate_text">
                <div className='do_text'>${props.rate}</div>
                <div className='star_text'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <h5>{props.caption}</h5>
            <div className="std_text">
            <FontAwesomeIcon icon={faUsers} />&emsp; 
             <span className='sy_text'>{props.enrolld}</span> 
            </div>
        </div>
        
        </div>   
        
   
    </div>
  )
}
