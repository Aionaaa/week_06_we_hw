const assert = require("assert");
const Pokemon = require("../js/pokemon.js");

describe("Pokemon", function(){
  it("should have a name", function(){
    const pokemon = new Pokemon("Espeon", "Psychic");
    actual = pokemon.name
    assert.strictEqual(actual, "Espeon");
  })

  it("should have a type", function(){
    const pokemon = new Pokemon("Espeon", "Psychic");
    actual = pokemon.type
    assert.strictEqual(actual, "Psychic")
  })
});
