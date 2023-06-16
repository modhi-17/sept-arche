package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Auteur;
import com.example.testarche.demo.testarche.repository.AuteurRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuteurServiceImpl implements AuteurService {
    private final AuteurRepository auteurRepository;

    public AuteurServiceImpl(AuteurRepository auteurRepository) {
        this.auteurRepository = auteurRepository;
    }


    @Override
    public Iterable<Auteur> findAllAuteurs() {
        return auteurRepository.findAll();
    }

    @Override
    public Auteur saveAuteur(Auteur auteur) {
        return auteurRepository.save(auteur);
    }

    @Override
    public List<Auteur> findByNom(String nom) {
        return auteurRepository.findByNom(nom);
    }

    @Override
    public Auteur findById(Long id) {
        Optional<Auteur> auteurOptional = auteurRepository.findById(id);
        return auteurOptional.orElse(null);
    }

    @Override
    public List<Auteur> findByKeyword(String keyword) {
        return auteurRepository.findByKeyword(keyword);
    }
}



