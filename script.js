let myLibrary = [
  new Game("Hearthstone", "Blizzard", "iOS", "still playing"),
  new Game("Hollow Knight", "Team Cherry", "Nintendo Switch", "still playing"),
  new Game("Red Dead Redemption 2", "Rockstar", "PS4", "shelved")
];

function Game(title, developer, platform, status) {
  this.title = title;
  this.developer = developer;
  this.platform = platform;
  this.status = status;
  this.info = function() {
    return `${title} by ${developer} for ${platform}, ${status}`;
  };
}

function addGameToLibrary(game) {
  myLibrary.push(game);
}

function render() {
  myLibrary.forEach(game => {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(game.info());
    node.appendChild(textnode);
    document.getElementById("shelf").appendChild(node);
    console.log(`${game.info()} added`);
  });
}

render();
