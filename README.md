# projet6: PIIQUANTE

![Alt text](piicante.png "PIICANTE")

Piiquante se dédie à la création de sauces épicées dont les recettes sont gardées
secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise
souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter
leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.



# Installation

Clonez le repository https://github.com/RahmaSRIDI/projet6.git

### Back-end

* Entrer dans le repertoire Back et lancer la commande : `npm install`. Ceci permet d'install le projet et charger les libreries

* Lancer la commande `node server`. Ceci permet de lancer le serveur  back

### Front-end

* Entrer dans le repertoire Front et lancer la commande : `npm install`. Ceci permet d'install le projet et charger les libreries

* Lancer la commande `npm start`. Ceci permet de lancer le serveur front


# Spécifications de l'API




| Verbe     | URI | Request body | Type de réponse attendue     | Fonction
| ------------- | ------------- | -------- | -------- | -------- |
| POST          |/api/auth/signup| { email: string,password:string } | { message: string }  |Hachage du mot de passe de l'utilisateur, ajout de l'utilisateur à la base dedonnées.  |
| POST          |/api/auth/login |{ email: string,password:string }| { userId: string,token: string }  |Vérification des informations d'identification de l'utilisateur, renvoie l _id de l'utilisateur depuis la base de données et un token web JSON signé (contenant également l'_id de l'utilisateur). |
# projet6: PIIQUANTE

![Alt text](piicante.png "PIICANTE")

Piiquante se dédie à la création de sauces épicées dont les recettes sont gardées
secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise
souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter
leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.



# Installation

Clonez le repository https://github.com/RahmaSRIDI/projet6.git

### Back-end

* Entrer dans le repertoire Back et lancer la commande : `npm install`. Ceci permet d'install le projet et charger les libreries

* Lancer la commande `node server`. Ceci permet de lancer le serveur  back

### Front-end

* Entrer dans le repertoire Front et lancer la commande : `npm install`. Ceci permet d'install le projet et charger les libreries

* Lancer la commande `npm start`. Ceci permet de lancer le serveur front


# Spécifications de l'API




| Verbe     | URI | Request body | Type de réponse attendue     | Fonction
| ------------- | ------------- | -------- | -------- | -------- |
| POST          |/api/auth/signup| { email: string,password:string } | { message: string }  |Hachage du mot de passe de l'utilisateur, ajout de l'utilisateur à la base dedonnées.  |
| POST          |/api/auth/login |{ email: string,password:string }| { userId: string,token: string }  |Vérification des informations d'identification de l'utilisateur, renvoie l _id de l'utilisateur depuis la base de données et un token web JSON signé (contenant également l'_id de l'utilisateur). |


