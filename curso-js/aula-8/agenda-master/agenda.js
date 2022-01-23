(function () {
  console.log("=== AGENDA ===");

  // User Interface
  const UI = {
    fieldName: document.querySelector("#name"),
    fieldEmail: document.querySelector("#email"),
    fields: document.querySelectorAll("input"),
    buttonAdd: document.querySelector(".pure-button-primary"),
    tableData: document.querySelector(".pure-table tbody")
  };
  // console.log(UI);

  // Actions
  const validateFields = function(e) {
    e.preventDefault();
    let errors = 0;
    let contact = {};

    UI.fields.forEach(function (field) {
      if (field.value.trim().length > 0) {
        // console.log(field.id, "foi preenchido!");
        field.classList.remove("error");
        contact[field.id] = field.value;
      } else {
        // console.log(field.id, "não foi!");
        field.classList.add("error");
        errors++;
      }
    });

    if (errors === 0) {
      addContact(contact);
    } else {
      document.querySelector(".error").focus();
    }
  };

  const addContact = function(contact) {
    const endpoint = "http://localhost:7000/contacts";

    const config = {
      method: "POST",
      body: JSON.stringify(contact),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    
    fetch(endpoint, config)
      .then(addContactSuccess) // fulfilled
      .catch(addContactError); // rejected
  };

  const addContactSuccess = function() {
    clearFields();
    getContacts();
  };

  const addContactError = function() {
    console.error("Falha ao salvar o contato!");
  };

  const clearFields = function() {
    UI.fields.forEach(function(field) {
      field.value = "";
    });

    UI.fieldName.focus();
  };

  const getContacts = function() {
    const endpoint = "http://localhost:7000/contacts?_sort=id&_order=desc";

    const config = {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    
    fetch(endpoint, config) // promise 1
      .then(transformToJson) // fulfilled promise 1
        .then(getContactsSuccess) // fulfilled promise 2
        .catch(getContactsError) // rejected promise 2
      .catch(getContactsError) // rejected promise 1
  };

  const getContactsError = function() {
    console.error("Falha ao recuperar os contatos!");
  };

  const transformToJson = function(response) {
    return response.json(); // promise 2
  };

  const getContactsSuccess = function(contacts) {
    let htmlTable = 
      contacts
        // .filter(function(contact) { return contact.id <= 3; })
        .map(function(contact) {
          return `<tr>
                    <td>${contact.id}</td>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone}</td>
                    <td>
                      <a href="#" data-id="${contact.id}" data-action="edit">Editar</a> 
                      |
                      <a href="#" data-id="${contact.id}" data-action="remove">Excluir</a>
                    </td>
                </tr>`;
        })
        .join("");
    
    if (contacts.length === 0) {
      htmlTable = `<tr>
                    <td colspan="5">Não existem contados cadastrados!</td>
                  </tr>`;
    }

    UI.tableData.innerHTML = htmlTable;
  };

  const handlerAction = function(e) {
    e.preventDefault();
    // console.log(e.target, e.target.dataset, e.target.dataset.id);

    if (e.target.dataset.action === "edit") {
      editContact(e.target.dataset.id);
    }

    if (e.target.dataset.action === "remove" && 
        confirm("Deseja excluir este item?")) {
      removeContact(e.target.dataset.id);
    }
  };

  const editContact = function(id) {
    console.log("editing...", id);
  };

  const removeContact = function(id) {
    console.log("removing...", id);

    const endpoint = "http://localhost:7000/contacts/" + id;

    const config = {
      method: "DELETE",
      headers: new Headers({
        "Content-type": "application/json"
      })
    };

    fetch(endpoint, config)
      .then(getContacts)
      .catch(removeContactError);
  };

  const removeContactError = function() {
    console.error("Falha ao excluir o contato!");
  };


  // Binding Events
  UI.buttonAdd.onclick = validateFields; // validateFields(MouseEvent);
  UI.tableData.onclick = handlerAction; // handlerAction(MouseEvent);

  // Initialize
  getContacts();

})();
