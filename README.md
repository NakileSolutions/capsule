# Capsule - Magazine Mensuel

[![Check Workflow](https://github.com/NakileSolutions/capsule/actions/workflows/ci.yml/badge.svg)](https://github.com/NakileSolutions/capsule/actions/workflows/ci.yml)

Capsule est le site web dédié à la parution mensuelle d'un magazine original, créé par ma femme pour nos amis et destiné à toucher un public plus large. Le site est accessible via [nakile.fr](https://nakile.fr).

---

## Table des matières

- [Présentation](#présentation)
- [Technologies](#technologies)
- [Structure du Monorepo](#structure-du-monorepo)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Présentation

Ce projet a pour but de faciliter la publication mensuelle d'un magazine original, "Capsule". Conçu pour être simple et efficace, le site permet à vos amis et à un public élargi de découvrir chaque nouvelle édition du magazine dans une interface moderne et réactive.

---

## Technologies

Le projet s'appuie sur une stack moderne et performante :

- **Backend** : NestJS, TypeScript, ts‑rest
- **Frontend** : React
- **Base de données** : PostgreSQL, gérée via Prisma
- **Monorepo** : NX avec pnpm

---

## Structure du Monorepo

Le projet est organisé en un monorepo pour centraliser l'ensemble des applications et bibliothèques :

- **applications/** :
  - `capsule-backend` : Application NestJS (API principale).
  - `capsule-backend-e2e` : Tests end-to-end pour l’API.
  - `capsule-frontend` : Application React (interface utilisateur).
  - `capsule-frontend-e2e` : Tests end-to-end pour le frontend.

- **packages/** :
  - `auth` : Module d’authentification (NestJS, JWT, Guards, Décorateurs, etc.).
  - `capsule-contracts` : Contrats ts‑rest (définitions typées des endpoints).
  - `gateway`, `interactions`, `magazine`, `users` : Autres bibliothèques ou micro-services (dépend de votre architecture interne).


Cette organisation permet une maintenance simplifiée et une réutilisation du code entre les différentes parties du projet.

---
## Utilisation

Le site est destiné à publier et diffuser le magazine Capsule. L’interface web est disponible via [nakile.fr](https://nakile.fr).

---
## Contribuer

Ce projet est avant tout personnel et familial, et n’est pas destiné à une utilisation externe. Toutefois, toute remarque ou suggestion est toujours la bienvenue.

---
## Licence

Ce projet est distribué sous licence MIT.
Consultez le fichier [LICENSE](https://github.com/NakileSolutions/capsule/blob/master/LICENSE) pour plus d’informations.
