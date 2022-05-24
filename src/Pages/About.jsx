import React from 'react'

export const About = () => {

  const peeps = [
    {
      name: "David Dobrose",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UWQ5RRUH-de29c25e9981-512",
      about: "From humble upbringings, David has always been committed to exploring the great outdoors. He is a family man devoted to his fiance and dog."
    },
    {
      name: "Jacob Vernau",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UBESDV1U-5702b22d8680-512",
      about: "your favorite camp counselor"
    },
    {
      name: "Myles Turner",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UJ58V97U-d47e4f122200-512",
      about: "Here's some free tax advice from Myles, Dont pay it"
    },
    {
      name: "Martin Wilson",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UBET4DC6-83823ebbabc2-512",
      about: "Martin loves backends... i mean coding of course"
    },
    {
      name: "Corey Long",
      img: "https://ca.slack-edge.com/T0351JZQ0-U02UBETFEGN-5ee0ce2895aa-512",
      about: "If you find Corey on Halo, prepare for the easiest win of your life"
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
    {peeps.map((peep,index)=> (
      <div key={index}>
        <h1>{peep.name}</h1>
        <img src={peep.img} alt={peep.name} />
        <p>{peep.about}</p>
      </div>
    ))}

    


    </>
    
  )
}
