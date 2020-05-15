let myimage=document.querySelector('img');
myimage.onclick=function(){
    let myscr=myimage.getAttribute('src');
    if(myscr==='images/mozilafirefox.png')
    {
        myimage.setAttribute('src','images/firefox2.png');
    }
    else
    {
        myimage.setAttribute('src','images/mozilafirefox.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName||myName===null)
    {
        setUserName();
    }
    else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, Welcome - ' + myName;}
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, Welcome - ' + storedName;
  }
  myButton.onclick=function(){
      setUserName();
  }