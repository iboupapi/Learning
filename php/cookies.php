<?php
// Création du cookie
setcookie("langue", "fr", time() + 86400 * 7, "/"); // Expire dans 7 jours

// Vérification et affichage
if (isset($_COOKIE["langue"])) {
    echo "Valeur du cookie : " . $_COOKIE["langue"];
} else {
    echo "Le cookie n'existe pas encore. Actualisez la page.";
}

// Suppression du cookie
setcookie("langue", "", time() - 3600, "/");

// Vérification après suppression
if (!isset($_COOKIE["langue"])) {
    echo "<br>Le cookie a été supprimé avec succès.";
}
?>