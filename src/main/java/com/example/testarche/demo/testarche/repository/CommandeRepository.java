package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Commande;

import org.springframework.data.repository.CrudRepository;

public interface CommandeRepository extends CrudRepository<Commande, Long> {
    Commande findByNumComm(String numComm);


}
