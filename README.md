# Projet Vue.js avec Node.js Backend

Ce projet utilise Vue.js avec Vue CLI 5.0.8 pour le front-end et Node.js v18.17.0 pour le back-end. Il s'agit d'une application de messagerie où les utilisateurs peuvent se connecter ou s'inscrire, écrire des messages, les consulter et les supprimer. Le projet utilise Vue Router, Vuex et Vuetify pour une expérience utilisateur fluide.

## Prérequis

Assurez-vous d'avoir Node.js v18.17.0 installé sur votre système avant de commencer.

## Installation

1. **Installez les dépendances du front-end:**

cd font-end
npm install

2. **Revenez au répertoire principal du projet et installez les dépendances du back-end:**

cd ..
cd back-end
npm install

## Lancement du serveur de développement

1. **Lancez le serveur back-end:**

npm start
nodemon server.js

2. **Lancez le serveur de développement front-end (dans le répertoire client):**

cd ../front-end
npm run serve

## Technologies utilisées

- Vue.js v3.0.0
- Vue CLI v5.0.8
- Vue Router
- Vuex
- Vuetify v2.5.12
- Node.js v18.17.0

## Fonctionnalités

- **Login/Register:** Les utilisateurs peuvent se connecter ou s'inscrire.
- **Écrire des messages:** Les utilisateurs peuvent écrire des messages.
- **Consulter des messages:** Les utilisateurs peuvent consulter les messages existants.
- **Supprimer des messages:** Les utilisateurs peuvent supprimer les messages.