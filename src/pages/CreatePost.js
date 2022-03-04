import React, { useState } from 'react'

import {addDoc, collection} from "firebase/firestore"
import {auth, db} from "../firebase-config" 
import { useNavigate } from 'react-router-dom';

function CreatePost() {

  const [title , setTitle] = useState("") ;
  const [postText , setPostText] = useState("") ;

  const collectionRef = collection(db, "posts") ;

  let navigate = useNavigate() ;

  const createPost =  async () => {
      await addDoc(collectionRef , {
        title , 
        postText ,
        author : {
          name : auth.currentUser.displayName ,
          id : auth.currentUser.uid
        }
      })
      navigate("/")
  }
  
  return (
    <div className='createPostPage' >
      <div className='cpContainer' >
        <h1>Create A Post</h1>
        <div className='inputGp' >
          <label>Title:</label>
          <input placeholder='Title....'  onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className='inputGp' >
          <label>Blog:</label>
          <textarea placeholder='Text of your blog....' onChange={(e) => {setPostText(e.target.value)}} />
        </div>

        <button onClick={createPost} >Submit Post</button>

      </div>
    </div>
  )
}

export default CreatePost