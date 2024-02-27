import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import { Container } from '../../components/Container'
import { Music } from '../../domain/models'
import { Styles } from '../../styles'
import RenderHTML from 'react-native-render-html'

type DetailsProps = {
  route: {
    params: {
      music: Music
    }
  }
}

export function Details(props: DetailsProps) {
  const { music } = props.route.params
  const { width } = useWindowDimensions()

  return (
    <Container>
      <View style={styles.container_item}>
        <Text style={styles.container_item_title}>{music.title}</Text>
        <Text style={styles.container_item_author}>
          {music.description_author}
        </Text>
        <ScrollView>
          <RenderHTML
            contentWidth={width}
            baseStyle={{ fontSize: 16, marginBottom: 50 }}
            source={{ html: music.lyric }}
          />
        </ScrollView>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container_item_title: {
    color: Styles.color.black,
    fontSize: 19,
    fontWeight: 'bold',
  },
  container_item_author: {
    color: Styles.color.black,
    fontSize: 16,
    marginBottom: 10,
  },
  container_item_lyric: {
    color: Styles.color.black,
    fontSize: 18,
    marginTop: 15,
  },
  container_item: {
    margin: 15,
  },
})
