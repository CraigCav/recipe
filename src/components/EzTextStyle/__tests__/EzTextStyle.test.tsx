import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzTextStyle.md';
import regressionTests from './EzTextStyle.test.md';
import EzTextStyle from '../EzTextStyle';
import Media from '../../EzField/Media';

const scope = {EzTextStyle, Media};

describe('EzTextStyle', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        asProp: <EzTextStyle as="small">Small Text</EzTextStyle>,
        useProp: <EzTextStyle use="strong">Strong Text</EzTextStyle>,
        alignProp: <EzTextStyle align="left">Strong Text</EzTextStyle>,
        alignPropResponsive: (
          <EzTextStyle align={{base: 'center', medium: 'left'}}>Strong Text</EzTextStyle>
        ),
        domProps: (
          <EzTextStyle
            // can pass arbitrary data-* attributes
            data-custom-tag="foo-bar"
            // can pass boolean data-* attributes
            data-bool
            // can pass aria-* attributes
            aria-describedby="#description"
            // can pass html attributes
            hidden
            // can forward ref
            ref={React.createRef()}
          >
            Small Text
          </EzTextStyle>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
