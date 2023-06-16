package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Auteur;

import java.util.List;

public interface AuteurService {

    Iterable<Auteur> findAllAuteurs();

    Auteur saveAuteur(Auteur auteur);

    List<Auteur> findByNom(String nom);

    Auteur findById(Long id);

    List<Auteur> findByKeyword(String keyword);
}



