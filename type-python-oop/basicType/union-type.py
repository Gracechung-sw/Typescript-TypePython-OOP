# Union type

# int도 되고, string type도 되는 경우
from typing import Union

xxx: Union[int, str] = 3 # Typescript에서는 int | str 이런 식으로 해줬었지. 

xxx = 'hello'


def foo(x: Union[int, str]) -> None:
  print(x)


foo(xxx)