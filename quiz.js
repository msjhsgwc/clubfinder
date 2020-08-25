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
		criteria:	"Community Service",
		choice: -2,
		prompt: 'I want to help my community through community service',
		weight: 1,
		class: 'group0'
	},
	{
		criteria:	"Leadership",
		choice: -2,
		prompt: 'I want to advance my leadership skills',
		weight: 1,
		class: 'group1'
	},
	{
		criteria:	"Creative",
		choice: -2,
		prompt: 'I am creative and interested in a form of art: painting, photography etc',
		weight: 1,
		class: 'group2'
	},
	{
		criteria:	"Competitive",
		choice: -2,
		prompt: 'I want to participate in competitions',
		weight: 1,
		class: 'group3'
	},
	{
		criteria:	"History",
		choice: -2,
		prompt: 'I like learning history',
		weight: 1,
		class: 'group4'
	},
	{
		criteria:	"Theatre",
		choice: -2,
		prompt: 'I like theatre and the performing arts',
		weight: 1,
		class: 'group5'
	},
	{
		criteria:	"Culture",
		choice: -2,
		prompt: 'I want to learn about new cultures',
		weight: 1,
		class: 'group6'
	},
	{
		criteria:	"Food",
		choice: -2,
		prompt: 'I want to learn more about food across cultures',
		weight: 1,
		class: 'group7'
	},
	{
		criteria:	"Writing",
		choice: -2,
		prompt: 'I enjoy writing',
		weight: 1,
		class: 'group8'
	},
	{
		criteria:	"Politically Active",
		choice: -2,
		prompt: 'I would consider myself politically active',
		weight: 1,
		class: 'group9'
	},
	{
		criteria:	"Coding",
		choice: -2,
		prompt: 'I am interested in technology and programming',
		weight: 1,
		class: 'group10'
	},
	{
		criteria:	"Stem",
		choice: -2,
		prompt: 'I am interested in STEM careers',
		weight: 1,
		class: 'group11'
	},

	{
		criteria:	"Bio",
		choice: -2,
		prompt: 'I enjoy learning about medicine and healthcare',
		weight: 1,
		class: 'group12'

	},
	{
		criteria:	"Music",
		choice: -2,
		prompt: 'I like music and/or play an instrument',
		weight: 1,
		class: 'group13'
	},
	{
		criteria:	"Inv",
		choice: -2,
		prompt: 'I want to learn about investing and finance',
		weight: 1,
		class: 'group14'

	},
	{
		criteria:	"Env",
		choice: -2,
		prompt: 'I care about helping the environment and animals',
		weight: 1,
		class: 'group15'

	},
	{
		criteria:	"Kids",
		choice: -2,
		prompt: 'I want to do activies that work for or with children',
		weight: 1,
		class: 'group16'

	},
	{
		criteria:	"Video Games",
		choice: -2,
		prompt: 'I enjoy playing video games',
		weight: 1,
		class: 'group17'

	},
	{
		criteria:	"LGBTQ",
		choice: -2,
		prompt: 'I want to learn and help LGBTQ+ youth and allies at Mission',
		weight: 1,
		class: 'group18'

	},
	{
		criteria:	"Film",
		choice: -2,
		prompt: 'I am interested in film',
		weight: 1,
		class: 'group19'

	},
	{
		criteria:	"Public Speaking",
		choice: -2,
		prompt: 'I want to develop my public speaking skills',
		weight: 1,
		class: 'group20'

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
/*
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
*/
var Interact = {
Name :  "<b>"+ "MSJ Interact" +  "</b>" + "<br/>" + "Interact is one of MSJ’s largest service clubs, where students can participate in service events, fundraisers, and our monthly meetings. MSJ Interact Club is part of Interact District 5170, one of the most successful service districts in the world. Interactors from around our district will have opportunities to raise funds for our annual International and Community projects. Members of Interact will learn to stay true to our club’s motto, Service Above Self!",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Hunger = {
Name :  "<b>"+ "MSJ Kids Against Hunger" +  "</b>" + "<br/>" + "Provide and serve food primarily to poverty stricken individuals as well as people of all statuses.",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Specialneeds = {
Name :  "<b>"+ "MSJ FCSN Special Needs Club" +  "</b>" + "<br/>" + "MSJ FCSN Special Needs Club works closely with local non-profit organization Friends of Children With Special Needs to provide students with volunteer and leadership opportunities. We also organize fundraisers for children with special needs in rural parts of the world to support them in their education. Come to our monthly meetings held in room N9 to learn of unique opportunities to teach and lead programs dedicated towards individuals with special needs, listen to lectures from medical experts on autism as well as how you can help the children in need in rural areas.",
//Decription : ''
Criteria : [ 4,4,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0],
};
var Phoenix = {
Name :  "<b>"+ "Phoenix Art and Literary Magazine" +  "</b>" + "<br/>" + "MSJ's art and literary magazine comprised of student submissions of all media: brush, pen/sketch, photography, prose, poetry, etc. We take applications for our Editorial Board in September and take student submissions towards the end of each school year.",
//Decription : ''
Criteria : [ 0,0,3,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Historyclub = {
Name :  "<b>"+ "MSJ History Club" +  "</b>" + "<br/>" + "MSJ History Club primarily participates in the National History Day competition, abbreviated NHD. The NHD organization and event is a nationwide competition that involves half a million students annually. Students choose a topic based on the selected theme for that year and create a project either individually or in a group of up to five students",
//Decription : ''
Criteria : [ 0,0,0,4,4,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0],
};
var Universal = {
Name :  "<b>"+ "Universal Performers" +  "</b>" + "<br/>" + "All students who are interested in theatre are welcome to join Universal Performers! Whether you love acting or working behind the scenes, this club is designed to help students learn about all aspects of theatre.",
//Decription : ''
Criteria : [ 0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
};
var Ted = {
Name :  "<b>"+ "TEDxMSJHS" +  "</b>" + "<br/>" + "TEDxMSJHS strives to bring the power of TED talks to the MSJ students in the spirit of ideas worth spreading. The team will plan the event over the course of the year which is traditionally held in the late spring. Themes vary each year, but past themes have been Spark and Ripples, which highlighted how small actions can lead to bigger impacts over time. ",
//Decription : ''
Criteria : [ 4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Spanish = {
Name :  "<b>"+ "Spanish Honors Society" +  "</b>" + "<br/>" + "The Spanish Honors Society will enrich MSJ’s student body by providing students with the opportunity to experience traditional Latino holidays and celebrations. It hosts the National Spanish Exam every year in addition to various service events and cultural fiestas to promote the Spanish language and culture.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Photo = {
Name :  "<b>"+ "MSJ Picture Perfect Photography Club " +  "</b>" + "<br/>" + "We strive to create a friendly environment for beginners to learn and for more advanced members to grow as photographers. The club aims to bring those with a passion for photography together, making learning photography an enjoyable experience. Some of our activities include introductory meetings, competitions, seasonal photoshoots, growing your social media presence, and making new friends! From phone photographers to those with DSLRs all skill levels are welcome. Come join us at our monthly meetings during lunch in E7",
//Decription : ''
Criteria : [ 0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Food = {
Name :  "<b>"+ "MSJ Food for Thought " +  "</b>" + "<br/>" + "We aim to provide a means for all interested MSJ students to make, taste, and share a diverse array of ingredients and recipes. Through the organization of various kinds of events, we intend to increase all students' appreciation for their food, by spreading awareness of the rich history, culture, ingredients, and techniques of all things food.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Block = {
Name :  "<b>"+ "MSJ Writer's Block" +  "</b>" + "<br/>" + "Writer’s Block is an on-campus organization that seeks to improve writing skills through one-on-one peer-editing sessions two days a week during lunch and/or advisory. A qualified peer editor will review a student’s writing and offer constructive feedback on how to improve their writing. The peer editors are also available to answer any questions pertaining to writing in general. In addition, the club offers an online editing platform where students can communicate with editors if they were unable to receive assistance during lunch.",
//Decription : ''
Criteria : [ 3,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Speech = {
Name :  "<b>"+ "MSJ Speech and Debate" +  "</b>" + "<br/>" + "MSJ Speech and Debate offers students an opportunity to improve their public speaking and critical thinking while bringing these skills to high-level competitions across the country. We meet weekly both at lunch and after school and are excited for this season!",
//Decription : ''
Criteria : [ 0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
};
var Computing = {
Name :  "<b>"+ "High Performace Computing" +  "</b>" + "<br/>" + "Hey everyone! MSJ High Performance Computing Club is a place where students can learn about advanced cs concepts!  Our club's goal to educate students about the basics of quantum computing, the current developments in the field, and possible applications. We hope to introduce this topic to students through our lectures and discussions, hands on activities using IBM's web-based quantum computing platform, and guest speaker events. Our club is open to students of all grades and experience levels, and we hold meetings every Tuesday at lunch in P22! See you there!  ",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,3,0,0,0,0],
};
var Neuro = {
Name :  "<b>"+ "MSJ Neuroscience" +  "</b>" + "<br/>" + "MSJ Neuroscience aims to provide students an opportunity to explore and gain a deeper understanding of the flourishing field of neuroscience. In monthly meetings, MSJ Neuroscience explores various fascinating topics in the brain sciences through interactive lectures and discussions with club members. Club activities also include presentations from students on their research, professional guest speaker lectures, preparation for external competitions such as the regional Brain Bee, and intramural competitions. Additionally, MSJ Neuroscience organizes joint events and fundraisers with community organizations related to neuroscience as well as other healthcare related clubs on campus.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,0,4,3,0,0,0,0,0,0,0,0],
};
var Dc = {
Name :  "<b>"+ "Mission D.C." +  "</b>" + "<br/>" + "Mission D.C. is MSJ's diabolo club! Many people don't know what diabolo is, which is why Mission D.C. is around. Diabolo is also known as Chinese yoyo, and is a modernized version of the traditional Chinese children's toy. Diabolo can be played by one person or multiple people at once. It helps improve balance and hand-eye coordination. We participate in events year round in and out of school such as MSJ's multicultural week fundraiser as well as the annual Fremont 4th of July parade. Come hang out with us at the amp on Fridays during lunch!",
//Decription : ''
Criteria : [ 0,0,0,0,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var DreamCatchers = {
Name :  "<b>"+ "MSJ DreamCatchers" +  "</b>" + "<br/>" + "MSJ DreamCatchers serves to fulfill the final Dreams of hospice patients. Students at MSJ will work with their local hospice to successfully bridge generational gaps. We strive to make an impact on their lives and create new experiences.",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Rare = {
Name :  "<b>"+ "Students for Rare Diseases" +  "</b>" + "<br/>" + "MSJ Students for Rare is a club, affiliated with the National organization for Rare Disorders, dedicated to promote rare disorder awareness and education on campus, raise money to fund for people affected by the disorders, and promote awareness of ways to support NORD advocacy and educational initiatives on behalf of patients.",
//Decription : ''
Criteria : [ 0,3,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0],
};
var Cancer = {
Name :  "<b>"+ "MSJ Cancer Coalition" +  "</b>" + "<br/>" + "A club about cancer research and community service",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0],
};
var Impromptu = {
Name :  "<b>"+ "MSJ Impromptu" +  "</b>" + "<br/>" + "Impromptu is a club that uses music to serve the community. Members performing on a variety of different instruments or voice volunteer their talents to the local area during student-arranged performances. As club members, you receive volunteer hours for each performance you participate in.",
//Decription : ''
Criteria : [ 3,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0],
};
var Inv = {
Name :  "<b>"+ "MSJ Investment Club" +  "</b>" + "<br/>" + "MSJ Investment Club focuses on educating the student body about the stock market, stock investing, impact investing, and financial planning. The club also partners with the Fremont Family Resource Center to provide volunteer opportunities as well as promote financial literacy in the Fremont community. The club also participates in virtual stock portfolio simulators. ",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0],
};
var Green = {
Name :  "<b>"+ "Green Club" +  "</b>" + "<br/>" + "Green Club aims to raise the community’s awareness about being environmentally friendly by finding cleaner ways to live. By working closely with other environmental clubs and with the district, Green Club strives to make Fremont, as a whole, a greener city. Currently, among other things, we are working on building a self sustainable garden located near E wing and continuing to oversee the new green bins on the school’s campus. By educating students through presentations about environmental issues and innovations at our meetings, Green Club is continuously striving to create a greener school and planet.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],
};
var Redcross = {
Name :  "<b>"+ "MSJ American Red Cross" +  "</b>" + "<br/>" + "MSJ American Red Cross is a humanitarian service club dedicated to helping people around the world that need aid in times of crisis. We help those in need through service events and raise awareness through health seminars. We offer community service hours to our members and multiple ways to get connected to our local Red Cross chapter. ",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Japan = {
Name :  "<b>"+ "Mission Japan" +  "</b>" + "<br/>" + "Mission Japan is a club dedicated to teaching Japanese celebrations and culture. We hold bimonthly meetings educating members about the events and traditions and try to recreate that here at MSJ! We also offer a chance for members to take part in competitions ranging for those familiar with the language to those who like art. Join us for exciting activities, snacks, and much more! ",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Live = {
Name :  "<b>"+ "LIVERight" +  "</b>" + "<br/>" + "LIVERight is a high school chapter of Team HBV, the outreach branch of Stanford’s Asian Liver Center. LIVERight is dedicated to raising awareness about hepatitis B, a disease that disproportionately affects Asians and Pacific Islanders worldwide. Our club offers community service hours as well as opportunities with the Stanford Asian Liver Center to members. We also hold our own events to promote awareness, such as screenings and booths at festivals including Chinese New Year Festivals in San Francisco.",
//Decription : ''
Criteria : [ 3,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0],
};
var Mock = {
Name :  "<b>"+ "MSJ Mock Trial" +  "</b>" + "<br/>" + "MSJ Mock Trial competes in the annual Alameda County Mock Trial Competition, where we argue a case against teams from other schools. We receive a new case every year and students use their critical thinking and speaking skills to develop the case and present their arguments. Participants are able to learn more about the inner workings of the justice system and throughout the year, they develop their public speaking and analytic skills. ",
//Decription : ''
Criteria : [ 0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
};
var Cfs = {
Name :  "<b>"+ "MSJ CSF - California Scholarship Federation" +  "</b>" + "<br/>" + "California Scholarship Federation is a nationally recognized academic club that emphasizes community service and volunteer work. The CSF branch at Mission San Jose High School works to recognize the exceptional students on campus. In addition, MSJ CSF introduces students to personalized scholarships and service events.",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Wish = {
Name :  "<b>"+ "MSJ Make-A-Wish Club" +  "</b>" + "<br/>" + "MSJ Make-A-Wish Club supports the Make-a-Wish Foundation, a national foundation that raises money to grant wishes to children with life-threatening medical conditions. Since 1980, the Make-A-Wish Foundation® has enriched the lives of these children through its wish-granting work. We believe that life can be measured by memories, not in years. Our club will arrange monthly meetings where we’ll brainstorm fundraising ideas, arrange trips to interact with wish grantees, and discuss methods to aid children with terminal diseases. Come join us as we celebrate the power of a wish!",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0],
};
var Mentors = {
Name :  "<b>"+ "Young Mentors" +  "</b>" + "<br/>" + "MSJ Young Mentors is a club dedicated to helping low-income elementary to middle school students throughout the Bay Area who need help in their school subjects but can't afford to pay for tutoring services. We have opportunities to earn service hours, awards, participate in events, and more!",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],
};
var Biotech = {
Name :  "<b>"+ "MSJ Biotechnology Club" +  "</b>" + "<br/>" + "MSJ Biotechnology club is a student organization for students interested in careers in the STEM field. We explore the link between healthcare and technology through lab work and research experiments. We listen to guest speakers talk about careers in this field, discuss journal articles, and participate in local STEM focused events. Whether you’re interested in medicine, robotics, or research, MSJ Biotechnology Club will help enrich your understanding in this vast field. We meet during lunch on Thursdays in room C11. Hope to see you there! ",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0],
};
var Drone = {
Name :  "<b>"+ "MSJ Drone Club" +  "</b>" + "<br/>" + "MSJ Drone Club is an organization dedicated to providing a central resource for unmanned aerial vehicle development and flight at Mission San Jose High School. We produce aerial photography and video content, basic software, and even race our drones. Whether you are passionate about flying drones in your backyard, taking stellar pictures with your friends, or becoming a professional drone pilot MSJ Drone Club is perfect for you. When you fly with us, the sky is the limit!",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,4,3,0,0,0,0,0,0,0,0,0],
};
var Ac = {
Name :  "<b>"+ "MSJ Academic Challenge" +  "</b>" + "<br/>" + "Affectionately dubbed Academically Challenged by its members, MSJ Academic Challenge is a club that organizes students to participate in various academic competitions. Students compete in Science Olympiad, Science Bowl, Quiz Bowl, and Ocean Science Bowl at the regional, state, and national levels. Our goal is to encourage the study of science, engineering, math, and the humanities, and create a tightly knit community of students that will lead MSJ to success at our competitions.	",
//Decription : ''
Criteria : [ 0,0,0,4,0,0,0,0,0,0,4,0,3,0,0,0,0,0,0,0,0],
};
var Cubing = {
Name :  "<b>"+ "MSJ Cubing Challenge Club" +  "</b>" + "<br/>" + "MSJ Cubing Challenge Club welcomes cubes, people who solve Rubik's Cubes and related puzzles, to discuss cubing techniques, learn about competitions, and compete with each other. This challenges and improves spatial awareness which is the ability to comprehend three-dimensional images and shapes. Its goal is to build a community of cubers who cna learn and grow from each other through this hobby.",
//Decription : ''
Criteria : [ 0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Esports = {
Name :  "<b>"+ "MSJ Esports" +  "</b>" + "<br/>" + "Our mission at MSJ Esports is not only to unite people who share a love of video gaming, but also to develop a lasting community of those people—a community that will teach each other and help one another grow to their fullest potential. Similar to traditional sports, esports helps develop essential qualities such as teamwork, perseverance, and decision making, and we seek to use video games to bring out the best in people. Participate in tournaments and game nights while making new friends along the way! ",
//Decription : ''
Criteria : [ 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0],
};
var Rocketry = {
Name :  "<b>"+ "Mission San Jose Rocketry" +  "</b>" + "<br/>" + "MSJ Rocketry is our high school's only club that combines theoretical science with applied engineering! We participate annually in The American Rocketry Challenge (TARC), a nationwide competition that challenges students to build model rockets from scratch and launch them to reach certain altitudes in a strict amount of time. The top 100 teams in the Nation qualify for Nationals in Washington DC. From technical knowledge required for computer 3D modeling, to developing the skills to cut, sand, and assemble rockets, this club has a place for every rising STEM student. Email us at msjtarc@gmail.com or visit our Facebook page @msjtarc.",
//Decription : ''
Criteria : [ 0,0,0,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0],
};
var Irc = {
Name :  "<b>"+ "MSJ IRC" +  "</b>" + "<br/>" + "MMSJ IRC, the International Rescue Committee, is a club that aids families who have undergone natural disasters. Our mission through IRC is to provide kids with the gift of education. Since we ourselves have been so lucky to be provided with one, we plan to use the resources we have to give it back. We plan to hold donation drives, fundraisers, and other events to raise money and supplies for those children. To give the students of MSJ hands-on activities, we have talked to Michelle Borrego, an advisor at IRC San Jose, who will provide students with volunteer opportunities.",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Lgbtq = {
Name :  "<b>"+ "MSJ Gay-Straight Alliance (MSJ GSA)" +  "</b>" + "<br/>" + "GSA is a club made to reach out to the LGBTQ+ youth and allies at Mission. Our goal is to raise awareness of queer topics, and to educate our peers about queer identity, issues, and history. This club is a great place to learn about and discuss the complexities of sexuality and gender identity. We provide a safe space for everyone to openly express their love and most authentic self.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0],
};
var Cryptography = {
Name :  "<b>"+ "MSJ Cryptography Club" +  "</b>" + "<br/>" + "The purpose of this club is to promote participation in and knowledge of cryptography and steganography. We teach members about the techniques behind concealing information as well as the rich history of cryptography. No previous experience is required; all students of Mission San Jose High School are welcome.",
//Decription : ''
Criteria : [ 0,0,0,0,4,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],
};
var Csc = {
Name :  "<b>"+ "MSJ Computer Science Club" +  "</b>" + "<br/>" + "MSJ Computer Science Club is a club dedicated to promoting an interest in all areas of computer science. Join us on Fridays in C16 for weekly lectures on a variety of topics ranging from theoretical algorithms to real-world applications. Also look forward to monthly competitions, guest speakers, workshops, and hackathons and more! No experience is required to join.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,0,0,5,4,0,0,0,0,0,0,0,0,0],
};
var Exit = {
Name :  "<b>"+ "MSJ Exit Zine" +  "</b>" + "<br/>" + "Exit Zine strives to promote involvement in intersectional feminism through events, guest speakers, and our yearly magazine. Throughout the year, we work towards publishing a magazine containing writing pieces that center around a theme related to feminism.",
//Decription : ''
Criteria : [ 0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Nahs = {
Name :  "<b>"+ "National Art Honors Society" +  "</b>" + "<br/>" + "NAHS is a club where students explore their interests in art. Being the only art club on campus, during our meetings we work on club and personal projects, engage in workshops exploring different mediums, and collaborate in different art events. Club projects include murals for school, participation in the trashy fashion show, art exhibitions, and smaller fun crafts. Join us every Thursday at lunch in E3 for our weekly meetings.",
//Decription : ''
Criteria : [ 0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Vams = {
Name :  "<b>"+ "VAMS (Visual Arts and Music for Society)" +  "</b>" + "<br/>" + "VAMS (Visual Arts & Music for Society) is dedicated to improving our community through the arts. Our past events include painting traffic control boxes, crafting appreciation cards, and holding senior center and benefit concerts. We provide a platform for students to express their creativity while bringing joy to others.",
//Decription : ''
Criteria : [ 0,0,4,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0],
};
var Knit = {
Name :  "<b>"+ "MSJ iKnit" +  "</b>" + "<br/>" + "Reducing stress, gaining a rewarding hobby, and serving the community? These all come to one at MSJ iKnit, MSJ's knitting and crocheting club. iKnit is a welcoming community for people to discover and share their passion for knitting. We donate our lovingly handcrafted items to cancer patients, the homeless, and others in need such as those affected by the Australian bushfires. Join our Facebook group to stay updated on club events and service projects!",
//Decription : ''
Criteria : [ 4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var Film = {
Name :  "<b>"+ "MSJ Film and Production Club" +  "</b>" + "<br/>" + "MSJ F&P Club aims to provide resources to help students interested in film, Create projects and works that encourage a positive school environment, and create an outlet for those interested in film and production. Our club mainly does commissions as well as event promotions. Sometimes we also take on personal projects.",
//Decription : ''
Criteria : [ 0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],
};
var Paws = {
Name :  "<b>"+ "MSJ PAWS" +  "</b>" + "<br/>" + "MSJ PAWS (Pets, Animals, and Wildlife Services) is a club that aims to raise awareness on issues concerning animal welfare, unite students who may be looking into majoring in animal or environmental sciences, and provide service opportunities through events such as volunteering at and fundraising for animal shelters. We hope to bring together animal lovers of all sorts at MSJ!",
//Decription : ''
Criteria : [ 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],
};
var interests = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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

/*	var ClubInfoList = [ SpeechClub, DanceClub, RoboticsClub, BioClub, PicClub, ServiceClub, SpanishClub, MagClub, GreenClub, NAHSClub,VAMSClub,HungerClub,VRClub];*/
	var ClubInfoList = [Interact, Hunger, Specialneeds, Phoenix, Historyclub, Universal, Ted, Spanish, Photo, Food, Block, Speech, Computing, Neuro, Dc, DreamCatchers, Rare, Cancer, Impromptu, Inv, Green, Redcross, Japan, Live, Mock, Cfs, Wish, Mentors, Biotech, Drone, Ac, Cubing, Esports, Rocketry, Irc, Lgbtq, Cryptography, Csc, Exit, Nahs, Vams, Knit, Film, Paws];
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
	    //alert(ClubName);
	    //alert(ClubCriteria);
		//	alert(interests);

	//  if interest elem value >= crtieria elem value for all elems in interest array
	    var clubMatch = true;
	    for (var j=0; j<interests.length; j++) {
	       // alert(j);
	       // alert(interests[j]);
	        //alert(ClubCriteria[j]);
	        if (interests[j] < ClubCriteria[j]) {
	            clubMatch = false;
	           // alert("false");
						//	alert(j);
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
