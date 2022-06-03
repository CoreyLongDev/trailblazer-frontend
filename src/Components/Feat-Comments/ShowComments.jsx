

import React, { useEffect, useState } from "react";
import { MDBTextArea } from "mdb-react-ui-kit";
import axios from "axios";
import "../View/view.css";




export const ShowComments = ({parkID,park}) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState();
  const [commentTitle, setCommentTitle] = useState();
  const [editComment, setEditComment] = useState(null);
  const [editCommentTitle, setEditCommentTitle] = useState()
  const [editCommentBody, setEditCommentBody] = useState()
  
  const fetchUrl = `https://fathomless-eyrie-16229.herokuapp.com/comments/${parkID}`
  //function definitions

  //adds comments to a park
  const addComment = (e) => {
    e.preventDefault();
  
    const filteredComments = [...comments];

    setComments(filteredComments);

    const comment = [
      {
        parkRef: parkID,
        title: commentTitle,
        commentBody: commentText,
      },
    ];
    filteredComments.unshift(comment[0]);
  
    setCommentText('')
    setCommentTitle('')

    axios
      .post(
        `https://fathomless-eyrie-16229.herokuapp.com/comments/add`,
        comment
      )
    .catch(console.error);
  };

  //updatesComment
  const updateComment = (e) => {
    e.preventDefault()
    
    const index = e.target.dataset.key
    let formTitle = e.target.dataset.title
    let formBody = e.target.dataset.body

    if(editCommentTitle != null){
      formTitle = editCommentTitle
    }

    if(editCommentBody != null){
      formBody = editCommentBody
    }
    
    const updatedComments = [...comments]
    updatedComments[index].title = formTitle
    updatedComments[index].commentBody = formBody
    const commentID = updatedComments[index]._id

    setComments(updatedComments)

    toggleEdit()

    const comment = {
        title: editCommentTitle,
        commentBody: editCommentBody,
      }

    axios.put(`https://fathomless-eyrie-16229.herokuapp.com/comments/edit/${commentID}`, comment)
  .catch(console.error)
  };

  //toggles commit edit selection
  
  
  const toggleEdit = (index) => {
    setEditComment(index)
    
  }

  //page needs to be refreshed to see changes must find fix
  //deletesComment
  const deleteComment = (e) => {
    e.preventDefault();
    const index = e.target.dataset.key;
   
    const filteredComments = [...comments];
    filteredComments.splice(index, 1);
    setComments(filteredComments);
    axios
      .delete(
        `https://fathomless-eyrie-16229.herokuapp.com/comments/delete/${comments[index]._id}`
      )
    .catch(console.error);

    //Steps to refresh on page
    //Grab the index of the comment from e.target.dataset.key
    //Using the index we remove the comment from Comments(the state variable) and return a new array without the deleted comment
    //setComments(newArr)

    
  };

  //sets state for comment box text
  const handleComBodyChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleTitleChange = (e) => {
    setCommentTitle(e.target.value);
  };

  const handleEditComTitleChange = (e) => {
    setEditCommentTitle(e.target.value)
  }

  const handleEditComBodyChange = (e) => {
    setEditCommentBody(e.target.value)
  }
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(console.error);
  }, []);

 
  
  // const [comments, setComments] = useState([]);
  return (
    <>
    
      
    <section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Please leave a message or comment about your experience at {park.fullName}!
      </p>
    </div>
  </div>
  <div>
      <h5>Name</h5>
    <MDBTextArea
      onChange={handleTitleChange}
      label=""
      name="title"
      wrapperClass="mb-4"
      id="title-input-field"
      value={commentTitle}
      rows={1}
    />
    <h6>Tell us about your trip to {park.fullName}!</h6>
    <MDBTextArea
      onChange={handleComBodyChange}
      label=""
      name="commentBody"
      id="textAreaExample"
      value={commentText}
      spellCheck="true"
      rows={4}
    />
    
    <button onClick={addComment}>Add Comment</button>
    </div>

  <div class="row text-center d-flex align-items-stretch">
    {comments && comments.map((comment,index) => 
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div class="card testimonial-card" style={{maxWidth:'50%', margin:'1rem'}}>
        <div class="card-up" ></div>
        
        <div class="card-body">
          <h4 class="mb-4">{comment.title}</h4>
          <hr />
          <p class="dark-grey-text mt-4 text-wrap">
            <i class="fas fa-quote-left pe-2"></i>{comment.commentBody}
          </p>
          {editComment === index
                ?<>
                <h5>Name</h5>
                  <MDBTextArea
                    onChange={handleEditComTitleChange}
                    label=''
                    name='title'
                    className='comment-text-area'
                    defaultValue={comment.title}
                    rows={1}
                  />
                  <h5>Tell us about your trip!</h5>
                  <MDBTextArea
                    onChange={handleEditComBodyChange}
                    label=''
                    name='commentBody'
                    className="comment-text-area"
                    defaultValue={comment.commentBody}
                    row={4}
                  />
                  <button onClick={toggleEdit}>Cancel</button>
                  <button data-key={index} data-title={comment.title} data-body={comment.commentBody} onClick={updateComment}>Save</button>
                </>
                : <>
                <button data-key={index} onClick={deleteComment}>
                Delete
                </button>
                <button data-key={index} onClick={()=>toggleEdit(index)}>
                Edit
                </button>
              </>}

        </div>
        
        
      </div>
    </div>)}
    
    
  
  
  

</div>
</section>
</>
  )
}




