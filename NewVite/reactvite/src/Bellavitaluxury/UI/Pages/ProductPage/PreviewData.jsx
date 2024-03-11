import React from 'react'
import { useSelector } from 'react-redux'

export default function PreviewData() {
  const data=useSelector(state=>state.userpreviwSlice)
  console.log( "preview",data)
  return (
    <div>

        

    </div>
  )
}
