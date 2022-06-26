let homescore = document.getElementById("scorehome")
let awayscore = document.getElementById("scoreaway")

let resulthome=0
function home1(){
    resulthome+=1;
    homescore.textContent=resulthome 
}
function home2(){
    resulthome+=2
    homescore.textContent=resulthome
}
function home3(){
    resulthome+=3
    homescore.textContent=resulthome
}

let resultaway=0
function away1(){
    resultaway+=1
    awayscore.textContent=resultaway
}
function away2(){
    resultaway+=2
    awayscore.textContent=resultaway
}
function away3(){
    resultaway+=3
    awayscore.textContent=resultaway
}

function newMatch(){
    var sound = document.getElementById("audio");
    sound.play();
    homescore.textContent=0
    awayscore.textContent=0
    resulthome=0
    resultaway=0
}

function endMatch(){
    if(resultaway == 0)
    {
        if(resulthome ==0)
        {
            alert("Match Has not Yet Started!");
        }
    }
    else if(resultaway == resulthome)
    {
        alert("Scores Tied");

    }
    else if(resultaway>resulthome)
    {
        alert("Congratulations! The Winner is The Away Team.")
    }
    else if(resultaway<resulthome)
    {
        alert("Congratulations! The Winner is The Home Team.")
    }
    
}