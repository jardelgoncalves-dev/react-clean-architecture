import faker from 'faker';
import { mockAuthentication } from '../../../../mocks/factories/mock-authentication';
import { HttpPostClientSpy } from '../../../../mocks/mock-http-post-client';
import { RemoteAuthentication } from '../remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  it('should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();

    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call HttpPostClient with correct Body', async () => {
    const params = mockAuthentication();
    const { sut, httpPostClientSpy } = makeSut();
    await sut.auth(params);
    expect(httpPostClientSpy.body).toEqual(params);
  });
});
