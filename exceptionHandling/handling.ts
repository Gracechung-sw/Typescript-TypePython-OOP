class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    try {
      this.client.tryConnect();
      //login...
    } catch (error) {
      console.log('catched!');
    } // 이렇게 수정해주면, error를 catch해서 application은 죽지 않겠지만, 그래서 뭐? 이 에러를 어떻게 핸들링했는데?
    // 사실 아무것도 처리하지 않은 것이고, 심지어 application은 에러가 발생했는지 조차 알 수 없다.
    // Point!: 에러가 발생했을 때, 우아/정확하게 handling할 수 없는 에러라면 catch하지 않는 편이 더 좋다.
    // 그리고 이 에러는 처리할 수 있는 곳에서 catch하고 처리하는 것이 더 좋다.
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
