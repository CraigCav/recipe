import React from 'react';
import Style from '../../snitches';
import theme from './EzChoice.theme.config';
import EzCheckbox from '../EzCheckbox';
import EzRadioButton from '../EzRadioButton';
import EzLayout from '../EzLayout';
import {domProps} from '../../utils';
import {useUniqueId} from '../../utils/hooks';

const box = theme.css({
  display: 'flex',
  alignItems: 'center',

  variants: {
    bordered: {
      true: {
        border: '1px solid $border',
        borderRadius: '$regular',
        padding: '$75 $150',
        lineHeight: '$tight',
        whiteSpace: 'nowrap',
        boxShadow: '$sm',
        '&:hover': {
          borderColor: '$gray500',
        },
        '&:focus-within': {
          boxShadow: '$focus-ring',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        opacity: 0.45,
        pointerEvents: 'none',
      },
    },
  },

  compoundVariants: [
    {
      bordered: 'true',
      disabled: 'true',
      css: {boxShadow: 'none'},
    },
  ],
});

const inputStyles = theme.css({marginRight: '$100'});

const Option = ({input, bordered, disabled, label}) => {
  const id = useUniqueId();
  return (
    <Style ruleset={theme}>
      <span className={box({bordered, disabled})}>
        {React.cloneElement(input, {id})}
        <label htmlFor={id}>{label}</label>
      </span>
    </Style>
  );
};

export default props => {
  const {type, name: fieldName, value: selected = [], options, onChange, onFocus, onBlur} = props;
  const multiple = type === 'checkbox';
  const name = multiple ? `${fieldName}[]` : fieldName;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value, checked} = e.currentTarget;

    const newSelection = multiple
      ? checked
        ? [value].concat(selected)
        : selected.filter(s => s !== value)
      : value;

    onChange({
      ...e,
      target: {
        ...props,
        checked,
        value: newSelection,
      },
    });
  }

  return (
    <Style ruleset={theme}>
      <EzLayout layout={props.bordered ? 'cluster' : 'stack'}>
        {options.map((choice, i) => {
          const {label, value} = choice;
          const disabled = props.disabled || choice.disabled;
          const inputProps = domProps(
            {
              checked:
                'value' in props
                  ? multiple
                    ? selected.indexOf(value) >= 0
                    : value === selected
                  : undefined,
              disabled,
              name,
              onChange: handleChange,
              onFocus,
              onBlur,
              type,
              value,
            },
            inputStyles()
          );
          const input = React.createElement(multiple ? EzCheckbox : EzRadioButton, inputProps);

          return <Option key={i} bordered={props.bordered} {...{disabled, input, label}} />;
        })}
      </EzLayout>
    </Style>
  );
};
