import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { valueSortMovie } from '../../constants';
import { mapNameSorts } from '../../utils';

import styles from './MovieSort.module.scss';

interface IMovieSortProps {
  chosenTypeSorting: string;
  onHandleSortType: (e: SelectChangeEvent) => void;
}

export const MovieSort = (props: IMovieSortProps) => {
  const { chosenTypeSorting, onHandleSortType } = props;
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.movieSort}>
      <ul>
        <li className={styles.movieSortBy}>{'Sort by'}</li>
        <li className={styles.movieSortRealiseDate}>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel className={styles.movieSortSelect}>Select Sort</InputLabel>
              <Select
                className={styles.movieSortSelect}
                data-testid="materialUiSelect"
                value={mapNameSorts(searchParams.get('sortBy') || '') || chosenTypeSorting}
                label="Select Sort"
                onChange={onHandleSortType}
              >
                {valueSortMovie.map((typeSort) => (
                  <MenuItem key={typeSort} value={typeSort}>
                    {typeSort}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </li>
      </ul>
    </div>
  );
};
