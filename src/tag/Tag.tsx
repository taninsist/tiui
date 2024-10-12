import React from 'react';
import classnames from 'classnames';

// const Foo: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

// export default Foo;

function Tag(props) {
  const {
    className,
    title
  } = props;

  const baseName = 't-tag';

  const mergedClassName = classnames({
    ...className,
    [baseName]: true,
    [`${baseName}--outline`]: true,
    [`${baseName}--primary`]: true
  });

  return <div className={mergedClassName}>{title}</div>;
}

export default Tag;