import {Box} from '@/components/ui/box';
import {Spinner} from '@/components/ui/spinner';
import {useAuthStore} from '@/theme/presentation/auth/store/useAuthStore';
import {Redirect, Stack} from 'expo-router';
import {useEffect} from 'react';
import colors from 'tailwindcss/colors';

const CheckAuthenticationLayout = () => {
  const {status, checkStatus} = useAuthStore();

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
  if (status === 'authenticated') {
    return <Redirect href={'/auth/login'} />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(home)/index"
        options={{
          headerShown: false,
          title: 'Products'
        }}
      />
    </Stack>
  );
};

export default CheckAuthenticationLayout;
