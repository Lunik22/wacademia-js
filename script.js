
let playerScore = 0 
let pcScore = 0 

let countGames = 0

let games = []

let k = 0
let p = 0
let n = 0

function play(){
    alert("Hra sa spustila! Do promptu zadajte buď K (kameň), P (papier), alebo N (nožnice).") 
    console.log("Hra sa spustila! Do promptu zadajte buď K (kameň), P (papier), alebo N (nožnice).") 

    let player = prompt("Zadajte svoj výber: ").toLowerCase().trim()

    while(player !== "k" && player !== "p" && player !== "n"){ 
        player = prompt("Zadali ste nesprávny input, skúste znova: ").toLowerCase().trim() 
    }
    console.log("Player: " + player) 

    let pc = Math.floor(Math.random() * 3) 
    console.log("PC: " + pc)

    check(player, pc)

    countGames++
    document.getElementById("sPlayer").innerHTML = "Skóre ty: " + playerScore 
    console.log("Skóre ty: " + playerScore)
    document.getElementById("sPC").innerHTML = "Skóre PC: " + pcScore 
    console.log("Skóre PC: " + pcScore)
    document.getElementById("games").innerHTML = "Odohrané hry: " + countGames 
    console.log("Odohrané hry: " + countGames)
    
    stats()
    console.log(games)

    if(confirm("Chcete pokračovať?")){
        play()  
    }

}

function check(kpn, pcKpn){
    let outcome = ""
    switch(kpn){
        case "k":
            switch(pcKpn){
                case 0:
                    alert("PC vybral kameň, remíza!") 
                    console.log("PC vybral kameň, remíza!") 
                    outcome = "Draw"
                    break
                case 1:
                    alert("PC vybral papier, prehrali ste!") 
                    console.log("PC vybral papier, prehrali ste!") 
                    pcScore++
                    outcome = "PC"
                    break
                case 2:
                    alert("PC vybral nožnice, vyhrali ste!") 
                    console.log("PC vybral nožnice, vyhrali ste!") 
                    playerScore++ 
                    outcome = "Player"
                    break
            }
            break
        case "p":   
            switch(pcKpn){
                case 0:
                    alert("PC vybral kameň, vyhrali ste!") 
                    console.log("PC vybral kameň, vyhrali ste!") 
                    playerScore++ 
                    outcome = "Player"
                    break
                case 1:
                    alert("PC vybral papier, remíza!") 
                    console.log("PC vybral papier, remíza!") 
                    outcome = "Draw"
                    break
                case 2:
                    alert("PC vybral nožnice, prehrali ste!") 
                    console.log("PC vybral nožnice, prehrali ste!") 
                    pcScore++ 
                    outcome = "PC"
                    break
            }
            break
        case "n":
            switch(pcKpn){
                case 0:
                    alert("PC vybral kameň, prehrali ste!") 
                    console.log("PC vybral kameň, prehrali ste!") 
                    pcScore++ 
                    outcome = "PC"
                    break
                case 1:
                    alert("PC vybral papier, vyhrali ste!") 
                    console.log("PC vybral papier, vyhrali ste!") 
                    playerScore++ 
                    outcome = "Player"
                    break
                case 2:
                    alert("PC vybral nožnice, remíza!") 
                    console.log("PC vybral nožnice, remíza!") 
                    outcome = "Draw"
                    break
            }
            break
    }

    games.push([outcome, kpn, pcKpn])
    
}

function stats(){
    games.map(counter)
    console.log(["Kameň: " + k, "Papier: " + p, "Nožnice: " + n])
    k = 0
    p = 0
    n = 0
}

function counter(item){
    for(let i = 0; i < item.length; i++){
        switch(item[i]){
            case "k":
                k++
                break
            case "p":
                p++
                break
            case "n":
                n++
                break
            case 0:
                k++
                break
            case 1:
                p++
                break
            case 2:
                n++
                break
        }    
    }
}

