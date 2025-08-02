export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const targetDate = date;
  const diffInSeconds = Math.floor(
    (now.getTime() - targetDate.getTime()) / 1000,
  );

  // 5秒以内
  if (diffInSeconds < 5) {
    return "今";
  }

  // 1分以内
  if (diffInSeconds < 60) {
    return `${diffInSeconds}秒前`;
  }

  // 1時間以内
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}分前`;
  }

  // 1日以内
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}時間前`;
  }

  // 1日以上 - 年月日を表示
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  return `${year}年${month}月${day}日`;
}
