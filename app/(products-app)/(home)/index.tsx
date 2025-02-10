import React from 'react';

import {VStack} from '@/components/ui/vstack';
import {useProducts} from '@/theme/presentation/products/hooks/useProducts';
import {Spinner} from '@/components/ui/spinner';
import ProductList from '@/theme/presentation/products/components/ProductList';
import colors from 'tailwindcss/colors';

const HomeScreen = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);

  const {productQuery, loadNextPage} = useProducts();

  if (productQuery.isLoading) {
    return (
      <VStack className="justify-center items-center flex flex-1">
        <Spinner size="large" color={colors.blue[500]} />
      </VStack>
    );
  }

  return (
    <VStack className=" px-  bg-white">
      <ProductList
        products={productQuery.data?.pages.flatMap((page) => page) ?? []}
        loadNextPage={loadNextPage}
      />
    </VStack>
  );
};

export default HomeScreen;
