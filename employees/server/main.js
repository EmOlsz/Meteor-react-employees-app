import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();
  // if (!numberRecords) {
  //
  // }
});