import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { TagType } from './type';
import { StyledProps } from '../common';
import { useConfig } from '../_utils/useConfig';
import { TagDefaultProps } from './defaultProps';

export interface ITagProps extends TagType, StyledProps { }

const Tag = forwardRef<HTMLDivElement, ITagProps>((originProps, ref) => {

  const mergeProps = { ...TagDefaultProps, ...originProps };

  const {
    content,
    children,
    className,
    shape,
    theme,
    size,
    ...otherProps
  } = mergeProps;

  const classPrefix = useConfig();
  const baseName = `${classPrefix}-tag`;

  function getSize(size: string) {
    switch (size) {
      case 'small':
        return '-s';
      case 'large':
        return '-l';
      default:
        return '';
    }
  }

  const mergedClassName = classnames(
    className,
    baseName,
    `${baseName}--${shape}`,
    `${baseName}--${theme}`,
    `${classPrefix}-size${getSize(size)}`
  );

  return <div
    ref={ref}
    {...otherProps}
    className={mergedClassName}
  >
    {content || children}
  </div >;
})


export default Tag;