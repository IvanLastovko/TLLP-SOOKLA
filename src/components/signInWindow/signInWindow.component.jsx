import React from 'react';

import './signInWindow.component.scss';

const bcrypt = require('bcryptjs');

// const saltRounds = 5;

const SignInWindow = () => {

   const changeLocalStorage = (event) => {

      localStorage.setItem('enteredPassword', event.target.value);

      ////////// USE THIS FUNCTION ONE TIME DURING DEVELOPMENT PROCESS IN CASE YOU WANT TO CHANGE YOUR PASSWORD. //////////
      ////////// THEN PUT 'hash' VALUE INTO editTable.component.jsx FILE IN LINE WITH bcrypt.compareSync FUNCTION ////////// 
      ////////// ALSO PUT 'hash' VALUE INTO signInWindow.component.jsx FILE IN LINE WITH bcrypt.compareSync FUNCTION ////////// 
      ////////// DON'T FORGET TO UNCOMMENT saltRounds ON LINE 5 //////////

      // bcrypt.hash(event.target.value, saltRounds, function (err, hash) {
      //    localStorage.setItem('Password', hash);
      // });

      ////////// ================================================================================================ //////////

      const result = bcrypt.compareSync(event.target.value, '$2a$05$R7sKxt.e7YxTHp4Q0fnp4uR8/oX9JekQlmy92nlUNrXHB.UPuNDUa');
      result && window.location.reload();

   }

   // $2a$05$.tsWhXg4AeLLze51Jd3QLuqjNzmLB0YzxytMr6GVNdJZxoiFovS3e

   return (
      <div className='sign-in-container' >
         <input autoFocus={true} type='password' placeholder='Password' onChange={changeLocalStorage} />
      </div>
   )

};

export default SignInWindow;