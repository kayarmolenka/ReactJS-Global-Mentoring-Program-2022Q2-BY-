export interface MockData {
  id: number;
  title: string;
  poster: string;
  realiseDate: number;
  genre: string;
}

export const date: MockData[] = [
  {
    id: 1,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    realiseDate: 2004,
    poster: require('../assets/images/poster_1.png'),
  },

  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biography, Music',
    realiseDate: 2003,
    poster: require('../assets/images/poster_2.png'),
  },

  {
    id: 3,
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    realiseDate: 1994,
    poster: require('../assets/images/poster_3.png'),
  },

  {
    id: 4,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    realiseDate: 2004,
    poster: require('../assets/images/poster_4.png'),
  },

  {
    id: 5,
    title: 'Inception',
    genre: 'Action & Adventure',
    realiseDate: 2003,
    poster: require('../assets/images/poster_5.png'),
  },

  {
    id: 6,
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    realiseDate: 1994,
    poster: require('../assets/images/poster_6.png'),
  },

  {
    id: 7,
    title: 'Rings',
    genre: 'Horror',
    realiseDate: 2017,
    poster: require('../assets/images/poster_7.jpg'),
  },

  {
    id: 8,
    title: 'The Bucket List',
    genre: 'Comedy',
    realiseDate: 2007,
    poster: require('../assets/images/poster_8.jpg'),
  },

  {
    id: 9,
    title: 'The Godfather',
    genre: 'Crime',
    realiseDate: 1972,
    poster: require('../assets/images/poster_9.jpg'),
  },

  {
    id: 10,
    title: 'The Age of Stupid',
    genre: 'Documentary',
    realiseDate: 2009,
    poster: require('../assets/images/poster_10.jpg'),
  },

  {
    id: 11,
    title: 'The Hangover',
    genre: 'Comedy',
    realiseDate: 2009,
    poster: require('../assets/images/poster_11.jpg'),
  },

  {
    id: 12,
    title: 'Neighbors',
    genre: 'Comedy',
    realiseDate: 2014,
    poster: require('../assets/images/poster_12.jpg'),
  },
];
