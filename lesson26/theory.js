// const getAndRender = () => {
//     const div = document.querySelector('div');

//     fetch('https://rickandmortyapi.com/api/character/1')
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             div.textContent = result.name;
//         });
// }

const getAndRender = async () => {
    const div = document.querySelector('div');
    
    const response = await fetch('https://rickandmortyapi.com/api/character/1');
    const result = await response.json();
    console.log(result);

    div.textContent = result.name;
}


getAndRender();