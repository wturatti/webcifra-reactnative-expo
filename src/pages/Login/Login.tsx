import React, { useContext, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextLabel } from '../../components/TextLabel'
import { AuthContext } from '../../context/AuthContext'
import { Styles } from '../../styles'
import { StatusBar } from 'expo-status-bar'
import { ContainerLogin } from '../../components/Container'
import { Password } from '../../components/Password'

export function Login() {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ContainerLogin>
      <Image
        style={styles.logo}
        source={require('../../../assets/Logo.png')}
      ></Image>
      <TextLabel
        title="Ministério de Louvor"
        style={{
          color: Styles.color.white,
          fontFamily: Styles.font.medium,
          fontSize: 30,
          marginTop: 50,
        }}
      />
      <View style={styles.viewInputs}>
        <Input title="E-mail" onChangeText={(email) => setEmail(email)} />
        <Password
          title="Senha"
          onChangeText={(password) => setPassword(password)}
        />
        <Button title="Acessar" onPress={() => login(email, password)} />
      </View>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </ContainerLogin>
  )
}

const styles = StyleSheet.create({
  viewInputs: {
    marginTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 60,
  },
})
