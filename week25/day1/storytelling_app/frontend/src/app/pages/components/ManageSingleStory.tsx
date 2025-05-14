import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../features/store';
import { getStoryContributors } from '../../../features/thunks/getStoryContributors';
import type { Contributor, User } from '../../../features/types';
import { getUserById } from '../../../features/thunks/GetUserByIdThunk';

interface ManageSingleStoryProps {
    id: string;
    title?: string;
    content?: string;
    date?: string;
    contributors?: string[]; 
}

export default function ManageSingleStory({
    id, 
    title = "Untitled", 
    date = "No date", 
    content = "No content"

}: ManageSingleStoryProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [contributors, setContributors] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchContributors = async () => {
            setIsLoading(true);
            try {
                const contributorsData = await dispatch(getStoryContributors(id)).unwrap();
                
                // Fetch user details for each contributor
                const userPromises = contributorsData.map(contributor => 
                    dispatch(getUserById(contributor.user_id)).unwrap(),
                );
                
                const users = await Promise.all(userPromises);
                setContributors(users);
                console.log("story", title, 'contributors', users)

            } catch (error) {
                console.error('Failed to fetch contributors:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchContributors();
    }, [dispatch, id]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div>
            <div className="m-4">
                <div className="card bg-base-100 w-fit shadow-sm">
                    <div className="card-body">
                        <div className="card-title justify-between w-full">
                            {title}
                            <small className="text-left">{formatDate(date)}</small>
                        </div>
                        <p className="text-left">{content}</p>
                        <p className="text-left">
                            Contributors: {isLoading ? 'Loading...' : 
                                contributors.length === 0 ? 'No contributors' :
                                contributors.map(c => c.username).join(', ')}
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
    );
}