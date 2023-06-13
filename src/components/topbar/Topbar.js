import React from 'react'

export default function Topbar() {
  return (
    <div className='nav'>
      <div className='container'>
        <div className='mainboox'>
            <div className='logo'>
                <a href='#'>Referrizer</a>
            </div>
            <div>
                <ul className='menu'>
                    <li> <a href='#'>Solutions</a></li>
                    <li> <a href='#'>Pricing</a></li>
                    <li> <a href='#'>Testimonials</a></li>

                </ul>
            </div>
            <div>
                <div className='mainbx'>
                    <div>
                        <button className='btn1'>Login</button>
                    </div>
                    <div>
                        <button className='btn2'>Get Started for Free</button>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
