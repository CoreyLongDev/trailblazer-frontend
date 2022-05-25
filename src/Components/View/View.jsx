import React from 'react'

function View({park}) {
  return (
    <div>
    {park.addresses[0].city}, {park.addresses[0].stateCode}

    </div>

  )
  console.log('I work!');
}

export default View