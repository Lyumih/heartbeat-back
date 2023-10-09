import articleService from './article.service'

export const handleGetArticle = async () => {
  return articleService.getArticle()
}

export default {
  handleGetArticle
}