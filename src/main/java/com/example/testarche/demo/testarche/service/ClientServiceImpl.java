package com.example.testarche.demo.testarche.service;

import com.example.testarche.demo.testarche.model.Client;
import com.example.testarche.demo.testarche.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {


    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Iterable<Client> findAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> findByNom(String nom) {
        return clientRepository.findByNom(nom);
    }
}
