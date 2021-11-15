import React from 'react';

const Persons = () => (
  <span className="form_input form_persons_text">
    <span className="js-adults-counter">0</span>
    {' '}
    Adults -
    <span className="js-children-counter">0</span>
    {' '}
    Children -
    <span className="js-rooms-counter">0</span>
    {' '}
    Rooms
  </span>
);

export default Persons;
