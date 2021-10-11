import React, {
  useRef,
  forwardRef,
  HTMLProps,
  ComponentProps,
  MouseEventHandler,
  useEffect,
} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzNavigation.theme.config';
import {useMenuTrigger, useMenuTriggerState} from '../Overlays';
import EzLink from '../EzLink';
import {clsx, wrapEvents} from '../../utils';
import EzPopover from '../EzPopover';

interface MenuProps {
  readonly name: string;
  readonly links: any;
  readonly isSidebarOpen?: boolean;
  readonly sidebarToggle: MouseEventHandler<HTMLElement>;
}

const menuStyles = theme.css({
  color: '$nav-text',
  fontWeight: '$regular',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '$200',
  paddingRight: '$600',
  paddingBottom: '$200',
  paddingLeft: '$300',
  width: '$full',
  position: 'relative',
  textDecoration: 'none',
  border: 'none',
  background: 'none',
  fontSize: '1em',
  textAlign: 'left',
  fontFamily: '$sans',
  ':hover': {
    color: '$nav-text-hover',
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 2px #3e90d6',
  },
});

const buttonReset = theme.css({
  background: 'none',
  border: 'none',
  textAlign: 'left',

  '&&': {
    appearance: 'none',
  },
});

const nestedStyles = theme.css({
  backgroundColor: '#373d43',
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  borderRadius: '8px',
  boxShadow: '0 3px 6px 0 rgba(#1b2023, 0.6)',
  width: 'calc(100% - 8px)',
  marginLeft: '-4px',
  outline: 'none',
});

const nestedMenuItem = theme.css({
  color: '$nav-text',
  display: 'block',
  fontWeight: '$regular',
  fontSize: '14px',
  padding: '12px 18px',
  width: '100%',
  ':hover:enabled': {
    color: '$nav-text-hover',
    textDecoration: 'none',
  },
});

const iconMenuItem = theme.css({
  display: 'flex',
  alignItems: 'center',
  svg: {
    marginRight: '12px',
  },
});

type TriggerProps = Omit<HTMLProps<HTMLButtonElement>, 'className'> & Pick<MenuProps, 'name'>;

const UserMenuTrigger = forwardRef<HTMLButtonElement, TriggerProps>(({name, ...props}, ref) => {
  return (
    <button
      {...props}
      className={clsx(menuStyles(), iconMenuItem(), buttonReset())}
      type="button"
      ref={ref}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M15.989 17.579c-1.723 0-3.127-.861-4.211-2.584-.659-1.106-.989-2.441-.989-4.004s.505-2.967 1.515-4.211c1.01-1.244 2.233-1.866 3.669-1.866s2.659.622 3.669 1.866c1.01 1.244 1.515 2.733 1.515 4.467s-.505 3.222-1.515 4.467c-1.01 1.244-2.228 1.866-3.653 1.866zM13.628 7.96c-.638.883-.957 1.861-.957 2.935s.154 1.967.463 2.68c.308.713.728 1.271 1.26 1.675s1.048.606 1.547.606c.5 0 .92-.074 1.26-.223s.654-.367.941-.654c.287-.287.537-.611.75-.973.468-.787.702-1.601.702-2.441s-.101-1.547-.303-2.122a4.647 4.647 0 0 0-.814-1.468c-.723-.893-1.553-1.34-2.489-1.34s-1.723.441-2.361 1.324zm-3.86-6.684C11.746.425 13.825 0 16.005 0s4.265.425 6.253 1.276c1.989.851 3.701 1.989 5.137 3.414s2.568 3.127 3.398 5.105c.829 1.978 1.234 4.047 1.212 6.205s-.452 4.227-1.292 6.205c-.84 1.978-1.978 3.685-3.414 5.121s-3.143 2.574-5.121 3.414C20.2 31.58 18.131 32 15.973 32s-4.227-.42-6.205-1.26c-1.978-.84-3.68-1.978-5.105-3.414S2.1 24.183 1.249 22.205C.398 20.227-.027 18.158-.027 16s.425-4.227 1.276-6.205C2.1 7.817 3.238 6.115 4.663 4.69S7.79 2.127 9.768 1.276zm6.221.606c-1.914 0-3.743.372-5.488 1.117S7.257 4.754 6.003 6.03c-1.255 1.276-2.244 2.797-2.967 4.562s-1.074 3.616-1.053 5.551c0 3.233 1.01 6.168 3.031 8.806 1.446-1.808 3.137-3.196 5.073-4.163s3.951-1.452 6.046-1.452 4.11.484 6.046 1.452 3.616 2.356 5.041 4.163c2.021-2.637 3.031-5.573 3.031-8.806 0-1.936-.378-3.786-1.133-5.551s-1.776-3.286-3.063-4.562c-1.287-1.276-2.808-2.286-4.562-3.031s-3.589-1.117-5.503-1.117zM6.035 26.257c1.34 1.255 2.861 2.239 4.562 2.951s3.499 1.069 5.392 1.069c1.893 0 3.69-.356 5.392-1.069s3.222-1.696 4.562-2.951c-1.297-1.659-2.813-2.941-4.546-3.844s-3.536-1.356-5.408-1.356c-2.531 0-4.881.787-7.051 2.361a14.079 14.079 0 0 0-2.903 2.839z"
        />
      </svg>
      {name}
    </button>
  );
});

type ListProps = Pick<ReturnType<typeof useMenuTriggerState>, 'close' | 'isOpen'> &
  Pick<ComponentProps<typeof EzPopover>, 'targetRef'> &
  ReturnType<typeof useMenuTrigger>['menuProps'] &
  Pick<MenuProps, 'links' | 'sidebarToggle'>;

const UserMenuList = ({close, isOpen, targetRef, links, sidebarToggle, ...props}: ListProps) => {
  if (!isOpen) return null;

  return (
    <EzPopover
      targetRef={targetRef}
      placement="top-start"
      matchWidth
      shouldCloseOnBlur
      onClose={close}
    >
      <ul {...props} aria-label="User options" className={nestedStyles()}>
        {links.map(({label, ...link}, i) => (
          <li key={`${label}-${i}`}>
            <EzLink
              as="button"
              type="button"
              {...link}
              {...wrapEvents(link, {
                onClick: sidebarToggle,
              })}
              className={clsx(nestedMenuItem(), buttonReset())}
            >
              {label}
            </EzLink>
          </li>
        ))}
      </ul>
    </EzPopover>
  );
};

const UserMenu: React.FC<MenuProps> = ({name, links, isSidebarOpen, sidebarToggle}) => {
  const ref = useRef();
  const menuState = useMenuTriggerState();
  const {menuTriggerProps, menuProps} = useMenuTrigger(menuState);
  useEffect(() => {
    if (!isSidebarOpen) menuState.close();
  }, [isSidebarOpen, menuState]);
  return (
    <Style ruleset={theme}>
      <UserMenuList
        {...menuProps}
        targetRef={ref}
        links={links}
        sidebarToggle={sidebarToggle}
        isOpen={menuState.isOpen}
        close={menuState.close}
      />
      <UserMenuTrigger {...menuTriggerProps} ref={ref} name={name} />
    </Style>
  );
};

export default UserMenu;
