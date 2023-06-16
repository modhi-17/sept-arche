package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Article;
import com.example.testarche.demo.testarche.model.Auteur;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AuteurRepository extends CrudRepository<Auteur, Long> {

    List<Auteur> findByNom(String nom);
    @Query("SELECT a FROM Auteur a WHERE LOWER(a.nom) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Auteur> findByKeyword(@Param("keyword") String keyword);
}