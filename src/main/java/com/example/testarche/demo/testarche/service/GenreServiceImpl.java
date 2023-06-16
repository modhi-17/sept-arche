package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Genre;
import com.example.testarche.demo.testarche.repository.GenreRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GenreServiceImpl implements GenreService{

    private  final GenreRepository genreRepository;

    public GenreServiceImpl(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }


    @Override
    public Iterable<Genre> findAllGenre() {
        return genreRepository.findAll();
    }

    @Override
    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public List<Genre> findByNom(String nom) {
        return genreRepository.findByNom(nom);
    }
}
