 <!-- Here is where all of the values for everything are made, and where
  the webpage's dropdown, inputs and words on the page -->
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>replit</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
  
</head> 

<body>
	<center>
    <header>Where Should I Vacation?</header> 
   <div class="outputBox" id="outputBox"
    <div class = "values">
  <select onchange="updatescreen()" id="vacationSpot">
    <option value="Mountains or Beach">Mountains or Beach?</option>
    <option value="Montains">Mountains</option>
    <option value="Beach">Beach</option>
  </select>

  <input oninput="updatescreen()" id="Temperature" placeholder="Temperature (F°)">

</div>

<br>
  

  <p id="feedback"> </p>
    </center>
 
    <script src="script.js"></script>
  
 
  </body>  
</html>