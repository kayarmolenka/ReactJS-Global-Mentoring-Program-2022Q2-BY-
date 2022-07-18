import { ChangeEvent } from 'react';
import { Field } from 'formik';
import { FormikErrors, FormikTouched } from 'formik/dist/types';
import { IMovieList } from '../../models';

import styles from './FormField.module.scss';

type NameField = keyof IMovieList;

interface IFormFieldProps {
  className: string;
  labelText: string;
  nameField: NameField;
  placeholder?: string;
  errors: FormikErrors<IMovieList>;
  touched: FormikTouched<IMovieList>;
  typeField?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = (props: IFormFieldProps) => {
  const {
    nameField,
    typeField,
    errors,
    className,
    placeholder,
    touched,
    labelText,
    onBlur,
    onFocus,
  } = props;
  return (
    <div className={className}>
      <label htmlFor={nameField} className={styles.labelFormField}>
        {labelText}
      </label>
      <Field
        name={nameField}
        type={typeField || 'text'}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {errors[nameField] && touched[nameField] ? (
        <div className={styles.errorWarning}>{errors[nameField]}</div>
      ) : null}
    </div>
  );
};
