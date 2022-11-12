# Optional Type
# 있을 수도 있고 없을 수도 있는 타입
from types import Union, Optional

xxx: Union[str, None] = "hello"
xxx = None

# 위와 아래가 같은 의미이다. 
xxx: Optional[str] = 'hello'
xxx = None