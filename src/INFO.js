const INFO = [
  {
    People: {
      Name: 'The name of the person.',
      'Birth Year':
        'The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.',
      'Eye Color':
        'The eye color of the person. Will be "unknown" if not known or "n/a" if the person does not have an eye.',
      Gender:
        'The gender of the person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.',
      'Hair Color':
        'The hair color of the person. Will be "unknown" if not known or "n/a" if the person does not have hair.',
      Mass: 'The mass of the person in kilograms.',
      Height: 'The height of the person in centimeters.',
      'Skin Color': 'The skin color of the person.',
    },
  },
  {
    Films: {
      Title: 'The title of the film.',
      'Episode ID': 'The episode number of the film.',
      'Opening Crawl': 'The opening paragraphs at the beginning of the film.',
      Director: 'The name of the director of the film.',
      Producer: 'The name(s) of the producer(s) of the film. Comma separated.',
      'Release Date': 'The  date of film release at original creator country.',
      Characters: 'A list of people that are in the film.',
      'Skin Color': 'The skin color of the person.',
    },
  },
  {
    Starships: {
      Name: 'The name of the starship. The common name, such as "Death Star".',
      Model:
        'The model or official name of the starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".',
      'Starship Class':
        'The class of the starship, such as "Starfighter" or "Deep Space Mobile Battlestation.',
      Manufacturer:
        'The manufacturer of the starship. Comma separated if more than one.',
      'Cost in Credits': 'The cost of the starship new, in galactic credits.',
      Length: 'The length of the starship in meters.',
      Crew: 'The number of personnel needed to run or pilot the starship.',
      Passengers:
        'The number of non-essential people the starship can transport.',
      'Max Atmosphering Speed':
        'The maximum speed of the starship in the atmosphere. "N/A" if the starship is incapable of atmospheric flight.',
      'Hyperdrive Rating': 'The class of the starships hyperdrive.',
      MGLT:
        'The Maximum number of Megalights the starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. the figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.',
      'Cargo Capacity':
        'The maximum number of kilograms that the starship can transport.',
      Consumables:
        'The maximum length of time that the starship can provide consumables for its entire crew without having to resupply.',
      'Pilots ': 'A list of People that the starship has been piloted by.',
    },
  },
  {
    Vehicles: {
      Name:
        'The name of the vehicle. The common name, such as "Sand Crawler" or "Speeder bike".',
      Model:
        'The model or official name of the vehicle. Such as "All-Terrain Attack Transport".',
      'Vehicle Class':
        'The class of the vehicle, such as "Wheeled" or "Repulsorcraft".',
      Manufacturer:
        'The manufacturer of the vehicle. Comma separated if more than one.',
      'Cost in Credits': 'The cost of the vehicle new, in Galactic Credits.',
      Length: 'The length of the vehicle in meters.',
      Crew: 'The number of personnel needed to run or pilot the vehicle.',
      Passengers:
        'The number of non-essential people the vehicle can transport.',
      'Max Atmosphering Speed':
        'The maximum speed of the vehicle in the atmosphere.',
      'Cargo Capacity':
        'The maximum number of kilograms that the vehicle can transport.',
      Consumables:
        'The maximum length of time that the vehicle can provide consumables for its entire crew without having to resupply.',
      'Pilots ': 'A list of People that the vehicle has been driven by.',
    },
  },
  {
    Planets: {
      Name: 'The name of the planet.',
      Diameter: 'The diameter of the planet in kilometers.',
      'Orbital Period':
        'The number of standard days it takes for the planet to complete a single orbit of its local star.',
      Gravity:
        'A number denoting the gravity of the planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.',
      Population:
        ' The average population of sentient beings inhabiting the planet.',
      Climate: ' The climate of the planet. Comma separated if diverse.',
      Terrain: ' The terrain of the planet. Comma separated if diverse.',
      Surface_water:
        ' The percentage of the planet surface that is naturally occurring water or bodies of water.',
      Residents: ' A list of People that live on the planet.',
    },
  },
  {
    'General Info': {
      Homeworld: 'A planet that the person was born on or inhabits.',
      Films: 'A list of films that the person has been in.',
      Species: 'A list of species that the person belongs to',
      Starships: 'A list of starships that the person has piloted.',
      Vehicles: 'A list of vehicles that the person has piloted.',
      Url: 'The hypermedia URL of the resource.',
      Created: 'The time that the resource was created.',
      Edited: ' The time that the resource was edited.',
    },
  },
];

export default INFO;
