import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function PokemonList(props) {
  const pokemons = props.pokedex;
  const listItems = pokemons.map(pokemon =>
    <ListItem key={pokemon.number} value={pokemon.name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ReactDOM.render(
  <PokemonList pokedex={pokedex} />,
  document.getElementById('root')
);
