fetch('https://pokeapi.co/api/v2/pokemon/248')
  .then(response => response.json())
  .then(data => console.log(data));
