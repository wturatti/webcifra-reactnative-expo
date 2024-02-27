import api from '../../../core/services/api'
import { LoadMusics } from '../../../domain/interfaces/music'

export class LoadMusicsService implements LoadMusics {
  async load(): Promise<LoadMusics.Result> {
    const { data } = await api.get<LoadMusics.Result>('mobile/listarMusica')
    return data
  }
}
