import {useEffect, useRef} from 'react';
import {Animated, Keyboard, KeyboardEvent} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useKeyboardHeight = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    const keyboardWillShow = (e: KeyboardEvent) => {
      Animated.timing(translateY, {
        duration: e.duration,
        toValue: -e.endCoordinates.height + bottom,
        useNativeDriver: true,
      }).start();
    };

    const keyboardWillHide = (e: KeyboardEvent) => {
      Animated.timing(translateY, {
        duration: e.duration,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    };

    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );

    return () => {
      keyboardWillHideSub.remove();
      keyboardWillShowSub.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translateY]);

  return translateY;
};
