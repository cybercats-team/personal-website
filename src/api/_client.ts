export type ApiConfig = {
  gravatarUrl: string;
  backendUrl: string;
};

const apiConfig: ApiConfig = {
  gravatarUrl: process.env.GRAVATAR_URL ?? 'https://gravatar.com/',
  backendUrl: process.env.BACKEND_URL ?? ''
};

class ApiClient<ResourceType> {
  constructor(
    private resource: string,
    private server: string
  ) { }

  async get(): Promise<ResourceType[]>;
  async get(resourceId: string): Promise<ResourceType>;

  async get(resourceId?: string): Promise<ResourceType | ResourceType[]> {
    const request = fetch(this.makePath(resourceId), {
      headers: { 'Accept': 'application/json' }
    });

    return resourceId 
      ? this.parse<ResourceType>(request)
      : this.parse<ResourceType[]>(request);
  }

  private makePath(resourceId?: string): string {
    const path = `${this.server}${this.resource}`;

    if (!resourceId) {
      return path;
    }

    const id = resourceId.startsWith('/') 
      ? resourceId.slice(1) : resourceId;

    return `${path}/${id}`;
  }

  private async parse<ReturnType>(asyncResponse: Promise<Response>): Promise<ReturnType> {
    return asyncResponse.then(response => response.json()) as Promise<ReturnType>;
  }
}

export const createApi = <ResourceType>(resource: string, server: string = apiConfig.backendUrl) =>
  new ApiClient<ResourceType>(resource, server);

export const getAvatarUrl = (hash: string, size?: number): string => {
  const url = `${apiConfig.gravatarUrl}avatar/${hash}`;

  return size ? `${url}?s=${size}` : url;
}
