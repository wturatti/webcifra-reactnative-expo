import { ActivityIndicator, View } from 'react-native'
import { Styles } from '../../styles'

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator
        size={60}
        color={Styles.color.primary}
      ></ActivityIndicator>
    </View>
  )
}
