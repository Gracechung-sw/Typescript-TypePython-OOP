{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  /**
   * TS에서 enum은 가능한 사용하지 않는게 좋다. 왜?
   * let day: Days = Days.Saturday;
      day = Days.Tuesday;
      day = 10;
   * 이런 식으로 enum으로 선언된 변수에 어떤 값도 들어갈 수 있다는게 문제이다 
   */
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
