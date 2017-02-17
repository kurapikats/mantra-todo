import {Todos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('todos.all', function (options) {
    return Todos.find({}, options);
  });
}
