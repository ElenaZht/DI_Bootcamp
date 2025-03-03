import React from 'react'
import items from './data.json'

export default function PostList() {
  return (
    <>
        <h1>Hi This is a Title</h1>
        {items && items.map((item, idx) => {
            return <div key={idx}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
        })}
    </>
  )
}
