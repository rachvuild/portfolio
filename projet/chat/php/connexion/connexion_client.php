<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}


$password=$_POST["password"];
$telephone_client=$_POST["telephone_client"];    


$connexion_client="SELECT * FROM `client` WHERE tel_client='$telephone_client' AND mdp_client='$password'";
$connexion_client=$pdo->prepare($connexion_client);

if ($connexion_client->execute( ))


{
($data=$connexion_client->fetch());
  if (!empty($data))
   { 
  echo '<html>
  <head>
    <link rel="stylesheet" href="connexion.css">
  
  </head>
  
  <body>
    
      <section class="header">
    
        <div class=" ">
          <div class="heads">
        <h1>le  client</h1>
        </div>
        <div class="head">
         
          <a class="button" href="formulaire_client.html">sinscrire</a>
    
        </div>
        </div>
      </section>
  <section class="wrapper">
    
      <div class="one">Un</div>
      <div class="two">
        <h1>optiton adopter le chat</h1>
      </div>
      <div class="three">Trois</div>
  
  </section>
  
  </body>
  
  </html>';
   }

else // ($req->execute())
{
  echo '<html>
<head>
  <link rel="stylesheet" href="connexion.css">
  
</head>

    <body>
  
    <section class="headers">
  
      <div class=" headers">
        <div class="heads">
      <h1>le chat</h1>
      </div>
      <div class="heade">
       
        <a class="button" href="connexion_client.php">sinscrire</a>
  
      </div>
      </div>
    </section>
<section class="heads">
  <div class="back">
  <div class="heads question">
    
  <form method=POST action="connexion_client.php">
    <label for="telephone_client">Entrez un numero de telephone</label>
    <input type="text" name="telephone_client" id="telephone_client"><br><br>
  <label for="password">Entrez un mot de passe (8 a 16 caractaire)</label>
  <input type="password" name="password" required
  minlength="8" maxlength="16" id="password"><br><p style="color:rgb(255,0,0);">mot de passe incorect</p><br>
  <input class="buttone"  type="submit" value="envoyer">
</form>
</div>
</div>
</section>';
}
}
?>
