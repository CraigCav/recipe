/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {FC, useState} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzNavigation.theme.config';
import en from './en';
import Logo, {LogoType} from './Logo';
import Menu from './Menu';
import Hamburger from './Hamburger';
import UserMenu from './UserMenu';
import {Counter} from './Notifications';
import {LabelledLink, Labelled} from '../EzLink/EzLink.types';
import {useTranslation} from '../../utils/hooks';
import {clsx} from '../../utils';

const countNotifications = links =>
  links.reduce((sum, link) => {
    if (!link.notifications) return sum;
    const count = Number.isInteger(link.notifications) ? Number(link.notifications) : 0;
    return sum + count;
  }, 0);

type HomeLink = LabelledLink & {
  logo?: LogoType;
};

type LinkGroup = Labelled & {
  links: LabelledLink[];
};

type LinkOrGroup = LabelledLink | LinkGroup;

type NavLink = LinkOrGroup & {
  notifications?: number | '★';
};

type UserMenu = {
  links: LabelledLink[];
  name: string;
};

type Props = {
  links: NavLink[];
  utilityLinks?: NavLink[];
  userMenu?: UserMenu;
  home: HomeLink;
};

const wrapper = theme.css({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: '100%',
  '@large': {
    flexDirection: 'row',
  },
});

const navWrapper = theme.css({
  display: 'flex',
  flexWrap: 'wrap',
  background: '$nav-bg',

  '@large': {
    position: 'sticky',
    height: '100vh',
    top: 0,
    width: '$nav-sidebar-w',
  },
});

const menuButton = theme.css({
  display: 'block',
  '@large': {
    display: 'none',
  },
});

const menuContent = theme.css({
  visibility: 'hidden',
  height: '0',
  transition: 'height 0.24s cubic-bezier(0.64, 0, 0.35, 1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  '@large': {
    visibility: 'visible',
    width: '$nav-sidebar-w',
    transition: 'none',
    height: '$nav-bar-menu-h',
    overflowY: 'auto',
  },
});

const openedMenuContent = theme.css({
  visibility: 'visible',
  height: '$nav-bar-menu-h',
  overflowY: 'auto',

  '@large': {
    visibility: 'visible',
    width: '$nav-sidebar-w',
    transition: 'none',
    height: '$nav-bar-menu-h',
    overflowY: 'auto',
  },
});

const menus = theme.css({
  width: '$full',
});

const primaryMenus = theme.css({
  flex: '1 1 0%',
});

const contentContainer = theme.css({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 100%',
  minWidth: 0,
  maxWidth: '100%',
  '@large': {
    height: 'auto',
    overflow: 'visible',
  },
});

const linksWrapper = theme.css({
  '& a': {
    paddingLeft: 32,
    paddingTop: 12,
    paddingBottom: 12,
  },
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

const openedContentContainer = theme.css({
  height: 0,
  overflow: 'hidden',
});

const groupContainer = theme.css({
  display: 'flex',
  flexDirection: 'column',
});

const groupButton = theme.css({
  ':focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 2px #3e90d6',
  },
});

const groupSvgWrapper = theme.css({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: 24,
});

const groupSvg = theme.css({
  svg: {
    transition: 'transform 0.3s ease-in-out',
  },
  variants: {
    isOpen: {
      true: {
        svg: {
          transform: 'rotate(180deg)',
        },
      },
      false: {
        svg: {
          transform: 'rotate(0deg)',
        },
      },
    },
  },
});

const notificationIcon = theme.css({
  position: 'absolute',
  top: '12px',
  right: '10px',
  boxShadow: '0px 0px 1px 5px #373c43',
  borderRadius: '$round',
  cursor: 'pointer',
  pointerEvents: 'none',
  userSelect: 'none',
  '@large': {
    visibility: 'hidden',
  },
});

const Group = ({links, className, children}) => {
  const active = links.some(link => link.active);
  const [open, setOpen] = useState(active);

  return (
    <Style ruleset={theme}>
      <div className={groupContainer()}>
        <div
          onClick={e => {
            e.stopPropagation();
            setOpen(o => !o);
          }}
          className={groupButton()}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key !== ' ' && e.key !== 'Enter') return;
            setOpen(o => !o);
          }}
        >
          <div className={clsx(groupSvgWrapper(), className, groupSvg({isOpen: open}))}>
            {children}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div className={clsx(linksWrapper({isOpen: open}))}>
          <Links links={links} />
        </div>
      </div>
    </Style>
  );
};

const Links = ({links}) =>
  links.map((link, i) => (
    <Menu key={i} link={{...link, as: link.links?.length ? Group : link.as}} />
  ));

const EzNavigation: FC<Props> = ({
  children,
  links,
  utilityLinks,
  userMenu,
  home: {logo, ...homeLink},
}: any) => {
  const {t} = useTranslation(en);
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(s => !s);

  const notificationSummary = countNotifications(links) + countNotifications(utilityLinks || []);

  return (
    <Style ruleset={theme}>
      <div className={wrapper()}>
        <div className={navWrapper()}>
          <Logo link={homeLink} logo={logo} />
          <Hamburger opened={!hidden} onClick={toggle} className={menuButton()}>
            {notificationSummary > 0 && hidden && (
              <span className={notificationIcon()}>
                <Counter>{notificationSummary}</Counter>
              </span>
            )}
          </Hamburger>
          <div className={clsx(menuContent(), !hidden && openedMenuContent())}>
            <nav
              className={clsx(menus(), primaryMenus())}
              aria-label={t('Primary navigation')}
              onClick={toggle}
            >
              <Links links={links} />
            </nav>
            {utilityLinks && (
              <nav className={menus()} aria-label={t('Utility navigation')} onClick={toggle}>
                <Links links={utilityLinks} />
              </nav>
            )}
            {userMenu && (
              <nav className={menus()} aria-label={t('User menu')}>
                <UserMenu
                  name={userMenu.name}
                  links={userMenu.links}
                  isSidebarOpen={!hidden}
                  sidebarToggle={toggle}
                />
              </nav>
            )}
          </div>
        </div>
        <div className={clsx(contentContainer(), !hidden && openedContentContainer())}>
          {children}
        </div>
      </div>
    </Style>
  );
};

export default EzNavigation;
