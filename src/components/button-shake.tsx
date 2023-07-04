//hi this video is all about
//creation of shaking button upon click
//using Animated of react native

//imports
import React, { useState, useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { Text, Button } from 'native-base';

//now as you can see on the emulator on the right
//there is an error shown due to the function
//is not returning any default result as jsx

const ShakeButton = () => {
  //now we declare our listeners
  //this useState is for our trigger on useEffect
  //to trigger shaking function
  const [shake, setShake] = useState(false);
  //this useRef is for our animations
  //to avoid rerendering we use useRef
  const shakeRef = useRef(new Animated.Value(0)).current;

  //now after we declare our const
  //we create interpolation for our animation
  //interpolation is consisted of tuples of
  //inputRange and outputRange
  const shakePolate = shakeRef.interpolate({
    //inputRange are considered as demonstration
    //of effect of animation from 0 to 100%
    //could be declared as 0 to 1
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    //outputrange are the transformations that you
    //could see with the eyes
    outputRange: [0, -5, 0, 5, 0, -5, 0]
    //ALWAYS REMEMBER the length of these two should
    //be equal
  });

  //after declaring our interpolation
  //we declare its usage through styling
  const shakingStyle = { transform: [{ translateX: shakePolate }] };

  //now we need to start the animation function

  const triggerShake = () => {
    shakeRef.setValue(0);
    Animated.timing(shakeRef, {
      duration: 500,
      //this toValue should be the end value
      //of the inputRange
      toValue: 3,
      useNativeDriver: true,
      //this makes the animation smooth
      easing: Easing.bounce
    }).start();
  };

  //now that the animation setup has been done
  //we create the triggers

  //this watches the shake of useState
  useEffect(() => {
    if (shake) {
      triggerShake();
    }
  });

  //now we create button trigger function

  const handleClick = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    });
  };

  //now we add the functions on the
  //button

  //now we test
  return (
    <Animated.View style={[shakingStyle]}>
      <Button onPress={handleClick}>
        <Text>Shake</Text>
      </Button>
    </Animated.View>
  );
};

export default ShakeButton;
