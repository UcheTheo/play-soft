import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const FavoriteScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Favorites" }} />
      </Stack>
    </View>
  );
};

export default FavoriteScreenLayout;

const styles = StyleSheet.create({});
