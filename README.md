## Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter :

- Kévin : [kevin.boillon@free.fr](mailto:kevin.boillon@free.fr)
- Kelyfane : [kelyfane@gmail.com](mailto:kelyfane@gmail.com)

### Créer une branche de fonctionnalité

```bash
git checkout dev
git checkout -b feature/login-ui
```

### Pousser ta branche vers GitHub
```bash
git push origin feature/login-ui
```
Ouvre une Pull Request (PR) sur GitHub pour fusionner la branche feature/login-ui dans dev.

### Mettre à jour ta branche locale `dev`
```bash
git checkout dev
git pull origin dev
```

### Vérifier les différences entre ta branche et `dev`
```bash
git diff dev
```

Mettre à jour `main` avec `dev` après fusion
```bash
git checkout main
git pull origin main
```

### Bonnes pratiques Git
- Toujours travailler sur des branches spécifiques à la fonctionnalité : Ne travaille pas directement sur `dev` ou `main`.
- Faire des commits réguliers et descriptifs : Écris des messages de commit clairs pour décrire ce qui a été modifié. Exemple : `Ajout de la fonctionnalité de connexion utilisateur.`
- Vérifier l'état avant de pousser : Utilise `git status` pour voir quels fichiers ont été modifiés et `git diff` pour inspecter les différences.