import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import { ICommentRequestParams } from 'Client/postComments/types/requests'

class CommentClient extends BaseApiClient {
  async getPostComments(postId: string, params: ICommentRequestParams) {
    return await this.request('GET', `posts/${postId}/comment`, params)
  }
}

export const CommentClientInstance = new CommentClient(appConfig.apiRootUrl)
