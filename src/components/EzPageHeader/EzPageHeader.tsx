import React, {createRef, useRef} from 'react';
import LinkButton from './LinkButton';
import {Link, LabelledLink, Labelled} from '../EzLink/EzLink.types';
import {EzHeading, EzLayout} from '..';
import {Tab, TabList} from './Tabs';
import {StyledHeading, StyledActions, StyledSubheading} from './EzPageHeader.styles';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import {wrapEvent} from '../../utils';

type TabType = Labelled | (Labelled & Link);

type Changeable = {onChange: (tab: TabType) => void};

type SubNavProps<T> = (T extends Link ? Partial<Changeable> : Changeable) & {
  tabs: T[];
  selected?: T;
};

type SubNav = SubNavProps<TabType>;

type HeaderProps = {
  actions?: React.ReactNode;
  breadcrumb?: LabelledLink;
  status?: React.ReactNode;
  title: string;
  subnav?: SubNav;
  subheader?: React.ReactNode;
};

const handleKeyDown = (refs: React.RefObject<HTMLElement>[], {tabs, selected}: SubNav) => event => {
  const selectedIndex = selected ? tabs.findIndex(link => link === selected) : 0;

  const count = tabs.length;
  let nextIndex;

  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowRight': {
      nextIndex = (selectedIndex + 1) % count;
      break;
    }
    case 'ArrowUp':
    case 'ArrowLeft': {
      nextIndex = (selectedIndex - 1 + count) % count;
      break;
    }
    default:
      break;
  }

  if (nextIndex === undefined) return;

  const el = refs[nextIndex];

  el.current.click();
  el.current.focus();
};

/**
 * EzPageHeader is used to build the outer structure of a page including the page title and associated actions.
 */
const EzPageHeader: React.FC<HeaderProps> = ({
  actions,
  breadcrumb,
  status,
  title,
  subnav,
  subheader,
}) => {
  const refs = useRef(subnav && subnav.tabs.map(() => createRef<HTMLElement>())).current;
  const selected = subnav && subnav.selected;
  return (
    <div>
      <StyledHeading subnav={subnav}>
        <MaxWidth>
          <EzLayout
            layout={{
              base: 'stack',
              medium: 'equal',
            }}
          >
            <div>
              {breadcrumb && <LinkButton {...breadcrumb} label={`← ${breadcrumb.label}`} />}
              <EzLayout
                layout={{
                  base: 'stack',
                  medium: 'basic',
                }}
              >
                <EzHeading size="1">{title}</EzHeading>
                <div>{status}</div>
              </EzLayout>
            </div>
            {actions && <StyledActions>{actions}</StyledActions>}
          </EzLayout>
        </MaxWidth>
        {subnav && (
          <MaxWidth>
            <TabList onKeyDown={handleKeyDown(refs, subnav)}>
              {subnav.tabs.map((tab, i) => (
                <Tab
                  ref={refs[i]}
                  key={tab.label}
                  tabIndex={(!selected && i === 0) || selected === tab ? 0 : -1}
                  active={selected === tab}
                  {...tab}
                  onClick={wrapEvent(tab.onClick, () => subnav.onChange && subnav.onChange(tab))}
                />
              ))}
            </TabList>
          </MaxWidth>
        )}
      </StyledHeading>
      {subheader && (
        <StyledSubheading>
          <MaxWidth>{subheader}</MaxWidth>
        </StyledSubheading>
      )}
    </div>
  );
};

/**
 * @component
 */
export default EzPageHeader;
