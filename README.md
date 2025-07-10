```markdown
# DevSamad

## 1. Titre et Description du Projet

DevSamad est un portfolio personnel interactif développé avec React et divers outils modernes de développement web. Ce site web présente des informations sur Abdessamad BOUIH, un étudiant à ISTA Ouarzazate, ainsi que des projets, des compétences et des informations de contact. L'interface utilisateur est conçue avec Tailwind CSS et NextUI, offrant une expérience utilisateur riche et réactive.

## 2. Fonctionnalités

- **Présentation du Portfolio**: Affiche une présentation détaillée du portfolio d'Abdessamad BOUIH.
- **Design Réactif**: Utilise Tailwind CSS pour un design adaptatif sur différents appareils.
- **Composants UI Modernes**: Implémente des composants d'interface utilisateur avancés avec NextUI.
- **Animations Fluides**: Incorpore des animations avec Framer Motion pour une expérience utilisateur engageante.
- **Navigation Facile**: Utilise React Router pour une navigation fluide entre les différentes sections.
- **Icônes Lucides**: Utilise Lucide React pour des icônes vectorielles claires et esthétiques.
- **Intégration Spline**: Intégration de scènes 3D interactives créées avec Spline.
- **Gestion des Thèmes**: Permet de basculer entre différents thèmes pour personnaliser l'apparence du site.
- **API Key** : Fournit une clé d'API via un fichier `.env` pour accéder à des ressources externes.

## 3. Démarrage

### Prérequis

Assurez-vous d'avoir Node.js et npm (ou yarn) installés sur votre machine.

- Node.js (version 18 ou supérieure)
- npm (ou yarn)

### Installation

1.  **Cloner le dépôt :**

    ```bash
    git clone https://github.com/abdessamad10bouih/devSamad.git
    cd devSamad
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install  # ou yarn install
    ```

3.  **Configurer les variables d'environnement :**

    Créer un fichier `.env` à la racine du projet avec la variable d'environnement `VITE_API_KEY` :

    ```
    VITE_API_KEY=votre_clé_api
    ```

4.  **Démarrer le serveur de développement :**

    ```bash
    npm run dev  # ou yarn dev
    ```

    Le site sera accessible à l'adresse indiquée dans la console (généralement `http://localhost:5173`).

## 4. Utilisation

Une fois le serveur de développement lancé, vous pouvez naviguer à travers les différentes sections du portfolio. Le site est conçu pour être intuitif et facile à explorer.

## 5. Structure du Projet

Le projet est structuré de la manière suivante :

```
devSamad/
├── .env               # Variables d'environnement
├── .gitignore         # Fichier .gitignore
├── README.md          # Ce fichier
├── components.json    # Configuration Shadcn UI
├── eslint.config.js   # Configuration ESLint
├── index.html         # Point d'entrée HTML
├── jsconfig.app.json   # Configuration jsconfig pour l'application
├── jsconfig.json      # Configuration jsconfig principale
├── jsconfig.node.json  # Configuration jsconfig pour Node
├── package-lock.json  # Fichier de verrouillage des dépendances npm
├── package.json       # Fichier de configuration npm
├── postcss.config.js  # Configuration PostCSS
├── src/               # Code source de l'application
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   ├── index.css
│   ├── main.jsx
│   └── pages/
├── tailwind.config.js # Configuration Tailwind CSS
└── vite.config.js     # Configuration Vite
```

