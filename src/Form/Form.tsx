import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import './Form.scss';
import { actions } from '../store';

export const Form = () => {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);
  const dispatch = useDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const createdXArr = Array.from({ length: rows },
      () => Array.from({ length: columns }, () => ({
        id: uuidv4(),
        amount: Math.ceil(Math.random() * 1000),
      })));

    dispatch(actions.addXArr(createdXArr));
  };

  return (
    <form onSubmit={handleSubmit} className="box Form">
      <label htmlFor="rows" className="label">
        Count rows:
        <input
          type="number"
          min={0}
          max={100}
          id="rows"
          value={rows}
          onChange={(event) => setRows(+event.target.value)}
          className="Form__input"
        />
      </label>

      <label htmlFor="columns" className="label">
        Count columns:
        <input
          type="number"
          min={0}
          max={100}
          id="columns"
          value={columns}
          onChange={(event) => setColumns(+event.target.value)}
          className="Form__input"
        />
      </label>

      <button type="submit" className="button is-info Form__button">
        Create matrix
      </button>
    </form>
  );
};
