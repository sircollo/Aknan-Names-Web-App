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

    //user input - month validation
    if(userInputMonth.length == " "){
      alert("You did not Enter Month");
    }

    if(userMonth <= 0 || userMonth > 31){
      alert("Enter valid Month");
    }

    //get user selected year
    var userYear = year.value;
    var userYear = year.options[year.selectedIndex].text;
    
    //get century
    let century = userYear[0] + userYear[1];
    let CC = parseInt(century);
    console.log(CC);

    //get year
    let yearSelected = userYear[2] + userYear[3];
    let YY = parseInt(yearSelected);

    // alert(YY);
    // alert(typeof(YY));

    //get user gender input

    var gender = document.getElementsByName("gender");
    if(gender[0].checked == true){
      var gender = "male";
      alert("male")
    }else if(gender[1].checked == true){
      var gender = "female";
      alert("female");
    }


  }