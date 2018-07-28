var config = {
    apiKey: "AIzaSyDgNzZ9oRdJ3zVv_qIvlrovvbMk54M33XE",
    authDomain: "trainschedule-a0dad.firebaseapp.com",
    databaseURL: "https://trainschedule-a0dad.firebaseio.com",
    projectId: "trainschedule-a0dad",
    storageBucket: "",
    messagingSenderId: "370953712845"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destCity = $("#destination-input").val().trim();
    var freq = $("#freq-input").val().trim();
    var nextArr = $("#first-train-time").val().trim();
    var minLeft = $("#minutes-left").val().trim();

    var newTrain = {
        train: trainName,
        destination: destCity,
        frequency: freq,
        next_arrival: nextArr,
        minutes_left: minLeft,
    };

    database.ref().push(newTrain);

    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.next_arrival);
    console.log(newTrain.minutes_left);

    alert("New train successfully added");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#freq-input").val("");
    $("#first-train-time").val("");
    $("#minutes-left").val("");
});

database.ref().on("child_added", function (snapshot) {
    // Logs everything to console
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().train;
    var destCity = childSnapshot.val().destination;
    var freq = childSnapshot.val().frequency;
    var nextArr = childSnapshot.val().next_arrival;
    var minLeft = childSnapshot.val().minutes_left;

    console.log(trainName);
    console.log(destCity);
    console.log(freq);
    console.log(nextArr);
    console.log(minLeft);


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destCity),
        $("<td>").text(freq),
        $("<td>").text(nextArr),
        $("<td>").text(minLeft),
    );

    $("#train-table").append(newRow);

});