-   `.env`: Fichier contenant les variables d'environnement, telles que la clé d'API (`VITE_API_KEY`).
-   `.gitignore`: Fichier spécifiant les fichiers et dossiers à ignorer par Git.
-   `components.json`: Fichier de configuration pour Shadcn UI, définissant le style et les alias des composants.
-   `eslint.config.js`: Fichier de configuration pour ESLint, spécifiant les règles de linting pour le projet.
-   `index.html`: Fichier HTML principal, point d'entrée de l'application web.
-   `jsconfig.*.json`: Fichiers de configuration JavaScript pour différents contextes.
-   `package.json`: Fichier de configuration npm contenant les dépendances et les scripts de gestion du projet.
-   `postcss.config.js`: Fichier de configuration pour PostCSS, incluant les plugins Tailwind CSS et Autoprefixer.
-   `src/`: Dossier contenant le code source de l'application :
    -   `App.css` et `App.jsx`: Composant principal de l'application.
    -   `assets/`: Ressources statiques comme les images et les icônes.
    -   `components/`: Composants réutilisables de l'interface utilisateur.
    -   `index.css`: Fichier CSS principal, important pour le fonctionnement de Tailwind CSS.
    -   `main.jsx`: Point d'entrée JavaScript pour l'application.
    -   `pages/`: Composants représentant les différentes pages du portfolio.
-   `tailwind.config.js`: Fichier de configuration pour Tailwind CSS, définissant les thèmes, les polices et autres personnalisations de style.
-   `vite.config.js`: Fichier de configuration pour Vite, spécifiant les alias de chemin et les plugins utilisés.

## 6. Configuration

La configuration principale se trouve dans les fichiers :

-   `.env` : contient la variable `VITE_API_KEY` nécessaire pour certaines fonctionnalités.
-   `tailwind.config.js` : définit les thèmes, les polices et les breakpoints utilisés par Tailwind CSS.
-   `vite.config.js` : spécifie les alias de chemin pour faciliter l'importation des modules dans le code source.

## 7. Dépendances

Voici les principales dépendances utilisées dans ce projet :

-   **React**: Librairie JavaScript pour la construction d'interfaces utilisateur.
-   **NextUI**: Framework UI pour React, offrant des composants esthétiques et fonctionnels. (`@nextui-org/react`)
-   **Tailwind CSS**: Framework CSS utilitaire-first pour un style rapide et flexible.
-   **Framer Motion**: Librairie pour créer des animations et des transitions fluides dans React. (`framer-motion`)
-   **React Router DOM**: Pour la gestion de la navigation dans l'application. (`react-router-dom`)
-   **Lucide React**: Bibliothèque d'icônes vectorielles. (`lucide-react`)
-   **Axios**: Client HTTP pour effectuer des requêtes. (`axios`)
-   **PrismJS**: Utiliser pour la coloration syntaxique du code. (`prismjs`)
-   **React Icons**: Fournit une collection d'icônes pour React. (`react-icons`)
-   **Clsx et Class Variance Authority**: Utilitaires pour la gestion des classes CSS. (`clsx`, `class-variance-authority`)
-    **Spline**: Utiliser pour la création et l'intégration de scènes 3D interactives. (`@splinetool/react-spline`)
-	 **ShadcnUI**	Framework UI utilisant Tailwind, Radix UI et Variants. (`@radix-ui/react-accordion`, `@radix-ui/react-icons`)

## 8. Tests

Aucune documentation de tests n'est disponible dans le dépôt.

## 9. Déploiement / CI

Ce projet est conçu pour être déployé facilement sur diverses plateformes d'hébergement web. Les étapes de base pour le déploiement sont les suivantes :

1.  Compiler l'application avec la commande :

    ```bash
    npm run build  # ou yarn build
    ```

2.  Déployer les fichiers compilés (généralement dans le dossier `dist`) sur votre plateforme d'hébergement préférée (par exemple, Netlify, Vercel, GitHub Pages, etc.).

Aucune configuration de CI/CD spécifique n'est fournie dans ce dépôt.

## 10. Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1.  Fork le dépôt.
2.  Crée une nouvelle branche pour votre fonctionnalité ou correction de bug.
3.  Implémente tes changements.
4.  Soumet une pull request.

## 11. Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 12. Contact

-   Étudiant: **Abdessamad BOUIH**
-   Superviseur: **GAHI Said**
-   Institution: **ISTA Ouarzazate**
-   Dépôt GitHub: https://github.com/abdessamad10bouih/devSamad
```