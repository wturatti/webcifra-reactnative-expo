import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Container } from '../../components/Container'
import { Loading } from '../../components/Loading'
import { LoadMusicsService } from '../../data/services/music'
import { Music } from '../../domain/models'
import { Styles } from '../../styles'

type ItemProps = {
  item: Music
}

export function MusicListing({ navigation }: any) {
  const [musics, setMusics] = useState<Music[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const loadMusics = new LoadMusicsService()

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

  useEffect(() => {
    const fetchMusic = async () => {
      setIsLoading(true)
      const data = await loadMusics.load()
      setIsLoading(false)
      setMusics(data.data)
    }
    fetchMusic()
  }, [])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          style={{ marginTop: 10 }}
          data={musics}
          renderItem={renderItem}
        />
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
})
