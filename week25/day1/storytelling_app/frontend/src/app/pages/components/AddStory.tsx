import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../../features/store';
import { addNewStory } from '../../../features/thunks/AddStoryThunk';
import type { StoryFormData } from '../../../../../types/StoryTypes';
import type {BackendErrorPayload} from '../../../../../types/ErrorHandlingTypes'


export default function AddStory() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const [formData, setFormData] = useState<StoryFormData>({
    title: '',
    content: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.title.trim() || !formData.content.trim()) {
      setError("Title and content cannot be empty.");
      setIsLoading(false);
      return;
    }

    try {
        await dispatch(addNewStory(formData)).unwrap();
        setFormData({ title: '', content: '' });
        navigate('/');

    } catch (err: any) {
      let displayMessage = 'Failed to create story. Please check your input or try again later.';

      if (err && typeof err === 'object') {
          const backendError = err as BackendErrorPayload;

          if (backendError.errors && Array.isArray(backendError.errors) && backendError.errors.length > 0) {
              if (typeof backendError.errors[0].msg === 'string' && backendError.errors[0].msg.trim() !== '') {
                  displayMessage = backendError.errors[0].msg;
              }
          } else if (typeof backendError.message === 'string' && backendError.message.trim() !== '') {
              displayMessage = backendError.message;
          }
      }

      setError(displayMessage);  
      } finally {
        setIsLoading(false);
    }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null); 

  };

  const handleClearForm = () => {
    setFormData({ title: '', content: '' });
    setError(null);
    // focus the title input
    document.getElementsByName('title')[0]?.focus();
  };

  return (
    <div className="p-2 w-full z-0">
      <form onSubmit={handleSubmit} className="card max-w-3xl mx-auto bg-base-100 shadow-sm w-full">
        <div className="card-body p-4 space-y-2">
          <h2 className="text-xl font-bold">New Story</h2>
          
          {/* Error Display Area */}
          {error && (
            <div role="alert" className="alert alert-error shadow-lg text-xs p-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          <div className="form-control">
            <input
              type="text"
              name="title"
              placeholder="Story Title"
              className="input input-bordered input-sm"
              value={formData.title}
              onChange={handleChange}
              required
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>

          <div className="card-actions justify-end pt-2">
            <button onClick={handleClearForm} type="button" className="btn btn-sm btn-ghost" disabled={isLoading}>Clear</button>
            <button type="submit" className="btn btn-primary btn-sm" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Adding...
                </>
              ) : (
                'Add Story'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}