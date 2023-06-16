package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Client;

import java.util.List;

public interface ClientService {
    Iterable<Client> findAllClients();

    Client saveClient(Client client);

    List<Client> findByNom(String nom);


}
