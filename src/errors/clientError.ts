export class ClientError extends Error {
  res: Response

  constructor(message: string, res: Response) {
    super(message)
    this.res = res
    this.name = 'ClientError'
  }
}