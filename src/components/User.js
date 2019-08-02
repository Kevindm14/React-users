import React from 'react';

function Users(e) {
  const { name, picture } = e.user;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-content">
          <span className="card-title"><img src={picture.large} alt={name.first} /></span>
          <p>{name.first.toUpperCase()}</p>
        </div>
        
        { // <div className="card-action">
          //  <a href="/" className="waves-effect cyan waves-light btn">Show perfil</a>
          // </div>
        }
      </div>
    </div>
  )
}

export default Users;