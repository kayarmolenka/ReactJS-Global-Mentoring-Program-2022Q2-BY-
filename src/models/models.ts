import { ChangeEvent } from 'react';

export enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export interface IMovieSortProps {
  activeSortType: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}
