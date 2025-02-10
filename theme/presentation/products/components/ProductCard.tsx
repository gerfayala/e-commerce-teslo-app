import {Pressable} from 'react-native';
import {Link} from 'expo-router';
import {Box} from '@/components/ui/box';
import {Image} from '@/components/ui/image';
import {Text} from '@/components/ui/text';
import {Products} from '@/core/products/interfaces/product.interface';

interface Props {
  product: Products;
}

export const ProductCard = ({product}: Props) => {
  return (
    <Box className="flex-1 bg-white  rounded-md m-1 overflow-hidden p-1">
      {product.images.length === 0 ? (
        <Link
          href={{
            pathname: `/(products-app)/product/[id]`,
            params: {id: product.id}
          }}
          asChild
        >
          <Pressable className="flex-1 justify-center items-center h-80">
            <Image
              alt="No product image"
              source={require('../../../../assets/images/no-product-image.png')}
              className="w-full h-full "
            />
          </Pressable>
        </Link>
      ) : (
        <Link
          href={{
            pathname: `/(products-app)/product/[id]`,
            params: {id: product.id}
          }}
          asChild
        >
          <Pressable className="flex-1 justify-center items-center h-80">
            <Image
              alt={product.title}
              source={{uri: product.images[0]}}
              className="w-full h-4/6 "
            />
          </Pressable>
        </Link>
      )}

      <Text numberOfLines={2} className=" text-center text-black">
        {product.title}
      </Text>
    </Box>
  );
};
