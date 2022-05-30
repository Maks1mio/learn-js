const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const userAvatar = document.getElementById("imgAvatar");
const userName = document.getElementById("nameUser");

// вместо вызова анонимной асинхронной функции, нужно было эту функцию сделать асинхронной
async function updateUser() {
        let potUrl = "https://api.github.com/users/" + searchInput.value;

        let url = await fetch(potUrl);
        let response = await url.json();
        // можно было сделать чисто
        // let response = await fetch(potUrl)
        //   .then(url => url.json()); // субъективщина

        console.log(potUrl);
        console.log(response.login);
        console.log(response.avatar_url);

        // Avatar Image
        userAvatar.src = response.avatar_url;

        // User Name GitHub
        userName.innerText = response.login;

        // этих строчек я вообще не понял
        // let name = await response.login;

        // let textConvert = await name;
        // console.log(textConvert)
        // let nameSet = document.getElementById('nameUser').innerText = response.login;
        // nameSet.title = textConvert;
}

// Два разных способа добавить обработчик событий, addEventListener предпочтительнее
// searchButton.onclick = updateUser;
searchButton.addEventListener("click", updateUser);
