let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function clockFunction(){
    let dateTime= new Date();
    let d = days[dateTime.getDay()]
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    let s = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${h}: ${m}: ${s} : ${d}`
}

let name = prompt(`İsminizi giriniz`)
let myName = document.querySelector(`#myName`)
if(name){
myName.innerHTML = `${name}`
}else{
    alert(`Lütfen isim kısmını boş bırakmayınız!!!`)
    location.reload();
}
    setInterval(clockFunction, 1000);