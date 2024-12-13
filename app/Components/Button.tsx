import {  Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Button({title,styleT,styleV,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styleV}>
      <Text style={styleT}>{title}</Text>
      </TouchableOpacity>
  )
}

