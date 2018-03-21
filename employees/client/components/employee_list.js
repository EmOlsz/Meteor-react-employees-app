import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeElement from './employee_element';

const EmployeeList = (props) => {

  const { employees } = props;
  console.log(employees);

  if (!employees.length) {
    return (
      <div>Loading...</div>
    )
  }

  const employee = employees.map(employee => {
    return (
      <EmployeeElement
        key={employee._id}
        employee={employee}
      />
    )
  });

  return (
    <ul className="employee-list">
      {employee}
    </ul>
  )
};

export default createContainer(() => {
  Meteor.subscribe('employees');
  return { employees: Employees.find({}).fetch() }
}, EmployeeList)