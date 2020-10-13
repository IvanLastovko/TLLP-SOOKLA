import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.styles.scss';

class Header extends React.Component {
   constructor() {
      super();

      this.state = {
         headerText: 'Edit Page'
      }
   }

   render() {
      return (
         <HeaderView />
      )
   }
};

export default Header;

function HeaderView() {
   const location = useLocation();
   // Conditional statement wich is responsible for placing text into Header component
   return location.pathname === '/edit'
      ? <div className='header header-container-edit-page'>
         <Link className='link-to-main-page' to='/'>BACK TO MENU</Link>
      </div>
      : <div className='header header-container-main-page'>
         <Link className='link-to-edit-page' to='/edit'>EDIT PAGE</Link>
      </div>
}