package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.model.Editeur;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EditeurRepository extends CrudRepository<Editeur, Long> {

    List<Editeur> findByNom(String nom);
}