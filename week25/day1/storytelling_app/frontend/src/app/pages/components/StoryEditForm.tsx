import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../../features/store';


interface StoryForm {
    title: string;
    content: string;
 }

export default function StoryEditForm({id: string, title: string, content: string}) {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState<StoryForm>({
    title: '',
    content: ''
    });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     try {
//         await dispatch(addNewStory(formData)).unwrap();
//         setFormData({ title: '', content: '' });
//         navigate('/');
//     } catch (err) {
//         setError(err as string || 'Failed to create story');
//     } finally {
//         setIsLoading(false);
//     }
// };

  return (
    <div className="p-2 w-full z-0">
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
            <button type="button" className="btn btn-sm">Cancel</button>
            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
