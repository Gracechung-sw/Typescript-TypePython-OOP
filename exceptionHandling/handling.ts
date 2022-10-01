class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    this.client.tryConnect();
    //login...
  }
}

/**
 *     throw new Error('no network!');
          ^
Error: no network!
에러 발생. 
 */

/**
 * 이런 경우,
 */
class App {
  constructor(private userService: UserService) {}
  run() {
    this.userService.login();
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
/**
 * throw new Error('no network!');
          ^
Error: no network!
    at NetworkClient.tryConnect (/Users/grace/Study/typescript-oop/exceptionHandling/handling.ts:3:11)
    at UserService.login (/Users/grace/Study/typescript-oop/exceptionHandling/handling.ts:10:17)
    at App.run (/Users/grace/Study/typescript-oop/exceptionHandling/handling.ts:28:22)


    즉, NetworkClient.tryConnect 에서 Error: no network! 에러가 발생했는데, 해당 메소드는
    at UserService.login  에서 call된거고, 또 이 메소드는
    at App.run 에서 call된 것이다. 
    그리고 application이 죽음. 
 */
