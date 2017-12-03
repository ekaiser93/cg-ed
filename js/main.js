console.log("This file is linked!");
var teacherName = ["Cosmo Llama", "Freddy", "Dolly Parton", "Pedro", "Cheese"];
var deptName = ["Science", "English", "Chorus", "Gym Class", "Art"];

/* rating list section */

var teacher = {
  name: "Dr. Llama",
  department: "Math",
  ratings: [2.3, 2.9, 3.1],

/*  addTeacherRating: function (rating) {
    this.ratings.push(rating)
  },
  getAvgRating: function () {
    var total = 0;
    for (var i = 0; i < this.ratings.length; i++){
      total += this.ratings[i];
    }
    var answer = total/this.ratings.length;
    return Math.round((answer)*10)/10;
  } */
};

function Teacher (name, department, ratings){
  this.name = name;
  this.department = department,
  this.ratings = ratings;
}

Teacher.prototype = {
    addTeacherRating: function (newRating) {
      this.ratings.push(newRating);
    },
    getAvgRating: function () {
      var total = 0;
      for (var i = 0; i < this.ratings.length; i++){
          total += this.ratings[i];
          }
          var answer = total/this.ratings.length;
          return Math.round((answer)*10)/10;
    }
};

/*adding new ratings for each teacher and printing a list of them. */

var teacherFreddy = new Teacher("Freddy", "Art", [2.3, 1.3]);
console.log("Name: " + teacherFreddy.name + "\nDepartment: " + teacherFreddy.department + "\nAvg. Rating: " + teacherFreddy.getAvgRating() + "\nAdding rating: " + 4.5 + "\nNew Rating: " + teacherFreddy.getAvgRating(teacherFreddy.addTeacherRating(4.5)));

var teacherCosmo = new Teacher("Cosmo", "Science", [3.42, 3.7]);
console.log("Name: " + teacherCosmo.name + "\nDepartment: " + teacherCosmo.department + "\nAvg. Rating: " + teacherCosmo.getAvgRating() + "\nAdding rating: " + 4.9 + "\nNew Rating: " + teacherCosmo.getAvgRating(teacherCosmo.addTeacherRating(4.9)));

var teacherDolly = new Teacher("Dolly Parton", "Chorus", [2.1, 1.9]);
console.log("Name: " + teacherDolly.name + "\nDepartment: " + teacherDolly.department + "\nAvg. Rating: " + teacherDolly.getAvgRating() + "\nAdding rating: " + 4.9 + "\nNew Rating: " + teacherDolly.getAvgRating(teacherDolly.addTeacherRating(4.9)));

/*
var gotRating=false;
var userRating = parseFloat(prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0."));
while (gotRating==false) {

  if (userRating<=5){
    var newSelection = this.addTeacherRating(userRating);
    gotRating=true;
    alert(newSelection);
  }

  else {
    var userRating = parseFloat(prompt("That is not an acceptable answer. Please enter a rating under 5.0."));
  }

} */

//filter course name section//

/*1-Create a function that returns a the courses only for a department
specified in the paramenter of the function*/

//here is my course selection according to department list//
function Courses (courseName, courseDept){
  this.course = courseName;
  this.department = courseDept;
}

Courses.prototype = {
  getCourseSelection: function (userInput) {
    var newCourseSelection = [];
      if (this.department===userInput) {
          newCourseSelection.push(this.course);
      }
    return newCourseSelection;
  }
};

var artsAndCrafts = new Courses (["Drawing I", "Typeography"], "Art");
artsAndCrafts.teacher = teacherFreddy;

var courseNameAndDept = [
  {course: 'Intro to Physics', department: 'Physics'},
  {course: 'Geometry I', department: 'Math'},
  {course: 'Calculus', department: 'Math'}
];

courseNameAndDept.push(artsAndCrafts);
console.log(courseNameAndDept);
alert("The courses offered are " + artsAndCrafts.getCourseSelection("Art"));

//start of funtion//

function getCourseSelection (courseArray, userDeptInput) {

  var newCourseSelection = [];

    for (var i = 0; i < courseArray.length; i++) {

      if (courseArray[i].department===userDeptInput || courseArray[i].semester===userDeptInput)  {
        newCourseSelection.push(courseArray[i]);
      }
    }
    return newCourseSelection;
}


