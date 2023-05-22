import React from "react";
import service from "../../services/customer.service"

const NewCustomer = () => {
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await service.postCustomer({ nmCliente: name, Cidade: city });
    if (result.id) {
      alert("Cliente incluído com sucesso.");
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name"
            onChange={({target}) => setName(target.value)} />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input type="city" name="city" id="city"
            onChange={({target}) => setCity(target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Entrar"/>
        </div>
      </form>
  </div>
}

export default NewCustomer