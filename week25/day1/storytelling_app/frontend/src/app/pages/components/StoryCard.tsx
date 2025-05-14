import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../features/store';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserById } from '../../../features/thunks/GetUserByIdThunk';

interface StoryCardProps {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
}

export default function StoryCard({ id, title, content, authorId, createdAt }: StoryCardProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [authorInfo, setAuthorInfo] = useState(null)
    const username = useSelector((state: RootState) => state.user.currentUser?.username)
    const dispatch = useDispatch<AppDispatch>();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        });
      };

    useEffect(()=> {
        async function fetchData() {

            const userI = await dispatch(getUserById(authorId));
            setAuthorInfo(userI.payload)
            setIsLoading(false)
        }
        fetchData()
        
      }, [])


  return (
    <div className="m-4">
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-left">{content}</p>
                <div className="card-actions justify-end items-baseline">
                    <p className="text-left">
                    {isLoading ? 'Loading...': authorInfo?.username}
                    </p>
                    <p className="text-left">{formatDate(createdAt)}</p>
                    <Link to={`/story/${id}`} className="btn btn-primary">More &gt;</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
