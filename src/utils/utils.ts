import * as Yup from 'yup';
import { ValueSortMovie } from '../models';

export const mapSortsName = (typeSort: string) => {
  if (typeSort === ValueSortMovie.RELEASE_DATE) {
    return 'release_date';
  }
  if (typeSort === ValueSortMovie.GENRE) {
    return 'genres';
  }

  return 'vote_average';
};

export const mapNameSorts = (typeSort: string) => {
  if (typeSort === 'release_date') {
    return ValueSortMovie.RELEASE_DATE;
  }
  if (typeSort === 'genres') {
    return ValueSortMovie.GENRE;
  }

  if (typeSort === 'vote_average') {
    return ValueSortMovie.RATING;
  }
};

export const convertIdFromStringToNumber = (id: string) => {
  return Number(id.slice(7));
};

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title must contain at least 2 characters.')
    .max(40, 'Title must be 120 characters or less.')
    .required('Please add a title.'),
  release_date: Yup.date()
    .required('Please choose a release date.')
    .min('1920-01-01', 'The release date must be after 1920 year.')
    .max(new Date(), "The release date in the future isn't allowed."),
  poster_path: Yup.string()
    .matches(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/,
      'Please enter a correct url.',
    )
    .required('Please add an url.'),
  vote_average: Yup.number()
    .required('Please add rating.')
    .min(1, 'The rating must not be less than 1.')
    .max(100, 'The rating must not be more than 100.'),
  genres: Yup.array().min(1, 'Please choose at least one genre.'),
  runtime: Yup.number()
    .required('Please add runtime.')
    .min(10, 'The runtime must be longer than 10 minutes.')
    .max(300, 'The runtime must be shorter than 250 minutes.'),
  overview: Yup.string()
    .required('Please add an overview of movie.')
    .min(20, 'The overview must be at least 20 characters long.')
    .max(1000, 'The overview is too long, please make it less than 1000 characters.'),
});
