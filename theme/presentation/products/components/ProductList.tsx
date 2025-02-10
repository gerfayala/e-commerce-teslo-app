import {FlatList} from 'react-native';
import React from 'react';
import {Products} from '@/core/products/interfaces/product.interface';
import {ProductCard} from './ProductCard';

interface Props {
  products: Products[];
  loadNextPage: VoidFunction;
}

const ProductList = ({products, loadNextPage}: Props) => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <ProductCard product={item} />}
    />
  );
};

export default ProductList;
