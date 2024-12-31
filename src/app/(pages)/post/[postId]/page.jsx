import React from 'react'

export default function SinglePost({params}) {
    const {postId} = params;
  return (
    <div>
        <h1>
            Single Post ID: {JSON.stringify(postId)}
        </h1>
    </div>
  )
}
