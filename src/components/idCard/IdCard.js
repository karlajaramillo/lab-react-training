import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const {lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idCard-wrapper">
      <div>
        <img src={picture} alt={lastName} />
      </div>
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height: </strong>{height}</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p> 
        {/* .toDateString() ->'Tue Jul 14 1992' */}
        {/* Tue Jul 14 1992 02:00:00 GMT+0200 (Central European Summer Time) */}
      </div>
    </div>
  )
}
export default IdCard;