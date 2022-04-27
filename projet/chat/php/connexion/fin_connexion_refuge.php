<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
$mdp_refuge=$_POST["mdp_refuge"];    

$connexion_refuge="SELECT * FROM `refuge` WHERE mdp_client='$password'";
$connexion_refuge=$pdo->prepare($connexion_refuge);

if ($connexion_refuge->execute( ))


{
($data=$connexion_refuge->fetch());
  if (!empty($data))
   { 
  echo '<html>
  <head>
    <link rel="stylesheet" href="../../css/connexion.css">
  
  </head>
  
  <body>
    
      <section class="header">
    
        <div class=" ">
          <div class="heads">
        <h1>le  refuge</h1>
        </div>
        <div class="head">
         
          <a class="button" href="../../page/formulaire/formulaire_chat.html">inscrire des caht</a>
    
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
    
  <form method=POST action="fin_connexion_refuge.php">
  <label for="mdp_refuge">Entrez votre mot de passe</label>
  <input type="text" name="mdp_refuge" id="mdp_refuge"><br><br>
<input class="buttone"  type="submit" value="envoyer"><br><p style="color:rgb(255,0,0);">mot de passe incorect</p><br>
  <input class="buttone"  type="submit" value="envoyer">
</form>
</div>
</div>
</section>';
}
}
?>
