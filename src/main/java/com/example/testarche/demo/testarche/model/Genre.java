package com.example.testarche.demo.testarche.model;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Genre{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;

//    @ManyToMany(mappedBy = "genres")
//    private List<Livre> livres;

    // constructeur,
    public Genre() {
    }

    public Genre(Long id, String nom, List<Livre> livres) {
        this.id = id;
        this.nom = nom;
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

//    public List<Livre> getLivres() {
//        return livres;
//    }
//
//    public void setLivres(List<Livre> livres) {
//        this.livres = livres;
//    }


}