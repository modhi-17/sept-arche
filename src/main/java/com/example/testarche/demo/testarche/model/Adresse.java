package com.example.testarche.demo.testarche.model;


import jakarta.persistence.*;

@Entity
public class Adresse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rue;
    private String ville;
    private String codepostal;

    @OneToOne(mappedBy = "adresse")
    private Client client;

    // constructeur

    public Adresse() {
    }

    public Adresse(Long id, String rue, String ville, String codepostal, Client client) {
        this.id = id;
        this.rue = rue;
        this.ville = ville;
        this.codepostal = codepostal;
        this.client = client;
    }

    // getters et setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRue() {
        return rue;
    }

    public void setRue(String rue) {
        this.rue = rue;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getCodepostal() {
        return codepostal;
    }

    public void setCodepostal(String codepostal) {
        this.codepostal = codepostal;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}