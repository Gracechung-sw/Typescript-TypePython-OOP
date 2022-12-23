# 절차지향
def add(a, b):
  return a + b

def sub(a, b):
  return a - b

def mul(a, b):
  return a * b

def div(a, b):
  return a / b


print(add(1, 2))
print(sub(1, 2))
print(mul(1, 2))
print(div(1, 2))


# class 도입
class Cal:
  def __init__(self, a, b): # 생성자 : instance 생성시 즉시 실행됨.
    self.a = a;
    self.b = b;

  def add(self):
    return self.a + self.b

  def sub(self):
    return self.a - self.b

  def mul(self):
    return self.a * self.b

  def div(self):
    return self.a / self.b

cal1 = Cal(1, 2)