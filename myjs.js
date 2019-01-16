document.getElementById("cube").value="^3";
document.getElementById("sqr").value="^2";
document.getElementById("expo").value="^y";

res=false;
function updateOutput(char)
{
    if(res === false)
    {
        if(textarea.value.length < 10)
        {

            textarea.value+=char;
        }
    }
    else
    {
        textarea.value=result;
    }
}