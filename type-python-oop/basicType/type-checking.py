# Type Hints & Type Checking
int_var: int = 8
str_var: str = 'hello'
float_var: float = 88.9
bool_bar: bool = True

# 하지만 type을 잘 못 적어도 에러를 뱉지는 않는다. ex. int_var: str = 8 이렇게 해도 에러 안 뱉음. 
int_var: str = 8 # 이러면 에러는 발생하지 않지만 vscode editor 단에서 
# Expression of type "Literal[8]" cannot be assigned to declared type "str"
#   "Literal[8]" is incompatible with "str"PylancereportGeneralTypeIssues
# 이런 type hint는 알 수 있음. 

from typing import List, Tuple, Dict
list_var: List[int] = [1, 2, 3]
tuple_var: Tuple[int, ...] = (1, 2, 3)
"""
List[int]와는 다르게 튜플 자료구조인 경우 Tuple[int, ...]로 타이핑을 해야 합니다. 아래는 공식문서에서의 설명을 참조하였습니다.

tuple of an arbitrary number of int objects

즉, 위의 경우 튜플의 모든 원소가 int 타입입니다. 

그러다면 튜플에서 만약에 my_tuple = (178, "hello", True)와 같이 원소의 인덱스에 따라서 타이핑을 하고 싶다면 어떻게 할까요?

이 경우 my_tuple : Tuple[int, str, bool] = (178, "hello", True)로 타이핑을 합니다.
"""
dict_var: Dict[str, int] = {"hello": 47} # Dict[key의 타입, value의 타입]

def cal_add(x: int, y: int) -> int:
  return x + y
# 하지만 이렇게만 해줘서는 type을 이상하게 넣어도 에러를 발생시켜주는 건 아님. 

def type_check(obj, typer) -> None:
  if isinstance(obj, typer):
    pass
  else:
    raise TypeError(f'Type Error: {typer}')

def cal_add_with_type_check(x: int, y: int) -> int:
  type_check(x, int)
  type_check(y, int) # 이렇게 따로 type check을 해줘야 아래와 같이 에러가 발생한다. 
  return x + y

cal_add_with_type_check(1, '1') # TypeError: Type Error: <class 'int'> 에러 발생

# mypy, pyright 설치와 사용법 & 주의사항
# mypy 공식 문서: https://mypy.readthedocs.io/en/stable/getting_started.html
# pip install mypy
# 사용방법: mypy [타입 체크가 필요한 파일명]  
cal_add(1, '2')
"""
(base) grace@jeonghyeonjeong-ui-MacBookPro typescript-oop % mypy type-python-oop/basicType/type-checking.py 
&& python3 type-python-oop/basicType/type-checking.py 

type-python-oop/basicType/type-checking.py:8: error: Name "int_var" already defined on line 2  [no-redef]
type-python-oop/basicType/type-checking.py:44: error: Argument 2 to "cal_add_with_type_check" has incompatible type "str"; expected "int"  [arg-type]
type-python-oop/basicType/type-checking.py:50: error: Argument 2 to "cal_add" has incompatible type "str"; expected "int"  [arg-type]
Found 3 errors in 1 file (checked 1 source file)
"""

# pyright 공식 문서: https://github.com/microsoft/pyright
# sudo npm install -g pyright
# 사용방법: pyright [타입 체크가 필요한 파일명]  

"""
(base) grace@jeonghyeonjeong-ui-MacBookPro typescript-oop % pyright  type-python-oop/basicType/type-checking.py
No configuration file found.
No pyproject.toml file found.
stubPath /Users/grace/Study/typescript-oop/typings is not a valid directory.
Assuming Python platform Darwin
Searching for source files
Found 1 source file
pyright 1.1.279
/Users/grace/Study/typescript-oop/type-python-oop/basicType/type-checking.py
  /Users/grace/Study/typescript-oop/type-python-oop/basicType/type-checking.py:2:16 - error: Expression of type "Literal[8]" cannot be assigned to declared type "str"
    "Literal[8]" is incompatible with "str" (reportGeneralTypeIssues)
  /Users/grace/Study/typescript-oop/type-python-oop/basicType/type-checking.py:8:16 - error: Expression of type "Literal[8]" cannot be assigned to declared type "str"
    "Literal[8]" is incompatible with "str" (reportGeneralTypeIssues)
  /Users/grace/Study/typescript-oop/type-python-oop/basicType/type-checking.py:44:28 - error: Argument of type "Literal['1']" cannot be assigned to parameter "y" of type "int" in function "cal_add_with_type_check"
    "Literal['1']" is incompatible with "int" (reportGeneralTypeIssues)
  /Users/grace/Study/typescript-oop/type-python-oop/basicType/type-checking.py:50:12 - error: Argument of type "Literal['2']" cannot be assigned to parameter "y" of type "int" in function "cal_add"
    "Literal['2']" is incompatible with "int" (reportGeneralTypeIssues)
  /Users/grace/Study/typescript-oop/type-python-oop/basicType/type-checking.py:2:1 - error: Declaration "int_var" is obscured by a declaration of the same name (reportGeneralTypeIssues)
5 errors, 0 warnings, 0 informations 


"""