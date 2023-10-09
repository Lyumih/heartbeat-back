import { articleService } from '../services'

export const handleGetArticle = () => {
  return articleService.getArticle()
}

export default {
  handleGetArticle
}