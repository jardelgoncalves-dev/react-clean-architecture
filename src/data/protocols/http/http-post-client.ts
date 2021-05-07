export interface HttpPostClientParams {
  url: string;
}
export interface HttpPostClient {
  post(params: HttpPostClientParams): Promise<void>;
}
