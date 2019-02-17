function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "What do you do in your free time?",
		answers: {
			a: 'hang out with friends',
			b: 'read',
			c: 'cook',
      d: 'draw or paint',
      e: 'listen to music'
		},

	},
	{
		question: "If you were stranded on a desert island with only one item, what would it be?",
		answers: {
			a: 'journal',
			b: 'favorite book',
			c: 'camera',
      d: 'paint',
      e: 'basketball'
		},

	},
  {
    question: "Your teacher assigns a group project. Which one are you?",
    answers: {
      a: 'you assign tasks and take leadership',
      b: 'you sit quietly and do your part',
      c: 'you wait till the night before'
    },
   
  },
  {
    question: "What did you want to be when you were little?",
    answers: {
      a: 'a doctor',
      b: 'an engineer',
      c: 'an actor/actress',
      d: 'an athlete',
      e: 'a scientist'
    },
   
  }
];

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
