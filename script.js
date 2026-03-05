// Typing Effect
const textArray = ["Mahasiswa", "Teknik Informatika", "Web Designer"];
let typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;

function type(){
if(charIndex < textArray[textIndex].length){
typingElement.textContent += textArray[textIndex].charAt(charIndex);
charIndex++;
setTimeout(type,100);
}else{
setTimeout(erase,1000);
}
}

function erase(){
if(charIndex > 0){
typingElement.textContent = textArray[textIndex].substring(0,charIndex-1);
charIndex--;
setTimeout(erase,50);
}else{
textIndex++;
if(textIndex>=textArray.length) textIndex=0;
setTimeout(type,200);
}
}

document.addEventListener("DOMContentLoaded",function(){
type();
AOS.init();
});