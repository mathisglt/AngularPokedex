# 🏆 PokeDemo

**PokeDemo** est un Pokédex interactif construit avec Angular. Il permet d'explorer les Pokémon grâce à une intégration avec l'API PokeAPI. Le projet met en avant les statistiques, les images et les informations détaillées des Pokémon, le tout dans une interface immersive.

### 🚀 Fonctionnalités

- **🔍 Recherche de Pokémon :** Trouvez des Pokémon par leur nom ou leur numéro dans le Pokédex.
- **📊 Affichage des statistiques :** Visualisez les statistiques principales (attaque, défense, vitesse, etc.).
- **🖼️ Images officielles :** Affiche les sprites des Pokémon provenant de PokeAPI.
- **💡 Données typées :** Toutes les données sont gérées à l'aide de types TypeScript pour une meilleure robustesse et lisibilité du code.
- **📱 Responsive :** Une interface adaptée à tous les appareils.

### 🛠️ Technologies utilisées

- **Frontend :** Angular (vX.X)
- **TypeScript :** Gestion stricte des types pour les données issues de PokeAPI.
- **API :** [PokeAPI](https://pokeapi.co/) pour récupérer les informations des Pokémon.
- **Styles :** CSS ou SCSS personnalisés pour une interface élégante.
- 
### ⚙️ Installation

**1. Clonez ce dépôt :**

```
   git clone https://github.com/votre-utilisateur/pokedemo.git
   cd pokedemo
```
   
**2. Installez les dépendances :**

  ```
  npm install
  ```
  
**3. Lancez le projet en mode développement :**

  ```
  ng serve
  Accédez ensuite à http://localhost:4200.
  ```

### 📂 Structure du projet

```plaintext
PokeDemo/
├── src/
│   ├── app/
│   │   ├── affichagedata/
│   │   ├── search-bar/
│   ├── app.component.html
│   ├── pokeapi.service.ts
│   ├── model.ts
│   ├── ...
├── package.json                  # Dépendances et scripts
└── README.md                     # Documentation
