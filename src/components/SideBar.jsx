import React from 'react'
import '../assets/style1.css'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebarMain_div ' >

        <div className='sidebar_div' >

            <div className='sidebarlist_div' >
            <ul >
                <div className='magglass_div'  >
                <li  ><Link to='/search' ><i class="fa-solid fa-magnifying-glass mag_glass"></i></Link></li>
                </div>

                <div className='magglass_div'  >
                <li  ><Link to='/' ><i class="fa-solid fa-house home"></i></Link></li>
                </div>
            
        </ul>
            </div>

       
        </div>

    </div>
  )
}

export default SideBar