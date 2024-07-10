
let questions;
async function fetchAndLogData() {
    try {
        let response = await fetch("https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple");
        let data = await response.json();
        questions = data.results;  // Extracting the questions from the response
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchAndLogData();
let select = 0;
let ans = 0;
let ind = 0;
document.querySelector(".game").addEventListener("click", () => {
   document.querySelector(".next").style.display = "block";


    document.querySelector(".start").innerHTML = "";
    let o = questions[ind];
    let rig = questions[ind].correct_answer;
    let r = Math.random();
    let l = questions[ind].incorrect_answers;
    l.push(questions[ind].correct_answer);
    
    let x;
    if (r <= 0.25) {
        x = 0;
    }
    else if (r>0.25 && r<=0.50) {
        x = 1;
    }
    else if (r>0.50 && r<=0.75) {
        x = 2;
    }
    else{
        x = 3;
    }
    
    
    document.querySelector(".start").innerHTML =
    `
        <div class="questions">
            <div class="head"> Simple Quiz</div>
            <div class="line"></div>
            <div class="first">${o.question}</div>
            <div class="clicked">
            <div class="a">
                <button>${(r<=0.25)?rig:l[0]}</button>
            </div>
            <div class="b">
                <button>${(r>0.25 && r<=0.50)?rig:l[1]}</button>
            </div>
            <div class="c">
                <button>${(r>0.50 && r<=0.75)?rig:l[2]}</button>
            </div>
            <div class="d">
                <button>${(r>0.75)?rig:l[x]}</button>
            </div>
            </div>
        </div>
   `
   document.querySelector(".clicked").addEventListener("click", ()=>{
    select++;
    if (r <= 0.25) {
        document.querySelector(".a>button").style.backgroundColor = "green";
    }
    else if (r>0.25 && r<=0.50) {
        document.querySelector(".b>button").style.backgroundColor = "green";
    }
    else if (r>0.50 && r<=0.75) {
        document.querySelector(".c>button").style.backgroundColor = "green";
    }
    else{
        document.querySelector(".d>button").style.backgroundColor = "green";
    }
    
   })
   document.querySelector(".a").addEventListener("click", () => {
   
    if(r <= 0.25){
        ans++;
    }
    else{
        document.querySelector(".a>button").style.backgroundColor = "red";

    }
    
    
});
document.querySelector(".b").addEventListener("click", () => {
   
    if(r>0.25 && r<=0.50){
        ans++;
    }
    else{
        
        document.querySelector(".b>button").style.backgroundColor = "red";

    }
});
document.querySelector(".c").addEventListener("click", () => {
    
    if(r>0.50 && r<=0.75){
        ans++;
    }
    else{
        document.querySelector(".c>button").style.backgroundColor = "red";

    }
});
document.querySelector(".d").addEventListener("click", () => {
    if(r>0.75){
        ans++;
    }
    else{
        
        document.querySelector(".d>button").style.backgroundColor = "red";
    }
});

   console.log(ind)


}
)
document.querySelector(".next").addEventListener("click",()=>{
    ind++;
    if(ind ==20){
        
        if(select<20){
            alert("you have solved ${select} question out of 20" )
        }
        ind = 0;
                document.querySelector(".box").innerHTML = "";
                
                document.querySelector(".box").innerHTML =
                `
                <div class="start">
                            <div>You Scord ${ans} out 0f 20</div>
                                <div class="better"> <a href="http://127.0.0.1:3000/index.html">Start Over</a> < </div>
                        </div>
                      `
        
    }
    else{
    document.querySelector(".start").innerHTML = "";
    let o = questions[ind];
    let rig = questions[ind].correct_answer;
    let r = Math.random();
    
    let l = questions[ind].incorrect_answers;
    l.push(questions[ind].correct_answer);
    
    let x;
    if (r <= 0.25) {
        x = 0;
    }
    else if (r>0.25 && r<=0.50) {
        x = 1;
    }
    else if (r>0.50 && r<=0.75) {
        x = 2;
    }
    else{
        x = 3;
    }
    
    document.querySelector(".start").innerHTML =
   `
          <div class="questions">
            <div class="head"> Simple Quiz</div>
            <div class="line"></div>
            <div class="first">${o.question}</div>
            <div class="clicked">
            <div class="a">
                <button>${(r<=0.25)?rig:l[0]}</button>
            </div>
            <div class="b">
                <button>${(r>0.25 && r<=0.50)?rig:l[1]}</button>
            </div>
            <div class="c">
                <button>${(r>0.50 && r<=0.75)?rig:l[2]}</button>
            </div>
            <div class="d">
                <button>${(r>0.75)?rig:l[x]}</button>
            </div>
            </div>
        </div>
   `
   document.querySelector(".clicked").addEventListener("click", ()=>{
    if (r <= 0.25) {
        document.querySelector(".a>button").style.backgroundColor = "green";
    }
    else if (r>0.25 && r<=0.50) {
        document.querySelector(".b>button").style.backgroundColor = "green";
    }
    else if (r>0.50 && r<=0.75) {
        document.querySelector(".c>button").style.backgroundColor = "green";
    }
    else{
        document.querySelector(".d>button").style.backgroundColor = "green";
    }
    
   })
   document.querySelector(".a").addEventListener("click", () => {
   
    if(r <= 0.25){
        ans++;
    }
    else{
        document.querySelector(".a>button").style.backgroundColor = "red";

    }
    
    
});
document.querySelector(".b").addEventListener("click", () => {
   
    if(r>0.25 && r<=0.50){
        ans++;
    }
    else{
        
        document.querySelector(".b>button").style.backgroundColor = "red";

    }
});
document.querySelector(".c").addEventListener("click", () => {
    
    if(r>0.50 && r<=0.75){
        ans++;
    }
    else{
        document.querySelector(".c>button").style.backgroundColor = "red";

    }
});
document.querySelector(".d").addEventListener("click", () => {
    if(r>0.75){
        ans++;
    }
    else{
        
        document.querySelector(".d>button").style.backgroundColor = "red";
    }
});
   console.log(ind)


    }
})