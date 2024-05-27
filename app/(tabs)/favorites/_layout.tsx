import { StyleSheet, Text, View } from "react-native";
import { StackScreenWithSearchBar } from "@/constants/layout";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const FavoritesScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBar, headerTitle: "Favorites" }}
        />
      </Stack>
    </View>
  );
};

export default FavoritesScreenLayout;

const styles = StyleSheet.create({});
