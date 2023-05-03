import { dataSource } from '../../nodejs-package-starter/dist/loaders/database-loader'
import { PostFavorite } from '../models/post-favorite'

const PostFavoriteRepository = dataSource.getRepository(PostFavorite)

export default PostFavoriteRepository
