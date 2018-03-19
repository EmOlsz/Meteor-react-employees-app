import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {

  const { employees } = props;

  if (!employees.length) {
    return (
      <div>Loading...</div>
    )
  }

  const employee = employees.map(employee => {
    return (
      <li key={employee._id}>
        {employee.name}
      </li>
    )
  });

  return (
    <ul>
      {employee}
    </ul>
  )
};

export default createContainer(() => {
  Meteor.subscribe('employees');
  return { employees: Employees.find({}).fetch() }
}, EmployeeList)