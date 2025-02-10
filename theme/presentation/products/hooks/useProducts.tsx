import {getProducts} from '@/core/products/actions/get-products.actions';
import {useInfiniteQuery} from '@tanstack/react-query';

export const useProducts = () => {
  const productQuery = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    queryFn: async ({pageParam}) => getProducts(20, pageParam * 20),
    staleTime: 1000 * 60 * 60,

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => allPages.length
  });

  return {productQuery, loadNextPage: productQuery.fetchNextPage};
};
