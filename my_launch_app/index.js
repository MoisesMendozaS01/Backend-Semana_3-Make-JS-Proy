//importamos la clase del archivo app/missionCommander
const MissionCommander = require('./app/missionCommander');

//instanciamos tres objetos
const Fer =new MissionCommander("Fernanda")
console.log(Fer.name)

const rodri =new MissionCommander("Rodrigo")
console.log(rodri.name)

const carlo = new MissionCommander("Carlo")
console.log(carlo.name)

