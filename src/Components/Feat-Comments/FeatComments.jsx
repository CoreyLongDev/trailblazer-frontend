import React, { useEffect, useState } from "react";
import { MDBTextArea, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import axios from "axios";
import "../View/view.css";

function FeatComments({ parkID }) {
  //State and data members
  const fetchUrl = `https://fathomless-eyrie-16229.herokuapp.com/comments/${parkID}`;

  //Test to see if adding to the useEffect dependecy array will force a rerender it does not so futher fixing is required
  //!!TODO::Must have clean rerender no refresh

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState();
  const [commentTitle, setCommentTitle] = useState();
  const [editComment, setEditComment] = useState(false);
  const [editCommentTitle, setEditCommentTitle] = useState()
  const [editCommentBody, setEditCommentBody] = useState()
  

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
    filteredComments.push(comment[0]);
  
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
  const toggleEdit = () => {
    setEditComment(!editComment)
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



  //Sideeffcts to grab comments
  //Add a depenncy to regrab comments

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h5>Tittle</h5>
      <MDBTextArea
        onChange={handleTitleChange}
        label=""
        name="title"
        wrapperClass="mb-4"
        id="title-input-field"
        value={commentTitle}
        rows={1}
      />
      <h6>Body</h6>
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

      <MDBAccordion initialActive={0}>
        {comments &&
          comments.map((comment, index) => {
            return (
              <MDBAccordionItem
                key={index}
                collapseId={index}
                headerTitle={comment.title}
              >
                {editComment
                ?<>
                <h5>Tittle</h5>
                  <MDBTextArea
                    onChange={handleEditComTitleChange}
                    label=''
                    name='title'
                    className='comment-text-area'
                    defaultValue={comment.title}
                    rows={1}
                  />
                  <h5>Body</h5>
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
                  <h5>{comment.commentBody}</h5>
                  <button data-key={index} onClick={deleteComment}>
                  Delete
                  </button>
                  <button data-key={index} onClick={toggleEdit}>
                  Edit
                  </button>
                </>
                }

               
                
              </MDBAccordionItem>
            );
          })}
      </MDBAccordion>
    </div>
  );
}

export default FeatComments;
