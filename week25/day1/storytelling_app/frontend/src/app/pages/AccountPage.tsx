import React from 'react'
import UserData from './components/UserData'
import ManageStories from './components/ManageStories'
import AddStory from './components/AddStory'


export default function AccountPage() {
  return (
    <div className='flex gap-4'>
        <UserData/>
        <ManageStories/>
        <AddStory/>
    </div>
  )
}
