import { Music } from '../../models'

export interface LoadMusics {
  load: () => Promise<LoadMusics.Result>
}

export namespace LoadMusics {
  export type Result = { data: Array<Music> }
}
