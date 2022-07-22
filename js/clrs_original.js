	// Questions Array
const questions = [
  { question: 'Enter a color in the field'}
];

// Transition Times
const shakeTime = 100; // Shake Transition Time
const switchTime = 200; // Transition Between Questions

// Init Position At First Question
let position = 0;

// Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS

// Get Question On DOM Load
document.addEventListener('DOMContentLoaded', getQuestion);

// Next Button Click
nextBtn.addEventListener('click', validate);

// Input Field Enter Click
inputField.addEventListener('keyup', e => {
  if (e.keyCode == 13) {
    validate();
  }
});

// FUNCTIONS

// Get Question From Array & Add To Markup
function getQuestion() {
  // Get Current Question
  inputLabel.innerHTML = questions[position].question;
  // Get Current Type
  inputField.type = questions[position].type || 'text';
  // Get Current Answer
  inputField.value = questions[position].answer || '';
  // Focus On Element
  inputField.focus();

  // Set Progress Bar Width - Variable to the questions length
  progress.style.width = (position * 100) / questions.length + '%';

  // Add User Icon OR Back Arrow Depending On Question
  prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-paint-brush';

  showQuestion();
}

// Display Question To User
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = '';
  inputProgress.style.width = '100%';
}

// Hide Question From User
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = 'none';
  inputGroup.style.border = null;
}

// Transform To Create Shake Motion
function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate Field
function validate() {
	
  var campo = inputField.value;
  var colors = ["indianred","lightcoral","salmon","darksalmon","lightsalmon","crimson","red","firebrick","darkred","pink","lightpink","hotpink","deeppink","mediumvioletred","palevioletred","lightsalmon","coral","tomato","orangered","darkorange","orange","gold","yellow","lightyellow","lemonchiffon","lightgoldenrodyellow","papayawhip","moccasin","peachpuff","palegoldenrod","khaki","darkkhaki","lavender","thistle","plum","violet","orchid","fuchsia","magenta","mediumorchid","mediumpurple","amethyst","blueviolet","darkviolet","darkorchid","darkmagenta","purple","indigo","slateblue","darkslateblue","mediumslateblue","greenyellow","chartreuse","lawngreen","lime","limegreen","palegreen","lightgreen","mediumspringgreen","springgreen","mediumseagreen","seagreen","forestgreen","green","darkgreen","yellowgreen","olivedrab","olive","darkolivegreen","mediumaquamarine","darkseagreen","lightseagreen","darkcyan","teal","aqua","cyan","lightcyan","paleturquoise","aquamarine","turquoise","mediumturquoise","darkturquoise","cadetblue","steelblue","lightsteelblue","powderblue","lightblue","skyblue","lightskyblue","deepskyblue","dodgerblue","cornflowerblue","thays","mediumslateblue","royalblue","blue","mediumblue","darkblue","navy","midnightblue","cornsilk","blanchedalmond","bisque","navajowhite","wheat","burlywood","tan","rosybrown","sandybrown","goldenrod","darkgoldenrod","peru","chocolate","saddlebrown","sienna","brown","maroon","white","snow","honeydew","mintcream","azure","aliceblue","ghostwhite","whitesmoke","seashell","beige","oldlace","floralwhite","ivory","antiquewhite","linen","lavenderblush","mistyrose","gainsboro","lightgrey","silver","darkgray","gray","dimgray","lightslategray","slategray","darkslategray","black","white","skyblue","olive","red","beige","silver","turquoise","yellow","maroon","ivory","grey","bluegreen","gold","rose","violet","black","azure","amber","redviolet","peach","navy","teal","orange","pink","apricot","blue","cyan","brown","magenta","ochre","cerulean","green","orangered","purple","plum","lime","blueviolet","chartreuse","indigo"];
  
  var check = colors.indexOf(campo);
  	
  // Make Sure Pattern Matches If There Is One
  if (!inputField.value.match(questions[position].pattern || /.+/)) {
	document.getElementById("error_msg").innerHTML = "The field is empty! Please enter a color!";
    inputFail();
	return false;
  } 
  if(check == -1) {
	document.getElementById("error_msg").innerHTML = "Please! Enter the color name correctly!";
    inputFail(); 
	
  } else {
    inputPass();
  }
}

// Field Input Fail
function inputFail() {
  formBox.className = 'error'; 
    // Repeat Shake Motion -  Set i to number of shakes
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}

function normalizar() {
  formBox.className = 'pass';
  document.getElementById("error_msg").innerHTML = "";
}

// Field Input Passed
function inputPass() {
  formBox.className = '';
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);

  // Store Answer In Array
  questions[position].answer = inputField.value;

  // Increment Position
  position++;

  // If New Question, Hide Current and Get Next
  if (questions[position]) {
    hideQuestion();
    getQuestion();
  } else {
    // Remove If No More Questions
    hideQuestion();
    formBox.className = 'close';
    progress.style.width = '100%';

    // Form Complete
    formComplete();
  }
}

// All Fields Complete - Show h1 end
function formComplete() {
	
  var fundo = questions[0].answer;
  
  if(fundo == "thays"){
	document.body.style.backgroundImage = "url('img/amor.jpg')";  
  } else { 
    document.body.style.backgroundColor = fundo;
  }

  const h1 = document.createElement('h1');
  h1.classList.add('end');
  h1.appendChild(
    document.createTextNode(
      `OK! You have applied the ${
        questions[0].answer
      } color to the page background.`
    )
  );
  
  const a = document.createElement('a');
  a.classList.add('back');
  a.setAttribute('href', 'https://wgtsantos.com.br/webcolors/');
  a.setAttribute('target', '_top');
  a.appendChild(
    document.createTextNode(
      'Back to Start'
    )
  );
  
  setTimeout(() => {
    formBox.parentElement.appendChild(h1);
    setTimeout(() => (h1.style.opacity = 1), 50);
  }, 1000);
  
  setTimeout(() => {
    formBox.parentElement.appendChild(a);
    setTimeout(() => (a.style.opacity = 1), 50);
  }, 1000);
}

  document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }
