var initialize = function(){

  var url = "http://hp-api.herokuapp.com/api/characters";
  var request = new XMLHttpRequest;
  request.open("GET", url);

  request.addEventListener("load", function(){
    if (this.status === 200) {
      var characters = JSON.parse(this.responseText);
      render(characters);
    }
  })
  request.send();
};

var render = function(characters) {
  var ulTag = document.querySelector("#characters-list")
  var list = document.createElement("ul")

  characters.forEach(function(character) {
    var li = createLis(character);
    list.appendChild(li);
  });
  ulTag.appendChild(list)
};

var createLis = function(character){
  var liTag = document.createElement("li");
  liTag.innerText = character.name;
  var img = createImage(character);
  liTag.appendChild(img);
  return liTag;
}

  var createImage = function(character) {
    var image = document.createElement("img")
    console.log("image", image);
    image.src = character.image;
    console.log("image_url", character.image);
    console.log("image.src", image.src);
    return image;
  }

window.addEventListener("load", initialize);
