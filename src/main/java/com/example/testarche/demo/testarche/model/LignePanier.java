package com.example.testarche.demo.testarche.model;


import jakarta.persistence.*;

//@Entity
public class LignePanier {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
   @JoinColumn(name = "panier_id")
    private Panier panier;

//    @ManyToOne
//    @JoinColumn(name = "article_id")
    private Article article;

    private int quantite;

    // constructeurs,

    public LignePanier() {
    }

    public LignePanier(Long id, Panier panier, Article article, int quantite) {
        this.id = id;
        this.panier = panier;
        this.article = article;
        this.quantite = quantite;
    }

    // getter setters


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

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }




}