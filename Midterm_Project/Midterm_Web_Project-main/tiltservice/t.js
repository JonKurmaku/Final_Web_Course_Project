const apiUrl = 'http://localhost/Midterm_Server_Side/Controllers/insert/insertTrayService.php';

function myFunction(e) {   
    e.preventDefault(); 

    let isValid = true;

    const firstname = document.getElementById("myForm").elements.namedItem("firstName").value;
    if (firstname === "") {
        alert("Invalid Format: Name cannot be left blank");
        isValid = false;
    }

    if (firstname.length < 3) {
        alert("Invalid Format: First name must be at least 3 characters long");
        isValid = false;
    }

    const lastname = document.getElementById("myForm").elements.namedItem("lastName").value;
    if (lastname === "") {
        alert("Invalid Format: Last name cannot be left blank");
        isValid = false;
    }

    if (lastname.length < 3) {
        alert("Invalid Format: Last name must be at least 3 characters long");
        isValid = false;
    }

    const date = document.getElementById("myForm").elements.namedItem("date").value;
    const type = document.getElementById("myForm").elements.namedItem("type").value;

    if (!isValid) {
        return;
    }

    const ts = {
        name1: firstname,
        surname1: lastname,
        date1: date,
        type1: type
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ts)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function contact2() {
    var name2 = document.getElementById("name2").value;
    var email2 = document.getElementById("email2").value;

    if (name2.trim() === "" || email2.trim() === "") {
        alert("Please fill out all fields");
        return false;
    } 
}
