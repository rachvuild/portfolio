<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$pseodo=$_POST["pseodo"];
$password=$_POST["password"];
$nom_client=$_POST["nom_client"];
$prenom_client=$_POST["prenom_client"];
$mail_client=$_POST["mail_client"];
$telephone_client=$_POST["telephone_client"];
$num_client=$_POST["num_client"];
$action_client=$_POST["action_client"];




switch ($action_client)
{
    
    case "a_client" : 
        $creation_client=$pdo->exec("INSERT INTO `client`(`Num_client`, `pseudo_client`, `mdp_client`, `Nom_client`, `prenom_client`, `email_client`, `tel_client`) VALUES (null,'$pseodo','$password','$nom_client','$prenom_client','$mail_client','$telephone_client')");
      
       
      
        break;

    case "m_client" : 
        $req="UPDATE client set ";
    if (!empty ($pseodo))
    {$req=$req. "pseudo_client= '".$pseodo. "',";}
    if (!empty ($password))
    {$req=$req. "mdp_client= '".$password. "',";}
    if (!empty ($nom_client))
    {$req=$req. "Nom_client= '".$nom_client. "',";}
    if (!empty ($prenom_client))
    {$req=$req. "prenom_client= '".$prenom_client. "' ";} 
    if (!empty ($mail_client))
    {$req=$req. "email_client= '".$mail_client. "' ";} 
    if (!empty ($telephone_client))
    {$req=$req. "tel_client= '".$telephone_client. "' ";} 
    if (!empty ($num_client))
    {$req=$req. "WHERE Num_client= '".$num_client. "',";} 
    $req=substr($req,0,-1);
   
        $req=$pdo->prepare($req); 
      $req->execute();
        break;
    case "s_client" : $suprimer=$pdo->prepare("DELETE FROM client WHERE Num_client='$num_client'") ;
    $suprimer->execute();

   break;
       
}     
echo ('<html>
  
<link rel="stylesheet" href="../../css/connexion.css">
<body>
<section class="headers">

  <div class=" headers">
    <div class="heads">
      <a class="button" href="../admin.html">espace admin</a>
  <h1>chalalaland</h1>
  </div>
  <div class="heade">
   
    <a class="button" href="connexion/connexion_client.html">se connecter</a>
    <a class="button" href="formulaire/formulaire_client.html">sinscrire</a>
   
  </div>
  </div>
</section>

<section class="ima">
  <a class="im" href="formulaire_client.html"><img class="im" src="../../img/client.webp"> </a>
  <a class="im" href="formulaire_chat.html"><img class="im" src="../../img/chat.png"></a>
  <a class="im" href="formulaire_refuge.html"><img class="im" src="../../img/refuge.webp"></a>
</section>
<section class="footer">
  <div>
    <ul>
      <li><a href="../gauche.html">menu Principal</a></li>
      <li ><a href="../liste.html">blog</a></li>
      <li><a href="formulaire_chat.html">chat</a></li>
      <li ><a href="formulaire_refuge.html">refuge</a></li>
  </ul>
  </div>
  
  <div>
   <a href="https://www.facebook.com/"><img class="logo" src="../../img/logo-facebook.svg" alt=""></a> 
   <a href="https://www.instagram.com/"><img class="logo" src="../../img/logo-instagram.svg" alt=""></a> 
   <a href="formulaire_client.html"> <img class="logo" src="../../img/person-add-outline.svg" alt=""></span></a> 
   <a href="../connexion/connexion_client.html"> <img class="logo" src="../../img/person-outline.svg" alt=""></span></a> 
  
  </div>
  </section>
</body>
</html>');

?>