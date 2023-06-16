package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.model.Editeur;

import java.util.List;

public interface EditeurService {

    Iterable<Editeur> findAllEditeurs();
    Editeur saveEditeur(Editeur editeur);
    List<Editeur> findByNom(String nom);



}
