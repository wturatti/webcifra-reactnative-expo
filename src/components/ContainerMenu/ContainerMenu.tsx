import { StyleSheet, View } from 'react-native'
import { Styles } from '../../styles'

export function ContainerMenu({ children }: any) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.color.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
