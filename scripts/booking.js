/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costperday = 35; //set as default as it has already been clicked
var numberOfDaysSelected = 0;
var selectedDays = [];

var calculatedcost = document.getElementById("calculated-cost");

// Elements for days
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

// Elements for Full and Half
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");

// Element for Clear button
var clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(event) {
    // Get the clicked day element
    var clickedDay = event.target;
  
    // Check if the day is already selected
    if (!clickedDay.classList.contains("clicked")) {
      // Not selected, so update styles and variables
      clickedDay.classList.add("clicked");
      numberOfDaysSelected++;
      selectedDays.push(clickedDay.id); // Add selected day name to array
    }
  
    // Recalculate total cost based on your logic (consider full/half day options)
    calculateTotalCost(costperday,numberOfDaysSelected);
  }

monday.addEventListener("click", handleDayClick);
tuesday.addEventListener("click", handleDayClick);
wednesday.addEventListener("click", handleDayClick);
thursday.addEventListener("click", handleDayClick);
friday.addEventListener("click", handleDayClick);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", reset);
function reset(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    halfDay.classList.remove("clicked");
    fullDay.classList.remove("clicked");

    calculatedcost.innerText = 0;
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

  // Function to handle full/half day selection (if applicable)
  function handleFullHalfDay(event) {
    var clickTime = event.target;
    if (clickTime.innerText == "full")
    {
        costperday = 35;
        halfDay.classList.remove("clicked");
        fullDay.classList.add("clicked");
    }
    else if (clickTime.innerText == "half" ) {
        costperday = 20;
        fullDay.classList.remove("clicked");
        halfDay.classList.add("clicked");
    }
    calculateTotalCost(costperday,numberOfDaysSelected);
  }
  
  // Attach click event listeners to full/half day buttons (if applicable)
  fullDay.addEventListener("click", handleFullHalfDay);
  halfDay.addEventListener("click", handleFullHalfDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost(costperday, numberOfDaysSelected) {
    var totalCost = numberOfDaysSelected * costperday;
    calculatedcost.innerText = totalCost;
  }

