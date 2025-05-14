import React from 'react'
import UserData from './components/UserData'
import AddStory from './components/AddStory'

export default function AccountPage() {
  return (
    <div className='flex gap-4'>
        <UserData/>
        <AddStory/>
    </div>
  )
}
