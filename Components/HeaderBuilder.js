import React from 'react';
import { View, Text, Image } from 'react-native';

function HeaderBuilder({ Img, Title }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={Img} style={{ height: 32, width: 32, marginBottom: 4 }} />
      <Text style={{ opacity: 0, fontWeight: 'bold' }}>{Title}</Text>
    </View>
  );
}

export default HeaderBuilder;