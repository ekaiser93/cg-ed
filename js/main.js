console.log("This file is linked!");
var teacherName = ["Cosmo Llama", "Freddy", "Dolly Parton", "Pedro", "Cheese"];
var deptName = ["Science", "English", "Chorus", "Gym Class", "Art"];

/* rating list section */

var ratingList = [3.78, 2.12, 2.3, 2.1];

function getAvgRating (ratingsOfTeach) {
  var total = 0, i;
  for (var i = 0; i < ratingsOfTeach.length; i ++){
    total += ratingList[i];
    var answer = total/ratingsOfTeach.length;
  }
  return Math.round((answer)*10)/10;
}

var avgRating = (getAvgRating(ratingList));
console.log ("The average teacher rating is " + avgRating);

function addTeacherRating () {
  ratingList.push(userRating);
  return ratingList;
}


/*get rating problem - prompt user for rating and return new avg */

var gotRating=false;

var userRating = parseFloat(prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0."));
console.log(userRating);


while (gotRating==false) {

  if (userRating<=5){
    var newRatingsList = addTeacherRating(userRating);
    console.log(newRatingsList);
    var newAvg = getAvgRating(newRatingsList);
    gotRating=true;
    alert("Thanks! The new average for this teacher is " + newAvg);
  }

  else {
    var userRating = parseFloat(prompt("That is not an acceptable answer. Please enter a rating under 5.0."));
  }

}

//filter course name section//

/*1-Create a function that returns a the courses only for a department
specified in the paramenter of the function*/

//here is my course selection according to department list//

var courseNameAndDept = [
  ['Intro to Physics','Physics'],
  ['Geometry I', 'Math'],
  ['Calculus', 'Math']
];

//start of funtion//

function getCourseSelection (courseArray,userDeptInput) {

  var newCourseSelection = [];

    for (var i = 0; i < courseArray.length; i++) {

      if (courseArray[i][1]===userDeptInput) {
        newCourseSelection.push(courseArray[i]);
      }
    }
    return newCourseSelection;
}

/*okay, now I will be prompting the user for a department and checking to see
if their answer is valid.  Then, I will use my getCourseSelection function to
get the courses and return it to them.*/


var gotDept = false;

while (gotDept==false) {

    var userDept = prompt("Please enter a department name you wish to know the courses in.");

    if (typeof userDept === 'string') {
      var totalSelection = getCourseSelection(courseNameAndDept, userDept);


      var message = "The courses offered in " + userDept + " are ";

      for (var i = 0; i < totalSelection.length; i++){
        message += totalSelection[i][0];

        if(i<totalSelection.length-1){
          message += ", ";
        }

        if(i==totalSelection.length-1){
          message += ".";
        }
      }
      alert(message);
      gotDept=true;
    }
    else {
      var userDept = prompt("That is not a valid entry.  Please enter a department.");
    }
}
