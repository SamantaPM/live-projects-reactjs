import React from 'react'
import { useParams, Link } from 'react-router'
import { postsContent } from '../data/postsContent';

const Post = () => {
  const { id } = useParams();
  const found = postsContent.find((post) => {
    return post.id === Number(id)
  }) || false;

  return (
    <div>
      <Link to="/posts">Back to Posts</Link>

      {( !found ) ? <h2>Post not found</h2> :
        (
          <div>
            <h2>{found.title}</h2>
            <p>{found.content}</p>
          </div>
        )
      }
    </div>
  )
}


export default Post