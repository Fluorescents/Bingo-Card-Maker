var boxes = document.getElementsByClassName("box");
var i;

for(i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",function(){
        var dot = this.firstElementChild;
        if(dot.style.display==="block"){
            dot.style.display="none";
        } else{
            dot.style.display="block";
        }
    });
    boxes[i].addEventListener("mouseover",function(){
        var dot = this.firstElementChild;
        dot.style.opacity = "0.5";
    });
    boxes[i].addEventListener("mouseout",function(){
        var dot = this.firstElementChild;
        dot.style.opacity = "1";
    })
    
}

editIcon = document.getElementById("edit--icon");
playIcon = document.getElementById("play--icon");
editText = document.getElementById("edit--text");
playText = document.getElementById("play--text");
clearIcon = document.getElementById("clear--icon");
clearText = document.getElementById("clear--text");

editIcon.addEventListener("mouseover", function(){
    editText.style.display = "block";
})

editIcon.addEventListener("mouseout", function(){
    editText.style.display = "none";
})

playIcon.addEventListener("mouseover", function(){
    playText.style.display = "block";
})

playIcon.addEventListener("mouseout", function(){
    playText.style.display = "none";
})

clearIcon.addEventListener("mouseover", function(){
    clearText.style.display = "block";
})

clearIcon.addEventListener("mouseout", function(){
    clearText.style.display = "none";
})

editIcon.onclick = function(){
    editIcon.style.display = "none";
    playIcon.style.display = "block";
    document.getElementById("bingo--card").style.display = "none";
}

playIcon.onclick = function(){
    playIcon.style.display = "none";
    editIcon.style.display = "block";
    document.getElementById("bingo--card").style.display = "grid";
}

clearIcon.onclick = function(){
    for(i=0;i<boxes.length;i++){
        var dot = boxes[i].firstElementChild;
        dot.style.display = "none";
    }
}