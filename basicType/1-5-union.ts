{
  /**
   *  Union Types: OR - 발생할 수 있는 모든 case중에 하나만 할당하는 경우, 모든 case를 명시해줄 때
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // move(여기에 뭘 작성해주려고 하면 Direction에 있어서 여기 넣을 수 있는 값들을 자동으로 보여주는 타입 힌트가 제공되어 생산성애 큰 도움이 됨!)

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
