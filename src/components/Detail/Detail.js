import React from 'react';

const Detail = (props) => {
        const {img,des,rating,name} = props.detail;
  return (
    <div>
        <div className="col ">
    <div className="card ">
      <img src={img} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{des}</p>
        <h6 className="card-text">Rating : {rating}</h6>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Detail;