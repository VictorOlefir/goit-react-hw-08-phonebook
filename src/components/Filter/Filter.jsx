import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { LabelFilter, FilterInput } from './Filter.styled';
import { selectFilter } from 'components/redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <LabelFilter htmlFor="filter">
      Find contacts by name:
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </LabelFilter>
  );
};
