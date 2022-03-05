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

    var userInputDate = document.getElementById("userdate").value;
    var userInputMonth = document.getElementById("usermonth").value;
    var year = document.getElementById("year-dropdown");
   
    //convert userInputDate and userInputMonth to int
    var userDate = parseInt(userInputDate);
    var userMonth = parseInt(userInputMonth);
    
    //user input - date validation
    if(userInputDate.length == " "){
      alert("You did not Enter Date");
    }

    if(userDate <= 0 || userDate > 31){
      alert("Enter valid Date");
    };




  }