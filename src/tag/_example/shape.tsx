import { Tag } from 'tiui';
import React from 'react';

export default function ShapeExample() {

  type TShape = 'square' | 'round' | 'mark';

  const shape = ['mark', 'round', 'square'] as TShape[];

  return <>
    {shape.map((item, _index) => (
      <Tag style={{
        marginRight: 10,
      }}
        key={_index}
        content={item}
        shape={item}
        theme={_index % 2 === 0 ? 'default' : 'primary'}
      ></Tag>
    ))}
  </>
} 