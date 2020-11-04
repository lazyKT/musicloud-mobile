import { AsyncStorage } from "react-native";
import { useEffect, useState } from "react";

const useAsyncStorage = unMount => {

    const [ data, setData ] = useState({ token: null, loaded: false });

    // fetch data from AsyncStorage
    const fetchData = async () => {

        try {
            const item = await AsyncStorage.getItem('@authToken');

            const json = await JSON.parse(item);

            if (!unMount)
                setData({
                    token: json,
                    loaded: true
                });

        } catch (error) {
            console.log("Error Fetching AsyncStorage Data!");
        }
    }

    useEffect(() => {
        let unMount = false;

        fetchData(unMount);

        // clean up
        return () => {
            unMount = true;
        };
    });

    return data;
}


export default useAsyncStorage;