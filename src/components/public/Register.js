import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8090/api/register', user)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Nom :</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Créer un compte</button>
      </form>
    </div>
  );
};

export default Register;
