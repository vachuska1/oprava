// celej input
var cas = new Date()
var hodiny = cas.getHours()
var minuty = cas.getMinutes()

if (minuty < 10){
minuty = "0" + minuty
}
document.getElementById("cislo").value = hodiny + ":" + minuty;

