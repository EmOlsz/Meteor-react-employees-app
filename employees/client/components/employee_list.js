import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeElement from './employee_element';

const PER_PAGE = 5;

class EmployeeList extends Component {

  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    this.page += 1;
    Meteor.subscribe('employees', PER_PAGE * this.page);
  };

  render() {

    const { employees } = this.props;

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
      <div>
        <ul className="employee-list">
          {employee}
        </ul>
        <button
          className="btn btn-primary"
          onClick={this.handleButtonClick.bind(this)}
        >
          Load more...
        </button>
      </div>
    )
  };
};

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  return { employees: Employees.find({}).fetch() }
}, EmployeeList)