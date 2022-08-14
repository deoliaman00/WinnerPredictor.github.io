var hj=Math.floor(Math.random()*6)+1;
var ImgVal="images" +"/"+"dice"+ hj +".png";
//console.log(ImgVal);
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ImgVal);

var hj2=Math.floor(Math.random()*6)+1;
var ImgVal2="images" +"/"+"dice"+ hj2 +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ImgVal2);
//alert("Player 1 won");
if(hj>hj2)
{
    
    document.querySelector("h1").innerHTML="🤑Player 1 Won ";
}
else if(hj<hj2)
{
    document.querySelector("h1").innerHTML="Player 2 Won🤑";
}
else{
    document.querySelector("h1").innerHTML="Draw! 🤷‍♂️";
}


// WinnerPredictor.github.io
// I have implemented my knowledge of Javascript-HTML-CSS to create a random number generator which tells the user who wins if there are two teams.