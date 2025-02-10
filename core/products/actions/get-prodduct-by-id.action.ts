import {API_URL, productsApi} from '@/core/api/productsApi';
import {type Products} from '../interfaces/product.interface';

export const getProducts = async (id: string) => {
  try {
    const {data} = await productsApi.get<Products>(`/products/${id}`);
    return {
      ...data,
      images: data.images.map((image) => `${API_URL}/files/product/${image}`)
    };
  } catch (error) {
    throw new Error(`Product with id ${id} not found`);
  }
};
