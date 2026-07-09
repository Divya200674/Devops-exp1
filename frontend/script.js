document.getElementById("registerForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value
    };

    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        alert(data.message);

        document.getElementById("registerForm").reset();

    } catch(error) {
        console.error(error);
        alert("Error connecting to server");
    }
});