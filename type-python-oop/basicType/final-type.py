from typing_extensions import Final

RATE = 300 # 이런 상수라는 암묵적인 약속이 있음. (python에는 JS의 const 같이 상수라는 것이 없지만)

# Final을 아래와 같이 사용해주면
RATE2: Final = 300
RATE2 = 200 # 이렇게 했을 때, error: "RATE2" is declared as Fianl and cannot be reassigned라고 뜬다. 