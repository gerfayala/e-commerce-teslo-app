import React from 'react';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText
} from '@/components/ui/form-control';
import {Input, InputField, InputIcon} from '@/components/ui/input';
import {
  AlertCircleIcon,
  ArrowRightIcon,
  LockIcon,
  MailIcon
} from '@/components/ui/icon';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {HStack} from '@/components/ui/hstack';
import {router} from 'expo-router';

const LoginScreen = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <VStack className="flex flex-1 justify-center px-12 bg-background-light">
      <Text className="font-kanit-bold text-3xl color-typography-100">
        Ingresar
      </Text>
      <Text className="font-kanit-regular text-md color-gray-500">
        Por favor, ingrese para continuar
      </Text>
      <VStack className="justify-between py-2 ">
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={true}
        >
          <Input className="my-1" size={'md'}>
            <InputIcon as={MailIcon} size="sm" className="ml-2 color-black" />
            <InputField
              type="text"
              placeholder="Correo Electrónico"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={true}
        >
          <Input className="my-1" size={'md'}>
            <InputIcon as={LockIcon} size="sm" className="ml-2 color-black" />
            <InputField
              type="password"
              placeholder="Contraseńa"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </VStack>

      <Box className="width-full my-4 ">
        <Button className=" bg-primary-1 justify-center" size="xl">
          <ButtonText className="font-kanit-regular tex-sm ">
            Ingresar
          </ButtonText>
          <ButtonIcon as={ArrowRightIcon}></ButtonIcon>
        </Button>
      </Box>

      <HStack className="justify-center align-center mt-8">
        <Button
          variant="link"
          onPress={() => router.navigate('/auth/register')}
        >
          <Text className="font-kanit-regular text-md color-black">
            ¿No tienes una cuenta?
          </Text>
          <ButtonText className="font-kanit-regular tex-sm color-primary-1 ">
            Crea una
          </ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

export default LoginScreen;
