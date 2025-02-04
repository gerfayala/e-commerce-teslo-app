import {View} from 'react-native';
import React from 'react';
import {useThemeColor} from '@/theme/presentation/hooks/useThemeColor';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText
} from '@/components/ui/actionsheet';
import {Button, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {HStack} from '@/components/ui/hstack';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';

const HomeScreen = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <View
      className="bg-background-1"
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <VStack space="md">
        <Button onPress={() => setShowActionsheet(true)}>
          <ButtonText className="font-kanit-bold">Open Actionsheet</ButtonText>
        </Button>
        <Button onPress={() => setShowActionsheet(true)}>
          <ButtonText className="font-roboto">Open Actionsheet</ButtonText>
        </Button>
      </VStack>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>

      <HStack className="mt-8" space="md" reversed={false}>
        <Box className="h-20 w-20 bg-primary-1" />
        <Box className="h-20 w-20 bg-primary-400" />
        <Box className="h-20 w-20 bg-primary-500" />
      </HStack>

      <VStack className="mt-8" space="md">
        <Text className=" font-thin font-kanit-regular">
          Prueba de texto Regular
        </Text>
        <Text className="  font-kanit-bold">Prueba de texto Bold</Text>
        <Text className=" font font-kanit-thin"> Prueba de texto Light</Text>
        <Text> Prueba de texto</Text>
      </VStack>
    </View>
  );
};

export default HomeScreen;
