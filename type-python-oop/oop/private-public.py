
# 접근 제한자
# private, public

class Robot:
    
    # 클래스 변수 : 인스턴스들이 공유하는 변수
    population = 0

    # 생성자 함수
    def __init__(self, name, code):
        self.name = name  # 인스턴스 변수
        self.__code = code  # 인스턴스 변수. private Unused private member `Robot.__code`Py
        Robot.population += 1

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

ss = Robot('yss', 'code1')
# print(ss.__code) # AttributeError: 'Robot' object has no attribute '__code' 없다고 나온다. 


class Siri(Robot):
  def __init__(self, name, code):
    super().__init__(name, code)

    # print(self.__code) # AttributeError: 'Siri' object has no attribute '_Siri__code' 

  def get(self):
    print(self.__code) 

siri = Siri('yss', 'code2')
siri.get() # AttributeError: 'Siri' object has no attribute '_Siri__code' 상속 받을 때 private은 상속받지 않음. 