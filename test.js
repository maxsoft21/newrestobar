const chai = require('chai');
const expect = chai.expect;

describe('Ejemplo de prueba', () => {
    it('Debería retornar true cuando 1 es igual a 1', () => {
        expect(1).to.equal(1);
    });

    it('Debería retornar true cuando 2 más 2 es igual a 4', () => {
        expect(2 + 2).to.equal(4);
    });

    it('Debería retornar true cuando una cadena contiene "Node.js"', () => {
        expect('Bienvenido a Node.js').to.include('Node.js');
    });
});
