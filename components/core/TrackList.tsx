import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const TrackList = () => {
  return (
    <FlatList data={[]} renderItem={() => null}>
      <Text>TrackList</Text>
    </FlatList>
  )
}

export default TrackList

const styles = StyleSheet.create({})