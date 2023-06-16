package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.model.Genre;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GenreRepository extends CrudRepository<Genre, Long> {

    List<Genre> findByNom(String nom);

}