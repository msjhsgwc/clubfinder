<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="quiz.css" href="quiz.css" type = "text/css">
  <script src="quiz.js"></script>
	<title>Find the club for you!</title>
	<!-- ANIMATE CSS -->
	<link rel="quiz.css" type="text/css" href="css/animate.css">
	<!-- FONTAWESOME -->
	<link rel="quiz.css" type="text/css" href="font-awesome-4.7.0/css/font-awesome.min.css">
	<!-- Latest compiled and minified CSS -->
	<link rel="quiz.css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<!-- Optional theme -->
	<!-- 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> -->
	<!-- GOOGLE FONT -->
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<!-- CUSTOM -->
	<link rel="quiz.css" type="text/css" href="quiz.css">
</head>
<!-- BODY -->
<body>

	<div class="container text-center">
		<h1>Find the club for you!</h1>
	</div>
	<div class="container text-center">
		<ul id="quiz" class="list-group">

		</ul>
	</div>

	<div class="container text-center hide results">
		<!-- <img src="https://raw.githubusercontent.com/danubevictoria/quiz/master/images/results1.jpg" class="results col-md-4 col-sm-4 col-xs-4"> -->
		<!-- <img src="https://raw.githubusercontent.com/danubevictoria/quiz/master/images/results2.jpg" class="results col-md-4 col-sm-4 col-xs-4"> -->
		<!-- <img src="https://raw.githubusercontent.com/danubevictoria/quiz/master/images/results3.jpg" class="results col-md-4 col-sm-4 col-xs-4"> -->
	</div>

	<!-- <div class="container progress">
		<div id="intro-bar" class="progress-bar" style="width: 15%" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
			15%
		</div>
		<div id="extro-bar" class="progress-bar bg-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
			30%
		</div>
	</div> -->

	<div class="container text-center results hide">
		<p id="results"></p>
	</div>

	<div class="container text-center bottom">
		<button id="submit-btn" class="btn btn-primary btn-lg">Submit</button>

		<button id="retake-btn" class="hide btn btn-primary btn-lg">Retake Quiz</button>
	</div>
	<!-- SCRIPTS -->

	<!-- JQUERY -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<!-- BOOTSTRAP -->
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<!-- CUSTOM -->
	<script type="quiz.js" src="js/main.js"></script>
</body>
</html>
