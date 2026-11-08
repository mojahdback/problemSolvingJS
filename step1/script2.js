// =============================================
//  Défi 8 – Système de navigation (SPA light)
// =============================================


const cours = [
    {
        id: 1,
        nom: "JavaScript",
        description: "Apprendre les bases de JavaScript",
        duree: "3 mois"
    },
    {
        id: 2,
        nom: "React",
        description: "Apprendre React et les composants",
        duree: "2 mois"
    },
    {
        id: 3,
        nom: "HTML CSS",
        description: "Creer des pages web",
        duree: "1 mois"
    }
];



function display() {
     const currentPage = document.createElement('div');
        document.body.appendChild(currentPage)

    cours.forEach(cour => {

        const list = document.createElement('ul');
        list.dataset.id = cour.id
        list.textContent = cour.nom;
        currentPage.appendChild(list);

        list.addEventListener('click', () => {
            currentPage.innerHTML = ""
            let result = cours.find(cour => cour.id === Number(list.dataset.id))

            const title = document.createElement('h3');
            title.textContent = result.nom;
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            li1.textContent = "ID : " + result.id
            li2.textContent = "Description : " + result.description;
            li3.textContent = "Duree : " + result.duree;
            list.append(li1);
            list.append(li2);
            list.append(li3);
            currentPage.appendChild(list);
            const Retour = document.createElement('button');
            Retour.textContent = "Retour";
            currentPage.appendChild(Retour);

            Retour.addEventListener('click', () => {
                currentPage.innerHTML =""
                display()

            })

        })

    });



}

display();