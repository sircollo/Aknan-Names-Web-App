let yearDropdown = document.getElementById('year-dropdown'); 
     
  let currentYear = new Date().getFullYear();    
  let earliestYear = 1900;     
  while (currentYear >= earliestYear) {      
    let yearOption = document.createElement('option');          
    yearOption.text = currentYear;      
    yearOption.value = currentYear;        
    yearDropdown.add(yearOption);      
    currentYear -= 1;    
   }

  function getAknanName(){
    //variables declaration

    var userInputDate = document.getElementById("date").value;
    var userInputMonth = document.getElementById("month").value;
    var year = document.getElementById("year-dropdown");


  }