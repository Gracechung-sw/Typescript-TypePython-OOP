// Java 에서는 Exception이라는 class가 있는  반면
// JS, TS에서는 Error라는 class가 있다.

/**
 * Error(Exception) Handling 우아하게 에러를 처리하는 방법.
 * 1. try
 * 2. catch
 * 3. finally
 */

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exists! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {}

const fileName = 'file';
console.log(readFile(fileName));
closeFile(fileName);

const fileName2 = 'not exist!';
// 모든 사항에 try/catch를 하는게 아니라, 정말 에러가 발생할 가능성이 있고, 이를 처리해줘야할 때만 사용하는 것이 좋다.
try {
  console.log(readFile(fileName2));
} catch (error) {
  console.log('catched!');
} finally {
  closeFile(fileName);
}
