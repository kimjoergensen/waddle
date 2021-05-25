import image from 'url:/public/img/placeholder-image.jpg'

import { Category } from '../models/category'

export class CategoryService {
  public static async getAllAsync(): Promise<Category[]> {
    return [...Array(36).keys()].map(
      (index) =>
        new Category({
          id: index++,
          img: image
        })
    )
  }
}
