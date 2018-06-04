<?php
	$presentationKey = '1AOT3pRaYJtiKJ2yamnPSObWjWypJt7y9-o_vhUJ3BJw';
	if(isset($_GET['key'])) $presentationKey = $_GET['key'];
?>
<html>
<head>
	<title>Timer App</title>
	<link rel="stylesheet" type="text/css" href="styles.css?v0.2">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
	<div class="container-fluid">
	  	<div id="mainscreen" class="row">
			<div class="col-xs-4">
				<h2 id="screen-message"></h2>
				<h1 id="time" class="text-center clock-timer">00:00</h1>
				<div id="inputArea">
					<input type="number" id="minutes" class="input-lg" placeholder="ENTER MINUTES ONLY" value="0">
					<button type="button" id ="pauseBtn" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-pause"></button>
					<button type="button" id ="playBtn" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-play"></button>
					<button type="button" id ="refreshBtn" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-refresh"></button>
				</div><!--/#resumeArea-->
				<div id="logoArea">
	  				<img src="http://assets.breatheco.de/img/4geeks-logo-black.png">
	  				<p id="music-icon" data-toggle="tooltip" data-placement="bottom" title="No song loaded..."><span class="glyphicon glyphicon-music"></span></p>
				</div><!--/#resumeArea-->
			</div>
			<div class="col-xs-8">
				<div id="standalone-container">
					<iframe src="https://docs.google.com/presentation/d/<?php echo $presentationKey; ?>/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script type="text/javascript" src="script.js?v0.1"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			classroom.initialize();
		});
	</script>
</body>
</html>