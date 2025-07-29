export function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const targetDate = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

  // 1分以内（投稿直後）
  if (diffInSeconds < 5) {
    return "今";
  }

  // 1分以内（投稿直後）
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

  // 1日以上 - 年日付を表示
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  
  return `${year}年${month}月${day}日`;
} 