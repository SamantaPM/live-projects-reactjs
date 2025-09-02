import NavBar from '../ui/NavBar'
import PostCard from '../ui/PostCard';
import { postsContent } from '../data/postsContent';

const Posts = () => {
  return (
    <div>
      <NavBar />
      <h1>Posts</h1>
       <ul>
        {postsContent.map((post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts