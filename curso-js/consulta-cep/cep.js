(function() {
	console.log("=== CONSULTA CEP ===");

    // User Interface
	const UI = {
		fieldZipcode: document.querySelector("#cep"),
		titlePage: document.querySelector("legend"),
        fieldStreet: document.getElementById("logradouro"),
        fieldNeighborhood: document.getElementById("bairro"),
        fieldCity: document.getElementById("cidade"),
        fieldState: document.getElementById("estado"),
        allFields: document.querySelectorAll("input")
	};

    const getAddressData = async function(cep) {
        localStorage.setItem("zipcode", cep);
		const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
		const config = {
			method: "GET",
			headers: new Headers({
				"Content-type": "application/json",
			}),
		};

        try {
		    const response = await fetch(endpoint, config)
            const address = await response.json();
            getAddressSuccess(address);
        } catch (error) {
            getAddressError(error, cep);
        }
    };
    
    const getAddressSuccess = function (endereco) {
        UI.titlePage.textContent = `Consulta por CEP`;
        UI.titlePage.style.color = "black";

        // ES6 destructuring
        const {cep, logradouro, bairro, localidade, uf} = endereco;

        if (cep && logradouro && bairro && localidade && uf) {
            UI.fieldZipcode.value = cep;
            UI.fieldStreet.value = logradouro;
            UI.fieldNeighborhood.value = bairro;
            UI.fieldCity.value = localidade;
            UI.fieldState.value = uf;
        } else {
            UI.allFields.forEach(function (field) {
                field.value = "";
            });
            throw new Error("Campos indefinidos!");
        }
    }

    const getAddressError = function (error, cep) {
        console.log(error);
        UI.titlePage.textContent = `Falha ao consultar o CEP ${cep}. Por favor, tente novamente mais tarde!`;
        UI.titlePage.style.color = "red";
        UI.fieldZipcode.value = "";
        UI.fieldZipcode.focus();
    }

    const onlyNumbers = function (e) {
        /* considera 8 primeiros caracteres */
        if (this.value.length > 8) {
            this.value = this.value.slice(0, 8);
        }
        /* substitui o que é numero por nada */
        this.value = this.value.replace(/\D/gi, "");
    }
    
    const validateEntry = function () {
        //console.log(this.value)
        if (this.value.length < 8){
            this.classList.add("error");
            this.focus();
        } else {
            this.classList.remove("error");
            getAddressData(this.value);
        }
    }

    //Binding Events
    UI.fieldZipcode.addEventListener("input", onlyNumbers);
    UI.fieldZipcode.addEventListener("focusout", validateEntry);

    // pega o ultimo cep no localstorage ao carregar página
    getAddressData(localStorage.zipcode)
})();