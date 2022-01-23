console.log("=== CLIENTES ===");

(() => {
  console.log("Starting...");
  
  // Config
  const endpoint = "https://run.mocky.io/v3/494e581d-5e96-4349-b1c8-963dd9af83b9";

  const config = {
    headers: new Headers({
      "Content-type": "application/json"
    })
  };

  // Actions
  const getCustomers = async () => {
    /*
    console.log( config );
    console.log( { method: "GET", ...config } ); // spread operator
    console.log( Object.assign({ method: "GET" }, config) );
    */

    try {
      const resp =  await fetch(endpoint, { method: "GET", ...config });
      const data = await resp.json();
      getCustomersSuccess(data);
    } catch (error) {
      getCustomersError(error);
    }

  };

  const getCustomersSuccess = customers => {
    // console.table(data);

    document.querySelector("tbody").innerHTML = 
      customers
        // .filter( customer => customer.id <= 3 )
        .map( (customer) => {
          let { nome, email, telefone, pais } = customer;
          return `<tr>
                    <td>${nome}</td>
                    <td>${email}</td>
                    <td>${telefone}</td>
                    <td>${pais}</td>
                  </tr>`;
        } )
        .join("");

  };

  const getCustomersError = error => console.error(error);

  // Init
  getCustomers();

})();
