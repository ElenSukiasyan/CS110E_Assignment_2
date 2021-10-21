const prompt = require('prompt-sync')();
const a = parseInt(prompt ('a='));
const b = parseInt(prompt ('b='));
const c = parseInt(prompt ('c=')); 
if (a === 0 && b !== 0)
{
    console.log ("x="  +  -c/b); //ax^2+bx+c=0; x=-c/b;
}
    else if (a === 0 && b === 0) 
    {
        if(c === 0)
        {
            console.log ("any x can be a solution"); //ax^2+bx+c=0; 0=0; 
        }
        else 
        {
            console.log ("there is no solution"); // non-zero c can not be equal to 0
        }
    }
else
{
    const D = b ** 2 - 4 * a * c;
    console.log(D)
    console.log(Math.sqrt(D))
        if(D < 0)
        {
            console.log ("Unsolvable");
        }
        else if (D === 0)
        {
            console.log ("x=" + -b/(2*a));
        }
        else
        {
            console.log ("x1=" + (-b+Math.sqrt(D))/(2*a));
            console.log ("x2=" + (-b-Math.sqrt(D))/(2*a));
        }
}
