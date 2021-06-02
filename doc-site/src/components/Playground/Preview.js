import React, {useState} from 'react';
import * as buble from 'buble/dist/buble-browser-deps.umd.js';
import {EzSegmentedControl, EzLayout, EzLink, EzCard} from '@ezcater/recipe';
import {withPrefix} from 'gatsby';
import {createUrl} from 'playroom/utils';
import Code from '../Code';
import Sprites from '../Sprites';

const codeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const previewIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const playIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const opts = {
  objectAssign: '_poly.assign',
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true,
  },
};

const poly = {
  assign: function assign(target, _varArgs) {
    'use strict';
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null && nextSource !== undefined) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
};

const evalCode = (code, scope) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map(key => scope[key]);
  const res = new Function('_poly', 'React', ...scopeKeys, code);
  return res(poly, React, ...scopeValues);
};

class ErrorBoundary extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const createPlayroomLink = code => {
  if (!code) return null;

  /* remove the react-router-dom imports */
  const reactRouterDomImportRegex = /(?=const)(.*?)(?<=require\('react-router-dom'\)\;)/;
  const codeWithoutRouter = code.replace(reactRouterDomImportRegex, '');

  /* make the stateful code work in the playground with IIFE
    see: https://github.com/seek-oss/playroom/issues/66
    and trim the last semicolon in the code string,
    or else it throws a cross-origin error in playroom
  */
  const statefulPlayroomCode = `{(${codeWithoutRouter.replace(/;\s*$/, '')})()}`;

  const playroomCode = codeWithoutRouter.startsWith('(') ? statefulPlayroomCode : codeWithoutRouter;

  const baseUrl = withPrefix('/playroom/');
  return createUrl({baseUrl, code: playroomCode, paramType: 'search'});
};

const TextWithIcon = ({children}) => (
  // setting this css variable is cheating. Don't do this at home kids.
  <EzLayout layout="cluster" alignX="center" style={{'--space-layout-gap': '4px'}}>
    {children}
  </EzLayout>
);

export const Eval = ({code = '', scope = {}}) => {
  // NOTE: Remove trailing semicolon to get an actual expression.
  const codeTrimmed = code.trim().replace(/;$/, '');
  const transformed = buble.transform(`return (${codeTrimmed})`, opts).code.trim();
  const result = evalCode(transformed, scope);
  return typeof result === 'function' ? React.createElement(result, null) : result;
};

export default ({code, scope, language}) => {
  const [active, setActive] = useState('preview');

  return (
    <div style={{marginTop: 24, marginBottom: 32}}>
      <Sprites />
      <EzLayout layout="stack">
        <EzLayout layout="right" columns={5}>
          <EzSegmentedControl
            name={`name-${code}`}
            options={[
              {label: <TextWithIcon>{previewIcon} Preview</TextWithIcon>, value: 'preview'},
              {label: <TextWithIcon>{codeIcon} Code</TextWithIcon>, value: 'code'},
            ]}
            active={active}
            onChange={value => setActive(value)}
          />
          <EzLink target="_blank" href={createPlayroomLink(code)}>
            <TextWithIcon>{playIcon} Playroom</TextWithIcon>
          </EzLink>
        </EzLayout>
        <EzCard isQuiet>
          {active === 'preview' && (
            <ErrorBoundary>
              <Eval code={code} scope={scope} />
            </ErrorBoundary>
          )}
          {active === 'code' && <Code code={code} language={language} />}
        </EzCard>
      </EzLayout>
    </div>
  );
};