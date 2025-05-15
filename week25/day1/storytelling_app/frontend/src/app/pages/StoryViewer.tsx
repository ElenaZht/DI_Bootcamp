import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import type { RootState } from '../../features/store';
import { getStoryContributors } from '../../features/thunks/getStoryContributors';
import { getUserById } from '../../features/thunks/GetUserByIdThunk';
import { editStory } from '../../features/thunks/EditStoryThunk';
import { getAllStories } from '../../features/StoriesSlice';
import { deleteStory } from '../../features/thunks/DeleteStoryThunk';
import { addContributor } from '../../features/thunks/AddContributorThunk';
import { getAllUsers } from '../../features/thunks/GetAllUsersThunk';
import { deleteContributor } from '../../features/thunks/DeleteContributorThunk';
import type { User } from '../../../../types/UserTypes';
import Comments from './components/Comments'
import type {Story, StoryFormData} from '../../../../types/StoryTypes'


export default function StoryViewer() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const stories = useSelector((state: RootState) => state.stories.items)
  const [currentStory, setCurrentStory] = useState<Story>(null)
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [storyContributorsList, setStoryContributorsList] = useState<Array<any>>([])  
  const [editMode, setEditMode] = useState(false)
  const [contributorsManagingMode, setContributorsManagingMode] = useState(false)
  const [formData, setFormData] = useState<StoryFormData>({
    title: '',
    content: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false)
  const [isContributor, setIsContributor] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const navigate = useNavigate()
  const [allUsersList, setAllUsersList] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
  };

  const edit = () => {
    setEditMode(true)
    setFormData({
      title: currentStory?.title,
      content: currentStory?.content
    })
  }

