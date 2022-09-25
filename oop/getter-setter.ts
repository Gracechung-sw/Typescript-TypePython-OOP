{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs

  user.firstName = 'Grace';
  console.log(user.fullName); // Steve Jobs  // 왜 Grace Jobs가 아닐까?
  // instance가 생성될 때 constructor가 한 번 실행 된 이후 firstName이 수정되어도 fullName 생성은 다시 실행되지 않기 때문.
}
