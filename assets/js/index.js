

const griddisplay = document.querySelector('#grid');


const cardArray = [
    {
        name:"html",
        img:"assets/imgs/html-5.png",
    },
    {
        name:"css",
        img:"assets/imgs/css-3.png",
    },
    {
        name:"javascript",
        img:"assets/imgs/java-script.png",
    },
    {
        name:"react",
        img:"assets/imgs/react.png",
    },
    {
        name:"angular",
        img:"assets/imgs/angular.png",
    },
    {
        name:"bootstrap",
        img:"assets/imgs/bootstrap.png",
    },
    {
        name:"node",
        img:"assets/imgs/node.png",
    },
    {
        name:"mongodb",
        img:"assets/imgs/mongodb.png",
    },
    {
        name:"html",
        img:"assets/imgs/html-5.png",
    },
    {
        name:"css",
        img:"assets/imgs/css-3.png",
    },
    {
        name:"javascript",
        img:"assets/imgs/java-script.png",
    },
    {
        name:"react",
        img:"assets/imgs/react.png",
    },
    {
        name:"angular",
        img:"assets/imgs/angular.png",
    },
    {
        name:"bootstrap",
        img:"assets/imgs/bootstrap.png",
    },
    {
        name:"node",
        img:"assets/imgs/node.png",
    },
    {
        name:"mongodb",
        img:"assets/imgs/mongodb.png",
    },
    
]

cardArray.sort(() => 0.5 - Math.random())

generateboard();

function generateboard(){
    for(let i=0; i<cardArray.length; i++)
    {
        const card = document.createElement('img');
        card.setAttribute('src','assets/imgs/set_bg.jpg');
        card.className="bg_img";
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        griddisplay.appendChild(card);
        
    }
    console.log(cardArray);
}

card_chosen = [];
card_chosen_id = [];

function flipcard(){
    const card_id = this.getAttribute("data-id");
    this.setAttribute('src',cardArray[card_id].img);
    card_chosen_id.push(card_id);
    card_chosen.push(cardArray[card_id].name);

    if(card_chosen.length === 2)
    {
        setTimeout(checkmatch,500);
    }
    
}

var cardwon=[];
function checkmatch(){
    const cards = document.querySelectorAll('img');

    if(card_chosen[0] == card_chosen[1])
    {
        cards[card_chosen_id[0]].removeEventListener('click',flipcard);
        cards[card_chosen_id[1]].removeEventListener('click',flipcard);
   cardwon.push(card_chosen);
   
    }
    else{
        cards[card_chosen_id[0]].setAttribute('src','assets/imgs/set_bg.jpg');
        cards[card_chosen_id[1]].setAttribute('src','assets/imgs/set_bg.jpg');
        cards[card_chosen_id[0]].addEventListener('click',flipcard);
        cards[card_chosen_id[1]].addEventListener('click',flipcard);
    }
    card_chosen = [];
    card_chosen_id = [];
   
if(cardwon.length=== cardArray.length/2){
    alert("Cogradulations.. You have successfully completed the game");

    window.location.reload();
}

}