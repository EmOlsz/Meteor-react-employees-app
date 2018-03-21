import React from 'react';

const EmployeeElement = (props) => {

  const { name, email, phone, avatar } = props.employee;

  return (
    <li className="employee-list-element thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3 className="name">{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </li>
  )

};

export default EmployeeElement;