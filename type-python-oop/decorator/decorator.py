def smile():
  print("😃")

def angry():
  print("😡")

def love():
  print("🥰")

smile()
angry()
love()

# 근데 여기 각 함수에 print("hello")를 추가해야 한다면?
# 그리고 이런 함수가 막 100개가 넘는다면?
# 이럴 바에, 어떤 함수에 일부만 조금씩 바뀌게 할 수 있는 새로운 함수를 만드는게 어떤가?

# 그래서 아래와 같이 함수를 일자로 받는 새로운 함수를 만든다. 
def say_hello(func):
  
  def new_func():
    print("hello")
    func()

  return new_func


# 이러면 각 함수에 rint("hello")를 추가해야 하는 요청이
smile = say_hello(smile)
angry = say_hello(angry)
love = say_hello(love) 

smile()
angry()
love()
# 이렇게 간단하게 해결된다. 

# 이것보다 좀 더 간결한 문법이 바로 @를 활용하는 것이다. 
@say_hello
def smile():
  print("😃")
# 이게 곧 smile = say_hello(smile) 와 같은 의미이다. 

@say_hello
def angry():
  print("😡")

@say_hello
def love():
  print("🥰")

smile()
angry()
love()
# 같은 결과가 나온다. 