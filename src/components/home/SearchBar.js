import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.searchWrapper}>
      <Pressable style={styles.searchBox}>
        <AntDesignIcon name="search1" size={22} style={{paddingLeft: 10}} />
        <TextInput placeholder="Search here.." />
      </Pressable>
      <MaterialIcon name="mic-none" size={24} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: '#00CED1',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
});
