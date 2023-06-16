import React from 'react';
import '../public/Contact.css';


const Contact = () => {
  return (
  
    <div className="container">
  
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Formulaire de Contact</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="nameInput" />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email</label>
                  <input type="email" className="form-control" id="emailInput" />
                </div>
                <div className="mb-3">
                  <label htmlFor="messageInput" className="form-label">Message</label>
                  <textarea className="form-control" id="messageInput" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;








