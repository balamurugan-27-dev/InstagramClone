import React from 'react'
import './SideBar.css'
export default function SideBar() {
  return (
    <div className='m-3'>
    <div className='d-flex flex-column gap-3'>
      <img src="src\assets\instagram-text-icon.webp" alt="gg" className='LogoText ' /> 
      <div><i className="bi bi-house "></i>Home</div>
      <div><i className="bi bi-search"></i>Search</div>
      <div><i className="bi bi-compass"></i>Explore</div>
      <div><i className="bi bi-file-play"></i>Reels</div>
      <div><i className="bi bi-bell"></i>Notification</div>
      <div><i className="bi bi-chat"></i>Message</div>
      <div><i className="bi bi-clipboard-plus"></i>Create</div>
      <div><i className="bi bi-person"></i>profile</div>
    </div>
    <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
      <div><i className="bi bi-threads"></i>Threads</div>
      <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}
