import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base, position} from './EzLabelledItem.styles';
import {standard} from '../../themes';

const LabelWrapper = styled.div(base, position);

/**
 * Provides a label that can appear in one of several positions relative to its associated content.
 * Typically used to label an interactive element or a short string of text.
 */
const EzLabelledItem = ({children, position: labelPosition, size, title, theme}) => (
  <div>
    {labelPosition === 'bottom' && children}
    <LabelWrapper position={labelPosition} size={size} theme={theme}>
      {title}
    </LabelWrapper>
    {['top', 'left'].includes(labelPosition) && children}
  </div>
);

EzLabelledItem.propTypes = {
  /**
   * The content to render in conjunction with the label
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines the position of the label relative to its child content
   */
  position: PropTypes.oneOf(['top', 'bottom', 'left']).isRequired,
  /**
   * Determines the size of the label text
   */
  size: PropTypes.oneOf(['normal', 'small']).isRequired,
  /**
   * The theme controlling the default styles.
   */
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
  /**
   * The text for label itself
   */
  title: PropTypes.node.isRequired,
};

/**
 * defaultProps
 * @property {string} size - uses defaults to the base font size.
 * @property {object} theme - uses the standard theme by default.
 */
EzLabelledItem.defaultProps = {theme: standard, size: 'normal'};

EzLabelledItem.displayName = 'EzLabelledItem';

/**
 * @component
 */
export default EzLabelledItem;
