import React, { useState } from 'react'

interface StoryForm {
  title: string;
  content: string;
}

export default function AddStory() {
  const [formData, setFormData] = useState<StoryForm>({
    title: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Story submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-2 w-full">
      <form onSubmit={handleSubmit} className="card max-w-3xl mx-auto bg-base-100 shadow-sm w-full">
        <div className="card-body p-4 space-y-2">
          <h2 className="text-xl font-bold">New Story</h2>
          
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
            <button type="submit" className="btn btn-primary btn-sm">Add Story</button>
          </div>
        </div>
      </form>
    </div>
  )
}