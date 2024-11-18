import React from 'react'
import { LuRocket } from "react-icons/lu";

function Home() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center vh-100'>
          <LuRocket size={90} className='text-danger' />
          <h1 className='text-danger'>Wellcome To The ISRO Deshbord</h1>
      </div>
    </>
  )
}

export default Home