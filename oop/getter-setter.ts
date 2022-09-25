{
  // 이런 경우 getter, setter 사용이 필요!
  class User {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs

  user.firstName = 'Grace';
  console.log(user.fullName); // Grace Jobs
}
