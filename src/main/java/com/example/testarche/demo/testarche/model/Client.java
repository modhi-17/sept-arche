package com.example.testarche.demo.testarche.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Client  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
   @JoinColumn(name = "panier_id")
    private Panier panier;

    private String nom;

    private String prenom;

    private String email;

    private String motDePasse;

    @OneToOne
    private Adresse adresse;
    @OneToMany(mappedBy = "client")
    private List<Commande> commandes = new ArrayList<>();

    // constructeurs

    public Client() {
    }

    public Client(Long id, Panier panier, String nom, String prenom, String email, String motDePasse, List<Commande> commandes,Adresse adresse) {
        this.id = id;
        this.panier = panier;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.commandes = commandes;
        this.adresse = adresse;
    }

    // getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Panier getPanier() {
        return panier;
    }

    public void setPanier(Panier panier) {
        this.panier = panier;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDepasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public List<Commande> getCommandes() {
        return commandes;
    }

    public void setCommandes(List<Commande> commandes) {
        this.commandes = commandes;
    }
}