import React from 'react';
import { Form } from './Form/Form';
import { Matrix } from './Matrix/Matrix';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Form />
      <Matrix />
    </div>
  );
};
