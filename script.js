let el_down = "Maks1mio";

function gfg_Run() {
    var inputF = document.getElementById("id1").value;
    el_down = inputF;
    console.log(el_down);
}

function updateUser() {
    (async () => {

        let potUrl = "https://api.github.com/users/" + el_down;

        let url = await fetch(potUrl)
        let response = await url.json();

        console.log(potUrl)
        console.log(response.login)
        console.log(response.avatar_url)

        // Avatar Image
        let avatar = await fetch(response.avatar_url);

        let blob = await avatar.blob();
        let imgAvatar = document.getElementById('imgAvatar');

        imgAvatar.src = URL.createObjectURL(blob);

        // User Name GitHub
        let name = await response.login;

        let textConvert = await name;
        console.log(textConvert)
        let nameSet = document.getElementById('nameUser').innerText = response.login;
        nameSet.title = textConvert;
    })()
}

console.log(inputF)