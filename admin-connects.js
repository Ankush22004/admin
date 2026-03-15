const scriptTag=document.currentScript;
const appId=scriptTag.dataset.app;

const database="https://YOUR-FIREBASE-DATABASE.firebaseio.com/apps/";

async function loadMessages(){

try{

const response=await fetch(database+appId+"/messages.json");

const data=await response.json();

if(!data) return;

Object.values(data).forEach(msg=>{

showPopup(msg.title,msg.text)

});

}catch(e){

console.log("Connection error")

}

}

function showPopup(title,text){

const box=document.createElement("div")

box.style.position="fixed"
box.style.bottom="20px"
box.style.right="20px"
box.style.background="#111"
box.style.color="white"
box.style.padding="15px"
box.style.borderRadius="10px"
box.style.boxShadow="0 0 10px black"
box.style.zIndex="9999"

box.innerHTML=`
<h4>${title}</h4>
<p>${text}</p>
<button onclick="this.parentElement.remove()">Close</button>
`

document.body.appendChild(box)

}

loadMessages()

setInterval(loadMessages,15000)
