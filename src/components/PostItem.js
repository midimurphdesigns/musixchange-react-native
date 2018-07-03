import React from 'react';
import { Text, View, Image } from "react-native";

export default function PostItem({
    image,
    title,
    description,
    condition,
    price,
    author,
}) {
    return (
        <View className="posts-container row">
            <View className="instrument-details">
                <View className="pic-info col-4">
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ image }}
                    />
                </View>
                <View className="instrument-about col-4">
                    <Text className="info-label">Title:</Text>
                    <Text className="instrument-label">{title}</Text>
                    <Text className="info-label">Description:</Text>
                    <Text className="instrument-label">{description}</Text>
                    <Text className="info-label">Condition:</Text>
                    <Text className="instrument-label">{condition}</Text>
                </View>
                <View className="instrument-about col-4">
                    <Text className="info-label">Price:</Text>
                    <Text className="user-info">${price}</Text>
                    {/* <Text className="info-label">Seller:</Text>
                    <Text className="user-info">{author.username}</Text>
                    <Text className="info-label">Email:</Text>
                    <Text className="user-info">{author.email}</Text> */}
                </View>
            </View>
        </View>
    );
}