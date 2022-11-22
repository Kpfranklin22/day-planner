$(function () {
  $(".btn").click(saveTasks);

  function saveTasks() {
    for (i = 9; i <= 17; i++) {
      localStorage.setItem("hour" + i, $("#hour" + i + "text").val());
    }
  }

  $(".container-fluid").children("div").each(timeColor);

  function timeColor() {
    let currentHour = dayjs().format("H");

    for (i = 9; i <= 17; i++) {
      if (i < currentHour) {
        $("#hour-" + i).toggleClass("past");
      }
      if (i == currentHour) {
        $("#hour-" + i).toggleClass("present");
      }
      if (i > currentHour) {
        $("#hour-" + i).toggleClass("future");
      }
    }
  }

  for (i = 9; i <= 17; i++) {
    $("#hour" + i + "text").val(localStorage.getItem("hour" + i));
  }

  let today = dayjs().format("ddd, MM/DD/YYYY");
  document.getElementById("currentDay").innerHTML = today;
});
