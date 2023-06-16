package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Article;
import com.example.testarche.demo.testarche.model.Livre;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LivreRepository extends CrudRepository<Livre, Long> {


//    @Query("SELECT a FROM Livre a WHERE LOWER(a.auteur) LIKE LOWER(CONCAT(:auteur,'%'))")
    List<Livre> findByAuteurNom(String auteur);
    List<Livre> findByGenresNom(String nomGenre);
    List<Livre> findByEditeursNom(String nomEditeur);
    @Query("SELECT a FROM Livre a WHERE LOWER(a.titre) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Livre> findByTitleByKeyword(@Param("keyword") String keyword);




}