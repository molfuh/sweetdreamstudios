import React from 'react';
import Photo from './Photo.jsx';

let PhotoGallery = (props) => {
  let photoGalleryWrapper = [];
  for (var i = 0; i < props.length; i++) {
    photoGalleryWrapper.push(<div><Photo image={props[i].Photo}/></div>)
  }
  return photoGalleryWrapper;
}

export default PhotoGallery;
