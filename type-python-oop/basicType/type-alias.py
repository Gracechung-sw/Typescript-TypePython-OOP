# type alias (타입 별칭; 타입에 이름을 지어줌)
# see https://mypy.readthedocs.io/en/stable/kinds_of_types.html#type-alias

# * type alias
from typing import Dict, List, Optional, Tuple, TypedDict, Union


value: Union[int, bool, Union[List[str], List[int], Tuple[int, ...]], Optional[Dict[str, float]]] = 17

def cal(v: Union[int, bool, Union[List[str], List[int], Tuple[int, ...]], Optional[Dict[str, float]]]) -> Union[int, bool, Union[List[str], List[int], Tuple[int, ...]], Optional[Dict[str, float]]]:
  # 어쩌구.. 코드...
  return v

# 이렇게 무척이나 지저분해진다. 

# 이를 type alias를 사용해서 아래와 같이 고칠 수 있다. 
Value = Union[int, bool, Union[List[str], List[int], Tuple[int, ...]], Optional[Dict[str, float]]]
value: Value = 17

def cal(v: Value) -> Value:
  return v

# * dict alias

d: Dict[str, str] = {"hello": "world"}

# 그런데 json으로 데이터를 주고받아서 dict 형태로 python에서 핸들링 할 때, 
# 일일히 Dict[어쩌구]로 해줄 것인가?! 너무 지저분하고 가독성도 좋지 않다. 
# 이런 경우 TypedDict를 사용할 수 있다. 

class Point(TypedDict):
  x: int
  y: float
  z: str

point: Point = {"x": 8, "y": 12.2, "z": "hello"}