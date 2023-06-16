package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Commande;
import org.springframework.stereotype.Service;


@Service
public interface CommandeService {

    Commande createCommande(Commande commande);

    Iterable<Commande> getAllCommandes();

    Commande findById(Long id);

    Commande findByRef(String ref);


}





