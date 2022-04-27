$(document).ready(function () {
  $("#mygo").submit(function (event) {
    event.preventDefault();

    const Name = $("#Name").val();
    const last = $("#last").val();
    const number = $("#number").val();
    const male = $("#male").val();
    const female = $("#female").val();
    const other = $("#other").val();
    const gyminastic = $("#booking").val();
    const time = $("#time").val();
    const date = $("#time").val();



    confirm("Your Appointment With GET FEET is successful")
    alert("your first name  is: " + Name);
    alert("your phone last  is: " + last);
    alert("your number is: " + number);
    alert("Are you a female? " + female);
    prompt("Are you a male? " + male);
    prompt("your booking section is for " + gyminastic);
    prompt("your starting time for the section is  " + time);
    prompt("your closing time for the section is  " + time);

  
  });






});