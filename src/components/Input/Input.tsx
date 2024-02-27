import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { Styles } from '../../styles'

type InputProps = {
  title: string
  style?: any
}

export function Input({ title, style, ...rest }: InputProps & TextInputProps) {
  return <TextInput style={styles(style).input} {...rest} placeholder={title}></TextInput>
}

const styles = (style: any) =>
  StyleSheet.create({
    input: {
      backgroundColor: Styles.color.white,
      fontFamily: Styles.font.bold,
      color: Styles.color.gray,
      width: '70%',
      height: 50,
      borderRadius: 5,
      paddingLeft: 30,
      fontSize: 18,
      marginTop: 10,
      ...style,
    },
  })
