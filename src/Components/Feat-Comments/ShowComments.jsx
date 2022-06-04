import React,{useEffect, useState} from 'react'
import { MDBContainer } from 'mdbreact';


export const ShowComments = () => {
  const fetchUrl = `https://fathomless-eyrie-16229.herokuapp.com/comments/629135903b891c9ef1f74280`
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => 
      setComments(data))
      .catch(console.error);
  }, []);
 
  
  const [comments, setComments] = useState([]);
  return (
    <section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>

  <div class="row text-center d-flex align-items-stretch">
    {comments && comments.map(comment => 
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div class="card testimonial-card" style={{maxWidth:'50%', margin:'1rem'}}>
        <div class="card-up" ></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">{comment.title}</h4>
          <hr />
          <p class="dark-grey-text mt-4 text-wrap">
            <i class="fas fa-quote-left pe-2"></i>{comment.commentBody}
          </p>
        </div>
        <button>Edit</button>
        <button>Delete</button>
        {/* <button data-key={index} onClick={deleteComment}>
                  Delete
                  </button>
                  <button data-key={index} onClick={toggleEdit}>
                  Edit
                  </button> */}
      </div>
    </div>)}
    
    
  
  
  

</div>
</section>
  )
}




