const score={
    win:0,
    tie:0,
    lose:0
}
function compchoice()
{
    const cc=Math.random()
    if(cc<1/3)
    {
        return 'rock'
    }
    else if(cc<2/3)
    {
        return 'paper'
    }
    else
    {
        return 'scissor'
    }
}
function disch(byme,byc)
{
    document.querySelector('.choices').innerHTML=`your choice is ${byme} and computer choice is ${byc}`

}
function disres(n)
{
    if(n==0)
    {
        document.querySelector('.result').innerHTML='You Lose!'
        disscore()
        score.lose=score.lose+1
    }
    if(n==2)
    {
        document.querySelector('.result').innerHTML='You Win!'
        disscore()
        score.win=score.win+1
    }
    else if(n==1)
    {
        document.querySelector('.result').innerHTML='You Tie!'
        disscore()
        score.tie=score.tie+1
    }
    
}
function disscore()
{
    document.querySelector('.scores').innerHTML=`Win-${score.win} tie-${score.tie} lose-${score.lose}`
}
function rock()
{
    const jsc=compchoice()
    disch('rock',jsc)
    if(jsc=='rock')
    {
        disres(1)
        
    }
    else if(jsc=='paper')
    {
        disres(0)

    }
    else if(jsc=='scissor')
    {
        disres(2)
    }
    

}
function paper()
{
    const jsc=compchoice()
    disch('paper',jsc)
    if(jsc=='rock')
    {
        disres(2)
    }
    else if(jsc=='paper')
    {
        disres(1)
    }
    else if(jsc=='scissor')
    {
        disres(0)
    }

}
function scissor()
{
    const jsc=compchoice()
    disch('scissor',jsc)
    if(jsc=='rock')
    {
        disres(0)
    }
    else if(jsc=='paper')
    {
        disres(2)
    }
    else if(jsc=='scissor')
    {
        disres(1)
    }

}

function reset()
{
    score.win=0
    score.tie=0
    score.lose=0
    disscore()
}