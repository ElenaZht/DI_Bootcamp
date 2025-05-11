import React from 'react'
import { Link } from 'react-router-dom'
interface ManageSingleStoryProps {
    id: string;
    title?: string;
    content?: string;
    date?: string;
    contributors?: string[];
  }
export default function ManageSingleStory({id, title = "Untitled", date = "No date", content = "No content", contributors = [] }: ManageSingleStoryProps) {
  return (
    <div>
        <div className="m-4">
            <div className="card bg-base-100 w-fit shadow-sm">
                <div className="card-body">
                    <div className="card-title justify-between w-full">
                        {title + id}
                        <small className="text-left">{date}</small>
                    </div>
                    <p className="text-left">{content}</p>
                    <p className="text-left"> contributors: {contributors}
                    </p>
                    <div className="card-actions justify-end items-baseline">
                        <Link to={`/story/${id}`} className="btn">Open</Link>
                        <button className="btn btn-error">Delete</button>
                        <button className="btn btn-accent">Edit</button>
                        <button className="btn btn-secondary">Add contributor</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
