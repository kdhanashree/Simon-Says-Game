let gameseq=[];
let useseq=[];

let level = 0;
let gamestart=false;

 let buttons=['red','green','blue','yellow'];

let score=0;
document.addEventListener('keypress',function(){
    if(gamestart==false)
    { //Game should start only once.
        console.log('Started');
        gamestart = true;
    }
    levelup();

    //random selection
         

    //Till here the code handles system flash ,pushing into the array and the flashing that button

    //Now handling the button clicked by user

    //track is kept by the btnpress function



});
//function to check if the sequence matches
function checkresult(idx)
{  
    if(useseq[idx]==gameseq[idx])
    {
        if(useseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        h2.innerText=`Game over please try again!!You scored ${score} points`;
        document.querySelector('body').style.backgroundColor='red';

        setTimeout( function(){
         document.querySelector('body').style.backgroundColor='white';
        },250)
       
        reset();
    }
    // let t=0;
    // while(t<=level)
    // {
    //     if(gameseq[t]==useseq[t] && t!=level)
    //     {
    //         t++;
    //     }
    //     else if(gameseq[t]==useseq[t] && t==level){
    //             levelup();
    //     }
    //     else
    //     {
    //        h2.innerText='Game Over!!Try Again!!'
    //     }
    // }

    // if(useseq[useseq.length-1]===gameseq[gameseq.length-1])
    //  console.log(`Same Value`);
    // else
    // h2.innerText="Game Over Try Again!!";
}


let h2 = document.querySelector('h2');
function levelup(){
    score++;
    useseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let b=Math.floor(Math.random()*4);
    let randomcolor = buttons[b];
    let rbtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);  
    console.log(gameseq);
    flashup(rbtn);  
}

//flassh by system
function flashup(btn){
     btn.classList.add('flash');
     setTimeout(function(){
        btn.classList.remove('flash');
     },250);

}

//flash by user
function uflashup(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
       btn.classList.remove('userflash');
    },250);

   
   
}


function btnPress(){
   let btn = this;
   uflashup(btn);
   //useseq.add()
   let color = btn.getAttribute('id');
   useseq.push(color);
   console.log(useseq);
   checkresult(useseq.length-1);
  // console.log(color);

}
function reset(){
    level=0;
    started=false;
    useseq=[];
    gameseq=[];
    score=0;
}

//adding event lisener to all the buttons
let allbtns = document.querySelectorAll('.btn');
console.log(allbtns);
for(k of allbtns)
{
    k.addEventListener('click', btnPress);
};

