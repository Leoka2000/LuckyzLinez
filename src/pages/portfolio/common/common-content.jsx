import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import {AiOutlineSearch} from 'react-icons/ai'

const CommonContent = (props) => {
  const { id, img, blurhash } = props.data;
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='common-thumbnail'>
      {isLoading && blurhash && <Blurhash hash={blurhash} width='100%' height='100%' />}
      <img className='thumbnail-img'
        src={img}
        onClick={() => setShowImageViewer(true)}
        onLoad={handleImageLoad}
        style={isLoading ? { display: 'none' } : {}}
      />
      <div  onClick={() => setShowImageViewer(true)} className='content fade'>
        ID: {id}
        <span><AiOutlineSearch/></span>
      </div>
      {showImageViewer && (
        <div className='image-viewer'>
          <img alt='image tattoo' src={img} />
          <button onClick={() => setShowImageViewer(false)}>CLOSE</button>
        </div>
      )}
    </div>
  );
};

export default CommonContent;
