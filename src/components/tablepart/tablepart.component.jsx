import React, { Component } from 'react';

import './tablepart.component.scss';

class TablePart extends Component {
   constructor(props) {
      super(props);

      this.handlechange = this.handlechange.bind(this);
      
      this.state = {
         paev: this.props.paev,
         focused: this.props.autofocus,
         passClass: this.props.passClass
      }
   };

   // Calculate how many lettes are typed into textarea to decide if new row is needed. 
   // Totally there are 76 letter spaces. With tping 77-th a new row is being added.
   handlechange(e) {
      this.adjustRowCount(e);
      this.writeToLocalStorage(e);
   };

   adjustRowCount(e) {
      const { value } = e.target;
      e.target.rows = Math.floor(value.length / 95 - 0.00001) + 1;
      if (value.length === 0) {
         e.target.rows = 1;
      }
   };

   writeToLocalStorage(e) {
      const weekValue = document.querySelector('#select-week-to-edit').value;
      const yearValue = document.querySelector('.weekdays-container h2').innerHTML.split(' ')[2];
      const dayOfTheWeek = this.state.paev;
      const mealName = e.target.parentNode.parentNode.firstElementChild.className.split(' ')[0];

      localStorage.setItem(`${mealName}-${dayOfTheWeek}-${weekValue}-${yearValue}`, e.target.value);
   }

   render() {
      const { paev, passClass } = this.state;
      return (
         <table className={`${this.props.viewTable ? 'view' : ''}`} >
            <tbody className={this.props.paev} >

               <tr>
                  <td
                     className='paev'
                     style={{ columnSpan: '2', border: 'none', fontSize: '0.8em' }}
                  >
                     {paev}
                  </td>
               </tr>
               <tr>
                  <td className="hommikusook mealtime">Hoomikusöök</td>
                  <td>
                     <textarea
                        disabled={this.props.viewTable}
                        autoFocus={this.state.focused}
                        rows='1'
                        onChange={(e) => this.handlechange(e)}
                        name="Breakfast"
                        className={`textarea hommikusook ${passClass}`}
                        placeholder={`${this.props.viewTable ? "Info puudub" : "Kirjuta siia"}`} />
                  </td>
               </tr>
               <tr>
                  <td className="vitamiiniamps mealtime">Vitamiiniamps</td>
                  <td>
                     <textarea
                        disabled={this.props.viewTable}
                        rows='1'
                        onChange={(e) => this.handlechange(e)}
                        name="Vitamin"
                        className={`textarea vitamiiniamps ${passClass}`}
                        placeholder={`${this.props.viewTable ? "Info puudub" : "Kirjuta siia"}`} />
                  </td>
               </tr>
               <tr>
                  <td className="louna mealtime">Lõunasöök</td>
                  <td>
                     <textarea
                        disabled={this.props.viewTable}
                        rows='1'
                        onChange={(e) => this.handlechange(e)}
                        name="Lunch"
                        className={`textarea louna ${passClass}`}
                        placeholder={`${this.props.viewTable ? "Info puudub" : "Kirjuta siia"}`} />
                  </td>
               </tr>
               <tr>
                  <td className="oode mealtime">Oode</td>
                  <td>
                     <textarea
                        disabled={this.props.viewTable}
                        rows='1'
                        onChange={(e) => this.handlechange(e)}
                        name="Oode"
                        className={`textarea oode ${passClass}`}
                        placeholder={`${this.props.viewTable ? "Info puudub" : "Kirjuta siia"}`} />
                  </td>
               </tr>
            </tbody>
         </table>
      )
   }
}

export default TablePart;