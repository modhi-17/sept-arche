package com.example.testarche.demo.testarche.model;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Panier {
  @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   @ManyToMany
    private List<Article> articles = new ArrayList<>();

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public void addArticle(Article article) {
        articles.add(article);
    }

    public void removeArticle(Article article) {
        articles.remove(article);
    }

    //constructeur

    public Panier() {
    }

    public Panier(Long id, List<Article> articles) {
        this.id = id;
        this.articles = articles;
    }
//getter et setter

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
