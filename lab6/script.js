function fetchUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const usersContainer = document.getElementById("usersContainer");
            usersContainer.innerHTML = "";

            data.results.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.style.border = "1px solid #ccc";
                userDiv.style.padding = "10px";
                userDiv.style.marginBottom = "10px";

                const userImage = document.createElement("img");
                userImage.src = user.picture.large;
                userImage.alt = "Фото користувача";
                userDiv.appendChild(userImage);

                const userCountry = document.createElement("p");
                userCountry.innerHTML = `<strong>Країна:</strong> ${user.location.country}`;
                userDiv.appendChild(userCountry);

                const userEmail = document.createElement("p");
                userEmail.innerHTML = `<strong>Електронна пошта:</strong> ${user.email}`;
                userDiv.appendChild(userEmail);

                const userPhone = document.createElement("p");
                userPhone.innerHTML = `<strong>Телефон:</strong> ${user.phone}`;
                userDiv.appendChild(userPhone);

                const userCoordinates = document.createElement("p");
                userCoordinates.innerHTML = `<strong>Координати:</strong> Lat: ${user.location.coordinates.latitude}, Lng: ${user.location.coordinates.longitude}`;
                userDiv.appendChild(userCoordinates);

                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => console.error('Помилка при завантаженні даних:', error));
}
