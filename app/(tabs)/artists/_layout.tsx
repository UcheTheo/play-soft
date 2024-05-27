import { StyleSheet, Text, View } from "react-native";
import { StackScreenWithSearchBar } from "@/constants/layout";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{...StackScreenWithSearchBar, headerTitle: "Artists" }} />
      </Stack>
    </View>
  );
};

export default ArtistsScreenLayout;

const styles = StyleSheet.create({});
