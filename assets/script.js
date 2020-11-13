// Added variable to display the Date and Time in the page header.
let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));

// For loop to create each of the timeslot hour using the createTimeSlot function
for (let hour = 9; hour < 18; hour++) {
  $(".container").append(createTimeSlot(hour));
}

// This function creates the time slots for each hour form 9am-6pm. It also converts the 24HR times to PM from 1PM onwards.
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

  // Defined the variable for the text area and save button to be rendrered.
  const $textArea = $("<textarea>").attr("class", "col-md-10 description").attr("text", hour);
  const $saveBtn = $("<button>")
    .attr("class", "btn saveBtn col-md-1")
    .append($("<i>").attr("class", "fas fa-save"));
  $timeSlot.append($timeLabel, $textArea, $saveBtn);

  // declared a variable to get teh current time. This will be used in the next function to color the text area.
  let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));
// This function sets the color of the text area based on the current time. Grey for past, Red for current hour and green for future hour.
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
