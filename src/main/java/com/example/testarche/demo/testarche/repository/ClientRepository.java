package com.example.testarche.demo.testarche.repository;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.model.Client;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClientRepository extends CrudRepository<Client, Long> {

    List<Client> findByNom(String nom);
}