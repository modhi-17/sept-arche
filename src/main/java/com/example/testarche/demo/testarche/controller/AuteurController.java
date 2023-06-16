package com.example.testarche.demo.testarche.controller;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.service.AuteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auteurs")
@CrossOrigin
public class AuteurController {

    private final AuteurService auteurService;

    @Autowired
    public AuteurController(AuteurService auteurService) {
        this.auteurService = auteurService;
    }

    @GetMapping
    public Iterable<Auteur> obtenirTousLesAuteurs() {
        return auteurService.findAllAuteurs();
    }


    @GetMapping("/find")
    public List<Auteur> rechercherParNom(@RequestParam("nom") String nom) {
        return auteurService.findByNom(nom);
    }

    @GetMapping("/search/auteur")
    public List<Auteur> searchArticles(@RequestParam String keyword) {
        return auteurService.findByKeyword(keyword);
    }

    @PostMapping("/save")
    public Auteur ajouterAuteur(@RequestBody Auteur auteur) {
        return auteurService.saveAuteur(auteur);
    }


    @GetMapping("/{id}")
    public Auteur getAuteurById(@PathVariable Long id) {
        return auteurService.findById(id);
    }


}
