import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

interface Story {
  id: string;
  title: string;
  content: string;
  author?: string;
  date?: string;
  contributors?: string[];
}

export default function StoryViewer() {
  const { id } = useParams();

  // This is where you'll fetch the story data based on id
  const story: Story = {
    id: id || '',
    title: 'Sample Story',
    content: 'Story content goes here...',
    author: 'John Doe',
    date: '2024-05-11',
    contributors: ['Maya Kane', 'Jane Smith']
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-left">{story.title}</h2>
          <div className="text-sm text-gray-500">
            <p className='text-left'>Author: {story.author}</p>
            <p className='text-left'>Date: {story.date}</p>
          </div>
          <p className="text-left mt-4">{story.content}</p>

            <div className="card-actions justify-end items-baseline">
                <details>
                    <summary>Contributors</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li>Maya Kane</li>
                        <li>Jane Smith</li>
                    </ul>
                </details>
                <button className="btn btn-secondary">Contribute</button>
            </div>

        </div>
      </div>
      <div className="card bg-base-100 shadow-xl m-4">
        <div className="card-body">
            <h2 className="card-title">Comments</h2>
            <p className='text-left'>Good! 23 my 2025 John Doe</p>
            <p className='text-left'>Very Good! 23 my 2025 Marry Doe</p>
        </div>
      </div>
    </div>
  );
}