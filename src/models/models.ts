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
