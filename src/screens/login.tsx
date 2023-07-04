import * as React from 'react';
import {
  Text,
  Box,
  Center,
  View,
  Image,
  VStack,
  Button,
  themeTools,
  useColorMode,
  useColorModeValue,
  ZStack
} from 'native-base';
import { SvgUri } from 'react-native-svg';

const Login = () => {
  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blue.50' }} flex={1}>
      <VStack space={20}>
        <Image
          source={require('../assets/book.png')}
          alt="Alternate Text"
          width={300}
          height={300}
        />
        <Text fontFamily="body" fontWeight="600" fontStyle="italic">
          This ASJDLASJDLSAJDLSJLDJSLDSJLAJS
        </Text>
        <Button>Start here</Button>
      </VStack>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 400,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: '#767386',
          zIndex: -999
        }}
      />
    </Center>
  );
};

export default Login;
