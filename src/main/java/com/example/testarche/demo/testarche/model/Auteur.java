package com.example.testarche.demo.testarche.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Auteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;

//    @OneToMany(mappedBy = "auteur")
//    private List<Livre> livres;

    // constructeur,

    public Auteur() {
    }

    public Auteur(Long id, String nom, String prenom, List<Livre> livres) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
//        this.livres = livres;
    }



// getters et setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

//    public List<Livre> getLivres() {
//        return livres;
//    }
//
//    public void setLivres(List<Livre> livres) {
//        this.livres = livres;
//    }

}


