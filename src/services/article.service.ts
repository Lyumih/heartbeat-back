export const getArticle = () => {
  const data = {
    id: "1",
    name: "node.js fastify cont",
    desc: "описание и тест статей"
  }
  return { response: data }
}

export default { getArticle }