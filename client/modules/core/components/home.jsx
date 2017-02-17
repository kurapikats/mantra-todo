import React from 'react';
import AddButton from './add_button';
import Todos from '../containers/todos';

const Home = () => (
  <div class="row">
    <div class="col s12">
      <Todos />
      <AddButton />
    </div>
  </div>
);

export default Home;
