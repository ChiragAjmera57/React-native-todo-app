import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedPageWrapper = ({ children }) => {
  const wrapperRef = useRef();

  const fadeIn = () => {
    if (wrapperRef.current) {
      wrapperRef.current.fadeIn(1000); // 1000 is the duration in milliseconds
    }
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animatable.View ref={wrapperRef} style={styles.container} animation="fadeIn" duration={1000}>
      {children}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default AnimatedPageWrapper;
