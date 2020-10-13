import React from 'react';

import TablePart from '../tablepart/tablepart.component';
import CurrentWeek from '../week/week.component';
import CustomButton from '../buttons/custombutton.component';
import SignInWindow from '../signInWindow/signInWindow.component';

import calculateRowsNumer from '../functions/calculateRowsNumber.function';
import loadTextareaValuesFromLocalstorage from '../functions/loadTextareaValuesFromLocalstorage.function';

import './editTable.styles.scss';

const bcrypt = require('bcryptjs');

class EditTable extends React.Component {
   constructor() {
      super();

      this.state = {
         food: ''
      }
   };

   hideAllButtons() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
         button.style.visibility = 'hidden';
      });
      document.querySelector('.header-container-edit-page').remove();
   };

   saveTableToDatabase() {

      // Read selected Week and Year from the page ===> Combine their values to one String ===> Pass new string to back-end
      const nadal = document.querySelector('#select-week-to-edit').value;
      const year = document.querySelector('h2').innerHTML.split(' ')[2];
      const nadal_year = nadal + '-' + year;

      ////////// Read values inserted into each Textarea and send them to backend naming according to Day of The Week and meal //////////
      const mondaybreakfast = document.querySelector('.textarea.esmaspaev.hommikusook').value;
      const mondayvitamin = document.querySelector('.textarea.esmaspaev.vitamiiniamps').value;
      const mondaylunch = document.querySelector('.textarea.esmaspaev.louna').value;
      const mondayoode = document.querySelector('.textarea.esmaspaev.oode').value;

      const tuesdaybreakfast = document.querySelector('.textarea.teisipaev.hommikusook').value;
      const tuesdayvitamin = document.querySelector('.textarea.teisipaev.vitamiiniamps').value;
      const tuesdaylunch = document.querySelector('.textarea.teisipaev.louna').value;
      const tuesdayoode = document.querySelector('.textarea.teisipaev.oode').value;

      const wednesdaybreakfast = document.querySelector('.textarea.kolmapaev.hommikusook').value;
      const wednesdayvitamin = document.querySelector('.textarea.kolmapaev.vitamiiniamps').value;
      const wednesdaylunch = document.querySelector('.textarea.kolmapaev.louna').value;
      const wednesdayoode = document.querySelector('.textarea.kolmapaev.oode').value;

      const thursdaybreakfast = document.querySelector('.textarea.neljapaev.hommikusook').value;
      const thursdayvitamin = document.querySelector('.textarea.neljapaev.vitamiiniamps').value;
      const thursdaylunch = document.querySelector('.textarea.neljapaev.louna').value;
      const thursdayoode = document.querySelector('.textarea.neljapaev.oode').value;

      const fridaybreakfast = document.querySelector('.textarea.reede.hommikusook').value;
      const fridayvitamin = document.querySelector('.textarea.reede.vitamiiniamps').value;
      const fridaylunch = document.querySelector('.textarea.reede.louna').value;
      const fridayoode = document.querySelector('.textarea.reede.oode').value;
      ////////// =============================================================================================================== //////////

      const created_in = new Date();

      // Make POST Request using fetch API and pass all required inputs to back-end

      // fetch('http://localhost:3003/saveDataToDatabase', {
      fetch('https://tllp-sookla-api.herokuapp.com/saveDataToDatabase', {
         method: 'POST',
         // mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            nadal_year,

            mondaybreakfast,
            mondayvitamin,
            mondaylunch,
            mondayoode,

            tuesdaybreakfast,
            tuesdayvitamin,
            tuesdaylunch,
            tuesdayoode,

            wednesdaybreakfast,
            wednesdayvitamin,
            wednesdaylunch,
            wednesdayoode,

            thursdaybreakfast,
            thursdayvitamin,
            thursdaylunch,
            thursdayoode,

            fridaybreakfast,
            fridayvitamin,
            fridaylunch,
            fridayoode,

            created_in
         })
      })
         .then((resp) => {
            console.log(resp);
         })
         .catch(function (error) {
            console.log(error);
         });
   };

   loadTableFromDatabase() {

      const nadal = document.querySelector('#select-week-to-edit').value;
      const year = document.querySelector('h2').innerHTML.split(' ')[2];
      const nadal_year = nadal + '-' + year;
      console.log(nadal_year);

      // fetch('http://localhost:3003/getDataFromDatabase', {
      fetch('https://tllp-sookla-api.herokuapp.com/getDataFromDatabase', {
         method: 'POST',
         // mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ nadal_year })
      })
         .then(response => response.json())
         .then(data => {
            calculateRowsNumer(data);
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   loadTableFromLocalstorage() {

      // localStorage.setItem(`${mealName}-${dayOfTheWeek}-${weekValue}-${yearValue}`, e.target.value);

      const nadal = document.querySelector('#select-week-to-edit').value;
      const year = document.querySelector('h2').innerHTML.split(' ')[2];
      const nadal_year = nadal + '-' + year;
      console.log(nadal_year);

      loadTextareaValuesFromLocalstorage(nadal_year);

   }

   render() {
      if (localStorage.getItem('Password') === null || localStorage.getItem('enteredPassword') === null) {
         localStorage.setItem('Password', '');
         localStorage.setItem('enteredPassword', '');
      }

      const result = bcrypt.compareSync(localStorage.getItem('enteredPassword'), '$2a$05$R7sKxt.e7YxTHp4Q0fnp4uR8/oX9JekQlmy92nlUNrXHB.UPuNDUa');

      if (result) {

         // Displaying whole table using smaller components for each workday of the week and also passing props including the name of the day.
         return (
            <div className='table-container' >
               <CurrentWeek />
               <h1 style={{ marginTop: '0px', marginBottom: '20px', fontSize: '2em' }}>MENÜÜ</h1>

               <TablePart passClass='esmaspaev' paev='ESMASPÄEV' autofocus />
               <TablePart passClass='teisipaev' paev='TEISIPÄEV' />
               <TablePart passClass='kolmapaev' paev='KOLMAPÄEV' />
               <TablePart passClass='neljapaev' paev='NELJAPÄEV' />
               <TablePart passClass='reede' paev='REEDE' />
               <div className='button-container'>
                  <CustomButton onClickFunction={this.saveTableToDatabase} >Salvesta andmebaasile ⤊</CustomButton>
                  <CustomButton onClickFunction={this.loadTableFromDatabase} backgroundColor={'yellow'} >Lae alla andmebaasist ⇊</CustomButton>
                  <CustomButton onClickFunction={this.loadTableFromLocalstorage} backgroundColor={'yellow'} >Taasta ⤵</CustomButton>
                  <CustomButton onClickFunction={this.hideAllButtons}>Peida kõik nuppusid <span role='img' aria-label='symbol' >🚫</span></CustomButton>
               </div>

            </div>
         )
      } else {
         return (
            <SignInWindow />
         )
      }
   }
};

export default EditTable;