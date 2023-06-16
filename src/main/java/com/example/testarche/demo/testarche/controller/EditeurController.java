package com.example.testarche.demo.testarche.controller;

import com.example.testarche.demo.testarche.model.Editeur;
import com.example.testarche.demo.testarche.service.EditeurService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/editeurs")
public class EditeurController {

    private final EditeurService editeurService;

    public EditeurController(EditeurService editeurService) {
        this.editeurService = editeurService;
    }


    @GetMapping
    public Iterable<Editeur> obtenirTousLesEditeurs() {
        return editeurService.findAllEditeurs();
    }


    @GetMapping("/find")
    public List<Editeur> rechercherParEditeur(@RequestParam("nom") String nom) {
        return editeurService.findByNom(nom);
    }


    @PostMapping("/save")
    public Editeur ajouterEditeur(@RequestBody Editeur editeur) {
        return editeurService.saveEditeur(editeur);
    }


}








