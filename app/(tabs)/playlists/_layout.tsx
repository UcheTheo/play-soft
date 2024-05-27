import { StyleSheet, Text, View } from "react-native";
import { StackScreenWithSearchBar } from "@/constants/layout";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const PlaylistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBar, headerTitle: "Playlists" }}
        />
      </Stack>
    </View>
  );
};

export default PlaylistsScreenLayout;

const styles = StyleSheet.create({});