// Effect to fetch users when contributorsManagingMode is opened
  useEffect(() => {
    const fetchAllUsers = async () => {
      if (contributorsManagingMode) {
        setLoadingUsers(true);
        try {
          const usersArray = await dispatch(getAllUsers()).unwrap();
          
          setAllUsersList(Array.isArray(usersArray) ? usersArray : []);

        } catch (fetchUsersError) {
          setError("Failed to load users list.");
          
        } finally {
          setLoadingUsers(false);
        }
      }
    };
    fetchAllUsers();
  }, [contributorsManagingMode, dispatch]);

  const handleAddContributor = async (userIdToAdd: string) => {
    if (!id) {
      setError("Story ID is missing.");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      await dispatch(addContributor({ user_id: userIdToAdd, story_id: id })).unwrap();
      await fetchStoryContributorsList(id);
    } catch (error) {
        console.log("Failed to add contributor.", error);
        setError("Failed to add contributor. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("stories", stories)

    const fetchAuthorInfo = async(author_id: string) => {
      try {
        const userI = await dispatch(getUserById(author_id)).unwrap();
        console.log("userI", userI)
        if (userI){
          setAuthorName(userI.payload.username)
          
        }
      } catch (error) {
        console.log("failed fetch author name", error)
      }
    }


    if (stories.length > 0){
      const story = stories.find(s => s.id == id)
      console.log("story!!", story)
      setCurrentStory(story)
      fetchAuthorInfo(story.author_id)
      fetchStoryContributorsList(id)
    }
  

  }, [stories])

  const fetchStoryContributorsList = async(story_id: string): Promise<void> => {
    if (story_id){
      try {
        const storyContributors = await dispatch(getStoryContributors(id));
        if(storyContributors && storyContributors.payload){
          console.log("fetchStoryContributorsList", storyContributors.payload);
          setStoryContributorsList(
            Array.isArray(storyContributors.payload) ? storyContributors.payload : []
          );
        }
      } catch (error) {
        console.log("Failed to fetch story contributors: ", error);
        setStoryContributorsList([]);
      }
    }
  }

  useEffect(() => {
    if (currentUser) {
      if (currentStory && (currentUser.id === currentStory.author_id)){
        setIsAuthor(true);

      } else if(
        Array.isArray(storyContributorsList) && 
        storyContributorsList.length > 0 &&
        storyContributorsList.find(c => c.user_id === currentUser.id)
      ){
        setIsContributor(true);
      }
    }
  }, [id, dispatch, currentUser, storyContributorsList]);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setIsLoading(true);

      try {        
          console.log("handle submit")
          await dispatch(editStory({id: id, story: formData})).unwrap();
          await dispatch(getAllStories())
          setFormData({ title: '', content: '' });
          setEditMode(false)
          setError(null);
          setIsLoading(false);

      } catch (err) {
          setError(err as string || 'Failed to edit story');
      } finally {
          setIsLoading(false);
      }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this story? This action cannot be undone.");

    if (confirmDelete) {
      setError(null);
      setIsLoading(true);
      try {
        await dispatch(deleteStory(id!));
        dispatch(getAllStories());
        navigate('/');
      } catch (error) {
        console.log("Failed to delete story.", error);
        setError("Failed to delete story. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Story deletion cancelled by user.");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectUserForContribution = (selectedUser: User) => {
    if (!selectedUser || !selectedUser.id) return;

    const confirmAdd = window.confirm(`Add ${selectedUser.username} as a contributor to this story?`);
    if (confirmAdd) {
      handleAddContributor(selectedUser.id);
    }
  };

  const eligibleUsersForDropdown = allUsersList.filter(user => {
    if (currentStory && user.id === currentStory.author_id) {
      return false;
    }
    return !storyContributorsList.some(contributor => contributor.user_id === user.id);
  });

  const handleDeleteContributor = async(contributor_id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contributor? This action cannot be undone.");

    if(confirmDelete){
      if (contributor_id){
        try {
          setIsLoading(true)
          setError('')
          await dispatch(deleteContributor(contributor_id))
          fetchStoryContributorsList(id)
          
        } catch (error) {
          console.log("Failed to delete contributor", error)
          setIsLoading(false)
          setError(error?.message)
        }
      } 
    }

  }

  return  editMode ? 
  (<div className="p-2 w-full z-0">
  <form onSubmit={handleSubmit} className="card max-w-3xl mx-auto bg-base-100 shadow-sm w-full">
    <div className="card-body p-4 space-y-2">
      <h2 className="text-xl font-bold">Edit Story</h2>
      
      <div className="form-control">
        <input
          type="text"
          name="title"
          placeholder="Story Title"
          className="input input-bordered input-sm"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <textarea
          name="content"
          placeholder="Write your story here..."
          className="textarea textarea-bordered h-32 text-sm"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <div className="card-actions justify-end pt-2">
        <button onClick={() => setEditMode(false)} type="button" className="btn btn-sm">Cancel</button>
        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
      </div>
    </div>
  </form>
  </div>) :  (
      <div className="p-4 max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-left">{currentStory?.title}</h2>
            {error && <p className='text-sm text-red-600'>{error}</p>}
            <div className="text-sm text-gray-500">
              <p className="text-left">Author: {authorName}</p>
              <p className="text-left">Date: {formatDate(currentStory?.created_at)}</p>
            </div>
            
            <p className="text-left mt-4">{currentStory?.content}</p>
            {isAuthor && <p className='text-left'>You are the author</p>}
            {isContributor && <p className='text-left'>You are the contributor</p>}
            
            <div className="card-actions justify-end items-baseline">
              {isAuthor && <button onClick={handleDelete} className="btn btn-error">Delete</button>}
              {isAuthor && <button onClick={edit} className="btn btn-accent">Edit</button>}
              {isAuthor && <button onClick={() => setContributorsManagingMode(true)} className="btn btn-secondary">Manage contributor</button>}
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                '' 
              )}
              <details>
                <summary>
                  Contributors ({Array.isArray(storyContributorsList) ? storyContributorsList.length : 0})
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  {Array.isArray(storyContributorsList) && storyContributorsList.length > 0 ? (
                    storyContributorsList.map(contributor => (
                      <li key={contributor.id || contributor.user_id} className="flex justify-between items-center py-1">
                        {contributor.username || `User ${contributor.user_id}`}
                      </li>
                    ))
                  ) : (
                    <li>No contributors yet</li>
                  )}
                </ul>
              </details>
              
              {isContributor && <button onClick={edit} className="btn btn-secondary">Contribute</button>}
            </div>
          </div>
        </div>
        {contributorsManagingMode && 
          <div  className="card bg-base-100 shadow-xl m-4">
            <div className="card-body">
              <h3  className="card-title">Manage Contributors</h3>
              
              {/* List of current contributors */}
              {Array.isArray(storyContributorsList) && storyContributorsList.length > 0 ? (
                <ul className="menu bg-base-100 w-full rounded-box p-2 mt-2 mb-4">
                  <li className="menu-title"><span>Current Contributors:</span></li>
                  {storyContributorsList.map(contributor => (
                    <li key={contributor.id || contributor.user_id}>
                      <div className="flex flex-start items-center">
                        <span>{contributor.username || `User ID: ${contributor.user_id}`}</span>
                        <button onClick={() => handleDeleteContributor(contributor.id)} className="btn btn-xs btn-error btn-outline m-4">X</button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-left mt-2 mb-4">No contributors yet.</p>
              )}
              <h4 className="font-semibold mt-4">Add New Contributor:</h4> 
              {loadingUsers ? (
                <p>Loading users...</p>
              ) : eligibleUsersForDropdown.length > 0 ? (
                <div className="dropdown dropdown-top w-full mt-2"> {/* Use dropdown-top if it's at the bottom of a card */}
                  <button tabIndex={0} role="button" className="btn btn-sm btn-outline w-full">
                    Select a user to add
                  </button>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full z-[1] max-h-60 overflow-y-auto">
                    {eligibleUsersForDropdown.map(user => (
                      <li key={user.id}>
                        <a onClick={() => handleSelectUserForContribution(user)}>{user.username}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-2">
                  {allUsersList.length > 0 ? 'All other users are already contributors or the author.' : 'No other users available.'}
                </p>
              )}
              <div className='card-actions justify-end items-baseline'>
                <button className='btn btn-sm' onClick={() => setContributorsManagingMode(false)}>Close</button>
              </div>
            </div>
          </div>}
        
        <Comments story_id={id}/>
      </div>
    );
  }