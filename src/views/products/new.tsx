import React from "react";
import service from "../../services/product.service"

const NewCustomer = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0.0);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await service.postProduct({ dscProduto: name, vlrUnitario: price });
    if (result.id) {
      alert("Cliente incluído com sucesso.");
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Descrição</label>
          <input type="text" name="description" id="description"
            onChange={({target}) => setName(target.value)} />
        </div>
        <div>
          <label htmlFor="price">Valor unitário</label>
          <input type="number" step="0.01" name="price" id="price"
            onChange={({target}) => setPrice(parseFloat(target.value))}
          />
        </div>
        <div>
          <input type="submit" value="Entrar"/>
        </div>
      </form>
  </div>
}

export default NewCustomer