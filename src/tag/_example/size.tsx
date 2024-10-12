import { Tag } from 'tiui';
import React from 'react';

export default function ThemeExample() {

  type TSize = 'small' | 'medium' | 'large';

  const theme = ['small', 'medium', 'large'] as TSize[];

  return <>
    {theme.map((item, _index) => (
      <Tag style={{
        marginRight: 10,
      }} size={item} key={_index} content={item}></Tag>
    ))}
  </>
} 