function Student (studentName, studentMajor, email, avgGPA, courseTaking){
  this.Name = studentName;
  this.Major = studentMajor;
  this.email = email;
  this["Average GPA"] = avgGPA;
  this.courseload = courseTaking;
}

Student.prototype = {
  addCourse: function(newCourseToAdd) {
    this.courseload.push(newCourseToAdd);
  },
  removeCourse: function(newCourseToRemove){
    var i = 0;
    while(i<this.courseload.length){
	     if (this.courseload[i] == newCourseToRemove){
         this.courseload.splice(i, 1);
       }
       else {i++;}
     }
     return this.courseload;
  },
  changeMajor: function(newMajor){
    this.Major = newMajor;
  }
};

var studentClara = new Student("Clara Phelps", "Acting", "clarap@gmail.com", 2.3, ["Drawing I", "Math Methods"]);

studentClara.addCourse("Top-Roping");
studentClara.removeCourse("Drawing I");
studentClara.changeMajor("Dancing");
console.log(studentClara);



//Here I am going to append my course array to html

$(document).ready(function() {

  $(function(){
  if($('body').is('.cg-courses')){
    function updateCoursesDisplay(courseArray){
      for (var i=0; i<courseArray.length; i++){
        $("<section><div class='course-type'><div class='course-type-child'><h1>" + courseArray[i].course + "</h1></div><h2>" + courseArray[i].department + "</h2></div></div>" + "<div class='teacher-semester'><div class=teacher-semester-child><h2>Teacher: </h2><p>" + courseArray[i].teacher + "</p></div><div class='teacher-semester-child'><h2>Semester: </h2><p>" + courseArray[i].semester + "</p></div></div></section>").appendTo("main");
      }
    }

    var courseNameAndDept = [
      {course: 'Physics', department: 'Science', teacher: 'Cosmo', semester: 'Fall 2017'},
      {course: 'Singing', department: 'Chorus', teacher: 'Dolly Llama', semester: 'Spring 2018'},
      {course: 'Drawing I', department: 'Art', teacher: 'Cheese', semester: 'Fall 2018'},
      {course: 'Painting', department: 'Art', teacher: 'Cheese', semester: 'Fall 2017'},
      {course: 'Calculus', department: 'Math', teacher: 'Cosmo', semester: 'Spring 2018'}
    ];

  updateCoursesDisplay(courseNameAndDept);

    var selection = [];

    $('.drop-down-dept').hide();

    $('a.drop-down').click(function (e) {
      e.preventDefault();
      $(this).next('ul').slideToggle();
    });

    $('.drop-down-dept li').on("click", function(event){
      $(this).addClass("clicked");
      $(this).toggleClass("bold");
      if ($(this).hasClass("clicked bold")) {
        selection = $(this).text();
      }
    });

    $('.filter-bttn').on("click", function(event){
      $('section').hide();
      updateCoursesDisplay(getCourseSelection(courseNameAndDept, selection));
    });
  }
});

  $(function(){
    if($('body').is('.cg-teachers')){

    var imageFiles = ["assets/images/Cosmo.jpg","assets/images/Freddy.jpg", "assets/images/Dolly.jpg", "assets/images/Pedro.jpg", "assets/images/Frodo.jpeg"];

    var pictures = [];

    for (var i = 0; i<imageFiles.length; i++) {
        var image = new Image;
        image.src = imageFiles[i];
        pictures.push(image);
    }

    function updateTeachersDisplay(teacherArray){
      for (var i=0; i<teacherArray.length; i++){
        $("<section><div class='image-name-course'><img src=" + imageFiles[i] + " class='llama-img'><div class='llama-name'><h1>" + teacherArray[i].teacher + "</h1><br><h2>" + teacherArray[i].department + "</h2></div></div><div class='course-info'><div class='course-description'><h3>Courses</h3><p>" + teacherArray[i].courses[0] + "<br>" + teacherArray[i].courses[1] + "<br>" + teacherArray[i].courses[2] + "</p></div><div class='course-description'><h3>Rating: </h3><p>" + teacherArray[i].rating + "</p></div></section>").appendTo("main");
      }
    }

    var teachersList = [
      {teacher: 'Cosmo', department: 'Science', courses: ['Biology', 'Physics', 'Chemistry I & II'], rating: 3.67},
      {teacher: 'Freddy', department: 'English', courses: ['Creative Writing', 'English I & II', 'Reading'], rating: 4.3},
      {teacher: 'Dolly Parton', department: 'Chorus', courses: ['Intro to Singing', 'Chorus', 'Vocal Practice'], rating: 2.9},
      {teacher: 'Pedro', department: 'Gym', courses: ['Weightlifting', 'Track', 'Health Concepts'], rating: 3.2},
      {teacher: 'Cheese', department: 'Art', courses: ['Drawing I', 'Scupture', 'Glassmaking'], rating: 4.7}
    ];

    updateTeachersDisplay(teachersList);

    $('.give-rating').hide();
    $('section').on('click', function(){
      $('.hilighted').css('borderColor', '#414042');
      $('.hilighted').removeClass('hilighted');
      $(this).addClass('hilighted');
        if ($(this).hasClass('hilighted')){
          $(this).css('borderColor', '#e51d42');
          $('.give-rating').fadeIn();
        }
    });


    var userRating;


    $('section').on('click', function(){
      var teacherName = $(this).find('h1').text();
      var departmentName = $(this).find('h2').text();
      var currentRating = $(this).find('.course-description:nth-child(2)').find('p').text();
      nowRating = parseFloat(currentRating);

      function addRating (list, rating) {
        list.push(rating);
        return list;
      }

      function getAvgRating (list) {
        var total = 0;
        for (var i = 0; i < list.length; i++){
            total += list[i];
            }
            var answer = total/list.length;
            return Math.round((answer)*10)/10;
      }


      $(".give-rating").html("<div class='rating-section'><p>Name: " + teacherName + "</p><p>Department: " + departmentName + "</p><p>Current Rating: " + currentRating + "</p></div><div class='rating-section'><p>New Rating</p><input class='for-rating' input type='number' placeholder='0.0 - 5.0' step='0.1' min='0' max='5.0'><div class='submit-rating'>Submit</div></div><div class='close'>X</div>");
      $('.for-rating').change(function(){
          userRating = parseFloat(this.value);
          ratingsList = [nowRating];
            if (userRating <= 5){
              addRating (ratingsList, userRating);
              var finalNum = getAvgRating(ratingsList);
              $('section.hilighted').find('.course-description:nth-child(2)').find('p').text(finalNum);
            }
            else {
              alert("Please enter a rating under 5.0.");
            }
      });

      $('.submit-rating').on('click', function(){
        $('.give-rating').slideUp();
      });

      $('.close').on('click', function(){
        $('.give-rating').slideUp();
      });

    });

    }
  });

  $(function(){
    if($('body').is('.cg-students')){

      var newStudentInstance = [];

      console.log("hello.");
      $('form').change(function(){
      var newName = $(this).find('.submission-section').find('.submit-name').val();
      var newMajor = $(this).find('.submission-section').find('.submit-major').val();
      var newEmail = $(this).find('.submission-section').find('.submit-email').val();
      var newGPA = parseFloat($(this).find('.submission-section').find('.submit-gpa').val());
      newStudentInstance = new Student (newName, newMajor, newEmail, newGPA);
      console.log (newStudentInstance);
      });

      var imageFiles = ["assets/images/Frodo.jpeg","assets/images/Emma.jpg", "assets/images/Andy.jpg"];

      var pictures = [];

      for (var i = 0; i<imageFiles.length; i++) {
          var image = new Image;
          image.src = imageFiles[i];
          pictures.push(image);
      }

      function updateStudentsDisplay(studentArray){
        for (var i=0; i<studentArray.length; i++){
          $("<section><div class='photo-name-major'><img src=" + imageFiles[i] + " class='llama-img'><h1>" + studentArray[i].Name + "</h1><h2>" + studentArray[i].Major + "</h2></div><div class='student-info'><div class='student-personal'><h2>Email: </h2><p>" + studentArray[i].email + "</p></div><div class='student-personal'><h2>GPA: </h2><p>" + studentArray[i]["Average GPA"] + "</p></div></div><div class='small-section'><div class='first-half'><h2>Courses: </h2></div><div class='class-list'><p>Calculus</p><p>Econ 101</p></div></div></div></section>").appendTo("main");
        }
      }

      $('button').on('click', function(){
        var studentsArray = [];
        studentsArray.push(newStudentInstance);
        console.log(studentsArray);
        updateStudentsDisplay (studentsArray);
      });

    }
  });

});



