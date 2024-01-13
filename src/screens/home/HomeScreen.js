import React from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/home/SearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        <SearchBar />
        <View style={styles.location}>
          <IoniconsIcon name="location-outline" size={24} color="black" />
          <Pressable>
            <Text style={styles.locationText}>
              Deliver to Rahim - Dhaka 3400
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 10,
    backgroundColor: '#AFEEEE',
  },
  locationText: {
    fontSize: 13,
    fontWeight: '500',
  },
});
