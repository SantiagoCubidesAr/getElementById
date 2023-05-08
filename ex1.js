//Ejercicio 1
console.log("Este es ex1.js");
//Ejercicio 2
let nom = "Santiago ";
let ape = "Cubides Arias";
let an = "1999";
let ed = 2023 - an;
document.getElementById("student_message").innerHTML = `Hola, mi nombre es ${nom} ${ape} tengo ${ed} años y estoy aprendiendo JavaScript`;
//Ejercicio 3
let num1 = document.getElementById("num_1").innerHTML;
let num2 = document.getElementById("num_2").innerHTML;
document.getElementById("result").innerHTML = (num1/num2).toFixed(2);
//Ejercicio 4
function telefono(phone) {
    phone.length === 9 ? console.log(phone + " El numero es valido.") : console.log(phone + " El numero es invalido.");
}
let phone1 = "988866552"; telefono(phone1);
let phone2 = "99087612366"; telefono(phone2);
let phone3 = 876543123;
phone3 = phone3.toString(); telefono(phone3);
//Ejericio5
console.log(Math.pow(32,6));
//Ejercicio 8
let url = document.getElementById("url_1").innerHTML;
url = "https://" + url;
document.getElementById("url_2").innerHTML = url;
let url2 = document.getElementById("url_3").innerHTML;
url2 = url2.replace("https://"," ");
document.getElementById("url_4").innerHTML = url2;