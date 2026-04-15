
/*an array storing fortunes */

const fortunes = [
  "A pleasant surprise is waiting for you.",
  "Your hard work will soon pay off.",
  "An exciting opportunity is on its way.",
  "You will meet someone who changes your perspective.",
  "A bold decision will bring great rewards.",
  "Happiness begins with a small step today.",
  "Good news will come to you by mail.",
  "Your creativity will open new doors.",
  "A new adventure will soon begin.",
  "Patience will lead you to success.",
  "Someone is thinking of you right now.",
  "Trust your instincts—they will not fail you."
];


/* code to add functionality to the button and fortune message */

let pressed = document.getElementById('button')

let desc = document.getElementById('prediction')

pressed.onclick = function (){
    /* code to randomly select a fortune */

    let randomIndex = Math.floor(Math.random() * fortunes.length)

    let randomFortune = fortunes[randomIndex]

    desc.innerHTML = randomFortune
}

