let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/winnie.jpg') {
      myImage.setAttribute ('src','images/winnie2.jpg');
    } else {
      myImage.setAttribute ('src','images/winnie.jpg');
    }
}