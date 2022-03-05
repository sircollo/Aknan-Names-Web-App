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

    //aknan Names
    var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
   
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
    console.log(userYear);
    
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
      console.log("male");
    }else if(gender[1].checked == true){
      var gender = "female";
      console.log("female");
    }

    //declare variables for day of week computation
    let DD = userDate;
    let MM = userMonth;

    //Day of Week Computation
    var dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    console.log(dayOfWeek);

    dayOfWeek = parseInt(dayOfWeek);
    alert(typeof(dayOfWeek));

    //male name output

    if(gender[0].checked == true){
      var gender = "male";
    }else if(gender[1].checked == true){
      var gender = "female";
      console.log("female");
    }

  }