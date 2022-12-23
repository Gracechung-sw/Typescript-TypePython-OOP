# self에 대한 이해
# class 안에 있는 self의 주소와 만들어진 인스턴스의 주소는 값다!
# 즉, self는 인스턴스 그 자체이다
class SelfTest:
  # 클래스 변수
  name = 'grace'

  def __init__(self, x):
    self.x = x

  # class method
  @classmethod
  def func1(cls):
    print(f'cls: {cls}')
    print('func1')

  # instance method
  def func2(self):
    print(f'self: {self}')
    print(f'self 주소: {id(self)}')
    print('func2')

  
test = SelfTest(17)

print(test.func1())
# cls: <class '__main__.SelfTest'>
# func1
# instance도 classmethod에 접근해서 실행 가능하다. instance는 test.__class__ 이렇게 해당 instance가 어떤 class로 생성이 되었는지 알 수 있다. 

# 그러나 
print(SelfTest.func2())
# 이건 TypeError: SelfTest.func2() missing 1 required positional argument: 'self' 에러가 난다. 
# class는 instance의 method에 접근 할 수 없기 때문.

print(f'instance 주소: {id(test)}')
# instance 주소: 4372298480

print(test.func2())
# self: <__main__.SelfTest object at 0x1049bfaf0>
# self 주소: 4372298480
# func2

