

# Application To-Do List

## Vue d'ensemble
Creation d'une page To-Do List moderne et minimaliste, integree au projet React existant avec Tailwind CSS. Accessible via la route `/todo`, avec un lien depuis le bouton "Voir mes projets" du hero.

## Fonctionnalites
- Champ de saisie + bouton "Ajouter" pour creer une tache
- Liste des taches avec animation d'apparition
- Clic sur une tache pour la marquer terminee (texte barre avec style visuel)
- Bouton de suppression (icone poubelle) sur chaque tache
- Design epure : coins arrondis, ombres douces, palette coherente avec le theme

## Modifications prevues

### 1. Nouveau fichier : `src/pages/Todo.tsx`
- Gestion d'etat avec `useState` : liste de taches `{id, text, completed}[]` et champ de saisie
- Carte centree avec ombre douce contenant :
  - Titre "Ma To-Do List"
  - Ligne de saisie : composant `Input` + `Button` avec icone `Plus`
  - Liste des taches, chaque element affichant :
    - `Checkbox` pour cocher/decocher (texte barre si termine)
    - Texte de la tache avec style `line-through` et opacite reduite quand terminee
    - Bouton `Trash2` (lucide-react) pour supprimer
- Compteur de taches restantes en bas
- Lien retour vers la page d'accueil

### 2. Mise a jour : `src/App.tsx`
- Import du composant `Todo`
- Ajout de la route `/todo`

### 3. Mise a jour : `src/pages/Index.tsx`
- Remplacement du `<a href="#projets">` par un `<Link to="/todo">` de react-router-dom pour naviguer vers la to-do list

## Composants reutilises
- `Input`, `Button`, `Checkbox` deja presents dans le projet
- Icones `Plus`, `Trash2`, `ArrowLeft` de lucide-react

