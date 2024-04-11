import React, { createContext, useContext, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function EditPost() {
  const {posts, handleEdit, editTitle, setEditTitle, editBody,setEditBody} = useContext(DataContext);
    const {id}=useParams();
    console.log(" POSTS ********", posts);
   
    const post=posts.find(post=> (post.id).toString()===id);
    useEffect(()=>{
            if(post){
            setEditTitle(post.title);
            setEditBody(post.body);}
},[post,setEditBody,setEditTitle])
    return (
        <main className="NewPost">
          {editTitle &&
          <>
          <h2>Edit Post</h2>
          <form className='newPostForm'>
            <label htmlFor='postTitle'>Edit Title:</label>
            <input
            id="postTitle"
            type="text"
            required
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
            />
           <label htmlFor='postBody'>Edit Post:</label>
            <textarea
            id="postBody"
            type="text"
            required
            value={editBody}
            onChange={(e)=>setEditBody(e.target.value)}
            />
            
            <button type='submit' onClick={(e)=>{
              e.preventDefault();
              return handleEdit(post.id);}
              }>submit</button>
          </form>
          </>
          }
        </main>)
    }


export default EditPost
