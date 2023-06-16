package com.example.testarche.demo.testarche.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "articles")
@Inheritance(strategy = InheritanceType.JOINED)
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reference")
    private String reference;

    @Column(name = "description")
    private String description;

    @Column(name = "resume")
    private String resume;

    @Column(name = "prix_ht")
    private double prixHT;


    @Column(name = "tva")
    private double tva = 0.2;

    @Column(name = "image")
    private String image;

    @Column(name = "format")
    private String format;

    @Column(name = "is_num")
    private boolean numeric;

//    @ManyToMany(mappedBy = "articles")
//    private List<Commande> commandes = new ArrayList<>();


    // Stock est une classe embedded, sa valeur est insérée dans l'article et il n'y a pas de table associée
    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "nombre", column = @Column(name = "stock"))
    })
    private Stock stock;


    //constructeur

    public Article() {
    }

    public Article(Long id, String reference, String description, String resume, double prixHT, double tva, String image, String format, boolean numeric, List<Commande> commandes, Stock stock) {
        this.id = id;
        this.reference = reference;
        this.description = description;
        this.resume = resume;
        this.prixHT = prixHT;
        this.tva = tva;
        this.image = image;
        this.format = format;
        this.numeric = numeric;
//        this.commandes = commandes;
        this.stock = new Stock();
    }
//getters et setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public double getPrixHT() {
        return prixHT;
    }

    public void setPrixHT(double prixHT) {
        this.prixHT = prixHT;
    }

    public double getPrixTTC() {
        return prixHT * (1 + tva);
    }

    public double getTva() {
        return tva;
    }

    public void setTva(double tva) {
        this.tva = tva;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getFormat() {
        return format;
    }


    public boolean isNumeric() {
        return numeric;
    }

    public void setNumeric(boolean numeric) {
        this.numeric = numeric;
    }

    public void setFormat(String format) {
        this.format = format;
    }


//    public List<Commande> getCommandes() {
//        return commandes;
//    }
//
//    public void setCommandes(List<Commande> commandes) {
//        this.commandes = commandes;
//    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }


}

