package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Editeur;
import com.example.testarche.demo.testarche.repository.EditeurRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EditeurServiceImpl implements EditeurService{
private final EditeurRepository editeurRepository;

    public EditeurServiceImpl(EditeurRepository editeurRepository) {
        this.editeurRepository = editeurRepository;
    }


    @Override
    public Iterable<Editeur> findAllEditeurs() {
        return editeurRepository.findAll() ;
    }

    @Override
    public Editeur saveEditeur(Editeur editeur) {return editeurRepository.save(editeur);}

    @Override
    public List<Editeur> findByNom(String nom) {return editeurRepository.findByNom(nom);}
}
