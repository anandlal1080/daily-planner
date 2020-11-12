let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));



for (let hour = 9; hour < 18; hour++) {
  $(".container").append(createTimeSlot(hour));
}
function createTimeSlot(hour) {
  const $timeSlot = $("<div>")
    .attr("id", `hour-${hour}`)
    .attr("value", hour)
    .attr("class", "row time-block");
  const $timeLabel = $("<div>").attr("class", "col-md-1 hour").addClass("currentHour");
  if (hour > 12) {
    $timeLabel.text(`${hour - 12} PM`);
  } else if (hour === 12) {
    $timeLabel.text(`${hour} PM`);
  } else {
    $timeLabel.text(`${hour} AM`);
  }
  const $textArea = $("<textarea>").attr("class", "col-md-10 description").attr("text", hour);
  const $saveBtn = $("<button>")
    .attr("class", "btn saveBtn col-md-1")
    .append($("<i>").attr("class", "fas fa-save"));
  $timeSlot.append($timeLabel, $textArea, $saveBtn);

  let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));

  $(".container").each(function (block) {
   
    if ($timeSlot.attr("value") < currentTime) {
      $textArea.addClass("past");
    } else if ($timeSlot.attr("value") == currentTime) {
      $textArea.addClass("present");
    } else {
      $textArea.addClass("future");
    }
  });
  return $timeSlot;
}
