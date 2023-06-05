import React from "react";
import service from "../../services/product.service"
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  const [name, setName] = React.useState<string | undefined>("");
  const [price, setPrice] = React.useState<number | undefined>(0.0);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await service.putProduct({ idProduto: parseInt(id!), dscProduto: name, vlrUnitario: price });
      alert("Cliente incluído com sucesso.");
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const customer = await service.getProduct(parseInt(id!))
      setName(customer.dscProduto);
      setPrice(customer.vlrUnitario);
    }

    fetchData().catch(console.error)
  }, [])

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Descrição</label>
        <input type="text" name="description" id="description" value={name}
          onChange={({target}) => setName(target.value)} />
      </div>
      <div>
        <label htmlFor="price">Valor unitário</label>
        <input type="number" step="0.01" name="price" id="price" value={price}
          onChange={({target}) => setPrice(parseFloat(target.value))}
        />
      </div>
      <div>
        <input type="submit" value="Entrar"/>
      </div>
    </form>
  </div>
}

export default EditCustomer