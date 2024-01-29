const apiUrl = 'http://localhost/Midterm_Server_Side/Controllers/insert/insertContact.php';

function buttonsub(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("sname").value;
    let email = document.getElementById("e").value;
    let msg = document.getElementById("mesazh").value;

    let isValid = true;

    if (name === "") {
        alert("Invalid Format: Name cannot be left blank");
        isValid = false;
    }

    if (surname === "") {
        alert("Invalid Format: Surname cannot be left blank");
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let contact = {
        name1: name,
        surname1: surname,
        email1: email,
        msg1: msg
    };

    console.log(contact.name1 + " " + contact.surname1 + " " + contact.email1 + " " + contact.msg1);
    sendFormData(contact);
}

function sendFormData(contact) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact)
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
