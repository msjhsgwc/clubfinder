// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt.
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
	{
		prompt: "I enjoy listening to music.",
		weight: -1,
		class: 'group0'
	},
	{
		prompt: 'I like playing/learning instruments.',
		weight: -1,
		class: 'group1'
	},
	{
		prompt: 'I like drawing/painting in my free time.',
		weight: -1,
		class: 'group2'
	},
	{
		prompt: 'I like projects that involve creativity.',
		weight: -1,
		class: 'group3'
	},
	{
		prompt: 'I enjoy my STEM classes.',
		weight: -1,
		class: 'group4'
	},
	{
		prompt: 'I like to use my knowledge to solve real-world problems.',
		weight: -1,
		class: 'group5'
	},
	{
		prompt: 'I enjoy public speaking.',
		weight: 1,
		class: 'group6'
	},
	{
		prompt: 'I take leadership roles in group projects.',
		weight: 1,
		class: 'group7'
	},
	// {
	// 	prompt: 'Being adaptable is more important than being organized',
	// 	weight: 1,
	// 	class: 'group8'
	// },
	// {
	// 	prompt: 'I care more about making sure no one gets upset than winning a debate',
	// 	weight: 1,
	// 	class: 'group9'
	// },
	// {
	// 	prompt: 'I often do not feel I have to justify myself to people',
	// 	weight: 1,
	// 	class: 'group10'
	// },
	// {
	// 	prompt: 'I would rather improvise than spend time coming up with a detailed plan',
	// 	weight: 1,
	// 	class: 'group11'
	// }

]

// This array stores all of the possible values and the weight associated with the value.
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
	{
		value: 'Strongly Agree',
		class: 'btn-default btn-strongly-agree',
		weight: 5
	},
	{
		value: 'Agree',
		class: 'btn-default btn-agree',
		weight: 3,
	},
	{
		value: 'Neutral',
		class: 'btn-default',
		weight: 0
	},
	{
		value: 'Disagree',
		class: 'btn-default btn-disagree',
		weight: -3
	},
	{
		value: 'Strongly Disagree',
		class: 'btn-default btn-strongly-disagree',
		weight: -5
	}
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {

// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {
		// $('[class='thisgroup).prop('checked', false);
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
		// console.log($('.'+this_group+'.active').text());
		$('.'+this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	}

	console.log(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	if(total < 0) {
		// document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
		// console.log(document.getElementById('intro-bar').style.width);
		// document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
		document.getElementById('results').innerHTML = '<b>You should try clubs like:</b><br><br>\
		MSJ Perfect Noise (Mr. Melcic)\n\
		<br><br>\
		MSJ Perfect Noise is a music club where we teach the art of beatboxing, using the mouth and throat as percussion and other instruments to make music. We have student teachers who are happy teach anyone willing to learn, and occasionally hold ciphers to showcase everyone’s personal abilities. We have many performance opportunities throughout the year, including at school organized benefit shows, and our annual Multicultural Week performance. We meet every Monday in C9, so don’t be afraid to come \n\
		<br>\
		out even if you have no prior experience at all, or just drop by to hear some amazing beatboxing!\n\n\
		<br><br><br>\
		Mission Guitar (Mr. Mallon)\n\
		<br><br>\
		The purpose of Mission Guitar is to promote guitar in Mission. Our club will perform at a variety of locations, and raise money for our club. We will perform at parks, senior centers, and schools. Students will receive service learning hours for performances, if applicable.e happy teach anyone willing to learn, and occasionally hold ciphers to showcase everyone’s personal abilities.\n\
		<br>\\n\n\
		<br><br><br>\
		';
	} else if(total > 0) {
		document.getElementById('results').innerHTML = '<b>You should try clubs like:</b><br><br>\
		National Art Honors Society (Mr. Christensen)\n\
		<br><br>\
		NAHS is a club here students explore their interests in art. At our meetings, we work on club and personal projects, and get to know each other well. Club bonding is held on field trips and outside activities. Club projects include murals for the school, participation in the yearly trashy fashion show, art exhibitions, and smaller fun crafts. \n\
		\n\n\
		<br><br><br>\
		MSJ VAMS (Ms. Sepulveda)\n\
		<br><br>\
		MSJ Visual Arts and Music for Society otherwise known as MSJ VAMS is a service club based on the Visual Arts and Music. Our goal is to serve the community through the Arts and hope to bring these activities to underprivileged communities.\n\
		<br>\
		';
	} else {
		document.getElementById('results').innerHTML = '<b>You should try clubs like:</b><br><br>\
		MSJ Tech and Robotics (Mr. Brucker)\n\
		<br><br>\
		 The Tech and Robotics Club, Mission San Jose’s premier science, engineering and technology organization, welcomes students who seek to live on the edge of modern technological achievement. A diverse number of valuable opportunities, from competitive events to volunteering roles, are available to active members. We are home to MSJ’s FIRST Tech Challenge and are in charge of MSJ’s experienced Team America Rocketry Challenge program. No prior experience is necessary! Visit us at www.msjrobotics.com, or contact us at roboticsmsj@gmail.com. Join us, and experience engineering, teamwork, and success at its finest! \n\
		\n\n\
		<br><br><br>\
			MSJ Neuroscience (Ms. Kuei)\n\
		<br><br>\
		MSJ Neuroscience aims to provide students an opportunity to explore and enjoy a flourishing field of study. This club strives to provide members with insight into, a deeper understanding of, and an appreciation for the field of neuroscience. Club activities include guest speaker presentations, technology demonstrations, facility tours, external competitions, and intramural competitions.\n\
		<br>\
		';
	}

	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})
