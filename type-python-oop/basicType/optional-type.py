# Optional Type
# 있을 수도 있고 없을 수도 있는 타입
from types import Union, Optional

xxx: Union[str, None] = "hello"
xxx = None

# 위와 아래가 같은 의미이다. 
xxx: Optional[str] = 'hello'
xxx = None


# class안에서 자기 자신의 타입을 타이핑 할 때, "" 로 감싸준다. 
# 링크드리스트의 Node를 class로 구현할 띠를 생각해보면, 
class Node:
  def __init__(self, data: int, node: Optional["Node"]):
    self.data = data
    self.node = node

header = Node(1, None)

node = Node(2, header)