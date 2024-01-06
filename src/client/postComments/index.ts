import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import { type ICommentRequestParams } from 'Client/postComments/types/requests'

class CommentClient extends BaseApiClient {
  async getPostComments(
    postId: string,
    params: ICommentRequestParams
  ): Promise<Response> {
    return await this.request('GET', `posts/${postId}/comments`, params)
  }
}

export const CommentClientInstance = new CommentClient(appConfig.apiRootUrl)
