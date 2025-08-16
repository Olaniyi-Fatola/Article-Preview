let share = document.getElementById("share")
let button = document.getElementById("share-icon")
let profile = document.getElementById("profile")

button.onclick = function(){

    if (share.className==="visible"){
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