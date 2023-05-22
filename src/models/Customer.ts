class Customer {
  public id?: number;
  public name?: string;
  public city?: string;

  constructor(params: any) {
    this.id = params.idCliente;
    this.name = params.nmCliente;
    this.city = params.cidade;
  }
}

export default Customer;