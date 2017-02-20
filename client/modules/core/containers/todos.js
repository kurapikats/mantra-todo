import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Todos from '../components/todos.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const options = {
    sort: {createdDate: 1}
  };

  if (Meteor.subscribe('todos.all', options).ready()) {
    const todos = Collections.Todos.find().fetch();
    onData(null, {todos});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Todos);
