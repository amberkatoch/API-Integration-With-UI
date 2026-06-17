const loadBtn = document.getElementById("loadBtn");
const userContainer = document.getElementById("userContainer");
const statusDiv = document.getElementById("status");

loadBtn.addEventListener("click", fetchUsers);

async function fetchUsers() {

    statusDiv.innerHTML = "<p class='loading'>Loading...</p>";
    userContainer.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        statusDiv.innerHTML = "";

        users.forEach(user => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            userContainer.appendChild(card);
        });

    } catch (error) {

        statusDiv.innerHTML =
        `<p class="error">${error.message}</p>`;

    }
}