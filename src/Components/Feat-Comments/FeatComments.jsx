import React from 'react'
import { MDBTextArea } from 'mdb-react-ui-kit';
import '../View/view.css'

function FeatComments() {
  return (
    <div>

<MDBTextArea  label='' id='textAreaExample' rows={4}/>
<button>Add Comment</button>
    </div>
  )
}

export default FeatComments