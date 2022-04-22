let captchatext = "V6T9JBCDS";

document.getElementById("s").onclick=function()
{
    var str1 = document.getElementById('t').value;
    var x = str1.localeCompare(captchatext)

    if(x==0)
    {
        document.getElementById("P").innerHTML="Captcha Cleared Succesfully!✅" ;
    }

    else
    {
        document.getElementById("P").innerHTML="Try again !" ;
    }
}