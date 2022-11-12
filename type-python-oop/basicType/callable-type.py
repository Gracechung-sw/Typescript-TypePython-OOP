# Callable types
# callable 객체 mypy 공식 문서
# https://mypy.readthedocs.io/en/stable/kinds_of_types.html#callable-types-and-lambdas

def add(a: int, b: int) -> int:
  return a + b

add(1, 2)


def foo(func):
  return func(2, 3)

foo(add) # 이렇게 함수를 넘겨줄 때는 어떻게 타이핑을 해야 할까?
# 이런 경우 callable type을 사용하면 된다. 
# Collable[함수 인자, 어떤 값이 리턴되는지]

from typing import Callable

def foo_typing(func: Callable[[int, int], int]) -> int: 
  return func(2, 3)

print(foo(add))

"""
(base) grace@jeonghyeonjeong-ui-MacBookPro typescript-oop % mypy type-python-oop/basicType/callable-type.py
Success: no issues found in 1 source file
"""