# Angular-TP-Intermediaire

Un projet développé en NestJS (back-end), Angular (front-end), avec une bases de données MySQL.

## Pré-requis

- Node.JS : 16.14.2
- Bases de données : MySQL (local)
- Un terminal (Ex: Terminal Windows)

### Mise en place de l'environnement

#### Bases de données 

Pour installer le projet dans votre environnement, il faut avant tout connecter le projet back-end à la bases de données.

Pour cela, dans le dossier `/backend/properties`, effectuez une copie du fichier `db.properties.example` en `db.properties` (avec le contenu à l'identique).

Ensuite, ajustez les identifiants dans le fichier avec vos identifiants de bases de données en local depuis la ligne 9 jusqu'à 13 (Le fichier est indiqué dans le .gitignore pour éviter les conflits de fichiers en groupe)).

#### Exécution des migrations (back-end)

Maintenant que vous avez renseigné vos identifiants de bases de données, il va falloir exécuter les migrations du back-end pour pouvoir récupérer les données (et les tables).

Pour cela, allez dans le dossier back-end, et exécutez les commandes suivantes :
```sh
npm i && npm run typeorm-d -- migration:run
```

#### Lancement des serveurs back-end & front-end

Maintenant que tout est configuré, vous allez pouvoir lancer les serveurs (attention, il faut 2 terminaux différents) :

Pour le front : 
```sh
cd /front-end/
npm i 
npm start
```

Pour le back :
```sh
cd /back-end/
npm start
```

#### Authentification sur l'application

Pour accéder à l'application, vous aurez besoin des identifiants suivants :

utilisateur : test
mot de passe : test

### Auteurs

Romain PONS, Nicolas RAYNAUD, Guillaume LAZIES, Lorène DUFFET