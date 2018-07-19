import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function PostItem({
  image,
  title,
  description,
  condition,
  price,
  author
}) {
  return (
    <View>
      <View style={styles.item}>
        <View>
          <Image source={{uri: image}} style={styles.image} />
          {/* <Text>Price:</Text> */}
          <Text>${price}</Text>
        </View>
        <View>
          <Text>Title:</Text>
          <Text>{title}</Text>
          <Text>Description:</Text>
          <Text>{description}</Text>
          <Text>Condition:</Text>
          <Text>{condition}</Text>
        </View>
        <View>
          {/* <Text>Seller:</Text>
          <Text>{author.username}</Text>
          <Text>Email:</Text>
          <Text>{author.email}</Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  image: {
    width: 100,
    height: 100
  }
});
