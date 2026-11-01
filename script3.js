
const displayCours = document.createElement('div');
const loader = document.createElement('p');

loader.textContent = "Loading...";

document.body.appendChild(displayCours);
document.body.appendChild(loader);

async function getData() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json();
    let list = data.slice(0, 10);

    list.forEach(element => {
        const title = document.createElement('h2');
        title.textContent = element.title;
        const center = document.createElement('p');
        center.textContent = center.body;

        displayCours.appendChild(title);
        displayCours.appendChild(center);

    });


   loader.style.display = "none";

}

getData();






