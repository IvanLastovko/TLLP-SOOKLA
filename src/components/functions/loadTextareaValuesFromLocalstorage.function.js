const loadTextareaValuesFromLocalstorage = (nadal_year) => {
   document.querySelector('.textarea.esmaspaev.hommikusook').value = localStorage.getItem(`hommikusook-ESMASPÄEV-${nadal_year}`);
   document.querySelector('.textarea.esmaspaev.vitamiiniamps').value = localStorage.getItem(`vitamiiniamps-ESMASPÄEV-${nadal_year}`);
   document.querySelector('.textarea.esmaspaev.louna').value = localStorage.getItem(`louna-ESMASPÄEV-${nadal_year}`);
   document.querySelector('.textarea.esmaspaev.oode').value = localStorage.getItem(`oode-ESMASPÄEV-${nadal_year}`);
   document.querySelector('.textarea.teisipaev.hommikusook').value = localStorage.getItem(`hommikusook-TEISIPÄEV-${nadal_year}`);
   document.querySelector('.textarea.teisipaev.vitamiiniamps').value = localStorage.getItem(`vitamiiniamps-TEISIPÄEV-${nadal_year}`);
   document.querySelector('.textarea.teisipaev.louna').value = localStorage.getItem(`louna-TEISIPÄEV-${nadal_year}`);
   document.querySelector('.textarea.teisipaev.oode').value = localStorage.getItem(`oode-TEISIPÄEV-${nadal_year}`);
   document.querySelector('.textarea.kolmapaev.hommikusook').value = localStorage.getItem(`hommikusook-KOLMAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.kolmapaev.vitamiiniamps').value = localStorage.getItem(`vitamiiniamps-KOLMAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.kolmapaev.louna').value = localStorage.getItem(`louna-KOLMAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.kolmapaev.oode').value = localStorage.getItem(`oode-KOLMAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.neljapaev.hommikusook').value = localStorage.getItem(`hommikusook-NELJAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.neljapaev.vitamiiniamps').value = localStorage.getItem(`vitamiiniamps-NELJAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.neljapaev.louna').value = localStorage.getItem(`louna-NELJAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.neljapaev.oode').value = localStorage.getItem(`oode-NELJAPÄEV-${nadal_year}`);
   document.querySelector('.textarea.reede.hommikusook').value = localStorage.getItem(`hommikusook-REEDE-${nadal_year}`);
   document.querySelector('.textarea.reede.vitamiiniamps').value = localStorage.getItem(`vitamiiniamps-REEDE-${nadal_year}`);
   document.querySelector('.textarea.reede.louna').value = localStorage.getItem(`louna-REEDE-${nadal_year}`);
   document.querySelector('.textarea.reede.oode').value = localStorage.getItem(`oode-REEDE-${nadal_year}`);
};

export default loadTextareaValuesFromLocalstorage;