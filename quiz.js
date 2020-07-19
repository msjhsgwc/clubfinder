// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt.
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.


var prompts = [
	/*
	{
		criteria:	"Music",
		choice: -2,
		prompt: 'I enjoy listening to music.',
		weight: -1,
		class: 'group0'
	},
	{
		criteria:	"Instruments",
		choice: -2,
		prompt: 'I like playing/learning instruments.',
		weight: -1,
		class: 'group1'
	},
	{
		criteria:	"Drawing",
		choice: -2,
		prompt: 'I like drawing/painting in my free time.',
		weight: -1,
		class: 'group2'
	},
	{
		criteria:	"Creativity",
		choice: -2,
		prompt: 'I like projects that involve creativity.',
		weight: -1,
		class: 'group3'
	},
	{
		criteria:	"STEM",
		choice: -2,
		prompt: 'I enjoy my STEM classes.',
		weight: -1,
		class: 'group4'
	},
	{
		criteria:	"Solve Problems",
		choice: -2,
		prompt: 'I like to use my knowledge to solve real-world problems.',
		weight: -1,
		class: 'group5'
	},
	{
		criteria:	"Public Speaking",
		choice: -2,
  	prompt: 'I enjoy public speaking.',
		weight: 1,
		class: 'group6'
	},
	{
		criteria:	"Leadership",
		choice: -2,
		prompt: 'I take leadership roles in group projects.',
		weight: 1,
		class: 'group7'
	},
	*/
	{
		criteria:	"Music",
		choice: -2,
		prompt: 'I enjoy istening to music',
		weight: 1,
		class: 'group0'
	},
	{
		criteria:	"Instruments",
		choice: -2,
		prompt: 'I play an instrument',
		weight: 1,
		class: 'group1'
	},
	{
		criteria:	"Public Speaking",
		choice: -2,
		prompt: 'I enjoy public speaking',
		weight: 1,
		class: 'group2'
	},
	{
		criteria:	"Leadership",
		choice: -2,
		prompt: 'I take leadership roles in group projects.',
		weight: 1,
		class: 'group3'
	},
	{
		criteria:	"Art",
		choice: -2,
		prompt: 'I enjoy painting and drawing',
		weight: 1,
		class: 'group4'
	},
	{
		criteria:	"News",
		choice: -2,
		prompt: 'I am interested news and current events',
		weight: 1,
		class: 'group5'
	},
	{
		criteria:	"STEM",
		choice: -2,
		prompt: 'I enjoy my stem classes',
		weight: 1,
		class: 'group6'
	},
	{
		criteria:	"Excercise",
		choice: -2,
		prompt: 'I enjoy excersising.',
		weight: 1,
		class: 'group7'
	},
	{
		criteria:	"Mechanics",
		choice: -2,
		prompt: 'I am interested in coding.',
		weight: 1,
		class: 'group8'
	},
	{
		criteria:	"Photography",
		choice: -2,
		prompt: 'I am interested in photography',
		weight: 1,
		class: 'group9'
	},
	{
		criteria:	"Service",
		choice: -2,
		prompt: 'I am interested in service events and helping my community',
		weight: 1,
		class: 'group10'
	},
	{
		criteria:	"Spanish",
		choice: -2,
		prompt: 'I enjoy Spanish and want to further my knowledge about Spanish traditions and culture',
		weight: 1,
		class: 'group11'
	},

	{
		criteria:	"Writing",
		choice: -2,
		prompt: 'I enjoy writing',
		weight: 1,
		class: 'group12'

	},
	{
		criteria:	"Environment",
		choice: -2,
		prompt: 'I want to spread awareness about environemental issuese',
		weight: 1,
		class: 'group13'
	}
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
		weight: 4,
	},
	{
		value: 'Neutral',
		class: 'btn-default',
		weight: 3
	},
	{
		value: 'Disagree',
		class: 'btn-default btn-disagree',
		weight: 2
	},
	{
		value: 'Strongly Disagree',
		class: 'btn-default btn-strongly-disagree',
		weight: 1
	}
]
var SpeechClub = {
Name :  "<b>"+ "Speech and Debate Club" +  "</b>" + "<br/>" + "MSJ Speech and Debate offers students an opportunity to improve their public speaking and critical thinking while bringing these skills to high-level competitions across the country. We meet weekly both at lunch and after school and are excited for this season!",
//Decription : ''
Criteria : [ 0,0,3,3,0,4,0,0,0,0,0,0,0,0],
};
var DanceClub = {
Name :  "<b>"+ "COR Dance" +  "</b>" + "<br/>" + "COR Dance Club is a dance club at Mission San Jose High School that strives to teach various styles of dance to the student body. We offer classes in hip-hop, contemporary, and jazz! We meet every Thursday during lunch in front of the Flex Room.",
Criteria : [ 3,0,0,0,0,0,0,4,0,0,0,0,0,0],
};
var RoboticsClub = {
Name :  "<b>"+ "Girls Who Code" +  "</b>" + "<br/>" + "MSJ Girls Who Code welcomes all levels of coders on campus looking to build a community and expand their coding skill set. Throughout the year, we host speakers, go on fieldtrips, attend hackathons as a club, and complete personal projects in multiple languages. In the past years, we’ve met Reshma Saujani, the CEO of GWC, visited Netflix and Google, and invited speakers from a vast range of fields. We compete at Code Day annually and teach many languages including HTML, Javascript, Python etc. Join for a new learning experience every week!",
Criteria : [ 0,0,0,3,0,0,0,0,4,0,0,0,0,0],
};
var BioClub = {
Name :  "<b>"+ "MSJ Biotech Club" +  "</b>" + "<br/>" + "MSJ Biotechnology club is a student organization for students interested in careers in the STEM field. We explore the link between healthcare and technology through lab work and research experiments. We listen to guest speakers talk about careers in this field, discuss journal articles, and participate in local STEM focused events. Whether you’re interested in medicine, robotics, or research, MSJ Biotechnology Club will help enrich your understanding in this vast field. We meet during lunch on Thursdays in room C11. Hope to see you there! ",
Criteria : [ 0,0,0,3,0,0,4,0,2,0,0,0,0,0],
};
var PicClub = {
Name :  "<b>"+ "Yearbook" +  "</b>" + "<br/>" + "Join the Costanoan Yearbook commitee to work with other students to make the yearbook",
Criteria : [ 0,0,0,3,1,0,0,0,0,4,0,0,3,0],
};
var ServiceClub = {
Name :  "<b>"+ "Interact Club" +  "</b>" + "<br/>" + "Interact is one of MSJ’s largest service clubs, where students can participate in service events, fundraisers, and our monthly meetings. MSJ Interact Club is part of Interact District 5170, one of the most successful service districts in the world. Interactors from around our district will have opportunities to raise funds for our annual International and Community projects. Members of Interact will learn to stay true to our club’s motto, “Service Above Self!”",
Criteria : [ 0,0,0,3,0,0,0,0,0,0,4,0,0,0],
};
var SpanishClub = {
Name :  "<b>"+ "Spanish Honors Society" +  "</b>" + "<br/>" + "The Spanish Honors Society will enrich MSJ’s student body by providing students with the opportunity to experience traditional Latino holidays and celebrations. It hosts the National Spanish Exam every year in addition to various service events and cultural fiestas to promote the Spanish language and culture.",
Criteria : [ 0,0,0,0,0,0,0,0,0,0,0,5,0,0],
};
var MagClub = {
Name :  "<b>"+ "The Smoke Signal" +  "</b>" + "<br/>" + "Join the Smoke Signal to help write the monthly school newspaper.",
Criteria : [ 0,0,0,3,0,4,0,0,0,0,0,0,4,0],
};
var GreenClub = {
Name :  "<b>"+ "Green Club" +  "</b>" + "<br/>" + "Green Club aims to raise the community’s awareness about being environmentally friendly by finding cleaner ways to live. By working closely with other environmental clubs and with the district, Green Club strives to make Fremont, as a whole, a greener city. Currently, among other things, we are working on building a self sustainable garden located near E wing and continuing to oversee the new green bins on the school’s campus. By educating students through presentations about environmental issues and innovations at our meetings, Green Club is continuously striving to create a greener school and planet.",
Criteria : [ 0,0,0,0,0,0,0,0,0,0,3,0,0,4],
};
var NAHSClub = {
Name :  "<b>"+ "MSJ National Art Honors Society (NAHS)" +  "</b>" + "<br/>" + "NAHS is a club where students explore their interests in art. Being the only art club on campus, during our meetings we work on club and personal projects, engage in workshops exploring different mediums, and collaborate in different art events. Club projects include murals for school, participation in the trashy fashion show, art exhibitions, and smaller fun crafts. Join us every Thursday at lunch in E3 for our weekly meetings.",
Criteria : [ 0,0,0,0,4,0,0,0,0,0,0,0,0,0],
};
var VAMSClub = {
Name :  "<b>"+ "VAMS (Visual Arts & Music for Society) " +  "</b>" + "<br/>" + "VAMS (Visual Arts & Music for Society) is dedicated to improving our community through the arts. Our past events include painting traffic control boxes, crafting appreciation cards, and holding senior center and benefit concerts. We provide a platform for students to express their creativity while bringing joy to others.",
Criteria : [ 0,0,0,0,4,0,0,0,0,0,0,0,0,0],
};
var HungerClub = {
Name :  "<b>"+ "Rise Against Hunger" +  "</b>" + "<br/>" + "The club objective is to increase awareness about world famine and mitigate its impacts in areas where hunger and poverty are prevalent. Members of Rise Against Hunger help to fulfill this objective by participating in service club events within our community and by holding meal-packaging events. As Rise Against Hunger’s field of influence increases, more large-scale events will be added to further achieve our goal.",
Criteria : [ 0,0,0,0,0,0,0,0,0,0,4,0,0,0],
};
var VRClub = {
Name :  "<b>"+ "VR/AR Club" +  "</b>" + "<br/>" + "The VR/AR Club educates and exposes the student body to the emerging technology of virtual and augmented reality. This club will include lectures on virtual and augmented reality, its applications, what developers have done so far in this nascent industry and its future trends. We will conduct tutorials to help students create their own virtual reality/augmented reality applications. We will also give demos of virtual and augmented reality applications.",
Criteria : [ 0,0,0,3,0,0,0,0,4,0,0,0,0,0],
};
var interests = [0,0,0,0,0,0,0,0,0,0,0,0,0];
// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {
//  alert("createPromptItems");
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
//	alert("createValueButtons");
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

