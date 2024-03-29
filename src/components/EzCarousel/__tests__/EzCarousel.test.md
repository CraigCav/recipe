### Items centered on second page

```jsx
() => {
  useNextPage();
  return (
    <EzCarousel slidesPerPage={2} peek>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
      <Placeholder>4</Placeholder>
      <Placeholder>5</Placeholder>
      <Placeholder>6</Placeholder>
    </EzCarousel>
  );
};
```

### Items on last page with odd number of items

```jsx
() => {
  useNextPage();
  return (
    <EzCarousel slidesPerPage={{base: 1, medium: 2}} peek>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
    </EzCarousel>
  );
};
```

### Cards are always equal in width even with uneven content

```jsx
<div style={{width: 700}}>
  <EzCarousel slidesPerPage={2} peek gap>
    <EzCard
      title="Short name"
      imageSrc={withPrefix('/images/wrap.jpg')}
      imageMaxHeight={120}
      size="small"
    />
    <EzCard
      title="Constantine Wolfeschlegelsteinhausenbergerdorff"
      imageSrc={withPrefix('/images/pizza.jpg')}
      imageMaxHeight={120}
      size="small"
    />
    <Placeholder>3</Placeholder>
  </EzCarousel>
</div>
```

### Space for peek is reapplied across breakpoints

```jsx
() => {
  useNextPage();
  return (
    <EzCarousel slidesPerPage={{base: 4, medium: 2}} peek>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
      <Placeholder>4</Placeholder>
      <Placeholder>5</Placeholder>
      <Placeholder>6</Placeholder>
      <Placeholder>7</Placeholder>
      <Placeholder>8</Placeholder>
      <Placeholder>9</Placeholder>
      <Placeholder>10</Placeholder>
    </EzCarousel>
  );
};
```

### Peek does not offset slide size when there is only one page

```jsx
<EzCarousel slidesPerPage={2} peek>
  <Placeholder>1</Placeholder>
  <Placeholder>2</Placeholder>
</EzCarousel>
```

### Peek does not offset slide size when there is only one page at current breakpoint

```jsx
<EzCarousel slidesPerPage={{base: 1, medium: 2}} peek>
  <Placeholder>1</Placeholder>
  <Placeholder>2</Placeholder>
</EzCarousel>
```

### Space for peek is reset across breakpoints when extra space for peek is no longer needed

Note: You typically wouldn't run two equal responsive values, since medium already applies to
large screens, however this triggers the same bug, without us needing to force the test to
run at the largest breakpoint.

```jsx
<EzCarousel slidesPerPage={{base: 1, medium: 2, large: 2}} gap peek>
  <Placeholder>1</Placeholder>
  <Placeholder>2</Placeholder>
</EzCarousel>
```
