<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
      
}

$nom_refuge=$_POST["nom_refuge"];
$adresse_refuge=$_POST["adresse_refuge"];
$cp_refuge=$_POST["cp_refuge"];
$numero_refuge=$_POST["numero_refuge"];
$mail_refuge=$_POST["mail_refuge"];
$num_refuge=$_POST["num_refuge"];
$action_refuge=$_POST["action_refuge"];

echo $nom_refuge.",".$adresse_refuge.",".$cp_refuge.",".$numero_refuge.",".$mail_refuge;

switch ($action_refuge)
{
    
    case "a_refuge" : 
        $creation_refuge=$pdo->exec("INSERT INTO refuge  VALUES (null,'$nom_refuge','$adresse_refuge','$cp_refuge','$numero_refuge','$mail_refuge',null)");
      
  
       
        break;

    case "m_refuge" : 
        $req="UPDATE refuge set ";
    if (!empty ($nom_refuge))
    {$req=$req. "Nom_refuge= '".$nom_refuge. "',";}
    if (!empty ($adresse_refuge))
    {$req=$req. "adress_refuge= '".$adresse_refuge. "',";}
    if (!empty ($cp_refuge))
    {$req=$req. "cp_refuge= '".$cp_refuge. "',";}
    if (!empty ($numero_refuge))
    {$req=$req. "tel_refuge= '".$numero_refuge. "', ";}
    if (!empty ($mail_refuge))
    {$req=$req. "email_refuge= '".$mail_refuge. "' ";} 
    $req=substr($req,0,-1);   
    if (!empty ($num_refuge))
   
  
    $req=$req. " WHERE Num_refuge=".$num_refuge;
      
        $req=$pdo->prepare($req); 
      $req->execute();
        break;
    case "s_refuge" : $suprimer=$pdo->prepare("DELETE FROM refuge WHERE Num_refuge='$num_refuge'") ;
   $suprimer->execute();
    break;
       
}     

echo '<html>
  
<link rel="stylesheet" href="../../css/connexion.css">
<body>
<section class="headers">

  <div class=" headers">
    <div class="heads">
      <a class="button" href="../../page/admin.html">espace admin</a>
  <h1>chalalaland</h1>
  </div>
  <div class="heade">
   
    <a class="button" href="../../page/connexion/connexion_client.html">se connecter</a>
    <a class="button" href="../../page/formulaire/formulaire_client.html">sinscrire</a>
   
  </div>
  </div>
</section>

<section class="ima">
  <a class="im" href="../../page/formulaire/formulaire_client.html"><img class="im" src="../../img/client.webp"> </a>
  <a class="im" href="../../page/formulaire/formulaire_chat.html"><img class="im" src="../../img/chat.png"></a>
  <a class="im" href="../../page/formulaire/formulaire_refuge.html"><img class="im" src="../../img/refuge.webp"></a>
</section>
<section class="footer">
  <div>
    <ul>
      <li><a href="../../page/gauche.html">menu Principal</a></li>
      <li ><a href="../../page /liste.html">blog</a></li>
      <li><a href="../../page/formulaire/formulaire_chat.html">chat</a></li>
      <li ><a href="../../page/formulaire/formulaire_refuge.html">refuge</a></li>
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
</html>';




?>