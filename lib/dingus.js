const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext('2d');

var dingus = new Dingus({ctx: ctx});

function Dingus(x, y, height, width){
  var opts = options || {};
  this.x = options.x || 0; //change options to opts if we want it to be able to not pass anything
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
};

Dingus.prototype.scoot = function(){
  this.x ++;
}

Dingus.prototype.draw = function(){
  this.ctx.fillStyle = "#FF0000";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

module.exports = Dingus;
