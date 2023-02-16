# Application connect

## Bonjour et bienvenue sur l'application connect

> Pour commencer vous devez copier l’application sur votre machine à l’aide de la commande : 

``` git clone https://github.com/DRDeveloppeur/test_agence-la-fusee.git ```

> Il faudra également installer les utils composer, à partir du dossier "/server", en utilisant la commande : 

``` composer install ```

> Ensuite, toujour dans le dossier "/server" on crée la base de donée et sa structure, on crée le premier user et on génere le token jwt avec les commandes : 

1. ``` symfony console d:d:c ```
2. ``` symfony console make:migration ``` 
3. ``` symfony console d:m:m ```
3. ``` symfony console doctrine:fixtures:load ```
3. ``` symfony console lexik:jwt:generate-keypair ``` "openSSL requis pour cette action"

> Pour lancer le serveur Symfony on utilise la commande : ``` symfony server:start ```

> Pour la partie Front-End, on vas dans le dossier "/client" pour installer les utils, et on lancera la commande :

``` npm install ```

> Pour lancer le serveur ReactJs on utilise la commande : ``` npm start ```