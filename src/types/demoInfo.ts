/**
 * 示例组对象
 */
export interface DemoTypeGroup {
  type: string;
  list: DemoInfo[];
}

/**
 * 示例元素对象
 */
export interface DemoInfo {
  name: string;
  path: string;
  legend: string;
  date: string;
  description: string;
}