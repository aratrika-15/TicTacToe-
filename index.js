let grid=document.getElementById("game-grid")
let text=document.getElementById("paragraph")
let gameText=document.getElementById("game-no")
let player=1;
let display="X"
let count=0
let game=1
let player1_wins=0
let player2_wins=0
let ties=0
grid.addEventListener('click',function(e){
        console.log(e.target);
        if(e.target.innerHTML==' ')
        {e.target.innerHTML=display;
        
        if(display=="X")
        {e.target.style.color = '#FFA500';
        display="O";}
        else
        {display="X";
        e.target.style.color='#32CD32';}
        
        ended=checkGameEnd(grid)
        if ((ended==true)||(ended==false&&count==9))
        {
            console.log("Hello");
            setTimeout(() => {  restartGame(grid,ended,count==9); }, 110);
           
        }
       else
        if(player==1)
        {text.innerHTML="Turn: Player 2";
        player=2;}
        else
        {text.innerHTML="Turn: Player 1";
        player=1;}
    }
    
})

function checkGameEnd(grid)
{   count=count+1
    console.log(count);
    let entries=Array.prototype.slice.call(grid.children).map(e=>e.innerHTML);
    for(i=0;i<3;i++)
    {
       if ((entries[i+0]=="X")&&(entries[i+3]=="X")&&(entries[i+6]=="X"))
        return true
        if ((entries[i+0]=="O")&&(entries[i+3]=="O")&&(entries[i+6]=="O"))
        return true
        if ((entries[(3*i)+0]=="X")&&(entries[(3*i)+1]=="X")&&(entries[(3*i)+2]=="X"))
        return true
        if ((entries[(3*i)+0]=="O")&&(entries[(3*i)+1]=="O")&&(entries[(3*i)+2]=="O"))
        return true
        
    }
    if ((entries[0]=="X")&&(entries[4]=="X")&&(entries[8]=="X"))
        return true
    else if ((entries[0]=="O")&&(entries[4]=="O")&&(entries[8]=="O"))
        return true
    else if ((entries[2]=="X")&&(entries[4]=="X")&&(entries[6]=="X"))
        return true
    else if((entries[2]=="O")&&(entries[4]=="O")&&(entries[6]=="O"))
        return true
    //else if (count==9)  
        //return true  
        else
        return false
    
}
function restartGame(grid,ended,a)
{   game=game+1
    let entries=Array.prototype.slice.call(grid.children);

    for(i=0;i<grid.children.length;i++)
    {
        entries[i].innerHTML=" ";
    }
    
    if(count==9&&ended==false)
    {   ties=ties+1;
        text.innerHTML="Last Game was a Tie! New Game Started<br> Turn: Player 1";
    }
    else if(count==9&&ended==true)
    {
        player1_wins=player1_wins+1;
        text.innerHTML="Player 1 wins! New Game Started<br> Turn: Player 1";
    }
    else if(player==1)
    {   player1_wins=player1_wins+1;
        text.innerHTML="Player 1 wins! New Game Started<br> Turn: Player 1";
    }
    else
    {   player2_wins=player2_wins+1;
        text.innerHTML="Player 2 wins! New Game Started<br> Turn: Player 1";
    }
    gameText.innerHTML=`Game: ${game}<br> Score: ${player1_wins} - ${player2_wins}`;
    player=1;
    display="X"
    count=0
    console.log(ties);
}