import React, { useState } from 'react';
import axios from 'axios';

const CreateCommande = () => {
  const [commande, setCommande] = useState({
    numComm: '',
    dateComm: '',
    client: {},
    lignesCommande: [
      { article: { id:'', description: '', titre:'',resume: '', prix: '' }, quantite: '' },
      { article: { description: '', resume: '', prix: ''}, quantite: '' }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedLignesCommande = [...commande.lignesCommande];
    updatedLignesCommande[index].article[name] = value;

    setCommande({ ...commande, lignesCommande: updatedLignesCommande });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/commandes/save', commande);
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="numComm" className="form-label">Numéro de commande</label>
        <input
          type="text"
          id="numComm"
          className="form-control"
          name="numComm"
          placeholder="Numéro de commande"
          value={commande.numComm}
          onChange={(e) => setCommande({ ...commande, numComm: e.target.value })}
        />
      </div>

      {commande.lignesCommande.map((ligneCommande, index) => (
        <div key={index} className="mb-3">
          <label className="form-label">Article #{index + 1}</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Description de l'article"
            value={ligneCommande.article.description}
            onChange={(e) => handleChange(e, index)}
          />

          <input
            type="text"
            className="form-control"
            name="resume"
            placeholder="Résumé de l'article"
            value={ligneCommande.article.resume}
            onChange={(e) => handleChange(e, index)}
          />

          <input
            type="text"
            className="form-control"
            name="prix"
            placeholder="Prix de l'article"
            value={ligneCommande.article.prix}
            onChange={(e) => handleChange(e, index)}
          />

          <input
            type="text"
            className="form-control"
            name="quantite"
            placeholder="Quantité"
            value={ligneCommande.quantite}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}

      <button type="submit" className="btn btn-primary">Créer la commande</button>
    </form>
  );
};

export default CreateCommande;
