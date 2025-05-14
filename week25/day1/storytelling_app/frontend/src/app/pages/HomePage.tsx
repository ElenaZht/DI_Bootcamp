import Feed from "./components/Feed"
import AddStory from "./components/AddStory"
import { useState } from "react";
import type {FilterType} from '../../../../types/StoryTypes'


export default function HomePage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value as FilterType);
  };

  return (
    <div className="flex gap-4 p-4">
      <div className="flex-1">
        <div className="flex">
          <div className="join mb-4 w-full">
            <input 
              id="all"
              type="radio" 
              name="filter"
              value="all"
              className="join-item btn"
              checked={filter === 'all'}
              onChange={handleFilterChange}
            />
            <label htmlFor="all" className="join-item btn">All Stories</label>
            
            <input 
              id="my"
              type="radio" 
              name="filter"
              value="my"
              className="join-item btn"
              checked={filter === 'my'}
              onChange={handleFilterChange}
            />
            <label htmlFor="my" className="join-item btn">My Stories</label>
          </div>
          <Feed filter={filter} />
          <AddStory />
        </div>
      </div>
    </div>
  );
}