package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Livre;

import java.util.List;

public interface LivreService {
    Livre saveLivre(Livre livre);

    Iterable<Livre> findAllLivres();


    List<Livre> findByAuteurNom(String auteur);

    List<Livre> findByGenresNom(String nomGenre);

    List<Livre> findByEditeursNom(String nomEditeur);

    List<Livre> findTitleByKeyword(String keyword);


}
