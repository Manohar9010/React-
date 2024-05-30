import { Send } from 'lucide-react'
import React from 'react'
import { Button, FormGroup, Input } from 'reactstrap'

export default function Stayhome() {
  return (
    <div>
        
<div className='flex gap-6 mx-2 rounded-4  bg-[url("https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-10.png")]'>

<div className=' w-100  px-10 mt-20 mx-auto'>
<h1>Stay home & get your daily <br/>
needs from our shop</h1>
<p className='mt-4 mb-5'> Start You'r Daily Shopping with  <span className='text-green-500 text-lg'>Nest Mart</span>  </p>

{/* <div className="swiperinput">
    <FormGroup className="d-flex ">
    <Send color="#b5b5b5"  className="sendicon"/>
     <Input type="text"  placeholder="Your Email Please"/>
      <Button>Subscribe</Button>
    </FormGroup>
   </div> */}

   <div className=''>
    <FormGroup className='flex relative'>
        <Send   color="#b5b5b5"  className=" absolute  left-3 top-4 " />
        <input type='email' placeholder="Your Email Please" className='py-3  focus:outline-none active:border-white px-12 border-none focus:border-transparent rounded-l-full  '/>
        <button className='bg-green-600  py-3  px-4 rounded-full absolute left-64 text-white fw-semibold '>Subscribe</button>
    </FormGroup>
   </div>
</div>
<div>

    <img className='pt-32 ' src={"https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-9.png"} alt="" />
</div>

</div>



    </div>
  )
}
