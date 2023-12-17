const scrollindicator = document.getElementById("scrollindicator");

const totalscrollheight = document.body.scrollHeight - window.innerHeight;

function updatescrollindicator(){
    const scrollPercentage = (window.scrollY/totalscrollheight) *100;
    scrollindicator.style.width=scrollPercentage+"%";
}

window.addEventListener("scroll",updatescrollindicator);

updatescrollindicator();