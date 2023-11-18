import React from 'react';

let Photo = (props) => {
  return (
    <div class="PhotoImgWrapper">
    <img class="PhotoImg" src={props.image}/>
    <div class="AboutMe">
      {this.state.People.Name} <br/> {this.state.People.Pronouns} <br/> {this.state.People.Role}
    </div>
    </div>
  )
}

export default Photo;

