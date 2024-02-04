import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import {
  type IPostCommentBody,
  type ICommentRequestParams,
  type IPatchCommentBody
} from 'Client/postComments/types/requests'

class CommentClient extends BaseApiClient {
  async getPostComments(params: ICommentRequestParams): Promise<Response> {
    return await this.request('GET', `comment`, params)
  }

  async postComment(body: IPostCommentBody): Promise<Response> {
    return await this.authorizedRequest('POST', `comment`, {}, body)
  }

  async deleteComment(commentId: string): Promise<Response> {
    return await this.authorizedRequest('DELETE', `comment/${commentId}`)
  }

  async updateComment(commentId: string, body: IPatchCommentBody): Promise<Response> {
    return await this.authorizedRequest('PATCH', `comment/${commentId}`, {}, body)
  }
}

export const CommentClientInstance = new CommentClient(appConfig.apiRootUrl)
