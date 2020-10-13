import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {fireEvent} from '@testing-library/react';
import markdown from '../EzSegmentedControl.md';
import EzSegmentedControl from '../EzSegmentedControl';
import {fullRender, renderToHtml} from '../../../test-utils/jest-globals';

const scope = {EzSegmentedControl};

describe('EzSegmentedControl', () => {
  visualSnapshots({markdown, scope});

  describe('onChange', () => {
    it('triggers onChange when segment is clicked', () => {
      const onChangeSpy: (value: string) => void = jest.fn();

      const {getByText} = fullRender(
        <EzSegmentedControl
          name="test-segment"
          label="test segment"
          active="firstValue"
          className="test"
          labelPosition="left"
          onChange={onChangeSpy}
          options={[
            {label: 'first', value: 'firstValue'},
            {label: 'second', value: 'secondValue'},
            {label: 'third', value: 'thirdValue'},
          ]}
        />
      );

      fireEvent.click(getByText('third'));

      expect(onChangeSpy).toHaveBeenCalledWith('thirdValue');
    });
  });

  it('should meet accessibility guidelines', async () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    const wrapper = renderToHtml(
      <EzSegmentedControl
        name="test-segment"
        label="accessibility test"
        active="firstValue"
        className="test"
        labelPosition="left"
        onChange={onChangeSpy}
        options={[
          {label: 'first', value: 'firstValue'},
          {label: 'second', value: 'secondValue'},
          {label: 'third', value: 'thirdValue'},
        ]}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
