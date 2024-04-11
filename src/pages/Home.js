import React, { useContext } from 'react'
import Feed from './Feed'
import { DataContext } from '../context/DataContext'

function Home() {
  const{posts,searchResult,isLoading,fetchError}=useContext(DataContext);
  if(typeof isLoading === "undefined" && fetchError === null){
   return <p>Error</p>
  }
  else{
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p> }
      {!isLoading && !fetchError && (
      (posts.length ? 
      (<Feed posts={searchResult}/>)
      :(<p style={{marginTop: "2rem"}}>
        No posts to display.
      </p>)))  
    }
      
    </main>
  )}
}

export default Home
