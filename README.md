# mentorat-exercice-1
Correction de l'exercice 1 de ma série d'exercices utilisés à but d'initier des développeurs aspirants au métier.

# Énoncé

## Partie 1

Conçois une page en HTML contenant :

- Un titre H1
- Deux sections contenant :
    - Un titre H2
    - Du texte contenant un lien vers une page web quelconque
    - Une liste à puces ordonnée
    - Une liste à puce non-ordonnée
    - Une image

## Partie 2

Ajoute une autre page à ton projet, contenant : 

- Un titre H1
- Une section contenant 6 images

Ajoute aux deux pages :

- Un header contenant :
    - Un logo avec un lien qui renvoie sur la première page
    - Une navbar contenant :
        - Des liens vers les deux pages
- Un footer contenant :
    - Un logo avec un lien qui renvoie sur la première page
    - Une mention “Tous droits réservés - NOM Prénom (remplace par les tiens) - 2025

## Partie 3

Ajoute du style avec CSS : 

- Importe deux fontes de ton choix dans ton projet.
- Applique la première font à tes H1 et H2.
- Applique la seconde font à tout le reste.
- Centre sur les deux pages le H1.
- Sur la première page, je veux avoir les deux sections côte-à-côte, avec un padding de 20px, un fond d’une couleur quelconque, un border-radius de 15px, que tous les éléments soient séparés de 10px. Je veux que le lien dans le texte soit souligné uniquement lorsque ma souris passe dessus et que la couleur du texte du lien change.
- Je veux que l’image ne dépasse pas, et soit contenue dans un cercle.
- Sur la deuxième page, je veux que les 6 images soient disposées dans une grille de deux lignes de 3, qu’elles aient un espacement de 20px et possèdent un border-radius de 20px. Je veux qu’elles aient un ratio de 9/18. Je ne veux pas qu’elles soient déformées. Je veux qu’elles soient en noir et blanc. Lorsque je passe ma souris dessus, je veux qu’elles passent à une échelle de 1.1 et qu’elles redeviennent en couleur.
- Je veux que le header ai un padding de 10px, que le logo soit tout à gauche et fasse 100px de longueur et la navbar tout à droite.
- Je veux que le footer ai un padding de 20px et que le logo soit centré et fasse 150px de longueur.

## Partie 4

Rends le site adapté aux appareils mobiles :

- Fais en sorte que tout reste lisible sur mobile - pense à le tester avec les outils de développement de ton navigateur.
- Je veux qu’à partir de 768px et en dessous, les deux sections de la première page ne soient plus côte-à-côte mais l’une en dessous de l’autre et que la deuxième se retrouve en première position. Je veux également qu’à partir de cette taille d’écran, les liens vers les deux pages, dans la navbar, passent l’un en dessous de l’autre.

## Partie 5

Ajoute de l’interaction avec JS :

- Ajouter à la deuxième page une case à cocher avec comme texte à côté “Grille de 3 lignes de 2”
- Détecte si la case est cochée avec JavaScript.
- Si elle est cochée, ajoute une classe “Alternative” à la section de la deuxième page.
- Fais en sorte avec CSS que lorsque la case est cochée, que la grille passe de 2 lignes de 3 images à 3 lignes de 2 images.

## Partie 6

Ajoute de la persistance dans les choix de l’utilisateur :

- Fais en sorte de sauvegarder un cookie contenant la préférence d’affichage de la grille d’images de la seconde page en fonction de s’il coche ou non la case.
- À chaque clic sur la case, il faudra mettre à jour la valeur stockée dans le cookie.
- À présent, si tu recharges la page, le dernier choix de l’utilisateur doit être présélectionné sur la case à cocher.