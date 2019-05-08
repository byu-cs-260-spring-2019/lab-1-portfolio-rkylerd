var url = "";
var contain = false;

function resetURL() {

    url = "";

}

function changeText() {

    var bgs = document.getElementsByName("bgs");
    var selected = "";

    for(var i = 0; i < bgs.length; i++) {
        if(bgs[i].checked) {
            selected = bgs[i].value;
            document.getElementById("bg-output").innerHTML = "You like the 'ol " + selected + " eh? Good choice.";
            return;
        }
    }
}

function setURL(background, changeBG) {

    
    contain = false;
    switch(background) {
        
        case "white": 
            url = "https://images8.alphacoders.com/648/648135.png";
            break;
        case "midnight":
            url = "https://fanart.tv/fanart/music/056e4f3e-d505-4dad-8ec1-d04f521cbb56/artistbackground/daft-punk-51adcc40599ea.jpg";
            break;
        case "rainbow":
            url = "https://pre00.deviantart.net/2c05/th/pre/i/2009/134/4/0/daft_punk_by_tm_1.jpg";
            contain = true;
            break;
        case "blue-pink":
            url = "http://i.imgur.com/woUbg3p.jpg";
            break;
        default:
            break;
        
    }
    localStorage.setItem("bg", url);

    if (changeBG) {
        changeBackground();
    }
}

function changeBackground() {
    
    document.getElementById("other-page").style.backgroundImage = "url(" + localStorage.getItem("bg") + ")";
    document.getElementById("other-page").style.backgroundSize = localStorage.getItem("bg") == "https://pre00.deviantart.net/2c05/th/pre/i/2009/134/4/0/daft_punk_by_tm_1.jpg" ? "contain" : "cover";
}