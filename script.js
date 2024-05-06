//fetching gamesofthronesquotes api using promise
fetch("https://api.gameofthronesquotes.xyz/v1/random")
.then((response)=>response.json())//changing response to json format
.then((result)=>{

    //storing required data's
 let name=result.character.name;
 let house=result.character.house.name;
 let sentence=result.sentence;
 let name1="Jon Snow";
 let name2="Sansa Stark";
 //conditions applied for omitting same options for two buttons
 if(name==="Jon Snow"){
      name1="Tyrion Lannister";
 }
 if(name==="Sansa Stark"){
    name2="Arya Stark";
 }
 //calling displayData function and passing required values
displayData(sentence,name,name1,name2); 
//calling eventListeners function and passing required values
eventListeners(house);


});

//function to display the data on the screen with stored values
function displayData(sentence,name,name1,name2){
    const body=document.querySelector(".body");//targetting class body
   //appending required html elements and passing the values
    body.innerHTML+=`
    
    <h2>${sentence}</h2>
    <form class="form">
    <button class="hint">Hint</button>
    <button class="firstButton">${name}</button>
    <button class="secondButton">${name1}</button>
    <button class="thirdButton">${name2}</button><br>
    </form>
    `
}

//function full of eventListeners to perform certain functions
function eventListeners(house){
    //targetting class firstButton
    const firstButton=document.querySelector(".firstButton");
    firstButton.addEventListener("click",(event)=>{
     event.preventDefault();//to prevent page from loading
       const result=document.querySelector(".result");//targetting class result
       result.innerText=`
       Correct Answer 
       `
       
    })
    //targetting class secondButton
    const secondButton=document.querySelector(".secondButton");
    secondButton.addEventListener("click",(event)=>{
     event.preventDefault();//to prevent page from loading
     const result=document.querySelector(".result");//targetting class result
       result.innerText=`
       Wrong Answer
       `
    })
   //targetting class thirdButton
    const thirdButton=document.querySelector(".thirdButton");
    thirdButton.addEventListener("click",(event)=>{
     event.preventDefault();//to prevent page from loading
     const result=document.querySelector(".result");//targetting class result
       result.innerText=`
       Wrong Answer
       `
    })
   //targetting class hint 
    const hintButton=document.querySelector(".hint");
    hintButton.addEventListener("click",(event)=>{
       event.preventDefault();//to prevent page from loading
       const result=document.querySelector(".result");//targetting class result
       result.innerText=`
       Hint : ${house}
       `
    })
    //targetting class next 
    const nextButton=document.querySelector(".next");
    nextButton.addEventListener("click",()=>{
       location.replace(location.href);//to reload the page for next api response
    })
}
