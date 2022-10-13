window.addEventListener("load",init)

var currentWord = document.getElementById("current-word")
//console.log(currentWord)
var wordInput = document.querySelector("#word-input")
//console.log(wordInput)
var timeDisplay = document.getElementById("time")
//console.log(timeDisplay)
var scoreDisplay = document.querySelector("#score")
//console.log(scoreDisplay)
var message = document.getElementById("message")
//console.log(message)
var score=0;

var time=5;

var words = [
    'ram',
    'shyam',
    'kalu',
    'bhalu',
    'titu',
    'buddha',
    'kata',
    'joota'


]
function init(){
    showWord(words)
    wordInput.addEventListener('input',startMatch)
    setInterval(countdown,1000)
}

function showWord(newwords){

    currentWord.innerText = (newwords[Math.floor(Math.random()*newwords.length)])
}

function startMatch(e){

 if(matchWord(e)){
showWord(words)
wordInput.value = ''
score++;
time = 5
message.innerText="correct...!!!!"
 }else{
    //alert("bhakk galat likh rha h..!!")
    message.innerText ="time pass kar lo bs"
 }
scoreDisplay.innerText = score
}

function matchWord(){
    if(wordInput.value==currentWord.innerHTML){
        showWord(words)
        wordInput.value =''
        return true
}else {
    return false
}
}
function countdown(){
    if(time==0){
        message.innerText ="Game Over !!!!!"
    }
    if(time>0) time--
    console.log(time)
    timeDisplay.innerText = time

}