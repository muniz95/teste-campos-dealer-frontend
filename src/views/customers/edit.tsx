import React from "react";
import service from "../../services/customer.service"
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  const [name, setName] = React.useState<string | undefined>("");
  const [city, setCity] = React.useState<string | undefined>("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await service.putCustomer({ idCliente: parseInt(id!), nmCliente: name, cidade: city });
      alert("Cliente incluído com sucesso.");
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const customer = await service.getCustomer(parseInt(id!))
      setName(customer.nmCliente);
      setCity(customer.cidade);
    }

    fetchData().catch(console.error)
  }, [])

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" value={name}
          onChange={({target}) => setName(target.value)} />
      </div>
      <div>
        <label htmlFor="city">Cidade</label>
        <input type="city" name="city" id="city" value={city}
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