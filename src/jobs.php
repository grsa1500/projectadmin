<?php
session_start();
if(!isset($_SESSION['gretaloggedin'])) {
    header("Location: login.php"); 
}

if(isset($_GET['logout'])) {
    unset($_SESSION['gretaloggedin']);
    header("Location: login.php"); 
}
?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="../img/favicon.png" type="image/gif" sizes="16x16">
  <script src="https://kit.fontawesome.com/c2054d9afc.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <title>Admin</title>
</head>

<body>
   

        <!-- The Modal -->
        <div id="myModal" class="modal">
        
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <div id="innermodal"></div>
          </div>
        
        </div>
    <div class="container">
    <h1> <a href="index.php"> Kurser</a> <a href="jobs.php"> Jobb </a> <a href="project.php">Projekt</a></h1> <h2 class="right"> <a href="?logout=confirmed">Logga ut</a> </h2>
            <h2><i class="fas fa-list"></i> Jobb jag haft</h2>

            <table>
                <thead>
                    <tr>
                        <th>Jobbtitel</th>
                        <th>Arbetsplats</th>
                        <th>Datum</th>
                        <th id="remove">Ändra / Ta bort</th>
                    
                    </tr>
                    <tbody id="courseList">

                   
                            </tbody>
                </thead>
                <tbody id="coursesOutput"></tbody>
            </table>

        <section>
                <h2><i class="fa fa-pen"></i> Lägg till kurs</h2>
              
               
                <label >
                    Jobbtitel: <br>
                    <input type="text" name="title" id="title" required/>
                </label>
                 <label>
                    Arbetsplats: <br>
                    <input type="text" name="place" id="place" required/>
                </label>
           
                
                <label>
                    Startår: <br>
                    <input type="text" name="startyear" id="startyear" required/>
                </label>
               
                <label>
                    Slutår: <br>
                    <input type="text" name="endyear" id="endyear" required/>
                </label>
                
           
                <input type="submit" value="Lägg till" id="submitbutton" class="btn btn-blue">
            </section>
    
</div>
<footer>
    Webbutveckling III <br>
    Greta Samuelsson - 2019
</footer>
    <script src="js/main.js"></script>
    <script>  window.onload = loadJobList;
    document.getElementById("submitbutton").addEventListener("click", addJob);</script>
  
</body>

</html>