import React from 'react';

import './week.styles.scss';

// A function which gives you the nubmer of current week. dunno how it works, it does not matter :)
import getCurrentWeekNumber from './getCurrentWeekNumber.js';
import getTotalAmountOfWeeksInAYear from './getTotalAmountOfWeeksInAYear';

import { monday } from './getDateForMondayAndFriday.js';

const months = [
   'JAANUAR',
   'VEEBRUAR',
   'MÄRTS',
   'APRILL',
   'MAI',
   'JUUNI',
   'JUULI',
   'AUGUST',
   'SEPTEMBER',
   'OKTOOBER',
   'NOVEMBER',
   'DETSEMBER'
];

const currentWeek = getCurrentWeekNumber(new Date());
const currentYear = new Date().getFullYear();
const weeksInCurrentYear = getTotalAmountOfWeeksInAYear(currentYear);
console.log('Week: ', currentWeek);
console.log('Year: ', currentYear);
console.log('Weeks in this Year: ', weeksInCurrentYear);

class CurrentWeek extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         newSelectedWeekToEdit: currentWeek,
         previousSelectedWeekToEdit: currentWeek
      }

   };

   handleChange = (e) => {
      this.setState({
         newSelectedWeekToEdit: e.target.value
      }, () => this.getIntervalBetweenWeeks());
      this.props.onChangeFunction && this.props.onChangeFunction();
      
   };

   getIntervalBetweenWeeks = () => {
      this.setState({
         intervalBetweenSelectedAndCurrentWeeks: this.state.newSelectedWeekToEdit - this.state.previousSelectedWeekToEdit
      }, () => this.changeMondayDates());
   }

   changeMondayDates = () => {
      monday.setHours(monday.getHours() + 24 * 7 * this.state.intervalBetweenSelectedAndCurrentWeeks);
      this.setState({
         previousSelectedWeekToEdit: this.state.newSelectedWeekToEdit
      }, () => this.clearAllTextareas())
   }

   clearAllTextareas() {
      const textareasArray = document.querySelectorAll('textarea');
      textareasArray.forEach(textarea => {
         textarea.value = '';         
      })
   }

   componentDidMount(){
      this.props.onChangeFunction && this.props.onChangeFunction();
   }
   
   render() {

      const friday = new Date(monday);
      friday.setHours(monday.getHours() + 24 * 4);

      return (
         <div className='week-container' >
            <h1 id='week-number' >Nädal {' '}
               <select id='select-week-to-edit' defaultValue={this.state.newSelectedWeekToEdit} onChange={this.handleChange} >
                  <option>{currentWeek - 2 >= 1
                     ? currentWeek - 2
                     : currentWeek - 2 === 0
                        ? getTotalAmountOfWeeksInAYear(currentYear - 1)
                        : getTotalAmountOfWeeksInAYear(currentYear - 1) - 1
                  }</option>
                  <option>{currentWeek - 1 >= 1
                     ? currentWeek - 1
                     : getTotalAmountOfWeeksInAYear(currentYear - 1)
                  }</option>
                  <option>{currentWeek}</option>
                  <option>{
                     currentWeek + 1 <= weeksInCurrentYear
                        ? currentWeek + 1
                        : 1
                  }</option>
                  <option>{
                     currentWeek + 2 <= weeksInCurrentYear
                        ? currentWeek + 2
                        : currentWeek + 1 <= weeksInCurrentYear
                           ? 1 : 2
                  }</option>
               </select>
            </h1>
            <section className='weekdays-container' >
               <h2>{`${monday.getDate()} ${months[monday.getMonth()]} ${monday.getFullYear()}`}</h2>
               <h1>{' - '}</h1>
               <h2>{`${friday.getDate()} ${months[friday.getMonth()]} ${friday.getFullYear()}`}</h2>

            </section>
         </div>
      )
   };
};

export default CurrentWeek;