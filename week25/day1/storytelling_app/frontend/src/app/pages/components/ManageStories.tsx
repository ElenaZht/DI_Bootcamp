import React from 'react'
import ManageSingleStory from './ManageSingleStory'

export default function ManageStories() {
  return (
    <div className='w-full'>
        <ManageSingleStory 
            id="1"
            title="First Story"
            content="This is the content of the first story"
            date="2024-05-11"
            contributors={["Maya Kane", "John Doe"]}/>
        <ManageSingleStory 
            id="2"
            title="Second Story"
            content="This is the content of the second story"
            date="2024-05-11"
            contributors={["Maya Kane", "John Doe"]}/>
        <ManageSingleStory 
            id="3"
            title="Third Story"
            content="This is the content of the third story"
            date="2024-05-11"
            contributors={["Maya Kane", "John Doe"]}/>
        
    </div>
  )
}
