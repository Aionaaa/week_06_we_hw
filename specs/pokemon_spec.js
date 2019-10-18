const assert = require("assert");
const Pokemon = require("../pokemon.js");

describe("Pokemon", function(){
  it("should have a name", function(){
    const pokemon = new Pokemon("Espeon");
    actual = pokemon.name
    assert.strictEqual(actual, "Espeon");
  })
});
