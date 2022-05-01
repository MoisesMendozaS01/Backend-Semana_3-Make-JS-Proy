const MissionCommander = require("../app/missionCommander");

describe("Prueba de unidad MissionCommander", () => {
    test('Caso de prueba 1: Creacion de objeto', () => {
        //Aqui puedes usar el código que deseas utilizar
        const carlo = new MissionCommander("Carlo")

        //Validar el resultado esperado
        expect(carlo.name).toBe("Carlo!");
    });
  })