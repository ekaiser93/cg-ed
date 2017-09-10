console.log("This file is linked!");
var teacherOne = "Cosmo Llama";
var deptName = "Science";
var ratingOne = 2.7;
var ratingTwo = 3.3;
var ratingThree = 5.0;
var avgRating = (ratingOne + ratingTwo + ratingThree)/3;
var result = Math.round(avgRating*10)/10;
console.log("Teacher: " + teacherOne + "\n" + "Department: " + deptName + "\n" + "Ratings: " + ratingOne + ", " + ratingTwo + ", " + ratingThree + "\n" + "This teacher has an average rating of: " + result);

var studentOne = "Emma Llamaface";
var semester = "Fall 2017";
var email = "emmal@cg.edu";
var courses = "Calculus" + "\n" +  "\t\t" + "Econ 101";
var gpaOne = 3.2;
var gpaTwo = 4.2;
var gpaThree = 4.7;
var avgGPA = (gpaOne + gpaTwo + gpaThree)/3;
var finalGPA = Math.round(avgGPA*10)/10;
console.log("Student Name: " + studentOne + "\n" + "Semester: " + semester + "\n" + "Email: " + email + "\n" + "Courses: " + courses + "\n" + "Average GPA: " + finalGPA);

var courseOne = "Astronomy";
var deptOne = "Physics";
var professor = "Sally Jones";
var semesterName = "Fall 2017";
console.log("Course Name: " + courseOne + "\n" + "Department Name: " + deptOne + "\n" + "Professor Name: " + professor + "\n" + "Semester: " + semesterName);
