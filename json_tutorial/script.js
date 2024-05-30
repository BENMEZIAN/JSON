// Fonction pour charger les données JSON depuis un fichier et les afficher
function loadAndDisplayJSONData() {
    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            displayJSONData(jsonData);
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON:', error);
        });
}

// Fonction pour afficher les données JSON sur la page
function displayJSONData(json) {
    const outputDiv = document.getElementById('jsonOutput');
    outputDiv.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`;
}

// Appel de la fonction pour charger et afficher les données au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadAndDisplayJSONData();
});