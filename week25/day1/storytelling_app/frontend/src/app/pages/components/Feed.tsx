import StoryCard from "./StoryCard"

export default function Feed() {
  return (
    <div className="flex flex-col items-center justify-start">
        <h2>Feed</h2>
        <StoryCard/>
        <StoryCard/>
        <StoryCard/>
    </div>
  )
}
