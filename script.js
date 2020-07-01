const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

let headsCount = 0;
let tailsCount = 0;

function statecoin (callback, ms) {
  setTimeout(callback, ms); 

}


flip:function flip() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
 statecoin (function() {
   coin.setAttribute('class', 'animate-' + result);
   statecoin (processResult.bind(null, result), 20);
 }, 20);
}

function display20images() {
  for (index = 0; index < 20; index++) {
      coin.flip()
      let side = document.createElement('div')
      body.append(side)
      side.append(coin.innerHTML())

  }
}

toString:function processResult(result) {
   if (result === 'heads') {
      headsCount++;
      heads.innerHTML = headsCount;
    } else {
      tailsCount++;
      tails.innerHTML = tailsCount;
    }
    status.innerHTML = result.toUpperCase();
}

button.addEventListener('click', flip);


