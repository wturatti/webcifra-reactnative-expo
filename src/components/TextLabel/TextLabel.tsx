import { StyleSheet, Text } from 'react-native'
import { Styles } from '../../styles'

type TextLabelProps = {
  title: string
  style?: any
}

export function TextLabel({ title, style }: TextLabelProps) {
  return <Text style={styles(style).textLabel}>{title}</Text>
}

const styles = (style: any) =>
  StyleSheet.create({
    textLabel: {
      fontFamily: Styles.font.regular,
      color: Styles.color.gray,
      ...style,
    },
  })
