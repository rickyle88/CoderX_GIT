function Horse(){
}

Horse.prototype.jump = function(){
    console.log('Jumping');
}
Horse.prototype.run = function(){
    console.log('Horse is running');
}

module.exports = Horse;