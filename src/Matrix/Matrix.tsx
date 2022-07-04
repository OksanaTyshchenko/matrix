import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import './Matrix.scss';
import { actions, selectors } from '../store';
import { X } from '../types';

export const Matrix = () => {
  const xArr = useSelector(selectors.getXArr);
  const [selectedCell, setSelectedCell] = useState<null | X>(null);
  const [selectedRow, setSelectedRow] = useState<null | number>(null);
  const countClosest = useSelector(selectors.getCountClosest);
  const dispatch = useDispatch();

  const avg = Array.from({ length: xArr[0]?.length }, (_: undefined, index: number) => {
    return Math.round(xArr.reduce((acc, el) => {
      return acc + el[index].amount;
    }, 0) / xArr.length);
  });

  const calculateSum = (arr: X[]) => {
    return arr.reduce((sum, num) => sum + num.amount, 0);
  };

  const calculatePart = (amount: number, row: X[]) => {
    return ((amount / calculateSum(row)) * 100).toFixed(1);
  };

  const handleHoverCell = (cell: X) => {
    setSelectedCell(cell);
  };

  const handleHoverSum = (rowIndex: number) => {
    setSelectedRow(rowIndex);
    setSelectedCell(null);
  };

  const addRow = () => {
    const newRow = Array.from({ length: xArr[0]?.length }, () => ({
      id: uuidv4(),
      amount: Math.ceil(Math.random() * 1000),
    }));

    dispatch(actions.addRow(newRow));
  };

  const target = selectedCell?.amount;
  const joinArr = xArr.flat();
  const sortedArr = target ? joinArr
    .sort((a, b) => (Math.abs(a.amount - target) - Math.abs(b.amount - target))) : null;
  const closest = sortedArr?.slice(1, countClosest + 1);

  const isCellClosest = (cell: X): boolean => {
    if (!closest) {
      return false;
    }

    const searchEl = closest.find(({ amount }) => amount === cell.amount);

    return !!searchEl;
  };

  return (
    <div className="wrapper">
      <table
        className="Matrix"
        onMouseLeave={() => {
          setSelectedCell(null);
        }}
      >
        <tbody>
          {xArr.map((row, rowIndex) => (
            <tr key={uuidv4()}>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(actions.deleteRow(rowIndex))}
                  className="Matrix__button Matrix__delete"
                >
                  🗑
                </button>
              </td>
              {row.map((cell, colIndex) => (
                <td key={cell.id}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(actions.updateXArr(rowIndex, colIndex));
                    }}
                    onMouseOver={() => handleHoverCell(cell)}
                    onFocus={() => handleHoverCell(cell)}
                    className={classNames('Matrix__button', {
                      Matrix__relatedButton: isCellClosest(cell),
                      Matrix__selectedButton: cell.id === selectedCell?.id,
                      Matrix__buttonPercent: selectedRow === rowIndex,
                    })}
                  >
                    {selectedRow === rowIndex ? (
                      <>
                        <span>{`${calculatePart(cell.amount, row)}%`}</span>
                        <div style={{ height: `${calculatePart(cell.amount, row)}%` }} className="Matrix__part">{}</div>
                      </>
                    ) : (<span>{cell.amount}</span>)}
                  </button>
                </td>
              ))}
              <td
                className="Matrix__selected Matrix__sum"
                onFocus={() => handleHoverSum(rowIndex)}
                onMouseOver={() => handleHoverSum(rowIndex)}
                onMouseLeave={() => setSelectedRow(null)}
              >
                {calculateSum(row)}
              </td>
            </tr>
          ))}
          <tr>
            {xArr.length > 0 && <td></td>}
            {avg.map(value => (
              <td key={uuidv4()} className="Matrix__selected">{value}</td>))}
            {xArr.length > 0 && <td className="Matrix__selected">avg/sum</td>}
          </tr>
        </tbody>
      </table>
      {xArr.length > 0
      && <button type="button" className="button is-info Matrix__addButton" onClick={addRow}>Add row</button>}
    </div>
  );
};
