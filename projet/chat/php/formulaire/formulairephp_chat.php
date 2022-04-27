<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
 echo ("Connexion réussi</br>");

$nom_chat=$_POST["nom_chat"];
$prenom_chat=$_POST["prenom_chat"];
$naissence_chat=$_POST["naissence_chat"];
$race=$_POST["race"];
$action_chat = $_POST["action_chat"];


switch ($action_chat)
{
    
    case "a_chat" : 
        
        $creation_chat="INSERT INTO chat (num_chat,Nom_chat, prenom_chat, datenaissance_chat, race) VALUES (null,'$nom_chat','$prenom_chat','$naissence_chat','$race')";
        echo $creation_chat;
        $creation_chat=$pdo->prepare($creation_chat);
       $creation_chat->execute();
        
        break;

    case "m_chat" : 
        $num_chat=$_POST["num_chat"];
        
        $req="UPDATE chat set ";
    if (!empty ($nom_chat))
    {$req=$req. "nom_chat= '".$nom_chat. "',";}
    if (!empty ($prenom_chat))
    {$req=$req. "prenom_chat= '".$prenom_chat. "',";}
    if (!empty ($naissence_chat))
    {$req=$req. "Datenaissance_chat= '".$naissence_chat. "',";}
    if (!empty ($race))
    {$req=$req. "race= '".$race. "' ";} 
    if (!empty ($num_chat))
    {$req=$req. "WHERE num_chat= '".$num_chat. "',";} 
    $req=substr($req,0,-1);
 
        $req=$pdo->prepare($req); 
       
        break;
    case "s_chat" : $suprimer=$pdo->prepare("DELETE FROM chat WHERE num_chat='$num_chat'") ;
    $num_chat=$_POST["num_chat"];
    
    break;
    
    case "v_chat" : 
        
        $voir=$pdo->prepare("SELECT `Num_chat`, `Nom_chat`, `prenom_chat`, `Datenaissance_chat`, `race` FROM `chat` WHERE 1");
    if ($voir->execute())
  
    
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