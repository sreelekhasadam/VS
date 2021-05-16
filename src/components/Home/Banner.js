import React from 'react';

const Banner = ({ appName, token }) => {
  /* if (token) {
    return null;
  } */
  return (
    <div className="banner" style={{backgroundColor: '#030222'}}>
      <div className="container">
        <h1 className="logo-font" style={{color:'#FFFFE7'}}>
                  {appName.toLowerCase()}
        </h1>
        <p style={{color:'#FFFFE7'}}>A place to share your love.<i className="ion-heart btn-outline-danger"></i></p>
      </div>
    </div>
  );
};

export default Banner;
