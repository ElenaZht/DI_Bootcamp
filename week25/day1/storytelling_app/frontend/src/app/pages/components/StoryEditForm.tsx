import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../../features/store';
import { editStory } from '../../../features/thunks/EditStoryThunk';
import { getAllStories } from '../../../features/StoriesSlice';
import type {StoryFormData} from '../../../../../types/StoryTypes'


interface StoryEditFormProps {
    id: string;
    currentTitle: string;
    currentContent: string;
    onSuccess: () => void;
    onCancel: () => void;
}

export default function StoryEditForm({ id, currentTitle, currentContent, onSuccess, onCancel }: StoryEditFormProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState<StoryFormData>({
        title: currentTitle,
        content: currentContent
    });

    useEffect(() => {
        setFormData({ title: currentTitle, content: currentContent });
    }, [currentTitle, currentContent]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

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
        await dispatch(editStory({ id: id, story: formData })).unwrap();
        await dispatch(getAllStories()); // Refresh the stories list
        onSuccess();

    } catch (err: any) {
        setError(err.message || err || 'Failed to update story');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="p-2 w-full z-0">
      <form onSubmit={handleSubmit} className="card max-w-3xl mx-auto bg-base-100 shadow-sm w-full">
        <div className="card-body p-4 space-y-2">
          <h2 className="text-xl font-bold">Edit Story</h2>
          
          {error && <div className="alert alert-error shadow-lg text-xs p-2"><span>Error: {error}</span></div>}

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
            <button type="button" onClick={onCancel} className="btn btn-sm btn-ghost" disabled={isLoading}>Cancel</button>
            <button type="submit" className="btn btn-primary btn-sm" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}