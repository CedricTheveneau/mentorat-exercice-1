# mentorat-exercice-1
Correction de l'exercice 1 de ma série d'exercices utilisés à but d'initier des développeurs aspirants au métier.

# Énoncé

## Partie 1

Conçois une page en HTML contenant :

- [X] Un titre H1
- [X] Deux sections contenant :
    - [X] Un titre H2
    - [X] Du texte contenant un lien vers une page web quelconque
    - [X] Une liste à puces ordonnée
    - [X] Une liste à puce non-ordonnée
    - [X] Une image

## Partie 2

Ajoute une autre page à ton projet, contenant : 

- [X] Un titre H1
- [X] Une section contenant 6 images

Ajoute aux deux pages :

- [X] Un header contenant :
    - [X] Un logo avec un lien qui renvoie sur la première page
    - [X] Une navbar contenant :
        - [X] Des liens vers les deux pages
- [X] Un footer contenant :
    - [X] Un logo avec un lien qui renvoie sur la première page
    - [X] Une mention “Tous droits réservés - NOM Prénom (remplace par les tiens) - 2025

## Partie 3

Ajoute du style avec CSS : 

- [X] Importe deux fontes de ton choix dans ton projet.
- [X] Applique la première font à tes H1 et H2.
- [X] Applique la seconde font à tout le reste.
- [X] Centre sur les deux pages le H1.
- [X] Ajoute un padding de 20px à la section de la seconde page et à la div qui encadre les deux sections de la première page.
- [X] Sur la première page, je veux avoir les deux sections côte-à-côte, avec un padding de 20px, un fond d’une couleur quelconque, un border-radius de 15px, que tous les éléments soient séparés de 20px. Je veux que le lien dans le texte soit souligné uniquement lorsque ma souris passe dessus et que la couleur du texte du lien change.
- [X] Je veux que l’image ne dépasse pas, et soit contenue dans un cercle et non-déformée.
- [X] Sur la deuxième page, je veux que les 6 images soient disposées dans une grille de deux lignes de 3, qu’elles aient un espacement de 20px et possèdent un border-radius de 20px. Je veux qu’elles aient un ratio de 9/18. Je ne veux pas qu’elles soient déformées. Je veux qu’elles soient en noir et blanc. Lorsque je passe ma souris dessus, je veux qu’elles passent à une échelle de 1.025 et qu’elles redeviennent en couleur.
- [X] Je veux que le header ai un padding, des margin et un border-radius de 20px, que le logo soit tout à gauche et fasse 50px de longueur et la navbar tout à droite. Les liens de la navbar doivent être les un à côté des autres et ne pas avoir de puce. Ajouter une couleur de fond au header.
- [X] Je veux que le footer ai un padding, des margin et un border-radius de 20px, que le contenu soit centré et que le logo fasse 70px de longueur. Le contenu doit être séparé de 50px. Ajouter une couleur de fond au footer.

## Partie 4

Rends le site adapté aux appareils mobiles :

- [X] Fais en sorte que tout reste lisible sur mobile - pense à le tester avec les outils de développement de ton navigateur.
- [X] Je veux qu’à partir de 768px et en dessous, les deux sections de la première page ne soient plus côte-à-côte mais l’une en dessous de l’autre et que la deuxième se retrouve en première position. Je veux également qu’à partir de cette taille d’écran, les liens vers les deux pages, dans la navbar, passent l’un en dessous de l’autre.

## Partie 5

Ajoute de l’interaction avec JS :

- [X] Ajouter à la deuxième page une case à cocher avec comme texte à côté “Grille de 3 lignes de 2”
- [X] Détecte si la case est cochée avec JavaScript.
- [X] Si elle est cochée, ajoute une classe “alternative” à la section de la deuxième page.
- [X] Fais en sorte avec CSS que lorsque la case est cochée, que la grille passe de 2 lignes de 3 images à 3 lignes de 2 images.

## Partie 6

Ajoute de la persistance dans les choix de l’utilisateur :

- [X] Fais en sorte de sauvegarder un cookie contenant la préférence d’affichage de la grille d’images de la seconde page en fonction de s’il coche ou non la case.
- [X] À chaque clic sur la case, il faudra mettre à jour la valeur stockée dans le cookie.
- [X] À présent, si tu recharges la page, le dernier choix de l’utilisateur doit être présélectionné sur la case à cocher.