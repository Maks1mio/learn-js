const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let my_div = newDiv = null;

async function addElement() {
        let potUrl = "https://api.github.com/users/" + searchInput.value;

        let url = await fetch(potUrl);
        let response = await url.json();

        let newDiv = document.createElement("div");
        newDiv.className = "boxContent";
        newDiv.id = "boxContentID";

        let newImg = document.createElement("img");
        newImg.className = "userAvatar";
        newImg.src = response.avatar_url;

        let newSpan = document.createElement("span");
        newSpan.className = "nameText";
        newSpan.innerText = response.login;

        document.body.insertBefore(newDiv, my_div);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newSpan);

        const users = {
                avatar: response.avatar_url,
                user: response.login
        }
        
        


}

searchButton.addEventListener("click", addElement);
