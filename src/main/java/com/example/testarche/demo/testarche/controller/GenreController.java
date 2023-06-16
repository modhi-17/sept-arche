package com.example.testarche.demo.testarche.controller;

import com.example.testarche.demo.testarche.model.Genre;
import com.example.testarche.demo.testarche.service.GenreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genres")
public class GenreController {

    private final GenreService genreService;

    public GenreController(GenreService genreService) {
        this.genreService = genreService;
    }


    @GetMapping
    public Iterable<Genre> obtenirTousLesEditeurs() {
        return genreService.findAllGenre();
    }


    @GetMapping("/find")
    public List<Genre> rechercherParGenre(@RequestParam("nom") String nom) {
        return genreService.findByNom(nom);
    }


    @PostMapping("/save")
    public Genre ajouterGenre(@RequestBody Genre genre) {
        return genreService.saveGenre(genre);
    }


}
