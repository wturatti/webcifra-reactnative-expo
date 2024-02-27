import { StyleSheet, Pressable, Text, PressableProps } from 'react-native'
import { Styles } from '../../styles'

type ButtonProps = {
  title: string
  style?: any
}

export function Button(props: ButtonProps & PressableProps) {
  return (
    <Pressable style={styles(props.style).button} {...props}>
      <Text style={styles(props.style).text}>{props.title}</Text>
    </Pressable>
  )
}

const styles = (style: any) =>
  StyleSheet.create({
    button: {
      backgroundColor: Styles.color.primary,
      width: '70%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      ...style,
    },
    text: {
      color: Styles.color.white,
      fontFamily: Styles.font.medium,
      fontSize: 18,
    },
  })
