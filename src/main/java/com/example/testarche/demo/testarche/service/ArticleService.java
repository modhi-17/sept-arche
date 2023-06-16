package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Article;

import java.util.List;
import java.util.Optional;

public interface ArticleService {
    Iterable<Article> findAllArticles();
    Article saveArticle(Article article);

    List<Article> findByKeyword(String keyword);

     Optional<Article> getArticleById(Long id);


    }

