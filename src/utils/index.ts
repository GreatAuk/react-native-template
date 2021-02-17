/**
 * 程序睡眠一段时间
 * @param ms 毫秒
 */
export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
