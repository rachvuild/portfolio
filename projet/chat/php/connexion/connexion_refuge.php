<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
$destinataire=$_POST["email_refuge"];
$nom=exec("SELECT Nom_refuge FROM `client` WHERE email_refuge='$destinataire' ");
$objet="votre code de connexion";
$code = rand(100000,500000); 

$message="cher $nom, 
veuillé trouvé si joint votre code de connexion : $code";
$entete='"mime-version:1.0".\r\n.content-type:txt/htlm;charset="utf-8"';
mail($destinataire, $objet, $message, $entete);

$conexion="INSERT INTO chat (mdp_refuge) VALUES ('$code) where email_refuge='$destinataire'";
$conexion=$pdo->prepare($conexion);


echo '<html>
<head>
  <link rel="stylesheet" href="../../css/connexion.css">
  
</head>

<body>
  
    <section class="headers">
  
      <div class=" headers">
        <div class="heads">
      <h1> connexion refuge</h1>
      </div>
      <div class="heade">
       
        <a class="button" href="../../page/formulaire/formulaire_refuge.html">sinscrire</a>
  
      </div>
      </div>
    </section>
<section class="heads">
  <div class="back">
  <div class="heads question">
    
  <form method=POST action="fin_connexion_refuge.php">
    <label for="mdp_refuge">Entrez votre mot de passe</label>
    <input type="text" name="mdp_refuge" id="mdp_refuge"><br><br>
  <input class="buttone"  type="submit" value="envoyer">
</form>
</div>
</div>
</section>
<section class="footer">
  <div>
    <ul>
      <li><a href="../../page/gauche.html">menu Principal</a></li>
      <li><a href="../../page/liste.html">blog</a></li>
      <li><a href="../../page/formulaire/formulaire_chat.html">chat</a></li>
      <li><a href="../../page/formulaire/formulaire_refuge.html">refuge</a></li>
  </ul>
  </div>
  
  <div>
   <a href="https://www.facebook.com/"><img class="logo" src="../../img/logo-facebook.svg" alt=""></a> 
   <a href="https://www.instagram.com/"><img class="logo" src="../../img/logo-instagram.svg" alt=""></a> 
   <a href="../../page/formulaire/formulaire_refuge.html"> <img class="logo" src="../../img/person-add-outline.svg" alt=""></span></a> 
   <a href="../../page/connexion/connexion_refuge.html"> <img class="logo" src="../../img/person-outline.svg" alt=""></span></a> 
  
  </div>
  </section>
</body>



</html>';
sleep(10);
$suprimer=$pdo->prepare("DELETE FROM chat WHERE mdp_refuge='$code'");
?>
