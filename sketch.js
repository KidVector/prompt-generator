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
  HelDisBold = loadFont("https://github.com/KidVector/prompt-generator/blob/97225a0a4b15d76e1563672188a85cd9480114b1/assets/HelveticaNowDisplay-Bold.ttf");
  HelTxtMed = loadFont("https://github.com/KidVector/prompt-generator/blob/97225a0a4b15d76e1563672188a85cd9480114b1/assets/HelveticaNowText-Medium.ttf");
  HelTxtBold = loadFont("https://github.com/KidVector/prompt-generator/blob/97225a0a4b15d76e1563672188a85cd9480114b1/assets/HelveticaNowText-Bold.ttf");
  icon1 = loadImage("https://github.com/KidVector/prompt-generator/blob/97225a0a4b15d76e1563672188a85cd9480114b1/assets/icon-generate.png");
  icon2 = loadImage("https://github.com/KidVector/prompt-generator/blob/97225a0a4b15d76e1563672188a85cd9480114b1/assets/icon-save.png");
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

let adjectives = [
  "An Advanced",
  "An Agitated",
  "An Analytical",
  "An Angry",
  "An Anxious",
  "An Apathetic",
  "An Aristocratic",
  "An Astonishing",
  "An Astronomical",
  "An Astute",
  "A Baroque-styled",
  "A Basic",
  "A Behemoth",
  "A Bitter",
  "A Bored",
  "A Breathtaking",
  "A Brilliant",
  "A Broken-down",
  "A Byzantine",
  "A Captivating",
  "A Chivalrous",
  "A Clever",
  "A Colossal",
  "A Compact",
  "A Competent",
  "A Confident",
  "A Conflicted",
  "A Confused",
  "A Content",
  "A Cosmic",
  "A Crumbling",
  "A Crusading",
  "A Curious",
  "A Damaged",
  "A Dazzling",
  "A Decrepit",
  "A Depressed",
  "A Detached",
  "A Deteriorating",
  "A Dilapidated",
  "A Distracted",
  "A Dramatic",
  "A Drone-assisted",
  "A Dull",
  "An Ecstatic",
  "An Edwardian",
  "An Elated",
  "An Electrifying",
  "An Elizabethan",
  "An Enormous",
  "An Enthralling",
  "An Enthusiastic",
  "An Envious",
  "An Erudite",
  "An Ethereal",
  "An Euphoric",
  "An Exhilarating",
  "An Expansive",
  "An Explosive",
  "An Exuberant",
  "A Faded",
  "A Feudal",
  "A Fierce",
  "A Flawless",
  "A Focused",
  "A Formidable",
  "A Frayed",
  "A Freezing",
  "A Frustrated",
  "A Futuristic",
  "A Galactic",
  "A Gargantuan",
  "A Genius",
  "A Gifted",
  "A Gigantic",
  "A Gleaming",
  "A Gloomy",
  "A Glossy",
  "A Gothic",
  "A Grateful",
  "A Gripping",
  "A Hair-raising",
  "A Heraldic",
  "A Herculean",
  "A High-tech",
  "A Holographic",
  "A Hopeful",
  "A Huge",
  "An Immaculate",
  "An Immense",
  "An Imperial",
  "An Indestructible",
  "An Indifferent",
  "An Ingenious",
  "An Insecure",
  "An Insightful",
  "An Inspired",
  "An Intelligent",
  "An Intense",
  "An Intuitive",
  "An Inventive",
  "An Irritable",
  "A Joyful",
  "A Jumbo",
  "A Keen",
  "A Knowledgeable",
  "A Large",
  "A Learned",
  "A Luminous",
  "A Lush",
  "A Malfunctioning",
  "A Mammoth",
  "A Massive",
  "A Matte",
  "A Medieval",
  "A Meditative",
  "A Melancholic",
  "A Mesmerizing",
  "A Metallic",
  "A Mind-blowing",
  "A Mindful",
  "A Mint",
  "A Minuscule",
  "A Modular",
  "A Monastic",
  "A Monumental",
  "A Morose",
  "A Morphing",
  "A Multifunctional",
  "A Naive",
  "A Nano-enhanced",
  "A Neglected",
  "A Noble",
  "An Oblivious",
  "An Optimistic",
  "An Ornate",
  "An Overwhelmed",
  "A Peaceful",
  "A Pensive",
  "A Perceptive",
  "A Pessimistic",
  "A Petite",
  "A Phenomenal",
  "A Polished",
  "A Possessed",
  "A Preoccupied",
  "A Preserved",
  "A Pristine",
  "A Proficient",
  "A Quick-witted",
  "A Radiant",
  "A Ravaged",
  "A Ravenous",
  "A Regency-era",
  "A Relaxed",
  "A Renaissance",
  "A Resourceful",
  "A Restless",
  "A Revolutionary",
  "A Robust",
  "A Romanesque",
  "A Rugged",
  "A Ruined",
  "A Rusting",
  "A Satisfied",
  "A Savvy",
  "A Scholarly",
  "A Scratched",
  "A Self-repairing",
  "A Serene",
  "A Shabby",
  "A Shadowy",
  "A Sharp",
  "A Shrewd",
  "A Simple",
  "A Skilled",
  "A Sleek",
  "A Slow",
  "A Smart",
  "A Solar-powered",
  "A Sparkling",
  "A Spectacular",
  "A Spotless",
  "A Staggering",
  "A Startling",
  "A Steampunk",
  "A Stirring",
  "A Stressed",
  "A Sullen",
  "A Tarnished",
  "A Tattered",
  "A Telepathic",
  "A Terrifying",
  "A Threadbare",
  "A Thrilling",
  "A Tiny",
  "A Transparent",
  "A Tudor",
  "An Unaware",
  "An Unblemished",
  "An Universal",
  "An Unsophisticated",
  "An Untouched",
  "A Vandalized",
  "A Vast",
  "A Vibrant",
  "A Victorian",
  "A Weathered",
  "A Well-kept",
  "A Wise",
  "A Worn",
];
let colours = [
  { name: "Red", hex: "#FF0000" },
  { name: "Dark Red", hex: "#8B0000" },
  { name: "Light Red", hex: "#FF3333" },
  { name: "Deep Red", hex: "#800000" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Dark Orange", hex: "#FF8C00" },
  { name: "Light Orange", hex: "#FFC04D" },
  { name: "Burnt Orange", hex: "#CC5500" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Dark Yellow", hex: "#808000" },
  { name: "Light Yellow", hex: "#FFFF99" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Green", hex: "#008000" },
  { name: "Dark Green", hex: "#006400" },
  { name: "Light Green", hex: "#66FF66" },
  { name: "Forest Green", hex: "#228B22" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Dark Blue", hex: "#00008B" },
  { name: "Light Blue", hex: "#ADD8E6" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Dark Indigo", hex: "#3D1F72" },
  { name: "Light Indigo", hex: "#6456B7" },
  { name: "Deep Indigo", hex: "#220066" },
  { name: "Violet", hex: "#8A2BE2" },
  { name: "Dark Violet", hex: "#9400D3" },
  { name: "Light Violet", hex: "#BF94E4" },
  { name: "Pale Violet", hex: "#D8BFD8" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Dark Magenta", hex: "#8B008B" },
  { name: "Light Magenta", hex: "#FF99FF" },
  { name: "Rose", hex: "#FF007F" },
  { name: "Gray", hex: "#808080" },
  { name: "Dark Gray", hex: "#404040" },
  { name: "Light Gray", hex: "#C0C0C0" },
  { name: "Charcoal", hex: "#555555" },
  { name: "Teal", hex: "#008080" },
  { name: "Dark Teal", hex: "#004040" },
  { name: "Light Teal", hex: "#00CCCC" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Dark Coral", hex: "#FF6347" },
  { name: "Light Coral", hex: "#FFA07A" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Mauve", hex: "#BA55D3" },
  { name: "Dark Mauve", hex: "#9370DB" },
  { name: "Light Mauve", hex: "#E0B0FF" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Dark Brown", hex: "#663300" },
  { name: "Light Brown", hex: "#D2B48C" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Fluoro Yellow", hex: "#CCFF00" },
  { name: "Fluoro Pink", hex: "#FF1493" },
  { name: "Fluoro Orange", hex: "#FFD700" },
  { name: "Fluoro Green", hex: "#00FF00" },
  { name: "Fluoro Blue", hex: "#00BFFF" },
  { name: "Ultraviolet", hex: "#9400D3" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Bronze", hex: "#CD7F32" },
  { name: "White", hex: "#E6E6E6" },
  { name: "Black", hex: "#232323" },
];

let nouns = [
  "Adventurer",
  "Advisor",
  "AI Overlord",
  "Alchemist",
  "Alien",
  "Angel",
  "Anarchist",
  "Archaeologist",
  "Archer",
  "Archivist",
  "Assassin",
  "Astronaut",
  "Barbarian",
  "Berserker",
  "Bounty Hunter",
  "Break Dancer",
  "Bowman",
  "Centurion",
  "Champion",
  "Cleric",
  "Clone",
  "Commando",
  "Conquistador",
  "Cosmic Entity",
  "Counselor",
  "Crusader",
  "Curator",
  "Cyborg",
  "Demon",
  "Diplomat",
  "DJ",
  "Dragon",
  "Dragon Rider",
  "Druid",
  "Dwarf",
  "High Elf",
  "Examiner",
  "Explorer",
  "Fairy",
  "Galactic Emperor",
  "Graffiti Artist",
  "Ghost",
  "Gladiator",
  "Graduate",
  "Guardian",
  "Hunter",
  "Traveler",
  "Interstellar Merchant",
  "Inventor",
  "Knight",
  "Lecturer",
  "Legionnaire",
  "Librarian",
  "Mad Scientist",
  "Mage",
  "Marine",
  "Matador",
  "Mentor",
  "Mercenary",
  "Moderator",
  "Musketeer",
  "Mutant",
  "Necromancer",
  "Ninja",
  "Orc",
  "Paladin",
  "Pilot",
  "Pirate",
  "Pirate Captain",
  "Professor",
  "Punk",
  "Ranger",
  "Rebel Fighter",
  "Researcher",
  "Rogue",
  "Ronin",
  "Sailor",
  "Samurai",
  "Scholar",
  "Scientist",
  "Shaman",
  "Sniper",
  "Soldier",
  "Sorcerer",
  "Space Explorer",
  "Space Marine",
  "Space Pirate",
  "Spartan",
  "Spy",
  "Starship Pilot",
  "Student",
  "Superhero",
  "Technician",
  "Templar",
  "Thief",
  "Tiger",
  "Time Traveler",
  "Tutor",
  "Vampire",
  "Viking",
  "Warlock",
  "Warlord",
  "Warrior",
  "Werewolf",
  "Witch",
  "Wizard",
];

let locations = [
  "In An\nAirship",
  "On An\nAlien Planet",
  "In An\nAncient Colosseum",
  "In An\nAncient Forge",
  "In An\nAncient Temple Ruins",
  "In An\nApocalyptic Wasteland",
  "In An\nArctic Research Station",
  "In An\nAsteroid Spaceport",
  "In The\nAstral Plane",
  "In A\nBiodome Habitat",
  "Outside A\nCastle Ruins",
  "In A\nCelestial Observatory",
  "In A\nCelestial Palace",
  "In front Of\nA Futuristic Cityscape",
  "In A\nClockwork City",
  "In A\nCoral Labyrinth",
  "In A\nCoral Reef Kingdom",
  "Inside A\nCosmic Void",
  "In A\nCrystal Cave",
  "In A\nCrystal Citadel",
  "On Top Of A\nCrystal Mountain",
  "In A\nCyberpunk City",
  "In A\nDeep Sea Trench",
  "In A\nDeep Space Outpost",
  "In A\nDesert Oasis",
  "At A\nDimensional Crossroads",
  "Inside The\nDream Realm",
  "In A\nDystopian Megacity",
  "In An\nElemental Shrine",
  "In An\nEnchanted Forest",
  "At A\nFloating Fortress",
  "At A\nFloating Gardens",
  "At A\nFloating Market",
  "In A\nFloating Sky City",
  "In \nForgotten Catacombs",
  "In A\nFrontier Town",
  "In A\nGalactic Spaceport",
  "In A\nGarden Sanctuary",
  "In A\nGhost Town",
  "In A\nGlacial Fortress",
  "In A\nGraveyard",
  "In A\nHaunted Mansion",
  "In A\nHidden Cavern",
  "In A\nForest Sanctuary",
  "In A\nHidden Valley",
  "In A\nHolographic Cityscape",
  "In An\nIce Palace",
  "At An\nInterstellar Highway",
  "At An\nInterstellar Waystation",
  "In A\nJungle Canopy City",
  "In A\nJungle Temple",
  "In A\nLaboratory",
  "In A\nLabyrinth",
  "In A\nLibrary in the Clouds",
  "In A\nLunar Colony",
  "In A\nMartian Metropolis",
  "In A\nMedieval Village",
  "On Top A\nMountain Peak",
  "In A\nMushroom Forest",
  "In A\nMystical Grove",
  "In A\nParallel Dimension",
  "In A\nPirate Hideout",
  "In A\nPirate Shipwreck",
  "In A\nPocket Dimension",
  "In Front Of\nA Portal",
  "At A\nResearch Facility",
  "In A\nRobot Factory",
  "On Top\nSand Dunes",
  "In A\nUnderground Bunker",
  "In A\nShadowy Underworld",
  "Outside A\nSky Castle",
  "On A\nSolar Farm on Mars",
  "On A\nSpace Station",
  "In A\nSpaceship Graveyard",
  "In A\nSteampunk City",
  "In An\nIce Palace",
  "In A\nSubmarine Base",
  "In A\nLava Cavern",
  "In A\nSunken Treasure Ship",
  "At A\nTrading Post",
  "In Front Of\nThe Tree of Life",
  "In A\nTropical Paradise",
  "In An\nUnderground Bunker",
  "In An\nUnderwater City",
  "At A\nVolcanic Crater",
  "In A\nWizard's Tower",
  "In A\nZeppelin City",
  "In Front Of A\nFloating Crystal",
];

let verbs = [
  "Abseiling",
  "Acting",
  "Base jumping",
  "Playing Baseball",
  "Playing Basketball",
  "Biking",
  "Birdwatching",
  "Playing Board Games",
  "Boating",
  "Boxing",
  "Breakdancing",
  "Bungee Jumping",
  "Bursting Balloons",
  "Camping",
  "Carving",
  "Cave Diving",
  "Climbing",
  "Collapsing",
  "Composing",
  "Cooking",
  "Crying",
  "Crafting",
  "Playing Cricket",
  "Crumbling",
  "Cycling",
  "Dancing",
  "Designing",
  "Directing",
  "Disappearing",
  "Diving",
  "Drawing",
  "Engraving",
  "Erupting",
  "Evaporating",
  "Exploding",
  "Exploring",
  "Fencing",
  "Fighting",
  "Filmmaking",
  "Fishing",
  "Playing Football",
  "Free Diving",
  "Gardening",
  "Glassblowing",
  "Go-kart Racing",
  "Golfing",
  "Graffitiing",
  "Pole Vaulting",
  "Hiking",
  "Playing Ice Hockey",
  "Horseback riding",
  "Hoverboarding",
  "Hunting",
  "Ice Skating",
  "Jet Skiing",
  "Jogging",
  "Jumping",
  "Doing Karaoke",
  "Kayaking",
  "Playing Laser Tag",
  "Meditating",
  "Metalworking",
  "Playing Miniature Golf",
  "Mountaineering",
  "Off-Roading",
  "Orienteering",
  "Doing Origami",
  "Swimming",
  "Paintballing",
  "Painting",
  "Paragliding",
  "Doing Parkour",
  "Photographing",
  "Picnicking",
  "Doing Pilates",
  "Plummeting",
  "Doing Pottery",
  "Printmaking",
  "Puppeteering",
  "Rafting",
  "Reading",
  "Rock Climbing",
  "Roller Skating",
  "Playing The Drums",
  "Playing The Guitar",
  "Playing The Violin",
  "Playing The Trumpet",
  "Playing Jazz Flute",
  "Running",
  "Robbing",
  "Sailing",
  "Sculpting",
  "Singing",
  "Skateboarding",
  "Skating",
  "Sketching",
  "Stretching",
  "Skiing",
  "Skydiving",
  "Slaying",
  "Slacklining",
  "Sleeping",
  "Snorkeling",
  "Snowboarding",
  "Spelunking",
  "Sprinting",
  "Stargazing",
  "Stealing Treasure",
  "Storytelling",
  "Making Sushi",
  "Surfing",
  "Swimming",
  "Doing Tai Chi",
  "Playing Tennis",
  "Trampolining",
  "Trekking",
  "Tumbling",
  "Rusting Away",
  "Vanishing",
  "Playing Video Games",
  "Playing Volleyball",
  "Making Pizza",
  "Whitewater Rafting",
  "Windsurfing",
  "Wine Tasting",
  "Woodworking",
  "Wrestling",
  "Writing",
  "Doing Yoga",
  "Zip-lining",
];
    
function setup() {
  createCanvas(1100, 1100);

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
  // Randomly select from each array
  let adjective = random(adjectives);
  let colourObj = random(colours); // Select a color object
  let noun = random(nouns);
  let verb = random(verbs);
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
    console.log("Generate Button clicked!");
    generatePrompt();
  }
  if (
    mouseX > buttonSaveX &&
    mouseX < buttonSaveX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    console.log("Save Button clicked!");
    saveCanvas("prompt_sketch", "png");
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
  pg1.text(words[4], col1, row2);
  pg1.text(words[5], col2, row2);
  pg1.text(words[7], col1, row4);
  pg1.text(words[8], col2, row4);
  pg1.text(words[9], col5, row4);
  pg1.pop();

}
