let links = [];

// Furniture
let col1 = 20;
let col2 = 290;
let col3 = 380;
let col4 = 740;
let col5 = 920;

let row1 = 20;
let row2 = 110;
let row3 = 920;
let row4 = 1010;

let dot = 14;
let words = [
  "March Of Robots",
  "Prompt\nGenerator",
  "Instagram",
  "03/2024",
  "#MarchOfRobots2024",
  "Version 1.0",
  "Code",
  "Made by\nKidVector",
  "@kidvector",
  "Built Using\np5.js",
];

let buttonSaveX = 554;
let buttonGenX = 20;
let buttonY = 900;

let buttonWidth = 528;
let buttonHeight = 86;
let buttonTextSize = 22;

let primary = "#FFFFFF";
let secondary = "#000000";
let tertiary = "#D1D1D4";

let HelDisBold, HelTxtMed, HelTxtBold;

function preload() {
  HelDisBold = loadFont("assets/HelveticaNowDisplay-Bold.ttf");
  HelTxtMed = loadFont("assets/HelveticaNowText-Medium.ttf");
  HelTxtBold = loadFont("assets/HelveticaNowText-Bold.ttf");
  icon1 = loadImage("assets/icon-save.png");
  icon2 = loadImage("assets/icon-generate.png");
}

let randomAdjective, randomColour, randomNoun, randomVerb, randomLoc;
let lineOne,
  lineTwo,
  lineThree,
  lineFour,
  lineFive = "";

let cornerRadius = 20;
let lineHeight = 94;
let pg1;

function setup() {
  createCanvas(1100, 1100);

  // Define clickable pieces of text with different URLs
  links.push(
    new TextLink(
      "#MarchOfRobots2024",
      col1,
      130,
      "https://www.instagram.com/explore/tags/marchofrobots2024/"
    )
  );
  links.push(
    new TextLink(
      "@kidvector",
      col2,
      1030,
      "https://www.instagram.com/kidvector"
    )
  );

  pg1 = createGraphics(width, height);

  noStroke();
  textFont(HelTxtMed);

  furniture();
  generatePrompt(); // Generate an initial prompt
}

function draw() {
  background(randomColour);

  image(pg1, 0, 0);
  let blockRow1 = 180;
  let blockRow2 = 270;

  let k1 = 8;
  let k2 = 16;
  let k3 = 24;
  let k4 = 32;

  // Display and handle each clickable piece of text
  for (let link of links) {
    link.display();
  }

  // Robot Icon
  fill(secondary);
  rect(20, blockRow1, 86, 86 / 2 - 2, cornerRadius);
  rect(20, 225, 86, 86 / 2 - 2, cornerRadius, cornerRadius, 0, 0);
  //eyes
  fill(primary);
  ellipse(40, 200, 20, 20);
  ellipse(86, 200, 20, 20);

  // Prompt Block
  push();
  fill(secondary);
  rect(110, blockRow1, 882, 86, cornerRadius);
  rect(20, blockRow2, 1060, 625, cornerRadius);
  fill(randomColour);
  textFont(HelTxtMed);
  textSize(26);
  text("March Of Robots 2024", 140, 235);
  pop();

  // KidVector Icon
  fill(secondary);
  rect(996, blockRow1, 86, 86, cornerRadius);

  push();
  translate(1011, 212);
  fill(randomColour);
  rect(0, 0, k1, k3);
  rect(k1, k1, k1, k1);
  rect(k2, 0, k1, k1);
  rect(k2, k2, k1, k1);

  rect(k4, 0, k1, k2);
  rect(k4 + k1, k2, k1, k1);
  rect(k4 + k2, 0, k1, k2);
  pop();

  push();
  textFont(HelDisBold);
  textSize(94);
  textAlign(LEFT, TOP);
  textLeading(lineHeight);

  // Draw the first line with white color
  fill(primary); // Set text color to white for the first line
  text(lineOne, 41, 260);

  // Draw the second line with its specific color
  fill(randomColour); // Use randomColour for the second line
  text(lineTwo, 41, 260 + lineHeight);

  // Reset the text color to white for the remaining lines
  fill(primary); // Reset text color to white for the rest of the lines
  text(lineThree, 41, 260 + lineHeight * 2);
  text(lineFour, 41, 260 + lineHeight * 3);
  text(lineFive, 41, 260 + lineHeight * 4);
  pop();

  // Button Generate
  // Change button color on hover
  push();
  if (
    mouseX > buttonGenX &&
    mouseX < buttonGenX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    cursor(HAND);
    fill(tertiary);
  } else {
    fill(primary);
  }
  rect(buttonGenX, buttonY, buttonWidth, buttonHeight, cornerRadius);
  fill(secondary);
  textFont(HelTxtBold);
  textSize(buttonTextSize);
  textAlign(CENTER, CENTER);
  text(
    "GENERATE",
    buttonGenX + buttonWidth / 2 - 29,
    buttonY + buttonHeight / 2 - 2
  );

  // Button Save
  // Change button color on hover
  if (
    mouseX > buttonSaveX &&
    mouseX < buttonSaveX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    cursor(HAND);
    fill(tertiary);
  } else {
    fill(primary);
  }
  rect(buttonSaveX, buttonY, buttonWidth, buttonHeight, cornerRadius);
  fill(secondary);
  text(
    "SAVE",
    buttonSaveX + buttonWidth / 2 - 31,
    buttonY + buttonHeight / 2 - 2
  );
  pop();
  image(icon2, 326, 922, 46, 46);
  image(icon1, 828, 922, 46, 46);
  //  image(trace,0,0,1100,1100);
}

