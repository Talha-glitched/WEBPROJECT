import React from 'react'
import { sendmessage } from '../Services/api';
export default function Test() {
  async function handlemessage(){
    console.log("Button CLicked");
    await sendmessage();
  
  }
  
  
  return (
   
   
   <div>
     <button onClick={handlemessage}>Send request to server.</button>
    </div>
  )
}
