import React, { useState } from 'react'

import './Stories.css'
import { useNavigate } from 'react-router';

export default function Stories() {

  const [stories,setStories]=useState([
      {
        id: 1,
        username: "travel.with.arun",
        profilePic: "https://i.pravatar.cc/150?img=12",
        postImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        caption: "Exploring the beauty of nature 🌿",
        likes: 1240,
        comments: 56
      },
      {
        id: 2,
        username: "foodie_diaries",
        profilePic: "https://i.pravatar.cc/150?img=47",
        postImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
        caption: "Pizza makes everything better 🍕",
        likes: 856,
        comments: 34
      },
      {
        id: 3,
        username: "nature.vibes",
        profilePic: "https://i.pravatar.cc/150?img=44",
        postImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        caption: "Peace is found in the mountains 🏔️",
        likes: 2340,
        comments: 89
      },
      {
        id: 4,
        username: "street_style_raj",
        profilePic: "https://i.pravatar.cc/150?img=11",
        postImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        caption: "Simple outfit, strong vibes 😎",
        likes: 967,
        comments: 42
      },
      {
        id: 5,
        username: "coffee.and.code",
        profilePic: "https://i.pravatar.cc/150?img=13",
        postImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        caption: "Coffee first, code later ☕💻",
        likes: 1520,
        comments: 67
      },
      {
        id: 6,
        username: "sunset.chaser",
        profilePic: "https://i.pravatar.cc/150?img=49",
        postImage: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=800",
        caption: "Every sunset brings a new beginning 🌅",
        likes: 3100,
        comments: 102
      },
      {
        id: 7,
        username: "fitness.with.vik",
        profilePic: "https://i.pravatar.cc/150?img=68",
        postImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
        caption: "No excuses. Just consistency 💪",
        likes: 742,
        comments: 29
      },
      {
        id: 8,
        username: "tech.world",
        profilePic: "https://i.pravatar.cc/150?img=14",
        postImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        caption: "Building something awesome 🚀",
        likes: 1890,
        comments: 74
      },
      {
        id: 9,
        username: "ocean.soul",
        profilePic: "https://i.pravatar.cc/150?img=45",
        postImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        caption: "Vitamin sea 🌊",
        likes: 2780,
        comments: 91
      },
      {
        id: 10,
        username: "night.photography",
        profilePic: "https://i.pravatar.cc/150?img=52",
        postImage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800",
        caption: "The city never sleeps 🌃",
        likes: 1120,
        comments: 48
      }
        ]);

        const navigate=useNavigate();

  


  return (
    <div className='d-flex  stories'  onWheel={(e) => {
      
    e.currentTarget.scrollLeft += e.deltaY;
  }}   >
        
        {stories.length>0 ?
        (stories.map((story)=>
        <div className='stories-container ' key={story.id} onClick={()=>navigate(`./viewstory/${story.id}/${stories.length}`)} >
            <div className='gradiant' >
                <img  src={story.profilePic} alt="profile" className='profile-image' />
            </div>
            <div className='username text-truncate'>
              <p>{story.username}</p>
            </div>
          </div>)) :
        (
            <h5>Loading...</h5>
        )

        }
    </div>
  )
}
