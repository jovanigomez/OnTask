
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click", function () { 

   

        console.log(this);
   
        var text = $(this).sibling(".description".val());
   
        var time = $(this).parent().attr("id");

   
        localStorage.setItem(time, text);


    });
       
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));





});