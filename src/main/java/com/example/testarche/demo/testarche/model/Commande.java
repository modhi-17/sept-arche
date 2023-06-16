package com.example.testarche.demo.testarche.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "commandes")
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "num_comm")
    private String numComm;

    @Column(name = "date_comm")
    private LocalDate dateComm;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @OneToOne
    private Facture facture;

   @OneToMany    (mappedBy = "commande",cascade=CascadeType.ALL, fetch=FetchType.EAGER)
    private List<LigneCommande> lignesCommande = new ArrayList<>();

    /*@ManyToMany
    @JoinTable(
            name = "commande_article",
            joinColumns = @JoinColumn(name = "commande_id"),
            inverseJoinColumns = @JoinColumn(name = "article_id")
    )
    private List<Article> articles = new ArrayList<>();
*/
    //constructeur

    public Commande() {
    }

    public Commande(Long id, String numComm, LocalDate dateComm, Client client, Facture facture, List<LigneCommande> lignesCommande, List<Article> articles) {
        this.id = id;
        this.numComm = numComm;
        this.dateComm = dateComm;
        this.client = client;
        this.facture = facture;
        this.lignesCommande = lignesCommande;
//        this.articles = articles;
    }

    // getters et setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumComm() {
        return numComm;
    }

    public void setNumComm(String numComm) {
        this.numComm = numComm;
    }

    public LocalDate getDateComm() {
        return dateComm;
    }

    public void setDateComm(LocalDate dateComm) {
        this.dateComm = dateComm;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public List<LigneCommande> getLignesCommande() {
        return lignesCommande;
    }

    public void setLignesCommande(List<LigneCommande> lignesCommande) {
        this.lignesCommande = lignesCommande;
    }

//    public List<Article> getArticles() {
//        return articles;
//    }
//
//    public void setArticles(List<Article> articles) {
//        this.articles = articles;
//    }

}

