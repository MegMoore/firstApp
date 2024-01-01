import { View, Text } from 'react-native'
import React from 'react'

type PersonProps = {
    name: string
}

const person = (props: PersonProps) => {
  return (
    <View style={{padding: 10}}>
      <Text>{props.name}</Text>
    </View>
  )
}

export default person