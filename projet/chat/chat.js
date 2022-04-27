const ajouter = document.querySelector('ajouter')
const modifier = document.querySelector('modifier')
const supr = document.querySelector('supr')
const num_chat = document.querySelector('num_chat')
console.log(supr)

ajouter.addEventListener('keyup', (ajouter) => {
num_chat.innerHTML += '<p> bonne continuation </p>'
})

modifier.addEventListener('keyup', (modifier) =>  {
num_chat.innerHTML += ' <label for="num_chat">Entrez le numero du chat </label><input type="text" name="num_chat" id="num_chat"><br><br>'
})

supr.addEventListener('keyup', (supr) => {
num_chat.innerHTML += ' <label for="num_chat">Entrez le numero du chat </label><input type="text" name="num_chat" id="num_chat"><br><br>'
})
console.log(supr)