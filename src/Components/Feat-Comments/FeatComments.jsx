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
    console.log(filteredComments);
    
    // const sendComment = JSON.stringify(comment)
    // console.log(sendComment)

    axios
      .post(
        `https://fathomless-eyrie-16229.herokuapp.com/comments/add`,
        comment
      )
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  };

  //updatesComment
  const updateComment = (e) => {
    e.preventDefault()
    const index = e.target.dataset.key
    
    const updatedComments = [...comments]
    updatedComments[index].title = editCommentTitle
    updatedComments[index].commentBody = editCommentBody
    const commentID = updatedComments[index]._id

    setComments(updatedComments)

    toggleEdit()

    const comment = {
        title: editCommentTitle,
        commentBody: editCommentBody,
      }

    // axios.put(`https://fathomless-eyrie-16229.herokuapp.com/comments/edit/${commentID}`, comment)
    axios.put(`http://localhost:4000/comments/edit/${commentID}`, comment)
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
    // const newComents = comments.filter((val, i) => {
    //   console.log(index, val._id);
    // return  val._id !== comments[e.target.dataset.key];
    // });
    const filteredComments = [...comments];
    filteredComments.splice(index, 1);
    console.log(filteredComments);
    console.log(index);
    setComments(filteredComments);
    axios
      .delete(
        `https://fathomless-eyrie-16229.herokuapp.com/comments/delete/${comments[index]._id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);

    //Steps to refresh on page
    //Grab the index of the comment from e.target.dataset.key
    //Using the index we remove the comment from Comments(the state variable) and return a new array without the deleted comment
    //setComments(newArr)

    //
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
      <MDBTextArea
        onChange={handleTitleChange}
        label="title"
        name="title"
        wrapperClass="mb-4"
        id="title-input-field"
        rows={1}
      />
      <MDBTextArea
        onChange={handleComBodyChange}
        label="commentBody"
        name="commentBody"
        id="textAreaExample"
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
                  <MDBTextArea
                    onChange={handleEditComTitleChange}
                    label='title'
                    name='title'
                    className='comment-text-area'
                    defaultValue={comment.title}
                    rows={1}
                  />
                  <MDBTextArea
                    onChange={handleEditComBodyChange}
                    label='commentBody'
                    name='commentBody'
                    className="comment-text-area"
                    defaultValue={comment.commentBody}
                    row={4}
                  />
                  <button onClick={toggleEdit}>Cancel</button>
                  <button data-key={index} onClick={updateComment}>Save</button>
                </>
                : <>
                  {comment.commentBody}
                  <button data-key={index} onClick={deleteComment}>
                  Delete
                  </button>
                  <button data-key={index} onClick={toggleEdit}>
                  Edit
                  </button>
                </>
                }

                {/* {comment.commentBody}
                <button data-key={index} onClick={deleteComment}>
                  Delete
                </button>
                <button data-key={index} onClick={toggleEdit}>
                  Edit
                </button> */}
                
              </MDBAccordionItem>
            );
          })}
      </MDBAccordion>
    </div>
  );
}

export default FeatComments;
