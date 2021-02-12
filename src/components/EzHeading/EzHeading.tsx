import React from 'react';
import {headings, Subheading} from './EzHeading.styles';
import {ClearSlots, useSlotProps} from '../../utils/slots';

const classNames = (...args) => args.filter(Boolean).join(' ');

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'right' | 'center';
  children: React.ReactNode;
  size: '1' | '2' | '3' | '4' | '5' | '6';
  id?: string;
  className?: string;
  subheading?: string;
};

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading: React.FC<HeadingProps> = ({
  as,
  id,
  children: title,
  className,
  align,
  size: headingSize,
  subheading: subtitle,
}) => {
  const headingElement = as || `h${headingSize}`;
  const Heading = headings[headingElement];
  const slotProps = useSlotProps({}, 'heading');

  const heading = (
    <Heading size={headingSize} id={id}>
      <ClearSlots>{title}</ClearSlots>
    </Heading>
  );

  const subheading = subtitle && (headingSize === '3' || headingSize === '5') && (
    <Subheading>
      <ClearSlots>{subtitle}</ClearSlots>
    </Subheading>
  );

  const header = (
    <div>
      {heading}
      {subheading}
    </div>
  );

  // eslint-disable-next-line dot-notation
  const classNameWithInternal = classNames(className, EzHeading['__internalComponentSelector']);

  return React.cloneElement(subheading ? header : heading, {
    className: classNameWithInternal,
    align,
    ...slotProps,
  });
};

// eslint-disable-next-line dot-notation
EzHeading['__internalComponentSelector'] = 'css-ezh';

// wrap with styled to allow emotion to target as child component
export default EzHeading;
