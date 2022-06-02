import React, {useEffect, useState} from 'react'
import { MDBTextArea, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import axios from 'axios'
import '../View/view.css'

function FeatComments({parkID}) {

  //State and data members
  const fetchUrl = `https://fathomless-eyrie-16229.herokuapp.com/comments/${parkID}`

  //Test to see if adding to the useEffect dependecy array will force a rerender it does not so futher fixing is required
  //!!TODO::Must have clean rerender no refresh
  let fetchToggle = true

  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState()
  const [commentTitle, setCommentTitle] = useState()
  const [editComment, setEditComment] = useState(false)

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

    fetchToggle = !fetchToggle

  }

  //updatesComment
  const updateComment = () => {
  
  }

  //page needs to be refreshed to see changes must find fix
  //deletesComment
  const deleteComment = (e) => {
    e.preventDefault()
    const index = e.target.dataset.key
    axios.delete(`https://fathomless-eyrie-16229.herokuapp.com/comments/delete/${comments[index]._id}`)
    .then(res => {
      console.log(res)
    })
    .catch(console.error)

    //Steps to refresh on page
    //Grab the index of the comment from e.target.dataset.key
    //Using the index we remove the comment from Comments(the state variable) and return a new array without the deleted comment
    //setComments(newArr)
    

    //
    
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
              <button data-key={index} onClick={deleteComment}>Delete</button>
              <button data-key={index} onClick={updateComment}>Edit</button>
              {editComment && <div>
                <MDBTextArea>
                </MDBTextArea>
              </div>} 
            </MDBAccordionItem>
          )  
      })}
      </MDBAccordion>

    </div>
  )
}

export default FeatComments