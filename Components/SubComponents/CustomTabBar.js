/**
 * Custom Tab Bar for HOME Screen After LogIn
 */
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CustomTabBar({ state, descriptors, navigation, position }) {

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // on press tab bar
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              state.index === index
              ? styles.active
              : styles.in_active
            }
            key={index}
          >
            <Text 
                style={
                    state.index === index 
                    ? {color: 'red'}
                    : {color: 'gray'}
                }
            >
                {label}
            </Text>
              
            {
              label === "Songs" 
                ? <Ionicons name="md-home" size={24} 
                color={state.index === index ? 'red' : 'gray'} />
                : (<Ionicons name="md-settings" size={24} 
                color={state.index === index ? 'red' : 'gray'} />)
            }
          
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
    active: {
      height: 60,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'white',
      borderBottomColor: 'red'
    },
    in_active: {
      height: 60,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9f9f9'
    }
});


export default CustomTabBar;