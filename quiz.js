

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


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
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


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}



