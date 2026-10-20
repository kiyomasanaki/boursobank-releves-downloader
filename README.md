# 🏦 Boursobank Bulk Statement Downloader

> 📥 Télécharge en lot tous tes relevés PDF Boursobank avec un seul script.

Au lieu de cliquer sur chaque relevé un par un, le script clique sur tous les liens de téléchargement de la page, avec un délai configurable entre chacun.

## ✨ Fonctionnalités

- Télécharge automatiquement tous les relevés disponibles sur la page
- Délai configurable entre chaque téléchargement (anti rate-limiting)
- Plusieurs sélecteurs CSS pour une meilleure compatibilité
- Retour clair dans la console avec suivi de progression

## 🚀 Deux façons de l'utiliser

### 1. Bookmarklet (un clic, recommandé)

Ouvre **`install.html`** dans Chrome, puis glisse le bouton rose vers ta barre de favoris (`Ctrl + Maj + B` pour l'afficher). Ensuite, sur la page des relevés, clique sur le favori.

Note : Chrome ne permet pas d'ajouter un bookmarklet en téléchargeant un fichier. Le glisser-déposer du lien est la seule méthode fiable.

### 2. Console

1. **Connecte-toi** à ton compte [Boursobank](https://www.boursobank.com)
2. **Va** sur ta page de relevés (`Documents > Relevés`)
3. **Ouvre** la console (`F12`, ou `Cmd + Option + I` sur Mac), onglet **Console**
4. **Colle** le contenu de `boursobank-bulk-statement-downloader.js`
5. **Entrée**, et autorise les téléchargements multiples si le navigateur le demande

## ⚙️ Configuration

| Paramètre | Défaut | Description |
|-----------|--------|-------------|
| `DOWNLOAD_DELAY_MS` | `1500` | Délai (en ms) entre chaque téléchargement |

## ⚠️ Notes

- Autorise les pop-ups et les téléchargements multiples dans les réglages du navigateur
- Testé sur Chrome et Firefox
- Le script prévient dans la console si aucun lien de téléchargement n'est trouvé
- N'utilise ce script que sur ton propre compte, pour tes propres documents

## 📄 Fichiers

| Fichier | Rôle |
| --- | --- |
| `boursobank-bulk-statement-downloader.js` | Script source, lisible, pour la console |
| `install.html` | Page d'installation du bookmarklet (glisser-déposer) |

## 📄 Licence

[MIT](https://opensource.org/licenses/MIT) - libre d'utilisation et de modification.

## 🤝 Contribuer

Un bug, ou envie d'ajouter le support d'une autre banque ? Fork et pull request bienvenus.
