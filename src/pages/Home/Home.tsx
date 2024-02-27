import React, { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Container } from '../../components/Container'
import { Styles } from '../../styles'
import { LoadMusicsService } from '../../data/services/music'
import { Music } from '../../domain/models'
import { Loading } from '../../components/Loading'

type ItemProps = {
  item: Music
}

export function Home({ navigation }: any) {
  const [musics, setMusics] = useState<Music[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const loadMusics = new LoadMusicsService()

  useEffect(() => {
    const fetchMusic = async () => {
      const musics = []
      setIsLoading(true)
      const data = await loadMusics.load()
      setIsLoading(false)
      for (let i = 0; i <= 5; i++) {
        musics.push(data.data[i])
      }
      setMusics(musics)
    }
    fetchMusic()
  }, [])

  const renderItem = ({ item }: ItemProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.container_item}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', { music: item })
            }}
            style={styles.touchable}
          >
            <Text style={styles.container_item_title}>{item.title}</Text>
            <Text style={styles.container_item_author}>
              {item.description_author}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Text style={styles.title}>Últimas músicas adicionadas</Text>
          <FlatList
            style={{ marginTop: 10 }}
            data={musics}
            renderItem={renderItem}
          />
        </>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_item: {
    margin: 3,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Styles.color.grayLight,
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
    color: Styles.color.white,
  },
  container_item_title: {
    color: Styles.color.black,
    fontSize: 19,
    fontWeight: 'bold',
  },
  container_item_author: {
    color: Styles.color.black,
    fontSize: 16,
  },
  touchable: {
    width: '100%',
  },
  title: {
    width: '100%',
    color: Styles.color.secondary,
    fontSize: 22,
    margin: 15,
    marginTop: 25,
    marginBottom: 2,
    fontWeight: 'bold',
  },
})
