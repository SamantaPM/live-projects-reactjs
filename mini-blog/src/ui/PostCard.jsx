import React from 'react'
import { Link } from 'react-router'

const PostCard = ({ id, title}) => {
  return (
    <div>
        <h3>{title}</h3>
        <Link to={`/posts/${id}`}>Read More</Link>
    </div>
  )
}

export default PostCard