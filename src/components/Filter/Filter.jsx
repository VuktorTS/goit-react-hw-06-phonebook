import css from './Filter.module.css';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label htmlFor={nanoid()} className={css.filterLabel}>
      Find contacts by name
      <input
        value={value}
        className={css.filterInput}
        type="text"
        placeholder="find contact"
        onChange={onChangeFilter}
      />
    </label>
  );
};
