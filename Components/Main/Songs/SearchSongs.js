/**
 * Search Modal for Songs
 */
import React, { useState, useContext, useEffect } from 'react';
import { Modal, Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import songContext from '../../../Contexts/songContext';
import SongCard from './SongCard';


const SearchSongs = ({ title, cancelSearch, visible }) => {

    const { songs, setSongs } = useContext(songContext);
    // search keyword
    const [ keyword, setKeyword ] = useState("");
    // search result
    const [ results, setResults ] = useState([]);

    /**
     * Search in Songs
     */
    const searchSong = keyword => {
        const { all } = songs;
        let songs_array = all;
        return songs_array.filter( song => 
            ((song.title).toLowerCase()).includes(keyword.toLowerCase())
        );
    }


    /**
     * handle search input
     */
    const handleSearch = text => {
        setKeyword(text);
        setResults(searchSong(text));
    }


    /**
     * onPress search results
     */
    const onPressSearchResults = result => {
        setSongs({
            ...songs,
            current: result
        });
        cancelSearch();
    }

 
    return(
        <Modal
            visible={visible}
            transparent={true}
            animationType= 'slide'
        >   
            <View style={styles.searchView}>

                {/* Search Bar */}
                <View
                    style={styles.searchBar}
                >
                    <TextInput
                        placeholder={`Search in '${title}'`}
                        clearButtonMode="always"
                        style={styles.input}
                        autoCapitalize='none'
                        value={keyword}
                        onChange={
                            event => handleSearch(event.nativeEvent.text)
                        }
                    />

                    <Pressable
                        onPress={cancelSearch}
                    >
                        <Text
                            style={styles.cancel}
                        >
                            Cancel
                        </Text>
                    </Pressable>

                </View>

                {/* Search Results */}
                <View 
                    style={styles.results}
                >
                    { 
                        keyword ?
                        <View style={styles.search_results_container}>
                            <Text style={styles.search_results_title}>
                                { `Search Results for '${keyword}'`}
                            </Text>
                            {
                                results.length > 0 &&
                                <ScrollView
                                    style={{ 
                                        width: '100%'
                                     }}
                                >
                                    {results.map( (result, idx) => 
                                        <SongCard  song={result} key={idx} 
                                            onPress={ () => onPressSearchResults(result)} />
                                    )}
                                </ScrollView>
                            }
                        </View>
                        :
                        <View style={styles.image_container}>  
                            <Image
                                source={require('../../../assets/search.png')}
                                style={{ width: 200, height: 200}}
                            />
                            <Text style={styles.image_text}>
                                {`Enter a keyword \n to search in ${title}`}
                            </Text>
                            <Text>
                                {keyword}
                            </Text>
                        </View>
                    }
                </View>

                
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    searchView : {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 100,
        borderWidth: 1,
        borderColor: 'gainsboro',
        borderTopStartRadius: 20,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.6,
        shadowRadius: 20
    },
    searchBar: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#e4e6eb',
        zIndex: 999,
        elevation: 999,
        margin: 5,
        padding: 5,
        paddingStart: 10,
        paddingLeft: 10,
        borderWidth: 0.2,
        borderColor: '#e4e6eb',
        borderRadius: 10,
    },
    cancel: {
        color: 'gray',
    },
    results: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    image_container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_text: {
        textAlign: 'center',
        color: 'gray',
        marginTop: 10
    },
    search_results_container: {
        marginTop: 10,
        flex: 1
    },
    search_results_title: {
        fontSize: 13,
        fontStyle: 'italic',
        color: 'gray',
        alignSelf: 'center'
    }
})


export default SearchSongs;