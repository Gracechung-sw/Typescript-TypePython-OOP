{
  // 이런 경우 getter, setter 사용이 필요!
  class User {
    // 생성자(constructor)의 인자에 접근제한자를 설정해주면 바로 member 변수로 생성이 된다.
    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs

  user.firstName = 'dsfa'; // Property 'firstName' is private and only accessible within class 'User'.ts(2341)
}
