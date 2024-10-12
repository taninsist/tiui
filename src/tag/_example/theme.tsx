import { Tag } from 'tiui';
import React from 'react';

export default function ThemeExample() {

  type Theme = 'default' | 'primary' | 'success' | 'warning' | 'danger';

  const theme = ['default', 'primary', 'success', 'warning', 'danger'] as Theme[];

  return <>
    {theme.map((item, _index) => (
      <Tag style={{
        marginRight: 10,
      }} theme={item} key={_index} content={item}></Tag>
    ))}
  </>
} 