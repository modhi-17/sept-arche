package com.example.testarche.demo.testarche.controller;

import com.example.testarche.demo.testarche.exception.ArticleNotFound;
import com.example.testarche.demo.testarche.model.Article;
import com.example.testarche.demo.testarche.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public Iterable<Article> getAllArticles() {
        return articleService.findAllArticles();
    }

    @PostMapping("/save")
    public Article addArticle(@RequestBody Article article) {
        return articleService.saveArticle(article);
    }

    @GetMapping("/search/description")
    public List<Article> searchArticles(@RequestParam String keyword) {
        return articleService.findByKeyword(keyword);
    }

    // renvoie un Optional au  cas où aucun article n'est trouvé avec l'id donné.
    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable Long id) throws ArticleNotFound {
        return articleService.getArticleById(id)
                .map(p -> ResponseEntity.ok().body(p))
                .orElseThrow(() -> new ArticleNotFound("Article non trouvée avec l'ID: " + id));
    }

}
