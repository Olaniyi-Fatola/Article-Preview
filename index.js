var shares = document.getElementById(share)
var social = document.getElementById(socials)
var button = document.getElementById(share-icon)

button.onclick = function(){

    if (share.className=="open"){
        //social media button disappear
        share.className="";
    }
    else{
        //else social media button appear
        share.className="open";
    }

};