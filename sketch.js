var canvas, backgroundImage;

var surveyState = 0;
var voterCount = 1;
var allVoters, voterName;

var database, form;
var surveyState = "start";
var button, name, email, q1, q2, q3, q4, q5;

function setup(){
  canvas = createCanvas(850, 1200);
  
  form = new Form();

  var firebaseConfig = {
    apiKey: "AIzaSyCj-FExDz0kU4mmJ4VyLkQNbAIkKRj6_0U",
    authDomain: "survey-af129.firebaseapp.com",
    databaseURL: "https://survey-af129.firebaseio.com",
    projectId: "survey-af129",
    storageBucket: "survey-af129.appspot.com",
    messagingSenderId: "959540992568",
    appId: "1:959540992568:web:ded76c397a165fbb1124cd",
  };
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
}


function draw(){
  form.display();
}
