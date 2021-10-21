const prompt = require('prompt-sync')();
const tHeight = prompt ('height of triangle=');
const tBase = prompt ('base of triangle=');
const rLength = prompt ('length of rectangle=');
const rWidth = prompt ('width of rectangle=');
let tArea = tHeight*tBase/2;
let rArea = rLength*rWidth;
if (tArea > rArea)
{
    console.log ("The triangle has a bigger area");
}
    else if(tArea < rArea)
    {
         console.log ("The rectangle has a bigger area");
    }
        else
            {
                console.log ("Areas of rectangle and triangle are equal");
            }

