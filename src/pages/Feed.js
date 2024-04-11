import React, { useContext } from 'react'
import Post from './Post'
import { DataContext } from '../context/DataContext'

function Feed() {
  const {searchResult} = useContext(DataContext);
  return (
    <>
      {searchResult.map(post=>
        <Post post={post} key={post.id} />
        )}
    </>
  )
}

export default Feed
