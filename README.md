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

## Exemple :

```bash
# 1️⃣ Se placer sur la branche dev
git checkout dev  
# 2️⃣ Récupérer les dernières mises à jour de la branche dev depuis le repo distant
git pull origin dev  
# 3️⃣ Aller sur la branche feature sur laquelle on travaille
git checkout feature-nom  
# 4️⃣ Fusionner dev dans feature-nom pour être sûr que la feature est à jour avec les derniers changements
git merge dev  
# 5️⃣ Retourner sur la branche dev
git checkout dev  
# 6️⃣ Fusionner la branche feature-nom dans dev (intégration de la nouvelle feature)
git merge feature-nom  
# 7️⃣ Envoyer les mises à jour de la branche dev vers le repo distant
git push origin dev  
# 8️⃣ Se placer sur la branche principale main (ou master)
git checkout main  
# 9️⃣ Fusionner dev dans main pour que main soit à jour avec les dernières features validées
git merge dev  
# 🔟 Pousser main mis à jour vers le repo distant
git push origin main  
# 1️⃣1️⃣ Supprimer la branche feature en local (puisqu'elle a été intégrée)
git branch -d feature-nom  
# 1️⃣2️⃣ Supprimer la branche feature sur le repo distant
git push origin --delete feature-nom  

```