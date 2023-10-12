import config from 'config/config';

/**
 * This is a simple REST client service that uses the Fetch API to make HTTP requests.
 *
 * This service will also handle jwt token authentication.
 *
 * @class RestService
 * @constructor RestService
 * @param {string} baseApiUrl - The base URL of the API.
 * @example
 * const restService = new RestService('https://api.example.com');
 * const response = await restService.get('/users');
 * console.log(response);
 * // => [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
 */
class RestService {
  baseApiUrl: string;

  constructor(baseApiUrl: string) {
    this.baseApiUrl = baseApiUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseApiUrl}${path}`);
    return response.json();
  }
}

const restService = new RestService(config.apiBaseUrl);

export default restService;
