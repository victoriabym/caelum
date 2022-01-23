(function () {
	console.log("=== AGENDA ===");

	// User Interface
	const UI = {
		fieldName: document.querySelector("#name"),
		fieldEmail: document.querySelector("#email"),
		fields: document.querySelectorAll("input"),
		buttonAdd: document.querySelector(".pure-button-primary"),
		tableData: document.querySelector(".pure-table tbody")
	}; //console.log(UI);

	// Actions
	const validateFields = function (e) {
		e.preventDefault();
		// console.log(e); // console.log(arguments[0]);

		let errors = 0;
		let contact = {};

		UI.fields.forEach(function (field) {
			// console.log(field.value, field.value === "", field.value.length);
			if (field.value.trim().length > 0) {
				//console.log(field.id, "foi preenchido!");
				field.classList.remove("error");
				contact[field.id] = field.value;
			} else {
				//console.log(field.id, "não foi!");
				field.classList.add("error");
				errors++;
			}
		});

		if(errors === 0) {
			addContact(contact)
		} else {
			document.querySelector(".error").focus();
		}
	};

	const addContact = function (contact) {
		const endpoint = "http://localhost:7000/contacts";
		const config = {
			method: "POST",
			body: JSON.stringify(contact),
			headers: new Headers({
				"Content-type": "application/json",
			}),
		};

		fetch(endpoint, config)
			.then(addContactSuccess) // sucesso - fullfilled
			.catch(addContactError); // erro - rejected
	};

	const addContactSuccess = function () {
		clearFields();
		getContacts();
	};

	const addContactError = function () {
		console.log("Falha ao adicionar o contato no backend!")
	};

	const getContacts = function () {
		const endpoint = "http://localhost:7000/contacts?_sort=id&_order=desc";
		const config = {
			method: "GET",
			headers: new Headers({
				"Content-type": "application/json",
			}),
		};

		fetch(endpoint, config) // promise 01
			.then(convertToJson) // fullfilled promise 01
				.then(getContactsSuccess) // fullfilled promise 02
				.catch(getContactsError) // rejected promise 02
			.catch(getContactsError); // rejected promise 01
	};
	
	const convertToJson = function (response) {
		//console.log(response.json());
		return response.json(); // .json retorna uma nova promise (fetch/then/catch) --> promise 2
	};

	const getContactsSuccess = function (contacts) {
		//console.table(contacts);
		//contacts.forEach(function(contact) {
		//	console.log(contact.id +" || "+ contact.name +" || "+ contact.email)
		//})

		let contentHTML = contacts
		//.filter(function(contact){
		//	return contact.id <= 3;
		/*})*/.map(function(contact){
			//return contact.name;
			return `
			<tr>
				<td>${contact.id}</td>
				<td>${contact.name}</td>
				<td>${contact.email}</td>
				<td>${contact.phone}</td>
				<td>
					<button class='pure-button' data-action='edit' data-id='${contact.id}'>Editar</button>
					<button class='pure-button' data-action='delete' data-id='${contact.id}'>Excluir</button>
				</td>
			</tr>`;
		}).join("") // une string html em um valor só

		if(contacts.length === 0) {
			contentHTML = `
			<tr>
				<td colspan='5'><p>Não existem contatos cadastrados!</p></td>
			</tr>`;
		}

		UI.tableData.innerHTML = contentHTML;
	}

	const getContactsError = function () {
		console.log(arguments);
		console.log("Falha ao recuperar o contato no backend!");
	};

	const clearFields = function () {
		UI.fields.forEach(function(field) {
			field.value = '';
		})
	};
	
	const handlerAction = function (e) {
		e.preventDefault();
		//console.log(e.target, e.target.dataset, e.target.dataset.id);

		if(e.target.dataset.action === "edit") {
			console.log("edit")
			editContact(e.target.dataset.id);
		}

		if(e.target.dataset.action === "delete") {
			console.log("delete")
			deleteContact(e.target.dataset.id);
		}
	};

	const deleteContact = function (id) {
		console.log("delete...", id);

		const endpoint = "http://localhost:7000/contacts/" + id;
		const config = {
			method: "DELETE",
			headers: new Headers({
				"Content-type": "application/json",
			}),
		};

		fetch(endpoint, config)
			.then(getContacts)
			.catch(deleteContactError);
	}

	const deleteContactError = function (id) {
		console.error("Falha ao excluir o contato de id " + id);
	}

	const editContact = function (id) {
		console.log("edit...", id);
	}
	
	// Binding Events
	UI.buttonAdd.onclick = validateFields; // validateFields(MouseEvent);
	UI.tableData.onclick = handlerAction;
	
	// Initialize
	getContacts();
})();