import React from 'react'

const Header = () => {
  return (
    <div className='w-full px-5 md:px-10 py-5 flex justify-between items-center'>
        <a href="/"><img src="/logo.png" width={180} height={50} alt={"Skyforge System Solutions"} name="go to Skyforge System Solutions" /></a>
        <div className='w-3/5 md:w-1/5'>
            <ul className="flex items-center w-full justify-between placeholder px-3 md:px-16">
                <li><a href="#aboutus" name="go to About Us">About Us</a></li>
                <li><a href="#contactus" name="go to Contact Us">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
