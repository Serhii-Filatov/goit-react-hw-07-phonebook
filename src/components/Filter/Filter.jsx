import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/contactsReducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.div}>
      <h3 className={css.title}>Fined contacts by name</h3>
      <input
        className={css.filterInput}
        onChange={handleFilterInputChange}
        type="text"
        name="filter"
      />
    </div>
  );
};
