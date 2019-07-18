import React from 'react'

const Post = ({post}) => (
	<div className="col s12 m6 l4">
    <div className="card">
      <div className="card-content">
        <span className="card-title">{post.title}</span>
        <p>{post.body}</p>
      </div>
    </div>
  </div>
)

export default Post;