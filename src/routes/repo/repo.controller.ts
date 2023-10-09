import repoService from './repo.service'

export const handleGetRepo = async () => {
  return repoService.getRepo()
}

export default {
  handleGetRepo
}