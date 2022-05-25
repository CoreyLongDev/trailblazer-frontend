import React from 'react'
import '../Footer/footer.css'
import { MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <div className='footer'>
      Trail Blazers&trade; <MDBIcon fab icon="twitter" /> <MDBIcon fab icon="instagram" /> <MDBIcon fab icon="facebook" />
    <p className='footerNotes'><a href='https://git.generalassemb.ly/flex-125/project-3/issues/18'>About </a> | <a href='https://www.nps.gov/subjects/developer/index.htm'>Api </a>| Contact us: <a href='https://www.linkedin.com/in/coreylong90/'>Cory Long </a> | <a href='https://www.linkedin.com/in/david-dobrose/'>David Dobrose  </a> | <a href='https://www.linkedin.com/in/jacobvernau/'>Jacob Vernau </a> | <a href='https://www.linkedin.com/in/martin-wilson-tel/'>Martin Wilson </a> | <a href='https://www.linkedin.com/in/myles-turner-b7629297/'>Myles Turner</a></p> 

    </div>

    
  )
}

export default Footer