package com.example.testarche.demo.testarche.controller;


import com.example.testarche.demo.testarche.model.Client;
import com.example.testarche.demo.testarche.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    @GetMapping
    public Iterable<Client> obtenirTousLesClients() {
        return clientService.findAllClients();
    }


    @GetMapping("/find")
    public List<Client> rechercherParNom(@RequestParam("nom") String nom) {
        return clientService.findByNom(nom);
    }


    @PostMapping("/save")
    public Client ajouterClient(@RequestBody Client client) {
        return clientService.saveClient(client);
    }


}

