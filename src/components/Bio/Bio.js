import React from 'react'

let matthew = {
  name: 'Matthew Javier',
  email: 'matthewrjavier@gmail.com',
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam rerum itaque eius id ullam fuga iure recusandae, laborum et veritatis necessitatibus sint vitae corporis molestiae consequuntur dolores aspernatur sed!'
}

const Bio = () => {
  return (
    <div className="row container">
      <h1 className="center-align">{matthew.name}</h1>
      <h3 className="blue-grey-text">{matthew.email}</h3>
      <h3 className="blue-grey-text">{matthew.bio}</h3>
    </div>
  )
}

export default Bio