/*okay, now I will be prompting the user for a department and checking to see
if their answer is valid.  Then, I will use my getCourseSelection function to
get the courses and return it to them.*/


/* var gotDept = false;

while (gotDept==false) {

    var userDept = prompt("Please enter a department name you wish to know the courses in.");

    if (typeof userDept === 'string') {
      var totalSelection = getCourseSelection(courseNameAndDept, userDept);

      var message = "The courses offered in " + userDept + " are ";

      for (var i = 0; i < totalSelection.length; i++){
        message += totalSelection[i].course;

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

//starting part three of problems
/*I need to create two anonymous functions that takes in one parameter, class,
and alerts depending on the level - hs or college*/

var welcomeHighSchoolStudent = function ( className ) {
  alert("You're still a " + className + " in High School!");
};

var welcomeCollegeStudent = function ( className ) {
  alert("Welcome " + className + "!");
};

function gradDate (month, year) {
  return (month + " " + year);
};

// console.log(gradDate("December", 2018));

//now I'm going to use these functions as parameters

// console.log(welcomeStudentsByGraduatingClass (gotGraduationDate));


/*  function welcomeStudentsByGraduatingClass(graduationDate){

      if (graduationDate == "December 2017" || "May 2018"){
        var studentStatus = "Senior";
        gotStudentStatus = true;
        return studentStatus;
      }

      else if (graduationDate == "December 2018" || "May 2019"){
        var studentStatus = "Junior";
        gotStudentStatus = true;
        return studentStatus;
      }

      else if (graduationDate == "December 2019" || "May 2020"){
        var studentStatus = "Sophomore";
        gotStudentStatus = true;
        return studentStatus;
      }

      else if (graduationDate == "December 2020" || "May 2021"){
        var studentStatus = "Freshman";
        gotStudentStatus = true;
        return studentStatus;
      }
    }
// console.log(welcomeStudentsByGraduatingClass(gradDate("December", 2018)));

var gotStudentStatusMonth = false;
var gotStudentStatusYear = false;
var gotStudentStatusCollege = false;

while (gotStudentStatusMonth===false && gotStudentStatusYear===false && gotStudentStatusCollege===false){

      var gradDateInputMonth = prompt("What month will you graduate?");
        if (gradDateInputMonth === "May" || gradDateInputMonth === "December") {
            gotStudentStatusMonth = true;
            alert(gradDateInputMonth);
        }

        else {
          gotStudentStatusMonth = false;
          gradDateInputMonth = prompt ("Please enter a valid item.");
        }

        var gradDateInputYear = prompt("What year will you graduate?");
            if (gradDateInputYear === "2017" || gradDateInputYear === "2018" || gradDateInputYear === "2019" || gradDateInputYear === "2020" || gradDateInputYear === "2021") {
            gotStudentStatusYear = true;
            alert(gradDateInputYear);
          }

            else {
              gotStudentStatusYear = false;
              gradDateInputMonth = prompt ("Please enter a valid item.");
          }

          var collegeOrHighSchool = prompt("What year will you graduate from college?");
              if (collegeOrHighSchool === "2017" || collegeOrHighSchool === "2018" || collegeOrHighSchool === "2019" || collegeOrHighSchool === "2020" || collegeOrHighSchool === "2021"){
                gotStudentStatusCollege = true;
                welcomeCollegeStudent(welcomeStudentsByGraduatingClass(gradDate(gradDateInputMonth,gradDateInputYear)));
              }

              else if (collegeOrHighSchool === "2022" || collegeOrHighSchool === "2023" || collegeOrHighSchool === "2024" || collegeOrHighSchool === "2025" || collegeOrHighSchool === "2026") {
                welcomeHighSchoolStudent(welcomeStudentsByGraduatingClass(gradDate(gradDateInputMonth,gradDateInputYear)));
              }
} */
