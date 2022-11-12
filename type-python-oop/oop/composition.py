# composition
# 다른 클래스의 일부 메서드를 사용하고 싶지만, 상속은 하고 싶지 않을 경우에 composition 방식을 사용하는게 좋다.
# 상속의 문제점. 
# 1. 부모 클래스가 변하면 자식 클래스도 계속 수정되어야 한다. 
# 2. 부모 클래스의 메서드를 오버라이딩 하는 경우 내부 구현 방식의 얕은 이해로 오류가 생길 가능성이 증가

# Polymorphism
# 여러 형태를 가질 수 있도록 한다. 즉, 객체를 부품화 할 수 있도록 한다. 
# 같은 형태의 코드가 다른 동작을 하도록 하는 것

class Robot:
    
    # 클래스 변수 : 인스턴스들이 공유하는 변수
    population = 0

    # 생성자 함수
    def __init__(self, name, code):
        self.name = name  # 인스턴스 변수
        self.__code = code  # 인스턴스 변수. private Unused private member `Robot.__code`Py
        Robot.population += 1

    # property getter 
    @property
    def code(self):
        return self.__code

    # setter
    @code.setter # 이렇게 set을 하고자 하는 property명.setter을 데코레이터로 적어 준 뒤
    def code(self, new_code):
        self.__code = new_code

    # 인스턴스 메서드
    def say_hi(self):
        # code
        print(f"Greetings, my masters call me {self.name}.")

    # 인스턴스 메서드
    def cal_add(self, a, b):
        return a + b

    # 인스턴스 메서드
    def die(self):
        print(f"{self.name} is being destroyed!")
        Robot.population -= 1
        if Robot.population == 0:
            print(f"{self.name} was the last one.")
        else:
            print(f"There are still {Robot.population} robots working.")

    # 클래스 메서드
    @classmethod
    def how_many(cls):
        print(f"We have {cls.population} robots.")

    # static 메서드
    # 아래와 같이 class method의 cls도 사용하지 않고, instance method의 self도 사용하지 않는 경우 @staticmethod decorator을 붙인다. 
    @staticmethod
    def this_is_robot_class():
        print("yes")


class Siri(Robot):
  def ___init__(self, name, code):
    self.Robot = Robot(name, code)

  def cal_add(self, a, b):
    return self.Robot.cal_add(a, b) # 이렇게 필요한 부분만 가져다 쓴다. 