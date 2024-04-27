let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let btns=["orange","red","blue","green"];
let hs=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");
        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    hs=Math.max(hs,level-1);
    document.querySelector(".hscore").innerHTML=`<b>HIGH SCORE : ${hs}</b>`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randBtn);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx){
    console.log("curr level : ",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over! Your score was <b>${level-1}</b> <br> Press any key to start`;
        hs=Math.max(hs,level-1);
        // document.querySelector(".hscore").innerText=`HIGH SCORE : ${hs}`;
        // document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


