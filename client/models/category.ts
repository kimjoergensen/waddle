export interface ICategory {
  id: number
  img: string
}

export class Category implements ICategory {
  readonly id: number
  readonly img: string

  constructor(init?: ICategory) {
    Object.assign(this, init)
  }
}
