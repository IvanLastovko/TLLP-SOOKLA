import React from 'react';

import './404page.styles.scss';

const doggoImage = require('../../assets/doggo.png');

const PageNotFound = () => {
   return(
      <div className='not-found-page-container' >
         <img className='doggo-image-404' src={doggoImage} alt='doggo' />
         <h1 className='not-found-page-text' >Whoops, my dog ate this page...</h1>
      </div>
   )
}

export default PageNotFound;