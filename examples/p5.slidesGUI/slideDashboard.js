
// function preload() {
//   data = loadJSON('assets/bubbles.json');
// }


function setup() {
  UI = new p5.slidesUI();
}

// START PRESENTATION LOOP

function draw() {
  UI.display();
  UI.checkInteraction();
}