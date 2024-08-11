import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import styles from './SearchBox.module.css';

function SearchBox() {
  const contactFilterId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeInputHandler = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={contactFilterId}>Find contacts by name</label>
      <input
        className={styles.input}
        placeholder="Search contact"
        value={filter}
        onChange={onChangeInputHandler}
        type="text"
        name="contactFilter"
        id={contactFilterId}
      />
    </div>
  );
}

export default SearchBox;
