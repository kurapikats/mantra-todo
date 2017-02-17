import React from 'react';

const Home = () => (
  <div class="row">
    <div class="col s12">





      <ul class="collection">
        <li class="collection-item">Item 1
          <span class="badge">
            <a href="/"><i class="material-icons">mode_edit</i></a>
            <a href="/"><i class="material-icons">delete</i></a>
          </span>
        </li>
        <li class="collection-item">Item 2</li>
        <li class="collection-item">Item 3</li>
        <li class="collection-item">Item 4</li>
      </ul>

      <div class="fixed-action-btn">
        <a class="btn-floating btn-medium waves-effect waves-light red">
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
