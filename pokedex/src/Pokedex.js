import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        {this.props.pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.exp} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
