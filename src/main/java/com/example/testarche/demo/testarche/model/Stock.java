package com.example.testarche.demo.testarche.model;

import com.example.testarche.demo.testarche.exception.StockException;
import jakarta.persistence.Embeddable;

@Embeddable
public class Stock {
    private int nombre;

    public int getNombre() {
        return nombre;
    }

    public void setNombre(int nombre) {
        this.nombre = nombre;
    }

    public void incremente(int ajout) {
        nombre += ajout;
    }

    public void decremente(int ajout) throws StockException {
        if (ajout <= nombre) {
            nombre -= ajout;
        } else {
            throw new StockException("stock insuffisant","404");
        }
    }




}