function generatePrompt() {
  // Set different seeds for each random selection
  randomSeed(100);
  let adjective = random(adjectives);

  randomSeed(200);
  let colourObj = random(colours); // Select a color object

  randomSeed(300);
  let noun = random(nouns);

  randomSeed(400);
  let verb = random(verbs);

  randomSeed(500);
  let location = random(locations);

  lineOne = `${adjective}`;
  lineTwo = `${colourObj.name} Robot`;
  lineThree = `${noun}`;
  lineFour = `${verb}`;
  lineFive = `${location}`;
  print(
    `Create an image of ${adjective} ${colourObj.name} Robot ${noun} ${verb} ${location} In the style of professional sci-fi concept art`
  );

  randomColour = colourObj.hex; // Use the 'value' from the selected color object
}

function mousePressed() {
  if (
    mouseX > buttonGenX &&
    mouseX < buttonGenX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    generatePrompt();
  }
  if (
    mouseX > buttonSaveX &&
    mouseX < buttonSaveX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    console.log("Save Button clicked!");
    saveCanvas("marchofrobots2024-prompt", "png");
  }
}

function furniture() {
  pg1.push();
  pg1.textFont(HelTxtMed);
  pg1.textSize(18);
  pg1.textAlign(LEFT, TOP);
  pg1.noStroke();

  // SHAPES
  pg1.fill(primary);
  pg1.ellipse(1074, 26, dot, dot);
  pg1.ellipse(1074, 116, dot, dot);

  // TEXT
  pg1.rect(1054, 1010, 24, 14, 7, 0, 0, 7);
  pg1.text(words[0], col1, row1);
  pg1.text(words[1], col2, row1);
  pg1.text(words[2], col4, row1);
  pg1.text(words[3], col5, row1);
  //  pg1.text(words[4], col1, row2);
  pg1.text(words[5], col2, row2);
  pg1.text(words[7], col1, row4);
  //  pg1.text(words[8], col2, row4);
  pg1.text(words[9], col5, row4);
  pg1.pop();
}

function mouseClicked() {
  // Check if any of the clickable pieces of text were clicked
  for (let link of links) {
    link.clicked();
  }
}

class TextLink {
  constructor(message, x, y, url) {
    this.message = message;
    this.x = x;
    this.y = y;
    this.url = url;
  }

  display() {
    if (this.isMouseInside()) {
      noStroke();
      cursor(HAND);
      fill(tertiary);
    } else {
      noStroke();
      cursor(ARROW);
      fill(primary);
    }

    textFont(HelTxtMed);
    textSize(18);
    noStroke();
    text(this.message, this.x, this.y);
  }

  clicked() {
    if (this.isMouseInside()) {
      window.open(this.url, "_blank");
    }
  }

  isMouseInside() {
    const messageWidth = textWidth(this.message);
    const messageTop = this.y - textAscent();
    const messageBottom = this.y + textDescent();

    return (
      mouseX > this.x &&
      mouseX < this.x + messageWidth &&
      mouseY > messageTop &&
      mouseY < messageBottom
    );
  }
}
