package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleRepository extends CrudRepository<Article, Long> {
    @Query("SELECT a FROM Article a WHERE LOWER(a.description) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Article> findByKeyword(@Param("keyword") String keyword);


}