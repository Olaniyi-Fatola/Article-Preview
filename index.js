var share = document.getElementById("share")
var social = document.getElementById("social")
var button = document.getElementById("share-icon")
var profile = document.getElementById("profile")

button.onclick = function(){

    if (share.className=="visible"){
        //social media button disappear
        share.className="";
        profile.className="";
        button.className="";
    }
    else{
        //else social media button appear
        share.className="visible";
        profile.className="hidden";
        button.className="open";
    }

};