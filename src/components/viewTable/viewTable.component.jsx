import React from 'react';

import TablePart from '../tablepart/tablepart.component';
import CurrentWeek from '../week/week.component';

import calculateRowsNumer from '../functions/calculateRowsNumber.function';

import './viewTable.styles.scss';

class ViewTable extends React.Component {
   constructor() {
      super();

      this.state = {
         a: ''
      }
   }

   readCurrentWeek() {
      console.log('1');
   }

   loadTableFromDatabase() {

      const nadal = document.querySelector('#select-week-to-edit').value;
      const year = document.querySelector('h2').innerHTML.split(' ')[2];
      const nadal_year = nadal + '-' + year;
      console.log(nadal_year);

      // fetch('http://localhost:3003/getDataFromDatabase', {
      fetch('https://tllp-sookla-api.herokuapp.com/getDataFromDatabase', {
         method: 'POST',
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

   render() {
      return (
         <div className='table-container'>
            <CurrentWeek onChangeFunction={this.loadTableFromDatabase} />
            <h1 className='menuHeading' style={{ marginBottom: '20px', fontSize: '2em' }}>MENÜÜ</h1>
            <TablePart passClass='esmaspaev' viewTable={true} paev='ESMASPÄEV' autofocus />
            <TablePart passClass='teisipaev' viewTable={true} paev='TEISIPÄEV' />
            <TablePart passClass='kolmapaev' viewTable={true} paev='KOLMAPÄEV' />
            <TablePart passClass='neljapaev' viewTable={true} paev='NELJAPÄEV' />
            <TablePart passClass='reede' viewTable={true} paev='REEDE' />
         </div>
      )
   };
};

export default ViewTable;