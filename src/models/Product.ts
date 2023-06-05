class Product {
  public id?: number;
  public name?: string;
  public city?: number;

  constructor(params: any) {
    this.id = params.idProduto;
    this.name = params.dscProduto;
    this.city = params.vlrUnitario;
  }
}

export default Product;