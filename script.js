//  Défi 7 – Générateur de plan de cours dynamique

const cours = {
    nom: "",
    sections: []
}

const inputCour = document.createElement('input');
inputCour.placeholder = " Enter cour"
document.body.appendChild(inputCour);
const inputSection = document.createElement('input');
inputSection.placeholder = " Enter section"
document.body.appendChild(inputSection);
const btnAddSection = document.createElement('button');
btnAddSection.textContent = "add section";
document.body.appendChild(btnAddSection);
btnAddSection.addEventListener('click', () => {
    cours.sections.push(inputSection.value);
    inputSection.value = " "
})
const btnAddCour = document.createElement('button');
btnAddCour.textContent = "Créer le cours";
document.body.appendChild(btnAddCour);

btnAddCour.addEventListener('click', () => {
    cours.nom = inputCour.value;
    const title = document.createElement('h3');
    title.textContent = "Cours : " + cours.nom;
    document.body.appendChild(title);
    const list = document.createElement('ul');
    document.body.appendChild(list);

    for (let i = 0; i < cours.sections.length; i++) {
        const li = document.createElement('li');
        li.textContent = cours.sections[i];
        list.appendChild(li);

    }


})









