export type ApiConfig = {
  gravatarUrl: string;
  backendUrl: string;
};

const apiConfig: ApiConfig = {
  gravatarUrl: process.env.GRAVATAR_URL ?? 'https://gravatar.com/',
  backendUrl: process.env.BACKEND_URL ?? ''
};

class ApiClient<DefaultResourceType> {
  constructor(
    private resource: string,
    private server: string
  ) { }

  async get<ResourceType = DefaultResourceType>(resourceId: string = '') {
    return this.parse<ResourceType>(fetch(this.makePath(resourceId), {
      headers: { 'Accept': 'application/json' }
    }));
  }

  private makePath(resourceId: string): string {
    return `${this.server}${this.resource}/${resourceId}`;
  }

  private async parse<ResourceType>(asyncResponse: Promise<Response>): Promise<ResourceType> {
    return asyncResponse.then(response => response.json()) as Promise<ResourceType>;
  }
}

export const createApi = <DefaultResourceType>(resource: string, server: string = apiConfig.backendUrl) =>
  new ApiClient<DefaultResourceType>(resource, server);