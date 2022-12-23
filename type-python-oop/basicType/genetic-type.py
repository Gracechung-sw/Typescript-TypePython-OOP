# Generic programming: 데이터 형식에 의존하지 않고, 하나의 값이 여러 다른 데이터 타입들을 가질 수 있는 기술

from typing import Generic, Optional, TypeVar, Union

# Generic type 사용하지 않은 경우
class Robot:
  def __init__(self, arm: Union[int, float, str], head: Union[int, float, str]): # arm은 int일 수도 있고, str일 수도 있다. 즉, 확실한 상태가 아닌 것임.  
    self.arm = arm
    self.head = head
  
  def decode(self):
    # self.arm을 사용하는 복잡한 코드
    # 그런데 이 self.arm은 int일 수도 있고, str일 수도 있다. 
    b: Optional[Union[int, str]] = None #  그래서 이렇게 b라는 변수의 타입을 이렇게 정하면?

    # 그런데 이렇게 하면 self.arm가 이미 int로 결정났는데도 b는 Optional[Union[int, str]]  타입이고, 
    # self.arm이 이미 str로 결정났는데도 b는 Optional[Union[int, str]]  타입이게 된다. 
    # 그래서 self.arm에 따라 b의 타입도 결정, 통일 될 수 있도록 해주면 좋겠다. 
    # 이럴 때 generic type을 사용한다. 

robot1 = Robot(123, 456)
robot2 = Robot("567", 890)
robot3 = Robot(12314, 25125)

# Generic type 사용 한 경우
ARM = TypeVar("ARM", int, float, str) # 어떤 타입이 올 수 있는지 후보군(?)을 명시
HEAD = TypeVar("HEAD", int, float, str)

class Robot2(Generic[ARM, HEAD]): # 1. 이렇게 인스턴스가 생성될 때, 생성자함수가 실행될 때 ARM이 어떤 타입인지 결정되고, 그 타입을 ARM 제네릭타입을 쓰는 모든 곳에서 공유한다. 
  def __init__(self, arm: ARM, head: HEAD):
    self.arm = arm
    self.head = head
  
  def decode(self):
    b: Optional[ARM] = None 

robot1 = Robot2[int, int](123, 456) # 2. 그래서 인스턴스를 생성할 때, 어떤 타입인지 여기서 알려 줘야함. 
robot2 = Robot2[str, int]("567", 890)
robot3 = Robot2[float, int](12314, 25125)


class Siri(Generic[ARM, HEAD], Robot2[ARM, HEAD]): # 상속
  pass


siri1 = Siri[int, int](12231413, 23908409)
siri2 = Siri[str, int]("12890309123", 79878789)
siri3 = Siri[float, str](1239.01823, "3243245")



print(siri1.arm)

# * function

T = TypeVar("T", int, float, str)
def test(x: T) -> T:
    print(x)
    print(type(x))
    return x


test(898)