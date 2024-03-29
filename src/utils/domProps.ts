import {HTMLAttributes} from 'react';
import filterValidProps from './filterValidProps';
import {mergeProps} from './mergeProps';
// eslint-disable-next-line
import type {StyledExpression} from '../../packages/@stitches/core';

/**
 * Filters out all props that aren't valid DOM props. Optionally includes dom props from any stitches styles provided.
 * @param props - The component props to be filtered.
 * @param styledExpression - Props generated by stitches `css()` calls.
 */
export const domProps = (
  props: unknown,
  ...styledExpressions: StyledExpression[]
): HTMLAttributes<any> => {
  return filterValidProps(
    (mergeProps as any)(
      props,
      ...styledExpressions.map(r => ({
        className: r.className,
      }))
    )
  );
};
