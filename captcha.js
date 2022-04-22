var n = Math.floor(Math.random()*3);
var names = ["Cookies","Chocolates","Cakes"];
document.getElementById('obj').textContent = ""+names[n];

var imgs = document.getElementsByTagName('img');
for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener('click', myFun);
}
var arr = [];
function myFun()
{
    this.setAttribute('src','https://i.stack.imgur.com/AQiAC.gif');
    arr.push(this.className);
}
document.getElementsByClassName('drun')[0].addEventListener('click',function()
{
        var f=0;
        for(i=0;i<arr.length;i++)
        {
            if(arr[i] != names[n])
            {
                f = 1;
                document.getElementById('result').textContent = "You Failed the Captcha";
                break;
            }
        }
        if(f != 1)
        {
            document.getElementById('result').textContent = "Congrats!You Passed The Test Succesfully";
        }
});