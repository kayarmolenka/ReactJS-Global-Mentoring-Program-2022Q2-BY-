export interface MockData {
  id: number;
  title: string;
  poster: string;
  realiseDate: number;
  genre: string;
  runtime?: string;
  overview?: string;
  rating?: string;
  movieUrl?: string;
}

export const date: MockData[] = [
  {
    id: 1,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    realiseDate: 2004,
    poster: require('../assets/images/poster_1.png'),
    runtime: '123',
    rating: '10',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biography, Music',
    realiseDate: 2003,
    poster: require('../assets/images/poster_2.png'),
    runtime: '90',
    rating: '9',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 3,
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    realiseDate: 1994,
    poster: require('../assets/images/poster_3.png'),
    runtime: '90',
    rating: '8',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 4,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    realiseDate: 2004,
    poster: require('../assets/images/poster_4.png'),
    runtime: '200',
    rating: '3',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 5,
    title: 'Inception',
    genre: 'Action & Adventure',
    realiseDate: 2003,
    poster: require('../assets/images/poster_5.png'),
    runtime: '44',
    rating: '4',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 6,
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    realiseDate: 1994,
    poster: require('../assets/images/poster_6.png'),
    runtime: '56',
    rating: '5.7',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.Lorem40',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 7,
    title: 'Rings',
    genre: 'Horror',
    realiseDate: 2017,
    poster: require('../assets/images/poster_7.jpg'),
    runtime: '23',
    rating: '8.9',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.Lorem40',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 8,
    title: 'The Bucket List',
    genre: 'Comedy',
    realiseDate: 2007,
    poster: require('../assets/images/poster_8.jpg'),
    runtime: '67',
    rating: '7.7',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.Lorem40',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 9,
    title: 'The Godfather',
    genre: 'Crime',
    realiseDate: 1972,
    poster: require('../assets/images/poster_9.jpg'),
    runtime: '87',
    rating: '5.8',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.Lorem40',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 10,
    title: 'The Age of Stupid',
    genre: 'Documentary',
    realiseDate: 2009,
    poster: require('../assets/images/poster_10.jpg'),
    runtime: '90',
    rating: '4.8',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.Lorem40',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 11,
    title: 'The Hangover',
    genre: 'Comedy',
    realiseDate: 2009,
    poster: require('../assets/images/poster_11.jpg'),
    runtime: '110',
    rating: '6.9',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },

  {
    id: 12,
    title: 'Neighbors',
    genre: 'Comedy',
    realiseDate: 2014,
    poster: require('../assets/images/poster_12.jpg'),
    runtime: '134',
    rating: '9.9',
    overview:
      'Proin vivamus diam risus a amet maecenas pharetra molestie duis: mauris congue curabitur, sapien ut vitae vivamus cursus ligula, mauris rutrum enim ut. Auctor pharetra vivamus eget diam proin urna porta enim elementum leo et urna bibendum, sapien. Elementum nec metus in: lorem gravida ornare orci leo sed vulputate bibendum fusce tellus, ligula fusce quam ut at vitae. Vulputate tempus sed odio et non rutrum: adipiscing sem - pellentesque eros urna integer et. Ut sapien proin amet molestie at leo ligula pharetra justo sodales morbi amet justo ut eget. Auctor non sodales bibendum sapien vitae congue enim ultricies - odio: tempus eu at ligula donec.',
    movieUrl: 'www.cinoGo.com',
  },
];
