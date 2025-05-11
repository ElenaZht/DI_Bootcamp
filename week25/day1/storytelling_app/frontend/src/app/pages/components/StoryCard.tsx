import React from 'react'

export default function StoryCard() {
  return (
    <div className="m-4">
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Card title</h2>
                <p className="text-left">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end items-baseline">
                    <p className="text-left">John James</p>
                    <p className="text-left">25 may 2023</p>
                    <button className="btn btn-primary">More &gt;</button>
                </div>
            </div>
        </div>
    </div>
  )
}
