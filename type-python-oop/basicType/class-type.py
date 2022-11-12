# class type
# class 자체를 typing할 때 쓰는 것

class Hello:
  def world(self) -> int:
    return 7

hello: Hello = Hello()

def foo(ins: Hello) -> int:
  return ins.world()

print(foo(hello))