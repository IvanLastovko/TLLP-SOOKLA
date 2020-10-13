import React from 'react';

import './custombutton.styles.scss';

const CustomButton = ({ children, onClickFunction, backgroundColor }) => {

   return (
      <button onClick={onClickFunction} className={`send-to-database ${backgroundColor}`}>
         {children}
      </button>
   )
}

export default CustomButton;