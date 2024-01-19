import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../../components/home/SearchBar';
const logo = require('../../assets/slider1.gif');

const list = [
  {
    id: '0',
    image: 'https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg',
    name: 'Home',
  },
  {
    id: '1',
    image:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
    name: 'Deals',
  },
  {
    id: '3',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg',
    name: 'Electronics',
  },
  {
    id: '4',
    image:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
    name: 'Mobiles',
  },
  {
    id: '5',
    image:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg',
    name: 'Music',
  },
  {
    id: '6',
    image: 'https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg',
    name: 'Fashion',
  },
];
const images = [
  require('../../assets/sundarbanshop_logo.png'),
  require('../../assets/slider1.gif'),
  require('../../assets/slider1.gif'),
];

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
          <MaterialIcon name="keyboard-arrow-down" size={24} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable key={index} style={styles.horizontalList}>
              <Image source={{uri: item?.image}} style={styles.listImageIcon} />
              <Text style={styles.listText}>{item?.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <SwiperFlatList
          data={images}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          renderItem={({item}) => (
            <View
              style={{
                height: 200,
                width: 360,
                backgroundColor: 'gray',
                paddingHorizontal: 5,
              }}>
              <Image source={item} style={styles.sliderImage} />
              <Text>{item}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: Platform.OS === 'android' ? 0 : 0,
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
  horizontalList: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listImageIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  listText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  sliderImage: {
    width: '100%',
    resizeMode: 'cover',
  },
});
