<?php
 session_start();
if(isset($_SESSION['gretaloggedin'])) {
    header("Location: index.php"); 
}





if(isset($_POST['submit'])) {

    $username = $_POST['name'];
    $password = $_POST['school'];

    if(($username == 'username') && ($password == 'password')) {
       
        $_SESSION['gretaloggedin'] = 'confirmed';
        header("Location: index.php"); 
                 
        

    }

    else {
        
    }
    
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
   

       
    <div class="container login">
         

        <section>
                <h2><i class="fas fa-lock"></i> Logga in</h2>
              
               <form method="post">
                  
                <label >
                    Användarnamn: <br>
                    <input type="text" name="name" id="name" required/>
                </label>
                  <label>
                   Lösenord: <br>
                    <input type="password" name="school" id="school" required/>
                </label>
           
           
                <input type="submit" value="Logga in" id="submit" name="submit" class="btn btn-blue"></form>
            </section>
    
</div>
<footer>
    Webbutveckling III <br>
    Greta Samuelsson - 2019
</footer>

  
</body>

</html>