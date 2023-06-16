// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     nom: '',
//     prenom: '',
//     email:'',
//     motDePasse:'',
//     adresse: '',
//     adresseLivraison: '',
//   });

//   useEffect(() => {
  
//     const fetchUser
//      = async () => {
//       try {
//         const response = await axios.get("http://localhost:8090/clients");
//         setUser(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({
//       ...formData,
//       adresseLivraison: e.target.checked ? formData.adresse : '',
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Envoyer les modifications de l'utilisateur à l'API Spring Boot
//     try {
//       const response = await fetch('"http://localhost:8090/clients/save', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       setUser(data);
//       setEditMode(false);
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour des informations de l\'utilisateur:', error);
//     }
//   };

//   const handleDeleteAdresse = async () => {
//     // Supprimer l'adresse de livraison de l'utilisateur via l'API Spring Boot
//     try {
//       await fetch('URL_DE_VOTRE_API/adresseLivraison', {
//         method: 'DELETE',
//       });
//       setFormData({
//         ...formData,
//         adresseLivraison: '',
//       });
//     } catch (error) {
//       console.error('Erreur lors de la suppression de l\'adresse de livraison:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Mon Profil</h1>
//       {Object.keys(user).length > 0 ? (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="nom">Nom:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="nom"
//               name="nom"
//               value={formData.nom}
//               onChange={handleChange}
//               disabled={!editMode}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="prenom">Prénom:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="prenom"
//               name="prenom"
//               value={formData.prenom}
//               onChange={handleChange}
//               disabled={!editMode}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="adresse">Adresse:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="adresse"
//               name="adresse"
//               value={formData.adresse}
//               onChange={handleChange}
//               disabled={!editMode}
//               required
//             />
//           </div>
//           <div className="form-group form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="livraisonCheckbox"
//               checked={formData.adresseLivraison === formData.adresse}
//               onChange={handleCheckboxChange}
//               disabled={!editMode}
//             />
//             <label className="form-check-label" htmlFor="livraisonCheckbox">
//               Utiliser la même adresse pour la livraison
//             </label>
//           </div>
//           {formData.adresseLivraison !== formData.adresse && (
//             <div className="form-group">
//               <label htmlFor="adresseLivraison">Adresse de livraison:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="adresseLivraison"
//                 name="adresseLivraison"
//                 value={formData.adresseLivraison}
//                 onChange={handleChange}
//                 disabled={!editMode}
//                 required
//               />
//             </div>
//           )}
//           {editMode ? (
//             <div>
//               <button type="submit" className="btn btn-primary">
//                 Enregistrer
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary ml-2"
//                 onClick={() => setEditMode(false)}
//               >
//                 Annuler
//               </button>
//             </div>
//           ) : (
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => setEditMode(true)}
//             >
//               Modifier
//             </button>
//           )}
//           {formData.adresseLivraison !== '' && (
//             <button
//               type="button"
//               className="btn btn-danger mt-3"
//               onClick={handleDeleteAdresse}
//               disabled={!editMode}
//             >
//               Supprimer l'adresse de livraison
//             </button>
//           )}
//         </form>
//       ) : (
//         <p>Aucune information utilisateur trouvée.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
