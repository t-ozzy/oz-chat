import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { formatRelativeTime } from "./date";

describe("formatRelativeTime", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('5秒以内は"今"を返す', () => {
    const mockDate = new Date("2024-01-01T12:00:03.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("今");
  });

  test('1分以内は"X秒前"を返す', () => {
    const mockDate = new Date("2024-01-01T12:00:30.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("30秒前");
  });

  test('1時間以内は"X分前"を返す', () => {
    const mockDate = new Date("2024-01-01T12:30:00.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("30分前");
  });

  test('1日以内は"X時間前"を返す', () => {
    const mockDate = new Date("2024-01-01T18:00:00.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("6時間前");
  });

  test('1日以上は"YYYY年MM月DD日"を返す', () => {
    const mockDate = new Date("2024-01-03T12:00:00.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("2024年1月1日");
  });

  test("異なる年の日付", () => {
    const mockDate = new Date("2024-01-01T12:00:00.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2023-12-31T12:00:00.000Z"));
    expect(result).toBe("2023年12月31日");
  });

  test("境界値テスト（59秒）", () => {
    const mockDate = new Date("2024-01-01T12:00:59.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("59秒前");
  });

  test("境界値テスト（59分）", () => {
    const mockDate = new Date("2024-01-01T12:59:00.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("59分前");
  });

  test("境界値テスト（23時間）", () => {
    const mockDate = new Date("2024-01-02T11:00:00.000Z");
    vi.setSystemTime(mockDate);
    const result = formatRelativeTime(new Date("2024-01-01T12:00:00.000Z"));
    expect(result).toBe("23時間前");
  });
});
