import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import Component from 'react-component-component';
import {fireEvent, cleanup} from 'react-testing-library';
import markdown from '../EzTable.md';
import EzTable from '../EzTable';
import {EzPage, EzCard, EzHeading, EzAlert, EzTextStyle} from '../../index';
import {fullRender, renderToHtml} from '../../../jest-globals';

const scope = {EzTable, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle, Component};

describe('EzTable', () => {
  visualSnapshots({markdown, scope});
  afterEach(cleanup);

  const columns = [
    {heading: 'Store name', accessor: ({item}) => item.store},
    {heading: 'Total sales', accessor: 'total', numeric: true},
    {heading: 'Average order value', accessor: 'average', numeric: true},
  ];
  const items = [
    {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
    {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  function render(props) {
    const {queryByLabelText, queryAllByLabelText} = fullRender(<EzTable {...props} />);
    return {
      bulkSelectInput: queryByLabelText('Select all'),
      rowSelectInputs: queryAllByLabelText('Select row'),
    };
  }

  describe('column sorting', () => {
    describe('when the user requests a column to be sorted', () => {
      const onSortClick = jest.fn();
      const sortableColumns = [
        {heading: 'Store name', accessor: 'name', sortable: true},
        {heading: 'Total sales', accessor: 'total', sortable: true},
      ];
      const props = {columns: sortableColumns, items, onSortClick};
      const mockEvent = expect.any(Object);

      beforeEach(() => {
        onSortClick.mockClear();
      });

      it('notifies the client that sort is requested', () => {
        const {getByText} = fullRender(<EzTable {...props} />);

        fireEvent.click(getByText(sortableColumns[0].heading));

        expect(onSortClick).toHaveBeenCalledTimes(1);
        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[0],
            direction: 'asc',
          })
        );
      });

      it('can sort a single column in both ascending and descending order', () => {
        const {getByText} = fullRender(<EzTable {...props} />);

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[1],
            direction: 'asc',
          })
        );

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[1],
            direction: 'desc',
          })
        );
      });
    });
  });

  describe('bulk-select', () => {
    describe('when a bulk-select is requested', () => {
      const onRowSelectClick = jest.fn();
      const onBulkSelectClick = jest.fn();
      const isRowSelected = jest.fn() as any;
      const props = {columns, items, onBulkSelectClick, onRowSelectClick, isRowSelected};

      beforeEach(() => {
        onRowSelectClick.mockClear();
        onBulkSelectClick.mockClear();
        isRowSelected.mockImplementation(() => false);
      });

      it('renders a bulk-select input in a column header', () => {
        const {bulkSelectInput} = render(props);
        expect(bulkSelectInput).not.toBeNull();
      });

      it('renders a row-select input for each row', () => {
        const {rowSelectInputs} = render(props);
        expect(rowSelectInputs).toHaveLength(items.length);
      });

      describe('the bulk-select input', () => {
        it('calls the provided click handler when the input state changes', () => {
          const {bulkSelectInput} = render(props);

          bulkSelectInput.click();

          expect(onBulkSelectClick).toHaveBeenCalledTimes(1);
          expect(onBulkSelectClick).toHaveBeenCalledWith(expect.any(Object));
        });

        describe('checked state', () => {
          let expectedState;

          afterEach(() => {
            const {bulkSelectInput} = render(props);
            expect(bulkSelectInput.checked).toBe(expectedState);
          });

          it('is checked when every row has been selected', () => {
            isRowSelected.mockImplementation(() => true);
            expectedState = true;
          });

          it('is not checked when only some rows are selected', () => {
            isRowSelected.mockImplementation(item => item.id === items[0].id);
            expectedState = false;
          });

          it('is not checked when no rows are selected', () => {
            isRowSelected.mockImplementation(() => false);
            expectedState = false;
          });
        });
      });

      describe('the row-select input', () => {
        it('calls the provided click handler when clicked', () => {
          const {rowSelectInputs} = render(props);

          fireEvent.click(rowSelectInputs[0]);

          expect(onRowSelectClick).toHaveBeenCalledTimes(1);
          expect(onRowSelectClick).toHaveBeenCalledWith(expect.any(Object), {item: items[0]});
        });

        it('determines its checked state based on the provided function', () => {
          isRowSelected.mockImplementation(item => item.id === items[0].id);

          const {rowSelectInputs} = render(props);

          expect(rowSelectInputs[0].checked).toBe(true);
          expect(rowSelectInputs[1].checked).toBe(false);
        });
      });
    });

    describe('when a bulk-select functionality is not requested', () => {
      const {bulkSelectInput, rowSelectInputs} = render({columns, items});

      it('does not render a bulk-select input in a column header', () => {
        expect(bulkSelectInput).toBeNull();
      });

      it('does not render a row-select input for each row', () => {
        expect(rowSelectInputs[0]).toBeUndefined();
      });
    });

    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(
        <EzTable
          columns={columns}
          items={items}
          onBulkSelectClick={() => null}
          onRowSelectClick={() => null}
          isRowSelected={() => false}
        />
      );
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTable columns={columns} items={items} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
