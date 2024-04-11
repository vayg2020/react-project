import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function PostLayout() {
  return (
    <div>
       <Routes>
        <Route path="/newPost" element={<NewPost/>}/>
        <Route path="/postpage" element={<PostPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/footer" element={<Footer/>}/> 
        {/* <Route path="/post" element={<Post/>}/>  */}
      </Routes>
        <Link to="/postpage"><h1>PostPage</h1></Link>
        <Link to="/"><h1>Home</h1></Link>
    </div>
  )
}

export default PostLayout
