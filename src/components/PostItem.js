import React from 'react';
import { Text, View } from "react-native";

export default function PostItem({
    image,
    title,
    description,
    condition,
    price,
    author,
}) {
    return (
        <View>
           <Text>{title}</Text> 
        </View>
    );
}