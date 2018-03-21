import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';
import _ from 'lodash';

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      const avatar = image.avatar();

      Employees.insert({
        name,
        email,
        phone,
        avatar
      })
    });
  }

  Meteor.publish('employees', (PER_PAGE) => {
    return Employees.find({}, { limit: PER_PAGE });
  });
});