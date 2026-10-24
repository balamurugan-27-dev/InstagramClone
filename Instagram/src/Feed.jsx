import React from 'react'
import Stories from './Stories'
import Post from './Post'
import './Feed.css'

export default function Feed() {
  return (
    <div className='feed'>
        <div className='stories'>
            <Stories/>
        </div>
        <div className='post '>
            <Post/>
        </div>
    </div>
  )
}
