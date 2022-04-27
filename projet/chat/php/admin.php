<?php
    $requete=$_POST['action_profil'];

    try
    {
        $pdo = new PDO('mysql:host=localhost;dbname=chat;charset=utf8', 'root', '');
    }
    catch (Exception $e)
    {
            die('Erreur : ' . $e->getMessage());
    }
   

    $req = $pdo->prepare("select * from ".$requete);
    if ($req->execute())
    {
        

    echo "<head>
    <link rel='stylesheet' href='../css/connexion.css'>
  </head><body>
  <section class='headers'>
  
  <div class=' headers'>
    <div class='heads'>
     
      <h1>$requete</h1>
  </div>
  <div class='heade'>
   
    <a class='button' href='../page/connextion/connexion_client.html'>se connecter</a>
    <a class='button' href='../page/formulaire/formulaire_client.html'>sinscrire</a>
   
  </div>
  </div>
</section>
  <table>";
    foreach ($pdo->query("select * from ".$requete) as $ligne)
    {
        echo"<tr>";
        for ($i=0; $i<$req->columncount()-1;$i++)
        {
            echo "<td>".$ligne[$i]."</td>";
        }
        echo"</tr>";
        
    }
    echo"</table> <br><br></body>";
    echo "le nombre de colones retournées est = ".$req->columnCount();
        echo "le nombre de lignes retournées est = ".$req->rowCount();
}
?> 