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
import Animated, { exp } from 'react-native-reanimated';

function CustomTabBar({ state, descriptors, navigation, position }) {

    const [active, setActive] = useState(false);

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

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, height: 60, alignItems: 'center', justifyContent: 'center'}}
          >
            <Text 
                style={
                    state.index === index 
                    ? {color: 'red'}
                    : {color: 'gray'}
                }
            >
                {`${label}-${route.name}`}
            </Text>
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
    }
});


export default CustomTabBar;