console.log("=== CLIENTES ===");

(() => {
    console.log("Starting...");

    const endpoint = "https://run.mocky.io/v3/38570c41-abcb-40f9-8478-63832ea5b636";
    
    const config = {
        headers: new Headers({
            "Content-type": "application/json"
        })
    };

    /* ACTIONS */
    const getCustomers = async () => {
        //console.log(endpoint);
        //console.log(config);
        //console.log({ method: "GET", ...config}); // spread operator
        //console.log(Object.assign({method: "GET", config})); // spread operator
        //fetch(endpoint, { method: "GET", ...config})

        try {
            const resp = await fetch(endpoint, { method: "GET", ...config});
            const data = await resp.json();
            //console.table(data)
            getCustomersSuccess(data)
        } catch (error) {
            getCustomersError(error)
        }
    };
    
    const getCustomersSuccess = customers => {
        //console.log(arguments) // não existe arguments e this em arrow function
        document.querySelector("tbody").innerHTML =
            customers
                //.filter(customer => customer.id <= 3)
                .map( (customer) => {
                    let { name, email, phone, country } = customer;
                    return `
                        <tr>
                            <td>${name}</td>
                            <td>${email}</td>
                            <td>${phone}</td>
                            <td>${country}</td>
                        </tr>`;
                })
                .join("");
        
    };

    const getCustomersError = error => console.log(error);

    /* INIT */
    getCustomers();
}) ();