function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(51);
    stroke(255)
    line(0, 300, 600, 300)
    for (let i = 0; i <= 600; i += 20){
      text(i/20-15,i-4,285)
      line(i, 300, i, 290)
    }
    //line(300,300,300,290)
    //line(320,300,320,290)
  }
  