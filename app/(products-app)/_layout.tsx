import {Box} from '@/components/ui/box';
import {Icon} from '@/components/ui/icon';
import {Spinner} from '@/components/ui/spinner';
import {useAuthStore} from '@/theme/presentation/auth/store/useAuthStore';
import {Redirect, Stack} from 'expo-router';
import {ArrowLeft} from 'lucide-react-native';
import {useEffect} from 'react';
import {Pressable} from 'react-native';
import colors from 'tailwindcss/colors';

const CheckAuthenticationLayout = () => {
  const {status, checkStatus, logout} = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === 'checking') {
    return (
      <Box className="flex-1 justify-center items-center">
        <Spinner size={'large'} color={colors.blue[500]} />
      </Box>
    );
  }
  if (status === 'unauthenticated') {
    return <Redirect href={'/auth/login'} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: 'Products',
          headerLeft: () => (
            <Pressable
              className="mr-4 align-middle justify-center self-center"
              onPress={logout}
            >
              <Icon as={ArrowLeft} size="xl" className="color-black" />
            </Pressable>
          )
        }}
      />
    </Stack>
  );
};

export default CheckAuthenticationLayout;
