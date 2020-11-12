let $textFromUser = $("textarea");
let $hourOfCalendy = $(".col-md-1 hour currentHour");
const $saveBtn = $(".saveBtn");
let plansForDay = localStorage.getItem("plansForDay");
if (plansForDay){
    plansForDay = JSON.parse(plansForDay);
} else {
    plansForDay = [];
}
$saveBtn.on("click", function(e){
    plansForDay.push({
        currentHour: $(this).parent().attr('id').split('-')[1],
        currentText: $(this).siblings('textarea').val() // <-- 
    });
    console.log(plansForDay);
    localStorage.setItem("plansForDay", JSON.stringify(plansForDay));
   
})


plansForDay.forEach(function(plan) {
    $("div[value='" + plan.currentHour + "']").children('textarea').text(plan.currentText);
  })


  $("#clear").on("click", function(){
    window.localStorage.clear();
    location.reload();
})