import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Employees App
    </div>
  )
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});