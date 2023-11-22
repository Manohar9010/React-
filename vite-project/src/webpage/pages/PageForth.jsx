import React from 'react'
import './Pageforth.css';
import chooseimg from '../images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassEnd, faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
export default function PageForth() {
  return (
    <div>
     <div className="mainchoose">
       <div className="choose_flex">
         <div className="choose_img">
          <img src={chooseimg} alt="" />
         </div>
         <div className="choose_text">
           <div className="ourfeatures">
           <h6>Our Features</h6>
           <h1>Why Choose Us?</h1>
           <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
           </div>
           <div className="choose_small_text">
            <div className="small_text">
              <div className='choose_icon'>
              <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div>
                <h4>We Are Winners of 50 Competitions</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              </div>
              
            </div>
            <div className="small_text">
              <div  className='choose_icon'>
              <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <div>
                <h4>We Are Winners of 50 Competitions</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              </div>
              
            </div>
            <div className="small_text">
              <div  className='choose_icon'>
              <FontAwesomeIcon icon={faHourglassEnd} />
              </div>
              <div>
                <h4>We Are Winners of 50 Competitions</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              </div>
              
            </div>
           </div>
           
         </div>
       </div>
     </div>

    </div>
  )
}
