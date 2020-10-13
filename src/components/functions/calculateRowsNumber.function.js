const calculateRowsNumer = (response) => {
   const howManyMonospaceLettersCanFitIntoOneRowInTextarea = 95;
   let a = document.querySelector('.textarea.esmaspaev.hommikusook'); a.value = response.mondaybreakfast; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.esmaspaev.vitamiiniamps'); a.value = response.mondayvitamin; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.esmaspaev.louna'); a.value = response.mondaylunch; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.esmaspaev.oode'); a.value = response.mondayoode; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.teisipaev.hommikusook'); a.value = response.tuesdaybreakfast; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.teisipaev.vitamiiniamps'); a.value = response.tuesdayvitamin; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.teisipaev.louna'); a.value = response.tuesdaylunch; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.teisipaev.oode'); a.value = response.tuesdayoode; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.kolmapaev.hommikusook'); a.value = response.wednesdaybreakfast; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.kolmapaev.vitamiiniamps'); a.value = response.wednesdayvitamin; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.kolmapaev.louna'); a.value = response.wednesdaylunch; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.kolmapaev.oode'); a.value = response.wednesdayoode; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.neljapaev.hommikusook'); a.value = response.thursdaybreakfast; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.neljapaev.vitamiiniamps'); a.value = response.thursdayvitamin; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.neljapaev.louna'); a.value = response.thursdaylunch; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.neljapaev.oode'); a.value = response.thursdayoode; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.reede.hommikusook'); a.value = response.fridaybreakfast; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.reede.vitamiiniamps'); a.value = response.fridayvitamin; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.reede.louna'); a.value = response.fridaylunch; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
   a = document.querySelector('.textarea.reede.oode'); a.value = response.fridayoode; a.rows = Math.floor(a.value.length / howManyMonospaceLettersCanFitIntoOneRowInTextarea - 0.00001) + 1;
};

export default calculateRowsNumer;