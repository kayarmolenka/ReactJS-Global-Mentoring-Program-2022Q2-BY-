export enum ButtonType {
  SUBMIT = 'submit',
}

export interface IMovieList {
  budget: number;
  genres: string[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieCardProps {
  movieData: IMovieList;
  isShowEditModal: boolean;
  setIsShowEditModal: (param: boolean) => void;
  setActivePopup: (id: number) => void;
  activePopupId: number;
  handleMovieCard: (id: number) => void;
}

export enum ValueSortMovie {
  RELEASE_DATE = 'Release date',
  GENRE = 'Genre',
  RATING = 'Rating',
}

export enum ValueFilter {
  ALL = 'All',
  DOCUMENTARY = 'Documentary',
  COMEDY = 'Comedy',
  HORROR = 'Horror',
  CRIME = 'Crime',
}

export interface IMovieParams {
  title: string;
  poster_path: string;
  overview: string;
  runtime: number;
  genres: string[];
  release_date?: string;
  vote_average?: number;
}

export type IdMovie = number;
