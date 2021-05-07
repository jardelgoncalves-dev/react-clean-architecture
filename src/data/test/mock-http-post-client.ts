import {
  HttpPostClient,
  HttpPostClientParams,
} from 'data/protocols/http/http-post-client';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve();
  }
}
