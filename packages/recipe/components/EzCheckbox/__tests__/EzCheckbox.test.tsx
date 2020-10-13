import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzCheckbox.md';
import EzCheckbox from '..';
import EzLink from '../../EzLink';
import {renderToHtml} from '../../../test-utils/jest-globals';

const scope = {EzCheckbox, EzLink};

describe('EzCheckbox', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzCheckbox label="Basic checkbox" onChange={() => {}} checked />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
