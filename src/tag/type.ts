import React from 'react';

export type TagType = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  /**
   * @default 'square'
   * @description 标签类型
   */
  shape?: 'square' | 'round' | 'mark';

  /**
   * @default 'medium'
   * @description 大小
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * @default 'default'
   * @description 主题
   */
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
};
