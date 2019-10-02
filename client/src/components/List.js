import React from 'react'
import CreateFormContainer from './CreateFormContainer'; 

export default class List extends React.Component {
  render() {
    
    const images = this.props.images
    return <div>
      <CreateFormContainer/>
      <ul>
        <div>{images.length !== 0 ? images.map(image => <li key={image.title}><h3>{image.title}</h3>
          <img src={image.url} width="450px" alt="" /> </li>) : "loading..."}</div>
      </ul>
    </div>
  }
} 