// Get the name associated to group number
function findPromptName(prompts, group) {
	var promptName ;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			promptName = prompts[i].prompt;
		}
	}

	return promptName;
}

// Set the choice for this prompt
function setChoiceForPrompt(group, value) {

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			prompts[i].choice = value;
		}
	}

	return ;
}

// Get the choice for each prompt
function getChoiceForPrompt() {

	for (var i = 0; i < prompts.length; i++) {
		//alert(prompts[i].criteria + ":" + prompts[i].choice);
		interests[i]=prompts[i].choice;
		}

	return ;
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
		//var promptName = findPromptName(prompts, this_group);
		//alert (promptName + ":" + findValueWeight(prompt_values, $(this).text()));
		var a = findValueWeight(prompt_values, $(this).text());
		//alert("weight");
		//alert(a);
		setChoiceForPrompt(this_group, a);
	}

	console.log(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	getChoiceForPrompt();
  //alert(interests);

	var ClubInfoList = [ SpeechClub, DanceClub, RoboticsClub, BioClub, PicClub, ServiceClub, SpanishClub, MagClub, GreenClub, NAHSClub,VAMSClub,HungerClub,VRClub];
	var matchingClubs = [];
	//iterate thru each club in ClubInfo
	var NumOfClubs = ClubInfoList.length;
	//alert(NumOfClubs);
	//for each item in ClubInfoList
	for (var i=0; i<NumOfClubs; i++) {

	//  match each elem criteria with interests array elem
	    var ClubInfo = ClubInfoList[i];
	    var ClubCriteria = ClubInfo.Criteria;
	    var ClubName = ClubInfo.Name;
	   // alert(ClubName);
	   // alert(ClubCriteria);

	//  if interest elem value >= crtieria elem value for all elems in interest array
	    var clubMatch = true;
	    for (var j=0; j<interests.length; j++) {
	        //alert(j);
	        //alert(interests[j]);
	        //alert(ClubCriteria[j]);
	        if (interests[j] < ClubCriteria[j]) {
	            clubMatch = false;
	            //alert("false");
	            break;
	        }
	    }
	   // alert(clubMatch);
	    if (clubMatch == true) {
	        matchingClubs.push(ClubName);
	     }

	//      add this ClubInfo item:Name into textStr for matching clubs
	}
	//alert(matchingClubs);
	//print textStr with all matchingclubs

	  //var textStr = "Matching clubs are : " + matchingClubs
		//var textStr = "Matching clubs are : " + "<br/>" + "Speech";
		//alert(matchingClubs);
		var textStr = "<b>" + "Matching clubs are : " + "</b>";
		for (var i = 0; i < matchingClubs.length; i++) {
			textStr = textStr + "<br/>" + "<br/>" + matchingClubs[i];
			}
		//alert(textStr);
	  //textStr = textStr + "Dance 5";
	  //textStr = textStr + " ";
	  //textStr = textStr + "Music";
	 /* document.getElementById("demo").innerHTML = textStr;
		var newText = '<br>\
		MSJ Perfect Noise is a music club where we teach the art of beatboxing, using the mouth and throat as percussion and other instruments to make music. We have student teachers who are happy teach anyone willing to learn, and occasionally hold ciphers to showcase everyone’s personal abilities. We have many performance opportunities throughout the year, including at school organized benefit shows, and our annual Multicultural Week performance. We meet every Monday in C9, so don’t be afraid to come \n\
		<br>';
		document.getElementById('results').innerHTML = newText;*/

		if(total < 100) {
				document.getElementById('results').innerHTML = textStr; //'<b>You should try clubs like: </b><br> ';

		}

		/*if(total < 100) {
				document.write (textStr);
				;
		}*/

	/*if(total < 0) {
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
		The purpose of Mission Guitar is to promote guitar in Mission. Our club will perform at a variety of locations, and raise money for our club. We will perform at parks, senior centers, and schools. Students will receive service learning hours for performances, if applicable.e happy teach anyone willing to learn, and occasionally hold ciphers to showcase everyone’s personal abilities.\
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
	}*/


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
