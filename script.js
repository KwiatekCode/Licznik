function home(){
    let zmienna = document.getElementById("wynik1");
    let liczba = parseInt(zmienna.innerHTML);
    
    liczba++;

    zmienna.innerHTML = liczba;
    
    localStorage.setItem("wynik1", liczba);
}

    var przyjazd = new Date("May 18, 2023 10:20:00").getTime();

    var comeback = setInterval(function() {
        var teraz = new Date().getTime();

        var roznica = przyjazd - teraz;

        var dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
        var godziny = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minuty = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
        var sekundy = Math.floor((roznica % (1000 * 60)) / 1000);

        document.getElementById("wynik2").innerHTML = dni + "d " + godziny + "h " + minuty + "m " + sekundy + "s ";

        if (roznica < 0) {
            clearInterval(comeback);
            document.getElementById("wynik2").innerHTML = "Czas minął!";
          }
    }, 1000);
function miss(){
    let zmienna = document.getElementById("wynik3");
    let liczba = parseInt(zmienna.innerHTML);
        
    liczba++;
    
    zmienna.innerHTML = liczba;

    localStorage.setItem("wynik3", liczba);
}

window.onload = function() {
    let wynik1 = localStorage.getItem("wynik1");
    if (wynik1) {
    document.getElementById("wynik1").innerHTML = wynik1;
    }
    let wynik3 = localStorage.getItem("wynik3");
    if (wynik3) {
    document.getElementById("wynik3").innerHTML = wynik3;
    }
}
