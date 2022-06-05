import { ChangeEvent, MouseEvent } from 'react';

export enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export interface IMovieSortProps {
  activeSortType: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface IMovieResulSearchProps extends IMovieSortProps {
  activeGenre: string;
  handleGenre: (e: MouseEvent<HTMLButtonElement>) => void;
}
