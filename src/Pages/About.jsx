import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';

export const About = () => {

  const peeps = [
    {
      name: "David Dobrose",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UWQ5RRUH-de29c25e9981-512",
      about: "From humble upbringings, David has always been committed to exploring the great outdoors. He is a family man devoted to his fiance and dog.",
      github: "https://github.com/ddobrose",
      linkedIn: "https://www.linkedin.com/in/david-dobrose/"
    },
    {
      name: "Jacob Vernau",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UBESDV1U-5702b22d8680-512",
      about: "Software Engineer | Javascript, React, HTML, CSS, NodeJS, EXPRESS, MongoDB, MONGOOSE | Problem-Solver",
      github: "https://github.com/jacver",
      linkedIn: "https://www.linkedin.com/in/jacobvernau/"
    },
    {
      name: "Myles Turner",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UJ58V97U-d47e4f122200-512",
      about: "Full-stack Software developer with experience in HTML | CSS | JavaScript | Node.JS | Express.JS | Mongo | Mongoose.",
      github: "https://github.com/MJT30",
      linkedIn: "https://www.linkedin.com/in/myles-turner-b7629297/"
    },
    {
      name: "Martin Wilson",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UBET4DC6-83823ebbabc2-512",
      about: "A full stack software engineer with a love for finding solutions; my tools include React, MongoDB, and Javascript. I enjoy simplifying complex workflows with DevOps tools and building scalable products with the focus of community uplifting. As a conscientious team member willing to step into any role necessary I pride myself on my work ethic while enjoying life to its fullest.",
      github: "https://github.com/TelleDelly",
      linkedIn: "https://www.linkedin.com/in/martin-wilson-tel/"
    },
    {
      name: "Corey Long",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UBETFEGN-5ee0ce2895aa-512",
      about: "Full-Stack Software Engineer",
      github: "https://github.com/PatriotxZero",
      linkedIn: "https://www.linkedin.com/in/coreylong90/"
    }
    
    
  ]
  return (
    <>
    <h1>Our Mission</h1>
    <p>
      At TrailBlazers, we are dedicated to creating
      a vibrant community of lovers of the outdoors. 
      We believe that everyone should wake up seeking
      adventure and know exactly where to find one.
    </p>
    <h1>Our Vision</h1>
    <p>Outdoors is for Anyone, Anytime.</p>

    <h1>Meet the Creators</h1>
    <MDBCardGroup>
    {peeps.map((peep,index)=> (
      <MDBCard key={index}>
        <MDBCardImage src={peep.img} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>{peep.name}</MDBCardTitle>
          <MDBCardText>
            {peep.about}
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'></small>
            <a href={peep.linkedIn}>My LinkedIn</a>
            <br></br>
            <a href={peep.github}>My Github</a>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ))}
   </MDBCardGroup>

    


    </>
    
  )
}
