package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.exception.StockException;
import com.example.testarche.demo.testarche.model.Commande;
import com.example.testarche.demo.testarche.model.LigneCommande;
import com.example.testarche.demo.testarche.model.Stock;
import com.example.testarche.demo.testarche.repository.CommandeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;

    public CommandeServiceImpl(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }

    //    public CommandeServiceImpl(CommandeRepository commandeRepository) {
//        this.commandeRepository = commandeRepository;
//    }
    // Surcharge de la méthode createCommande dans une classe qui implémente une interface ou hérite d'une classe abstraite
    @Override
    @Transactional
    public Commande createCommande(Commande commande) {
        // Décrémente le stock pour chaque ligne de commande de la commande reçue en paramètre
        for (LigneCommande ligneCommande : commande.getLignesCommande()) {
            // Obtient l'objet Stock associé à l'article de la ligne de commande
            Stock stock = ligneCommande.getArticle().getStock();
            try {
                //  décrémente le stock de la quantité  dans la ligne de commande
                stock.decremente(ligneCommande.getQuantite());
            } catch (StockException e) {
                // Capture une exception de type StockException qui peut être levée lors de la décrémentation du stock
                // Lance une nouvelle exception StockException avec un message d'erreur personnalisé
                throw new StockException("Stock insuffisant pour l'article: " + ligneCommande.getArticle().getDescription(), "Stock insuffisant");
            }
        }
        // Enregistre la commande dans la base de données en utilisant le repository correspondant
        return commandeRepository.save(commande);
    }
//    @Override
//    @Transactional
//    public Commande createCommande(Commande commande) {
//        return commandeRepository.save(commande);
//    }

    @Override
    public Iterable<Commande> getAllCommandes() {
        return commandeRepository.findAll();
    }

    @Override
    public Commande findById(Long id) {
        Optional<Commande> optionalCommande = commandeRepository.findById(id);
        return optionalCommande.orElse(null);
    }

    @Override
    public Commande findByRef(String ref) {
        return commandeRepository.findByNumComm(ref);
    }
}
