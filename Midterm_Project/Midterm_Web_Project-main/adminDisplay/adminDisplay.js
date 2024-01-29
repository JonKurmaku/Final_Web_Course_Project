const apiUrl = 'http://localhost/Midterm_Server_Side/Controllers/getController.php/data';
const ordersTableBody = document.getElementsByTagName("tbody")[0]
const tsTableBody = document.getElementsByTagName("tbody")[1]

let update_contactID = null;
let update_trayServiceID = null;

document.getElementById("contactModal").style.display = "none";
document.getElementById("trayServiceModal").style.display = "none";


var trayServiceData = [];
var contactsData = [];

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    console.log('API response:', data);

    if (!data.hasOwnProperty('trayService') || !data.hasOwnProperty('contacts')) {
      throw new Error('Invalid response format: missing trayService or contacts data');
    }

    trayServiceData = data.trayService;
    contactsData = data.contacts;

    console.log('Tray Service Data:', trayServiceData);
    console.log('Contacts Data:', contactsData);

    populateTable();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  function populateTable() {
    let contactAppendHtml = ``;
    for (const c of contactsData) {
      const newRowHtml = `<tr>
          <td>${c.name}</td>
          <td>${c.surname}</td>
          <td>${c.email}</td>
          <td>${c.message}</td>
          <td>
            <button onclick="displayContactModal('${c.id}')">Update</button>
            <button onclick="deleteContact('${c.id}')">Delete</button>
          </td>
      </tr>`;
      contactAppendHtml += newRowHtml;
    }
    ordersTableBody.innerHTML += contactAppendHtml;
  
    let tsAppendHtml = ``;
    for (const c of trayServiceData) {
      const newRowHtml = `<tr>
          <td>${c.name}</td>
          <td>${c.surname}</td>
          <td>${c.shipment_date}</td>
          <td>${c.load_type}</td>
          <td>
            <button onclick="displayTrayServiceModal('${c.id}')">Update</button>
            <button onclick="deleteTrayService('${c.id}')">Delete</button>
          </td>
      </tr>`;
      tsAppendHtml += newRowHtml;
    }
    tsTableBody.innerHTML += tsAppendHtml;
  }
  
function deleteContact(contactId) {
  const deleteUrl = `http://localhost/Midterm_Server_Side/Controllers/delete/deleteContact.php?id=${contactId}`;

  fetch(deleteUrl, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
    return response.json();
  })
  .then(data => {
    window.location.reload();
    console.log('Contact deleted successfully:', data);
  })
  .catch(error => {
    console.error('Error deleting contact:', error);
  });
}


function deleteTrayService(trayServiceId) {
  const deleteUrl = `http://localhost/Midterm_Server_Side/Controllers/delete/deleteTrayService.php?id=${trayServiceId}`;

  fetch(deleteUrl, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
    return response.json();
  })
  .then(data => {
    window.location.reload();
    console.log('Contact deleted successfully:', data);
  })
  .catch(error => {
    console.error('Error deleting contact:', error);
  });
}



function displayContactModal(contactId) {  
  const contactModal = document.getElementById("contactModal");
  contactModal.style.display = "block";
  update_contactID = contactId;
  console.log(update_contactID);
}

function displayTrayServiceModal(trayServiceId) {
  const trayServiceModal = document.getElementById("trayServiceModal");
  trayServiceModal.style.display = "block";
  update_trayServiceID = trayServiceId;
  console.log(update_trayServiceID);
}

document.getElementById("closeContactModal").addEventListener("click", function() {
  const contactModal = document.getElementById("contactModal");
  contactModal.style.display = "none";
});

document.getElementById("closeTrayServiceModal").addEventListener("click", function() {
  const trayServiceModal = document.getElementById("trayServiceModal");
  trayServiceModal.style.display = "none";
});

function updateContact(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("sname").value;
  const email = document.getElementById("e").value;
  const message = document.getElementById("mesazh").value;

  const updatedContactData = {
      name1: name,
      surname1: surname,
      email1: email,
      message1: message
  };


  const updateUrl = `http://localhost/Midterm_Server_Side/Controllers/edit/editContact.php?id=${update_contactID}`;

  fetch(updateUrl, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedContactData),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to update contact');
      }
      return response.json();
  })
  .then(data => {
      console.log('Contact updated successfully:', data);
      const contactModal = document.getElementById("contactModal");
      contactModal.style.display = "none";
      window.location.reload();
  })
  .catch(error => {
      console.error('Error updating contact:', error);
  });
}


function updateTrayService(event) {
  event.preventDefault();

  const firstName = document.getElementById("n").value;
  const lastName = document.getElementById("sm").value;
  const shipmentDate = document.getElementById("shipment-date").value;
  const loadType = document.getElementById("choice").value;

  const updatedTrayServiceData = {
    name1: firstName,
    surname1: lastName,
    date1: shipmentDate,
    type1: loadType
  };

  const updateUrl = `http://localhost/Midterm_Server_Side/Controllers/edit/editTrayService.php?id=${update_trayServiceID}`;

  console.log(updatedTrayServiceData);
  console.log(JSON.stringify(updatedTrayServiceData));


  fetch(updateUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTrayServiceData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update tray service');
    }
    return response.json();
  })
  .then(data => {
    console.log('Tray service updated successfully:', data);
    const trayServiceModal = document.getElementById("trayServiceModal");
    trayServiceModal.style.display = "none";
    window.location.reload();
  })
  .catch(error => {
    console.error('Error updating tray service:', error);
  });
}


