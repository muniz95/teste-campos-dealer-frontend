import http from '../utils/http';
import Product from '../models/Product';
import ExtProduct from '../external/Product';

const url = process.env.REACT_APP_BASE_URL;

export const getProducts = async () => {
  return (await http.get<Product[]>(`${url}/Produtos`))
    .map((item) => new Product(item));
}

export const getProduct = async (id: number) => {
  return (await http.get<ExtProduct>(`${url}/Produtos/${id}`));
}

export const postProduct = async (item: ExtProduct) => {
  return await http.post<Product>(`${url}/Produtos`, item);
}

export const putProduct = async (item: ExtProduct) => {
  return await http.put(`${url}/Produtos/${item.idProduto}`, item);
}

export const deleteProduct = async (id: number) => {
  try {
    return await http.remove(`${url}/Produtos/${id}`);
  } catch (error) {
    throw error
  }
}

export default {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
};