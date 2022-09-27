{
  /**
   * Type Aliases - TS가 강력한 이유 1인 Type Aliases. 왜?
   * 1. 기본적인 타입 정의
   * 2. 새로운 타입(내가 원하는 복잡하고 재미있는 타입)을 정의할 수 있음.
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
