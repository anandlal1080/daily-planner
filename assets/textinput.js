// This variable targets the text area for each hour.
let $textFromUser = $("textarea");
// This variable gets the hour from the specific hour row we are referencing.
let $hourOfCalendy = $(".col-md-1 hour currentHour");
// This variable is to get teh save button for each row.
const $saveBtn = $(".saveBtn");
// This variable gets data from local storage and is used in the upcoming if/else statement.
let plansForDay = localStorage.getItem("plansForDay");
// This if/else statement parses data from local storage if any exists. Else it returns an empty array.
if (plansForDay){
    plansForDay = JSON.parse(plansForDay);
} else {
    plansForDay = [];
}

// This function will save the data from the text area to the corresponding hour into local storage.
$saveBtn.on("click", function(e){
    plansForDay.push({
        currentHour: $(this).parent().attr('id').split('-')[1],
        currentText: $(this).siblings('textarea').val() // <-- 
    });
    
    localStorage.setItem("plansForDay", JSON.stringify(plansForDay));
   
})

// This forEach statement & function will take the data from plansForDay line 11 and displays it on the corresponding hour row when the page is loaded/refreshes.
plansForDay.forEach(function(plan) {
    $("div[value='" + plan.currentHour + "']").children('textarea').text(plan.currentText);
  })

// This function clears local storage when the user clicks on the "Clear Planner" button.
  $("#clear").on("click", function(){
    window.localStorage.clear();
    location.reload();
})