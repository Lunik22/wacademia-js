
var playerScore = 0;
var pcScore = 0;

function play(){
    alert("Hra sa spustila! Do promptu zadajte buď K (kameň), P (papier), alebo N (nožnice).");
    console.log("Hra sa spustila! Do promptu zadajte buď K (kameň), P (papier), alebo N (nožnice).");
    var pcKpn = Math.floor(Math.random() * 3);
    console.log("PC: " + pcKpn);
    var kpn = prompt("Zadajte svoj výber: ");
    console.log("Player: " + kpn);
    if(kpn == "K" || kpn == "P" || kpn == "N"){
        if(kpn == "K"){
            if(pcKpn == 0){
                alert("PC vybral kameň, remíza!");
                console.log("PC vybral kameň, remíza!");
            }else if(pcKpn == 1){
                alert("PC vybral papier, prehrali ste!");
                console.log("PC vybral papier, prehrali ste!");
                pcScore++;
            }else{
                alert("PC vybral nožnice, vyhrali ste!");
                console.log("PC vybral nožnice, vyhrali ste!");
                playerScore++;
            }
        }else if(kpn == "P"){
            if(pcKpn == 0){
                alert("PC vybral kameň, vyhrali ste!");
                console.log("PC vybral kameň, vyhrali ste!");
                playerScore++;
            }else if(pcKpn == 1){
                alert("PC vybral papier, remíza!");
                console.log("PC vybral papier, remíza!");
            }else{
                alert("PC vybral nožnice, prehrali ste!");
                console.log("PC vybral nožnice, prehrali ste!");
                pcScore++;
            }
        }else{
            if(pcKpn == 0){
                alert("PC vybral kameň, prehrali ste!");
                console.log("PC vybral kameň, prehrali ste!");
                pcScore++;
            }else if(pcKpn == 1){
                alert("PC vybral papier, vyhrali ste!");
                console.log("PC vybral papier, vyhrali ste!");
                playerScore++;
            }else{
                alert("PC vybral nožnice, remíza!");
                console.log("PC vybral nožnice, remíza!");
            }
        }
    }else{
        alert("Zadali ste nesprávny input, skúste znova!");
        console.log("Zadali ste nesprávny input, skúste znova!");
    }
}