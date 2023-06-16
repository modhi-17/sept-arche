package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.model.Genre;

import java.util.List;

public interface GenreService {

    Iterable<Genre> findAllGenre();
    Genre saveGenre(Genre genre);
    List<Genre> findByNom(String nom);


}
