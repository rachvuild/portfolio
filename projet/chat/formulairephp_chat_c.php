<?php



$action_chat = $_POST["action_chat"];


switch ($action_chat)
{
    
    case "a_chat" : 
        echo ('<html >
        <head>
        
          <link rel="stylesheet" href="stylecsschat.css">
         
          <script src="chat.js" defer></script>
        
        <h1 clss="text-lg"> Le petit formulaire chat</h1>
          <img src="../img/formu.jpg"><br><br>
             
        </head>
        
        <body>
        
          <form method="POST" action="formulairephp_chat.php">
            
          <label for="nom_chat">Entrez un nom</label>
          <input type="text" name="nom_chat" id="nom_chat"><br><br>
          <label for="prenom_chat">Entrez un prennom</label>
          <input type="text" name="prenom_chat" id="prenom_chat"><br><br>
          <label for="naissence_chat">Entrez un date de naissence </label>
          <input type="date" name="naissence_chat" id="naissence_chat"><br><br>
          <label for="race">Entrez sa race</label>
          <input type="text" name="race" id="race"><br><br>
          
          <label for="action_chat">Entrez sa ajouter/ modifier?</label>
          <select name="action_chat" id="action_chate" required>
            <option class="num_chat" value="" disabled selected hidden>Choisissez laction</option>
            <option class="ajouter" value="a_chat">ajouter</option>
            <option class="modifier" value="m_chat">modifier</option>
            <option class="supr" value="s_chat">suprimer</option>
            <option class="voir" value="v_chat">voir tous les chat</option>
          <div class="num_chat" ></div>
         </select><br><br>
         <input  type="submit" for="chaton" value="envoyer" s></a><br><br>
           </form>
           <a href="gauche.html">menu Principal</a>
        </body>
          </html>
         ');
       
       
        
        break;

    case "m_chat" : 
        echo ('<html >
        <head>
        
          <link rel="stylesheet" href="stylecsschat.css">
         
          <script src="chat.js" defer></script>
        
        <h1 clss="text-lg"> Le petit formulaire chat</h1>
          <img src="../img/formu.jpg"><br><br>
             
        </head>
        
        <body>
        
          <form method="POST" action="formulairephp_chat.php">
            
          <label for="nom_chat">Entrez un nom</label>
          <input type="text" name="nom_chat" id="nom_chat"><br><br>
          <label for="prenom_chat">Entrez un prennom</label>
          <input type="text" name="prenom_chat" id="prenom_chat"><br><br>
          <label for="naissence_chat">Entrez un date de naissence </label>
          <input type="date" name="naissence_chat" id="naissence_chat"><br><br>
          <label for="race">Entrez sa race</label>
          <input type="text" name="race" id="race"><br><br>
        
          <label for="num_chat">Entrez le numero du chat </label>
          <input type="text" name="num_chat" id="num_chat"><br><br>
          
          <label for="action_chat">Entrez sa ajouter/ modifier?</label>
          <select name="action_chat" id="action_chate" required>
            <option class="num_chat" value="" disabled selected hidden>Choisissez laction</option>
            <option class="ajouter" value="a_chat">ajouter</option>
            <option class="modifier" value="m_chat">modifier</option>
            <option class="supr" value="s_chat">suprimer</option>
            <option class="voir" value="v_chat">voir tous les chat</option>
          <div class="num_chat" ></div>
         </select><br><br>
         <input  type="submit" for="chaton" value="envoyer" s></a><br><br>
           </form>
           <a href="gauche.html">menu Principal</a>
        </body>
          </html>
         ');
  
        break;
    case "s_chat" : 
    echo ('<html >
        <head>
        
          <link rel="stylesheet" href="stylecsschat.css">
         
          <script src="chat.js" defer></script>
        
        <h1 clss="text-lg"> Le petit formulaire chat</h1>
          <img src="../img/formu.jpg"><br><br>
             
        </head>
        
        <body>
        
          <form method="POST" action="formulairephp_chat.php">
            
          <label for="nom_chat">Entrez un nom</label>
          <input type="text" name="nom_chat" id="nom_chat"><br><br>
          <label for="prenom_chat">Entrez un prennom</label>
          <input type="text" name="prenom_chat" id="prenom_chat"><br><br>
          <label for="naissence_chat">Entrez un date de naissence </label>
          <input type="date" name="naissence_chat" id="naissence_chat"><br><br>
          <label for="race">Entrez sa race</label>
          <input type="text" name="race" id="race"><br><br>
        
          <label for="num_chat">Entrez le numero du chat </label>
          <input type="text" name="num_chat" id="num_chat"><br><br>
          
          <label for="action_chat">Entrez sa ajouter/ modifier?</label>
          <select name="action_chat" id="action_chate" required>
            <option class="num_chat" value="" disabled selected hidden>Choisissez laction</option>
            <option class="ajouter" value="a_chat">ajouter</option>
            <option class="modifier" value="m_chat">modifier</option>
            <option class="supr" value="s_chat">suprimer</option>
            <option class="voir" value="v_chat">voir tous les chat</option>
          <div class="num_chat" ></div>
         </select><br><br>
         <input  type="submit" for="chaton" value="envoyer" s></a><br><br>
           </form>
           <a href="gauche.html">menu Principal</a>
        </body>
          </html>
         ');
    break;
    
   
   
}     


?>