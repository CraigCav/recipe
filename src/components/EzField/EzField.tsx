import React, {forwardRef, CSSProperties} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzField.theme.config';
import Label from '../EzLabel';
import {InsetIcon, ErrorTriangle} from '../Icons';
import {useFocus, useHover, useInput, useUniqueId} from '../../utils/hooks';
import {clsx, domProps, wrapEvents} from '../../utils';
import EzChoice from './EzChoice';
import EzDateInput from './EzDateInput';
import EzTimeInput from './EzTimeInput';
import EzTextArea from './EzTextArea';
import {Props, CustomInputProps} from './EzField.types';
import EzSelect from './EzSelect';
import EzAutosuggest from './EzAutosuggest';
import EzTextInput, {CustomInput} from './EzTextInput';

const inputElements = ['text', 'number', 'password', 'email'];
const choiceElements = ['radio', 'checkbox'];
const inlineElements = [...inputElements];

const errorColor = theme.css({color: '$negative', fill: '$negative'});

const ErrorIcon = () => (
  <InsetIcon insetY0 right0 pr2>
    <ErrorTriangle className={errorColor()} />
  </InsetIcon>
);

const EzCustomInput = forwardRef<HTMLElement, CustomInputProps>(({type: Input, ...props}, ref) => (
  <CustomInput {...props}>
    <Input ref={ref} {...domProps(props)} />
  </CustomInput>
));

const resolveInputFromType = type => {
  if (choiceElements.includes(type)) return EzChoice;
  if (type === 'date') return EzDateInput;
  if (type === 'select') return EzSelect;
  if (type === 'autosuggest') return EzAutosuggest;
  if (type === 'time') return EzTimeInput;
  if (type === 'textarea') return EzTextArea;
  if (inputElements.includes(type)) return EzTextInput;
  return EzCustomInput;
};

const field = theme.css({
  position: 'relative',
  border: 'none',
  padding: '0',

  variants: {
    labelSize: {
      small: {'& > * + *': {marginTop: '$50'}},
      normal: {'& > * + *': {marginTop: '$100'}},
    },
  },

  defaultVariants: {labelSize: 'normal'},
});

const helper = theme.css({
  fontSize: '$75',
  color: '$deemphasisText',
  marginTop: '$100',
});

const errorContainer = theme.css({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
  pointerEvents: 'none',
});

const errorCallout = theme.css({
  backgroundColor: '$negative',
  color: 'white',
  fontSize: '$75',
  padding: '$100 $150',
  position: 'relative',
  flexGrow: 1,
  right: 0,

  '@medium': {
    position: 'absolute',
    userSelect: 'none',
    zIndex: 1,
    boxShadow: '0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15)',
    borderRadius: 3,
  },

  variants: {
    active: {false: {'@medium': {srOnly: 'true'}}},
    inline: {
      true: {
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        '@medium': {transform: 'translate3d(0, -2px, 0)'},
      },
      false: {
        boxShadow: '0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15)',
        borderRadius: 3,
        marginBottom: '0.5rem',
        transform: 'translate3d(0, 6px, 0)',
      },
    },
  },
});

const arrow = theme.css({
  '&::before': {
    content: "''",
    display: 'block',
    width: '0px',
    height: '0px',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid $negative',
    position: 'absolute',
    top: '-5px',
    right: '10px',
  },
});

const characterLimit = theme.css({
  fontSize: '$75',
  marginTop: '$100',
});

const srOnly = theme.css({srOnly: 'true'});

/**
 * Form fields provide inputs for form data, such as text, dates, emails and other data types.
 */
const EzField = forwardRef<HTMLElement, Props>((props, ref) => {
  const generatedId = useUniqueId();
  const id = props.id || generatedId;
  const labelId = useUniqueId();
  const Input = resolveInputFromType(props.type);
  const {helperText, label, touched, error, type, maxLength, labelHidden} = props;
  const showInlineError = inlineElements.includes(type as string);
  const isChoiceElement = choiceElements.includes(type as string);
  const [focused, {onBlur, onFocus}] = useFocus();
  const [hovered, mouseEvents] = useHover();
  const {value, onChange} = useInput(props.value || '');
  const active = focused || hovered;
  const showError = Boolean(touched && error);
  const labelType = isChoiceElement ? 'div' : 'label';
  const errorMessageId = `errorMessage-${id}`;
  const helperTextId = `helperText-${id}`;
  const errorMessage = (
    <div className={errorContainer()}>
      <span
        id={errorMessageId}
        className={clsx(errorCallout({active, inline: showInlineError}), arrow())}
      >
        {error}
      </span>
    </div>
  );
  const relative: CSSProperties = {position: 'relative'};

  const roleAndLabel = isChoiceElement
    ? {role: type === 'radio' ? 'radiogroup' : 'group', 'aria-labelledby': labelId}
    : {};

  return (
    <Style ruleset={theme}>
      <div
        className={field({labelSize: props.labelSize})}
        {...(mouseEvents as any)}
        {...roleAndLabel}
      >
        {!labelHidden && (
          <div>
            <div style={relative}>
              <Label
                id={labelId}
                htmlFor={isChoiceElement ? undefined : id}
                as={labelType}
                error={showError}
                use={props.labelSize === 'small' ? 'secondary' : 'primary'}
              >
                {label}
              </Label>
              {!showInlineError && showError && <ErrorIcon />}
            </div>
            {!showInlineError && showError && errorMessage}
          </div>
        )}
        {helperText && (
          <div id={helperTextId} className={helper()}>
            {helperText}
          </div>
        )}
        <div>
          <div style={relative}>
            <Input
              {...{
                ...props,
                ...wrapEvents(props, {onBlur, onFocus, onChange}),
                id,
                name: props.name || id,
                'aria-labelledby': labelId,
                'aria-invalid': showError,
                'aria-describedby': clsx(showError && errorMessageId, helperText && helperTextId),
                ref,
                showInlineError: (showInlineError && showError) || undefined,
              }}
            />
            {showInlineError && showError && <ErrorIcon />}
          </div>
          {showInlineError && showError && errorMessage}
        </div>
        {'maxLength' in props && typeof value === 'string' && (
          <div className={characterLimit()}>
            {value.length}/{maxLength}
          </div>
        )}
        {labelHidden && (
          <div className={srOnly()} id={labelId}>
            {label}
          </div>
        )}
      </div>
    </Style>
  );
});

/**
 * defaultProps
 * @property {FieldTypes} type - uses 'text' by default.
 */
EzField.defaultProps = {
  type: 'text',
};

/**
 * @component
 */
export default EzField;
