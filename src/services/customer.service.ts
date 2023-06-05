import http from '../utils/http';
import Customer from '../models/Customer';
import ExtCustomer from '../external/Customer';

const url = process.env.REACT_APP_BASE_URL;

export const getCustomers = async () => {
  return (await http.get<Customer[]>(`${url}/Clientes`))
    .map((item) => new Customer(item));
}

export const getCustomer = async (id: number) => {
  return (await http.get<ExtCustomer>(`${url}/Clientes/${id}`));
}

export const postCustomer = async (item: ExtCustomer) => {
  return await http.post<Customer>(`${url}/Clientes`, item);
}

export const putCustomer = async (item: ExtCustomer) => {
  return await http.put(`${url}/Clientes/${item.idCliente}`, item);
}

export const deleteCustomer = async (id: number) => {
  try {
    return await http.remove(`${url}/Clientes/${id}`);
  } catch (error) {
    throw error
  }
}

export default {
  getCustomers,
  getCustomer,
  postCustomer,
  putCustomer,
  deleteCustomer
};