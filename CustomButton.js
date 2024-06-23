// CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomButton = ({ 
  title,
  onPress,
  btnKind = 'rounded',
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  iconName = 'star'
}) => {
  const getButtonStyle = () => {
    let buttonStyles = [styles.buttonBase];
    if (btnKind === 'rounded') buttonStyles.push(styles.rounded);
    if (btnKind === 'outlined') buttonStyles.push(styles.outlined);
    if (variant === 'primary') buttonStyles.push(styles.primary);
    if (variant === 'secondary') buttonStyles.push(styles.secondary);
    if (size === 'sm') buttonStyles.push(styles.sm);
    if (size === 'md') buttonStyles.push(styles.md);
    if (size === 'lg') buttonStyles.push(styles.lg);
    return buttonStyles;
  };

  const getTextStyle = () => {
    let textStyles = [styles.text];
    if (variant === 'primary' && !iconOnly) textStyles.push(styles.textPrimary);
    if (variant === 'secondary' && !iconOnly) textStyles.push(styles.textSecondary);
    if (btnKind === 'outlined' && variant === 'primary' && !iconOnly) textStyles.push(styles.textOutlinedPrimary);
    if (btnKind === 'outlined' && variant === 'secondary' && !iconOnly) textStyles.push(styles.textOutlinedSecondary);
    return textStyles;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      {iconOnly ? (
        <MaterialIcons name={iconName} size={24} color="white" />
      ) : (
        <View style={styles.content}>
          {iconName && <MaterialIcons name={iconName} size={24} color="white" style={styles.icon} />}
          <Text style={getTextStyle()}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 5,
  },
  rounded: {
    borderRadius: 25,
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#000000', // Black outline
    backgroundColor: 'transparent',
  },
  primary: {
    backgroundColor: '#A0522D',
  },
  secondary: {
    backgroundColor: '#000000',
  },
  sm: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  lg: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  textPrimary: {
    color: '#ffffff',
  },
  textSecondary: {
    color: '#ffffff',
  },
  textOutlinedPrimary: {
    color: '#A0522D',
  },
  textOutlinedSecondary: {
    color: '#000000',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  }
});

export default CustomButton;
