
# namespace
# : 개체를 구분할 수 있는 범위
# __dict__: namespace를 확인할 수 있도록 dict로 변환해주는 magic method
# dir(): 어떤 객체의 namespace에서 접근, 사용 가능한 키의 목록을 준다. 

class Robot:
    
    # 클래스 변수 : 인스턴스들이 공유하는 변수
    population = 0

    # 생성자 함수
    def __init__(self, name, code):
        self.name = name  # 인스턴스 변수
        self.code = code  # 인스턴스 변수
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



print(Robot.__dict__ )
# {'__module__': '__main__', 'population': 0, '__init__': <function Robot.__init__ at 0x102e8fac0>, 'say_hi': <function Robot.say_hi at 0x102e8fb50>, 'cal_add': <function Robot.cal_add at 0x102e8fbe0>, 'die': <function Robot.die at 0x102e8fc70>, 'how_many': <classmethod(<function Robot.how_many at 0x102e8fd00>)>, '__dict__': <attribute '__dict__' of 'Robot' objects>, '__weakref__': <attribute '__weakref__' of 'Robot' objects>, '__doc__': None}

siri = Robot("siri", 21039788127)
jarvis = Robot("jarvis", 2311213123)

print(siri.__dict__) # {'name': 'siri', 'code': 21039788127}
print(jarvis.__dict__) # {'name': 'jarvis', 'code': 2311213123}

print(dir(siri))
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'cal_add', 'code', 'die', 'how_many', 'name', 'population', 'say_hi']