//----------------------------------------------------------------------------------------------------------------------
const pol = document.querySelector(".refuge");
const refuge = document.querySelector("#refuge");
const rhtml = document.querySelector("#rhtml");
const rphp = document.querySelector("#rphp");
const frefuge = document.querySelector("#frefuge");

pol.addEventListener("click", () => {
refuge.classList.toggle("opacity_1");
rhtml.classList.toggle("opacity_1");
rphp.classList.toggle("opacity_1");
frefuge.classList.toggle("opacity_1");
console.log(rhtml,refuge,frefuge,rphp);

});
console.log(pol);
//----------------------------------------------------------------------------------------------------------------------
const connexionR = document.querySelector(".connexion_r");
const crefuge = document.querySelector("#crefuge");
const connexion_r = document.querySelector("#connexion_r");
const cr_html = document.querySelector("#cr_html");
const cr_php = document.querySelector("#cr_php");

connexionR .addEventListener("click", () => {
crefuge.classList.toggle("opacity_1");
connexion_r.classList.toggle("opacity_1");
cr_html.classList.toggle("opacity_1");
cr_php.classList.toggle("opacity_1");


});
console.log(connexionR);




//----------------------------------------------------------------------------------------------------------------------
const list = document.querySelector(".list");
const rlist = document.querySelector("#rlist");
const rrlist = document.querySelector("#rrlist");
const l_html = document.querySelector("#l_html");


list.addEventListener("click", () => {
rlist.classList.toggle("opacity_1");
rrlist.classList.toggle("opacity_1");
l_html.classList.toggle("opacity_1");


});
console.log(list);
//----------------------------------------------------------------------------------------------------------------------
const sql = document.querySelector(".sql");
const rsql = document.querySelector("#rsql");
const rrsql = document.querySelector("#rrsql");


sql.addEventListener("click", () => {
rsql.classList.toggle("opacity_1");
rrsql.classList.toggle("opacity_1");



});
console.log(sql);
//----------------------------------------------------------------------------------------------------------------------