import React from 'react'

export default function Output({userInformation}) {
  return (
    <>
      <p>Your name: {userInformation.firstName} {userInformation.lastName}</p>
      <p>Your age:  {userInformation.age}</p>
      <p>Your gender: {userInformation.sex}</p>
      <p>Your destination: {userInformation.destination}</p>

      <h4>Your dietary restrictions:</h4>
      <p className='restriction'>**Nuts free: {userInformation.nutsFree ? 'Yes' : 'No'}</p>
      <p className='restriction'>**Lactose free: {userInformation.lactoseFree ? 'Yes' : 'No'}</p>
      <p className='restriction'>**Vegan: {userInformation.vegan ? 'Yes' : 'No'}</p>
    </>
  )
}
    