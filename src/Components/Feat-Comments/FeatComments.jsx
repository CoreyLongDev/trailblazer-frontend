import React, {useEffect, useState} from 'react'
import { MDBTextArea, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import axios from 'axios'
import '../View/view.css'

function FeatComments({parkID}) {
  

  //State and data members
  const fetchUrl = `https://fathomless-eyrie-16229.herokuapp.com/comments/${parkID}`


  const [comments, setComments] = useState()
  const [commentText, setCommentText] = useState()
  const [commentTitle, setCommentTitle] = useState()

  //function definitions
  
  //adds comments to a park
  const addComment = (e) => {
    e.preventDefault()

    const comment = [{
     parkRef: parkID,
      title: commentTitle,
      commentBody: commentText
    }]

    // const sendComment = JSON.stringify(comment)
    // console.log(sendComment)

    axios.post(`https://fathomless-eyrie-16229.herokuapp.com/comments/add`, comment)
    .then(res => {
      console.log(res)
    })
    .catch(console.error)

  }

  //updatesComment
  const updateComment = () => {
  }

  //deletesComment
  const deleteComment = () => {
  }

  //sets state for comment box text
  const handleComBodyChange = (e) => {
      setCommentText( e.target.value)
  }

  const handleTitleChange =  (e) => {
      setCommentTitle(e.target.value)
  }


  //Sideeffcts to grab comments
  //Add a depenncy to regrab comments

  useEffect(() => {
    fetch(fetchUrl)
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(console.error)
  },[])


  return (
    <div>
      <MDBTextArea onChange={handleTitleChange} label='title' name='title' wrapperClass='mb-4' id='title-input-field' rows={1}/>
      <MDBTextArea onChange={handleComBodyChange} label='commentBody' name='commentBody' id='textAreaExample' rows={4}/>
      <button onClick={addComment}>Add Comment</button>

      <MDBAccordion initialActive={0}>
        {comments && comments.map((comment, index) => {
          return(
            <MDBAccordionItem key={index} collapseId={index} headerTitle={comment.title}>
              {comment.commentBody}
            </MDBAccordionItem>
          )  
      })}
      </MDBAccordion>

    </div>
  )
}

export default FeatComments