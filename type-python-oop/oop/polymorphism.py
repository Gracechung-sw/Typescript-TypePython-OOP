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
  def say_hi(self):
    print(f"Greetings, I'm Siri {self.name}.")


class Bixby(Robot):
  def say_hi(self):
    print(f"Greetings, I'm Bixby {self.name}.")