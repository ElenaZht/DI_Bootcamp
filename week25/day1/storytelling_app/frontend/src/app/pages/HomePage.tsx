import Feed from "./components/Feed"
import AddStory from "./components/AddStory"

export default function HomePage() {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex-1">
        <form className="filter mb-4">
          <input className="btn" type="radio" name="frameworks" aria-label="My stories"/>
          <input className="btn" type="radio" name="frameworks" aria-label="All"/>
        </form>
        <Feed/>
      </div>
      <div className="w-1/3">
        <AddStory/>
      </div>
    </div>
  )
}