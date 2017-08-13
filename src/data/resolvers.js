import RESTConnector from './connectors';

const BASE_URL = 'https://swapi.co/api';

// helpers
const loadPaginate = (endpoint, all) => (_, args) =>
  RESTConnector.loadPaginate(`${BASE_URL}/${endpoint}/`, args.search, all);
const loadOne = endpoint => (_, args) =>
  RESTConnector.loadOne(`${BASE_URL}/${endpoint}/${args.id}`);

const resolvers = {
  Query: {
    getPeople: loadPaginate('people'),
    getAllPeople: loadPaginate('people', true),
    getPersonById: loadOne('people'),
    getFilms: loadPaginate('films'),
    getFilmById: loadOne('films'),
    getStarships: loadPaginate('starships'),
    getStarshipById: loadOne('starships'),
    getVehicles: loadPaginate('vehicles'),
    getVehicleById: loadOne('vehicles'),
    getSpecies: loadPaginate('species'),
    getSpecieById: loadOne('species'),
    getPlanets: loadPaginate('planets'),
    getPlanetById: loadOne('planets'),
  },
  Person: {
    homeworld(person) {
      return RESTConnector.loadOne(person.homeworld);
    },
    films(person) {
      return RESTConnector.loadMany(person.films);
    },
    species(person) {
      return RESTConnector.loadMany(person.species);
    },
    vehicles(person) {
      return RESTConnector.loadMany(person.vehicles);
    },
    starships(person) {
      return RESTConnector.loadMany(person.starships);
    },
  },
  Film: {
    species(film) {
      return RESTConnector.loadMany(film.species);
    },
    characters(film) {
      return RESTConnector.loadMany(film.characters);
    },
    planets(film) {
      return RESTConnector.loadMany(film.planets);
    },
    starships(film) {
      return RESTConnector.loadMany(film.starships);
    },
    vehicles(film) {
      return RESTConnector.loadMany(film.vehicles);
    },
  },
  Starship: {
    pilots(starship) {
      return RESTConnector.loadMany(starship.pilots);
    },
    films(starship) {
      return RESTConnector.loadMany(starship.films);
    },
  },
  Vehicle: {
    pilots(starship) {
      return RESTConnector.loadMany(starship.pilots);
    },
    films(starship) {
      return RESTConnector.loadMany(starship.films);
    },
  },
  Specie: {
    homeworld(specie) {
      return RESTConnector.loadOne(specie.homeworld);
    },
    people(specie) {
      return RESTConnector.loadMany(specie.people);
    },
    films(specie) {
      return RESTConnector.loadMany(specie.films);
    },
  },
  Planet: {
    residents(planet) {
      return RESTConnector.loadMany(planet.residents);
    },
    films(planet) {
      return RESTConnector.loadMany(planet.films);
    },
  },
};

export default resolvers;
