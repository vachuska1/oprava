// tohle ti zatim zakomentuju a ukazu ti jak by se to mohlo napsat


// celej input
// var cas = new Date()
// var hodiny = cas.getHours()
// var minuty = cas.getMinutes()
//
// if (minuty < 10){
// minuty = "0" + minuty
// }
// document.getElementById("cislo").value = hodiny + ":" + minuty;

// tady to napise
const input = document.getElementById("cislo"); // pise se const protoze je to jako konstanta a nikdy se nezmeni... lepsi nez var:)
let actualDate = new Date(); // je to zakladni typ date pro praci z datumy a radek pod si ho jen vypises at mas prehled jako to vypada
console.log("Základní datum: " + actualDate); // koukni do konzole co to vypise, at mas prehled... je to typ Date jak jsem ti rikal
let formatedDate = new Date().toDateString(); // tady si prevedes to zakladni datum do nejakyho formatu, kterej muzes nekam ukazat... tech formatu je mraky, najdes je na netu
console.log("Datum v n nějakém formátu: " + formatedDate); // a  tady ho zase vypises do konzole
input.value = formatedDate; // tady to hezci datum ulozis do input


// tady ted vypiseme ty funkce
pridavat = () => {
    console.log('pridavam');
    let inputDate = input.value;
    console.log(inputDate); // tady ti to vypise aktualni hodnotu z inputu po kliknuti na plus
    // dejme tomu ze budeme chtit zvednout den o 1 po kliknuti
    // nejdriv si musime tu hodnotu z inputu prevest do typu Date abysme mohli pustit metodu getCurrentDay a zvednout ho tak o jeden den
    let firstChange = Date.parse(inputDate); // tohle je pocet milisekund od nejakyho dne (nevim jakyho a pomoci toho se pak ty data pocitaji), radek pod tim si to vypises at to vidis
    console.log("Počet milisekund od nějakého data... najdi schválně od jakého a pošli mi to: " + firstChange);
    let backDate = new Date(firstChange); //kdyz do funkce toho data Date() das parametr tech sekund tak on ti zase vrati datum
    console.log("Datum spočtený z milisekund: " + backDate);
    let newDate = backDate.setDate(backDate.getDate() + 1); // timhle pridas jeden det a vypises to dole... vidis tam zes pridal 1 jako jeden den a to cislo je o
    console.log("Počet milisekund potom co jsme přidali jeden den: " + newDate);
    let newFormatedDate = new Date(newDate); // no a tady das ten prepoctenej pocet milisekund vlozis do Date() a on ti vrati den potom:)
    console.log("Klasický Date typ, který jsme zpočetli ze sekund, potom co jsme jednu přidali: " + newFormatedDate);

    //console.log(newFormatedDate.toDateString());

    // no a ted uz jen vlozis zase ten zformatovany datum zpet do inputu
    input.value = newFormatedDate.toDateString();
}

ubirat = () => {
    console.log('ubiram');
}



