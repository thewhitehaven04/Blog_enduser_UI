import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import { type IGetPostsRequestParamsDto } from 'Client/posts/types/requests'

export class PostsClient extends BaseApiClient {
  async getPosts(postsRequest: IGetPostsRequestParamsDto): Promise<Response> {
    return await this.request('GET', 'posts', postsRequest)
  }

  async getPost(postId: string): Promise<Response> {
    return await this.request('GET', `posts/${postId}`)
  }
}

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)
export { PostsClientInstance }
