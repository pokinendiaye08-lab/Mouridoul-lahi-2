let admin = false;
let CODE_ADMIN = "1234"; // Mot de passe admin

// charger données
let participations = JSON.parse(localStorage.getItem("participations") || "[]");

function afficher() {
    let zone = document.getElementById("liste");
    zone.innerHTML = "";

    participations.forEach((p, i) => {
        zone.innerHTML += `
            <div class="part ${admin ? 'admin-active' : ''}">
                <b>${p.nom}</b> — ${p.tel}<br>
                Mois : ${p.mois} | Jour : ${p.jour}<br>
                Montant : <b>${p.montant} CFA</b>

                <button class="suppr" onclick="supprimer(${i})">Supprimer</button>
            </div>
        `;
    });
}
afficher();

function ajouterParticipation() {
    let p = {
        nom: nom.value,
        tel: tel.value,
        mois: mois.value,
        jour: jour.value,
        montant: montant.value
    };

    participations.push(p);
    localStorage.setItem("participations", JSON.stringify(participations));

    afficher();
    alert("Participation ajoutée !");
}

function activerAdmin() {
    if (admin_code.value === CODE_ADMIN) {
        admin = true;
        afficher();
        alert("Mode admin activé !");
    } else {
        alert("Mauvais code !");
    }
}

function supprimer(index) {
    participations.splice(index, 1);
    localStorage.setItem("participations", JSON.stringify(participations));
    afficher();
}