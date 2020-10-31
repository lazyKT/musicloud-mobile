// import React, { useState } from 'react';
// import { Text, StyleSheet, View, Button } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


// function CustomTabBar({ navigation, state }) {

//     return (
//       <View style={styles.container}>
//           {
//               state.routes.map((route, idx) => {
//                 console.log("Header", route.name);
//                 console.log('current idx', state.index, idx);

//                 return(
//                     // <View style={styles.buttonContainer}>
//                     //     <Button
//                     //         title={route.name}
//                     //         color={
//                     //             state.index === idx
//                     //             ? 'red'
//                     //             : 'gray' 
//                     //         }
//                     //         onPress={() => {
//                     //             navigation.navigate(route);
//                     //         }}
//                     //     />
//                     // </View>
//                     <TouchableOpacity
//                         accessibilityRole="button"
//                         style={styles.buttonContainer}
//                         onPress={() => {
//                         // Navigate using the `navigation` prop that you received
//                         navigation.navigate(route);
//                         }}
//                     >
//                         <Text
//                             style={
//                                 state.index === idx
//                                 ? { color: 'red', flex: 1 }
//                                 : { color : 'gray', flex: 1 }
//                             }
//                         >
//                             {route.name}
//                         </Text>
//                     </TouchableOpacity>
//                 );
//               })
//           }
//       </View>
//     );
// }

// export default CustomTabBar;

// export default CustomTabBar;
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

        const onPress = () => {
            console.log("onPress", route.name)

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
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
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