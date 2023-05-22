import React from "react";
import service from "../../services/customer.service"
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  const [name, setName] = React.useState<string | undefined>("");
  const [city, setCity] = React.useState<string | undefined>("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await service.putCustomer({ idCliente: parseInt(id!), nmCliente: name, Cidade: city });
    if (result.id) {
      alert("Cliente incluído com sucesso.");
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const customer = await service.getCustomer(parseInt(id!))
      console.log("Cliente", customer)
      setName(customer.name);
      setCity(customer.city);
    }

    fetchData().catch(console.error)
  })

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

export default EditCustomer