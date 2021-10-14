## Version 12

## 12.3.0

### Minor Changes

- feat: add alert use variant and icon prop to EzStatus [[sha]](https://github.com/ezcater/recipe/commit/5d76bf5f)

## 12.2.0

### Minor Changes

- Add new component EzWell

  - A Well is a content container used to visually group content on a page. Typically a Well displays non-editable content separate from other content on the screen. [[sha]](https://github.com/ezcater/recipe/commit/e1d14555)

- feat: add onPageChange handler to EzCarousel [[sha]](https://github.com/ezcater/recipe/commit/e9110190)

### Patch Changes

- test: add tests for aria-invalid and aria-describedby on EzField [[sha]](https://github.com/ezcater/recipe/commit/a14cf7ee)
- deps: update @testing-library/jest-dom [[sha]](https://github.com/ezcater/recipe/commit/b6cee744)
- refactor: simplify logic for mapping between options and slots [[sha]](https://github.com/ezcater/recipe/commit/7111d4fd)
- feat: add aria-invalid and aria-describedBy to EzField [[sha]](https://github.com/ezcater/recipe/commit/83896909)
- style: fix tertiary button background color for ie11 [[sha]](https://github.com/ezcater/recipe/commit/203e27c5)
- fix: disabled choices via slots API [[sha]](https://github.com/ezcater/recipe/commit/f8dfdb50)
- fix: ignored id prop on EzField

  - Closes #433 [[sha]](https://github.com/ezcater/recipe/commit/56e859b2)

- docs: add docs for onPageChange handler to EzCarousel [[sha]](https://github.com/ezcater/recipe/commit/f2b3bc54)
- test: add tests for ezcarousel onPageChange handler [[sha]](https://github.com/ezcater/recipe/commit/5a5189cb)
- docs: update docs for eztable to sort columns with custom cell rendering [[sha]](https://github.com/ezcater/recipe/commit/c7fe4c91)
- workflow: export default for anonymous functions to improve debugging [[sha]](https://github.com/ezcater/recipe/commit/95f41fba)
- fix: missing `textValue` warning from Multiple choice inputs [[sha]](https://github.com/ezcater/recipe/commit/9ca34386)

## 12.1.0

### Minor Changes

- feat: Add slots API support for EzModal

  - refactors EzModal to use EzCard internally; Modals are effectively floating cards.
  - relaxed type definition for EzModal around required props so EzModal content can be composed via `children`. [[sha]](https://github.com/ezcater/recipe/commit/5709cae9)

- feat: make ezlabel a first class component

  - Render EzLabel as label element without styles by default
  - Update the position and use props to use primary, secondary, and side naming
  - Add docs, preview, and tests for EzLabel [[sha]](https://github.com/ezcater/recipe/commit/edd3b14d)

- feat: deprecate ezlabelleditem [[sha]](https://github.com/ezcater/recipe/commit/52b0e5ad)
- feat: add first class support for Images inside EzModal [[sha]](https://github.com/ezcater/recipe/commit/dfc95e46)
- feat: support for nested content for multiple choice fields with ezitem [[sha]](https://github.com/ezcater/recipe/commit/0cd1ae17)

### Patch Changes

- fix: EzBlankState content doesn't wrap on IE

  - Added `max-width: 100%` to `EzBlankState` content to workaround a [known IE flexbox issue](https://github.com/philipwalton/flexbugs#flexbug-2). [[sha]](https://github.com/ezcater/recipe/commit/f8ec793f)

- perf: added benchmarks to monitor style-insertion performance [[sha]](https://github.com/ezcater/recipe/commit/1770bf67)
- refactor: use latest snitches API to leverage perf improvements [[sha]](https://github.com/ezcater/recipe/commit/1dcef747)
- test: fixed flakey spec caused by scroll-snapping

  - removed scroll snapping from visual regression test runs to avoid an issue where the browser would _sometimes_ trigger a scroll-snap during the initial paint of the carousel, causing the carousel to jump to the last page instead of showing the first page. [[sha]](https://github.com/ezcater/recipe/commit/47e6f773)

- refactor: reuse a single stitches theme for Recipe components

  - Recipe previously created a theme per component in order to provide the capability to skin individual components. Stitches internally expects a single theme to be reused across the entire app and relies on this behavior for client-side hydration of styles. [[sha]](https://github.com/ezcater/recipe/commit/fcf222bf)

- fix: support responsive image position prop in EzCard type definition [[sha]](https://github.com/ezcater/recipe/commit/9898c7f0)
- deps: Update snitches to 0.2.7 for hydration warning fixes [[sha]](https://github.com/ezcater/recipe/commit/b2cfb159)
- deps: update @ezcater/snitches for compatibility with latest stitches release [[sha]](https://github.com/ezcater/recipe/commit/730920c0)
- refactor: normalize snitches usage in EzBaseFontSizeCompatibility

  - Ensures that a stitches theme is always passed to snitches via the ruleset prop [[sha]](https://github.com/ezcater/recipe/commit/b108dd12)

- fix: reduce SSR size of top-level EzAppLayout

  - Fixed snitches usage inside EzAppLayout so snitches provider can de-duplicate root styles. [[sha]](https://github.com/ezcater/recipe/commit/6e35dabc)

- fix: ensure EzProvider wraps children with snitches provider

  - Allows apps that use EzProvider to reduce the amount of inline CSS during SSR. [[sha]](https://github.com/ezcater/recipe/commit/b33f9060)

- fix: support for apps using TS3.0 and strictNullChecks

  - Switched from exposing the `VariantsCall` type definition from Stitches for responsive props within Recipe in favor of using a custom `VariantProps` type derived from the stitches style definitions.
    - Stitches relies on TypeScript features only available in TS 4+ (template literal types). Exposing these types in our public API causes issues for Recipe apps that are on older versions of Typescript.
    - Recipe no longer relies on `"strictNullChecks": false` for generating lists of props; when strict null checks are enabled, calling `keyof` on a nullable type returns `unknown` instead of listing the keys of the Non-nullable version of the type. [[sha]](https://github.com/ezcater/recipe/commit/69ae80f5)

- perf: update to @stitches/core v0.2.2

  - See [stitches blog](https://stitches.dev/blog/stitches-0.2.0#performance-improvements) for details on performance improvements. [[sha]](https://github.com/ezcater/recipe/commit/b91da779)

- fix: remove regex lookbehind from doc-site for IE11 support [[sha]](https://github.com/ezcater/recipe/commit/4e195983)
- style: use flexgap instead of margin EzBlankState content [[sha]](https://github.com/ezcater/recipe/commit/83e5bb74)
- deps: update @ezcater/snitches with latest perf updates [[sha]](https://github.com/ezcater/recipe/commit/d835e4bf)

## 12.0.5

### Patch Changes

- workflow: setup automated canary releases for pushes to main [[sha]](https://github.com/ezcater/recipe/commit/ba1a4809)

## 12.0.4

### Patch Changes

- deps: change @changesets/cli to devDependency (instead of dependency) [[sha]](https://github.com/ezcater/recipe/commit/64c73a47)

## 12.0.3

### Patch Changes

- refactor: Updated EzLayout to use flexbox gap for layout (where available), or [margin/negative](https://twitter.com/devongovett/status/1244679626162450432?lang=en) on older browsers. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- refactor: Added feature detection as part of `EzGlobalStyles` to facilitate css-based fallbacks for browser features. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- deps: Updated @ezcater/snitches to 0.0.11. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: card size should not be inherited by nested cards [[sha]](https://github.com/ezcater/recipe/commit/54571896)
- fix: Quiet cards should respect size prop if provided. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: EzLayout `columns` styles should only apply to `tile` layouts. Closes [#616](https://github.com/ezcater/recipe/issues/616). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- workflow: Updated visual regression environment for Chrome to use v91 (upgraded from v79). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- workflow: added changesets to automate semver tracking and releases. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: search input overflows bounds of the EzLayout container. Closes [#618](https://github.com/ezcater/recipe/issues/618). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- docs: switch doc-site examples to use playroom

  - Added playroom links to examples in docs.
  - Added a toggle to examples for toggling between example code and preview.
  - Removed `:with-playroom` instructions, since it's now part of `npm run start` command.
  - Moved doc-site svgs to sprites for carousel and timeline examples to reduce the size of the example code.
  - Refactored carousel example to map over data to reduce the size of the example code.
  - Converted svg examples using `xlink:href` to `xlinkHref`.
  - Removed docz playground.
  - Removed unused dependencies from doc-site.
  - Moved `playroom start` command to `npm start`. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)

- fix: Server rendering of checkboxes and labels will no longer render `<style>` tags within label elements. Closes [#628](https://github.com/ezcater/recipe/issues/628). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: apply range media queries to `EzCard[imagePosition]` (instead of max-width queries), to avoid SSR order-of-insertion issues. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- workflow: Added custom format for changeset generated changelog [[sha]](https://github.com/ezcater/recipe/commit/bb9a382a)
- fix: Issue causing `EzLayout[layout="stack"]` to horizontally collapse instead of filling the width of the parent element. Closes [#619](https://github.com/ezcater/recipe/issues/619). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- deps: Removes transitive dependency on `sort-css-media-queries` (which isn't built with es5 compatible syntax). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)

## 12.0.2 - 2021-05-14

#### Enhancements

- added new media query range breakpoints (ranges _between_ existing breakpoints), for internal usage within Recipe.
- added internal helper to map responsive prop values to media query ranges. For example, if a user provides `{base: 'cluster', medium: 'basic'}` to EzLayout's responsive layout prop, the actual media query applied for the "cluster" style would apply only up-to the `medium` breakpoint.
- When server rendering, styles for components used within an `EzProvider` will now be de-duplicated.

#### Bug fixes

- fix: global css duplication in test suite
- fix: `undefined` classname appearing on `EzLink` instances
- fix: EzNavigation menu button incorrectly appearing at desktop breakpoint in some scenarios.

#### Dependency upgrades

- Updated internal dependency on @ezcater/snitches to 0.0.10.

## 12.0.1 - 2021-05-10

#### Bug fixes

- fix type error due to missing @stitches/code types in Recipe package

## 12.0.0 - 2021-05-11

#### Breaking changes

- The CSS variable names Recipe uses within its components have changed. While the Recipe's CSS variable names are **not considered part of Recipe's stable/documented public API**, as these variable are visible with devtools we feel it is important to call out that the naming convention we use internally has changed.
- While all components that accept a `className` prop in v11 will continue to accept a `className` prop in v12, new specificity issues may occur if both the `className` provided is generated by emotion AND the associate styles override Recipe's component styles.
- Recipe v12 is compatible with v2 of `@recipe-ui/theme-marketplace` and later. The v1 version of the `@recipe-ui/theme-marketplace` package is not compatible with Recipe v12, and should only be used on applications running Recipe v11.

#### Enhancements

- Added [seek-oss playroom](https://github.com/seek-oss/playroom) to the doc-site.
- Added internal utility for extending Recipe's base theme tokens with component-level tokens in support of component-level theming.
- The [EzTable](/components/EzTable) component no longer pins the first column on small screens.

#### Bug fixes

- Fix: hidden content receiving focus in doc-site playground.
- Fix: new EzLink API should retain className and refs
- Fix inconsistent button line-height in EzBanner

#### Documentation

- Add documentation on how to run the doc-site locally with playroom.
- Add documentation on how to run the doc-site locally for IE11.
- Added instructions for using `Object.entries()` polyfill.

#### Development workflow

- Add npm script to simplify locally running the doc-site for IE11.
- Updated latest babel build tooling (to support TS template literals)
- Added compression and other techniques to reduce the payload size of visual regression test input

---

## Version 11

## 11.4.3 - 2021-03-19

#### Enhancements

- Added [seek-oss playroom](https://github.com/seek-oss/playroom) to the doc-site.

#### Bug fixes

- Fix: hidden content receiving focus in doc-site playground.
- Fix: Disabled state not working on EzField[type=time]. Closes #321.
- Fix: Select list being dismissed prematurely in IE11, preventing item selection.

## 11.4.2 - 2021-03-09

#### Enhancements

- Added support for `onSelectionChange` API for `EzField[type=select]`, consistent with `EzField[type=Autosuggest]` component.

#### Bug fixes

- Fixed nested popover issue where the parent popover's `close` method was called when clicking inside of a nested popover's content. Closes #522.
- Removed duplicate handling of "click outside" of the popover for Select lists that caused the popover to close before the selection had committed (found in IE11).
- fix: EzField[type=select] use of Event constructor breaks on IE11. Added fallback to `document.createEvent()`. Closes #523.
- fix: incorrect TypeScript definition for EzField custom input fields.

## 11.4.1 - 2021-02-26

#### Dependency upgrades

- Added `jest-junit` will generate a junit xml file that Jenkins knows how to read.
- Added `jest-standard-reporter` to allow the output of jest to be sent to stdout for CI.

#### Development workflow

- Stripped code comments/JSX pragma comment for compatibility with babels automatic runtime mode and React 17.

## 11.4.0 - 2021-02-22

#### Enhancements

- Added support for capturing email address with `EzField[type=email]`.
- Added new "slots" based API for [EzCard](/components/ez-card), allowing areas within a card can be populated by providing content components (Preview, Header, Content, Footer) as direct descendants to the card.
- Added ARIA live region on [EzAlert](/components/ez-alert) to allow content changes to be announced by assistive technologies.

#### Design updates

- Remove unwanted/collapsed margin from first checkbox/radio option.
- EzHeading no longer renders a semantic `header` element.

#### Bug fixes

- Fix: Unexpected tab-sequence from popover trigger buttons to EzPopover content (and back) caused by to EzPopovers' [Portal](https://reactjs.org/docs/portals.html) use.
- Fix: Broken "related component" links in EzPopover documentation.
- Fix: Incorrect/inconsistent sizing of icons within EzAlert.
- Fix: Tapered accent border corners in marketplace theme for `EzFlashMessage`.

#### Documentation

- Added best practices guidance to EzPopover documentation.
- Added accessibility reminder to EzPopover documentation; EzPopover is a low-level building block for building more complex interactions, and cannot provide a complete accessibility story for every scenario. Additional care should be taken to ensure the interactions you are building are accessible, in particular, when handling user events, key presses and focus.
- Added more detailed property descriptions within the EzPopover documentation.
- Added license notice for referenced sources.
- Added a search input to the component list page.
- Added instructions for using `findIndex()` polyfill to `Getting Started`, `EzField`, `EzProgressTracker`, and `EzPageHeader`.
- Improved IE11 support for the doc-site component preview. The code preview feature has been visually updated to more closely match the design of the code playground available in modern browsers.
- Fix: doc-site playground scroll flicker/jumping (Closes #503)
- Fix: doc-site component preview having unbounded width when viewed in IE11.
- Fix: Added min-height on doc-site playground when rendering error messages.
- Fix: Added `findIndex()` polyfill to the doc-site for compatibility with IE11.
- Fix: Avoid syntax error when evaluating code example in the `EzGlobalStyles` component documentation.
- Fix: Avoid layout-shift caused by the code playground. This detrimentally affected jump-to-anchor behavior within the doc-site.

#### Development workflow

- Added [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/) and google tag manager id for doc-site usage visibility.
- Added new CLI tool for generating the component preview images used within the [components list page](/components) of the doc-site.
- Added [gatsby-remark-copy-images](https://www.gatsbyjs.com/plugins/gatsby-remark-copy-images/) to allow Recipe image assets to be available within the doc-site.

## 11.3.0 - 2021-01-22

#### New components

- Added new [EzPopover](/components/ez-popover) component. Popover is a non-modal dialog that floats relative to another element. It's commonly used for displaying additional rich content on top of something.

#### Enhancements

- New "clickable" card variant of EzCard. Clickable cards present a preview of a piece of content and offer a large hit-surface to make it easy to link to the full content.
- Improvements to the EzLink API. Allows Recipe to be able to apply styles to any kind of link component or link element via component composition, without Recipe needing to be coupled to the API details of the specific link/router component in use. This allows recipe to be used more easily with client-side routers (in addition to React router).
- New "secondary" style link variant, matching the current color of the containing paragraph text, ideal for large blocks of text with several references linked throughout.
- New "reset" link variant, removing the browser default text decoration and color from the wrapped link. This variant can be used to provide navigation semantics to other elements, such as headings or charts, without impacting their default appearance.

#### Design updates

- Small change to box-shadow of cards in `@recipe-ui/theme-marketplace` v1.1.2. EzCard has more clearly defined corners.

#### Bug fixes

- fix: Carousel bug causing items to be sized in correctly. This bug occurred when there are fewer items in the carousel than the configured slidesPerPage value for the current breakpoint.
- fix: Accessibility improvements for EzCard expandable footer. Switched expandable trigger to use button semantics instead of presenting as a link. Link expose browser features like context menus and "open in new tab", but those features aren't applicable to expandable cards.
- fix: Accessibility improvements for the Recipe doc-site. Restored missing focus styles on the code playground action buttons.

#### Documentation

- Improved legibility of inline code snippets in doc-site.
- Documented two common variations of clickable cards:
  - Cards with a heading link
  - Cards with a call to action link

#### Development workflow

- Avoid creating visual regression snapshots for any documented code examples that do not have a corresponding name. This allows us to write code-blocks to further clarify expected usage, without necessarily requiring a corresponding visual regression test.

## 11.2.1 - 2021-01-07

#### Bug fixes

- Fix: missing typescript file for `RequireAtLeastOne` utility type in build output.

## 11.2.0 - 2021-01-06

#### Enhancements

- Add EzModal support for required actions (non-dismissible modals).
- Added support for Next.js applications with the new Next.js plugin: `next-recipe-css`. The `next-recipe-css` package enables `@ezcater/recipe` to import css files by leveraging a [custom webpack config](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) in Next.js. See the [next-recipe-css package readme](https://github.com/ezcater/recipe/tree/d71b0e18c949b2e5abf4c3a7158428d508b874bb/packages/next-recipe-css) for more info.

## 11.1.0 - 2020-12-16

#### Enhancements

- Add new ["quiet" card variation](/components/ez-card#quiet-cards). Quiet cards are intended for secondary content or lists of homogeneous content where we intentionally trade prominence for easy-scanning.
- Added standalone `@recipe-ui/legacy-theme` package, to provide access to the `themes/standard` module from prior Recipe releases.
- Deprecated usage of `themes/standard`, recommending direct use of `@recipe-ui/legacy-theme` for backwards compatibility, or favoring locally defined variables where appropriate. The standard theme is no longer used by Recipe and is no longer maintained in this package.

#### Bug fixes

- Fix: Carousels with more than two responsive layouts both snap and align incorrectly at the largest breakpoint.
- Fix: Next/prev buttons on carousels that are hidden on the last/first page respectively, were masking clicks within the carousel item.

#### Documentation

- Clarify that recipe is MIT licensed

#### Development workflow

- add [Storybook](https://storybook.js.org/) tooling to provide a familiar environment for developing UI components in isolation.

## 11.0.2 - 2020-11-24

#### Bug fixes

- fix: carousel item resizing (to provision space for next/prev buttons) updated to support number of items changing across breakpoints.
- fix: carousel with `peek` buttons enabled will no longer reduce the item size to provision space for buttons if there is only one page.
- fix: accessibility improvements for carousel. Closes [issue #455](https://github.com/ezcater/recipe/issues/455).
  - carousel is keyboard accessible (← and → to nav left and right)
  - carousel is announced as a list
  - navigation buttons (which are a enhancement - users who can already nav with ← and →) removed from tab sequence.
  - hidden navigation buttons are no longer announced to assistive technology.

## 11.0.1 - 2020-11-20

#### Bug fixes

- Fix: EzCarousel next/prev button not showing/hiding when number of slides per page changes at different breakpoints.

## 11.0.0 - 2020-11-20

#### Design updates

- Increased spacing of grouped links within EzNavigation to increase hit-target size.

#### Bug fixes

- Fix: Change build target for @recipe-ui/theme-marketplace to support ES5 syntax. This allows downstream applications to include Recipe without running build steps within `node_modules`.
- Fix: EzNavigation utility links were clipped when logo size was taller than 70px.
- Fix: EzNavigation links with `onClick` and no `href` now render as buttons, rather than links.
- Fix: EzCarousel sometimes skips pages when using next/prev buttons.
- Fix: EzCarousel next/prev button not aligning correctly when using responsive layout.
- Fix: EzCarousel next/prev button not aligning correctly when there are only 2 pages in the carousel.
- Fix: EzCarousel items have unevenly widths when the intrinsic width of carousel items is uneven.
- Fix: Prevent margin collapse on EzCarousel.
- Fix: EzCarousel clipping EzCard box-shadow over the EzCarousel.
- Fix: EzCarousel showing next button when there are fewer items than the page size.

#### Documentation

- Significant restructuring of the doc-site to account for the v11 release changes:
  - Removed documentation references to Recipe's former theming object, including Colors, Spacing and Typography documentation pages.
  - Renamed "What's new?" page to "Releases" to better reflect that the content is a formal change-log and not more informal prose content.
  - Renamed "Advanced" page to "Support". This page contains migration guides between Recipe versions, rather than "advanced" usage instructions.
  - Removed stale "timeline" page. This page had not been available from the docs to for sometime, but was still in the deployed site.
- Updated "team" page to reflect recent contributions
- Remove theme-switcher button, and replaced with new entry on the side navigation for toggling the theme.
- Added migration docs for the v11 release.
- Fixed documentation for EzProvider to show the correct named import from `@recipe-ui/theme-marketplace`.

## 11.0.0-beta.4 - 2020-11-16

#### Bug fixes

- Fix: Ensure global style tokens are imported when including a top-level export from Recipe.
- Fix: Mark top-level import with [sideEffects](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects) to ensure global tokens do not get tree-shaken out of client builds.

#### Development workflow

- Fix: Remove private deep-path imports from tree-shaking test. The test now uses a baseline size of 10KB to determine if a component import has been successfully tree-shaken.

## 11.0.0-beta.3 - 2020-11-13

#### Enhancements

- Excluded unwanted files from npm deploy, to keep the package install size to a minimum. npm package size down to 622.3 kB (includes ESM and commonjs builds, plus type definitions).

## 11.0.0-beta.2 - 2020-11-13

#### Enhancements

- Excluded unwanted files from npm deploy, to keep the package install size to a minimum.

#### Design updates

- Updated EzCarousel to show and hide the previous and next buttons, based on whether the action can be taken on the current page. The carousel items grow to fill the space that was occupied by the now hidden buttons.

#### Bug fixes

- Fix typescript definition build output path, that caused the typescript type definitions to be unavailable in the 11.0.0-beta.0 release.

## 11.0.0-beta.1 - 2020-11-11

#### New components

- Added new [EzCarousel](/components/ez-carousel) component. Carousels allow users to browse through a set of items, to find items that may be of interest to them. For applications that need to support IE11, a polyfill will be required to support `Element.prototype.scrollTo()`. See the carousel [browser support documentation](/components/ez-carousel#browser-support) for more information.

## 11.0.0-beta.0 - 2020-11-4

#### Breaking changes

- Significant reworking of Recipe's theming support, implementing the [Recipe Theming RFC](https://github.com/ezcater/recipe/issues/430). Recipe theming is no longer provided by [`emotion-theming`](https://emotion.sh/docs/theming) and instead is powered by CSS custom properties. For applications that need to support IE11, a polyfill will be required to enable support for CSS custom properties. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).
- Responsive breakpoints can no longer be modified by providing custom breakpoints via `emotion-theming`. Instead the Recipe v10 "standard theme" breakpoint values will be used. The medium breakpoint is to `768px` and the large breakpoint is `1061px`.

#### New components

- Added new [EzProvider](/components/ez-provider) component. Provider is the container for customizing Recipe applications. It defines the application theme that is applied to descendant content.

#### Enhancements

- Added `size="small"` variant to EzCard. Small cards are best for browsing content as part of a list or grid of cards.
- Added `imageMaxHeight` and `imageMaxWidth` options to EzCard to provide more granular control over the size of card images.
- updated internal Media component for visual snapshot testing components at specific breakpoints in order to reduce the payload size of visual regression tests.

#### Design updates

- Added new `@recipe-ui/theme-marketplace` package for customizing Recipe for marketplace applications.
- Updated doc-site styles for code-snippets to more closely match live code (playground) examples.

#### Bug fixes

- fix: EzTable responsive logic incorrectly detecting horizontal overflow.
- fix: border-radius of card images now matches the radius of the cards remaining corners.
- fix: Inverted the DOM order of the card body and the card image within EzCard. Since headings introduce sections, having the image after the heading lets users know that the image belongs to the section.
- fix: Added empty alt text to card images to indicate that the card's image is decorative.

#### Documentation

- updated typography docs to list options within an EzTable.
- added basic theming switch to enable users of the doc-site to toggle between marketplace and fulfillment application styles.

#### Dependency upgrades

- upgrade gatsby dev dependency (for doc-site).
- remove `emotion-theming` devDependency from Recipe.
- added dependency on `@react-types/provider` (provides type definition only).
- added `parcel` and `postcss` devDependencies for building standalone theme packages.

#### Development workflow

- added MinifiedBrowserTarget decorator for RemoteBrowserTarget in order to shrink the payload size of visual regression tests.
- Disabled [emotion's vendor prefixing](https://emotion.sh/docs/@emotion/cache#prefix) during visual regression test runs (in order to shrink the payload size of visual regression tests). Given our only browser target in use today is Chrome, we shouldn't need vendor prefixes during tests.
- Switched [emotion's default style prefix](https://emotion.sh/docs/@emotion/cache#key) for emotions generated class names from `css` to `r` (for recipe). This change is only applied to styles generated during test runs and does not impact production. This change reduces the payload size of visual regression tests.
- removed `jest.globals` in favor of using `@testing-library/react` directly (we no longer need to wrap components in a theme provider).
- created private css-module-types package to allow provide TypeScript definitions for CSS imports.
- added top-level `repository` and `types` fields to Recipe's package.json.

---

## Version 10

## 10.7.3 - 2020-09-24

#### Enhancements

- Added internal `FocusScope` component (based on [react-aria](https://react-spectrum.adobe.com/react-aria/FocusScope.html) to manage focus containment, focus restoration and auto focus for descendant focusable elements.
- Added internal `ScrollLock` component to avoid body scroll when modal dialogs are open.

#### Bug fixes

- fix: minimize layout reflow on components list of doc-site

#### Documentation

- Fix typo in package link in readme

#### Dependency upgrades

- remove reakit dependency from EzField[type=date]
- remove reakit dependency from EzModal
- remove reakit dependency from EzNavigation
- remove package dependency on reakit

## 10.7.2 - 2020-09-21

#### Dependency upgrades

- locked internal dependency on reakit to 1.2.0.

## 10.7.1 - 2020-09-18

#### Bug fixes

- Fix: The calendar flyout is no longer clipped by ancestor elements that with non-visible overflow. Closes [issue #419](https://github.com/ezcater/recipe/issues/419).
- Fix: body element scroll-lock when EzModal is open. Closes [issue #418](https://github.com/ezcater/recipe/issues/418).
- Fix: Unwanted html attributes duplicated from EzField[type=date] input onto its container element.
- Fix: Focus-lock applied to EzField[type=date] flyout.
- Fix: Remove z-index from notifiation count, causing notification to incorrectly appear above EzModal.

## 10.7.0 - 2020-09-14

#### New components

- Added new [EzProgressTracker](/components/ez-progress-tracker) component for visualizing progression through multi-step workflows. Closes [issue #400](https://github.com/ezcater/recipe/issues/400).

#### Enhancements

- Added support for grouped (expand/collapse) items in EzNavigation, promoting the discoverability of related pages. Closes [issue #391](https://github.com/ezcater/recipe/issues/391).

#### Bug fixes

- Fix: Focus detection bug preventing `onClick` being called on EzField[type=select] when used inside EzModal. Closes [issue #412](https://github.com/ezcater/recipe/issues/412).
- Fix: Initial focus behavior of EzModal; the first focusable element (where present) will gain focus when the modal is opened to more closely follow [aria-practices](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html). Closes [issue #408](https://github.com/ezcater/recipe/issues/408).
- Fix: typedef for EzField[type="password"]

#### Dependency upgrades

- update internal dependency on reakit to 1.2.0.
  - reakit dialog now uses MutationObserver internally, requiring IE11 and above or the use of a polyfill.
- update dev dependency on jsdom, as well as corresponding versions of @testing-library.
  - bumped to provide access to MutationObserver APIs within Jest.

## 10.6.0 - 2020-08-06

#### New components

- Added new [`autosuggest`](/components/ez-field#autosuggest-list) variation EzField. Supports typeahead-style filtering of drop-down lists to help users find what they're looking for in larger data-sets.
- New internal-only EzListBox component to encapsulate behavior for selecting from a list of options.

#### Bug fixes

- Fix: EzField[type=select] options no longer need to be pre-sorted into groups in order for keyboard-based navigation of list items to be ordered correctly.
- Fix: EzField[type=select|time] focuses (and scrolls where needed) to the currently selected value when the opened. Closes [issue #401](https://github.com/ezcater/recipe/issues/401).
- Fix: Opening EzField[type=select] with arrow key up/down no longer causes the currently focused item to change.
- Fix: Missing focus outline on EzField[type=select|time] in Safari.
- Fix: Avoid prematurely closing EzField[type=select|time|date] popup when nested within a programmatically focusable container.
- Fix: Page header wrapping priority. When there isn't space to present the title, status and actions side-by-side, the Page Header will now wrap status onto a new line, and will subsequently wrap the title if needed. Closes [issue #249](https://github.com/ezcater/recipe/issues/249).
- Fix: Buttons are automatically responsive on small screens. Closes [issue #249](https://github.com/ezcater/recipe/issues/249).
- Fix: Align Page header's subheader with title and content.

#### Dependency upgrades

- Added/Updated testing library dependencies: `@testing-library/dom`, `@testing-library/react` and `@testing-library/user-event`

## 10.5.0 - 2020-07-20

#### New components

- Added new [EzTimeline](/components/ez-timeline) component for visualizing chronological sequences of events. Closes [issue #195](https://github.com/ezcater/recipe/issues/195).

#### Enhancements

- Update [EzFlashMessage](/components/ez-flash-message) with new spacing consistent with EzCard and EzLayout.

#### Design updates

- Use shadow instead of border for cards to indicate content layering.
- Collapse horizontal padding on narrow viewports to increase surface available for content.
- Remove rounded corners on cards on narrow viewports now that the card surface spans the whole screen.
- Use SVG icon for Page header breadcrumb links.
- Remove "Clear Selection" option for on-page selections in EzTable.
- Add title attribute to pagination buttons on EzTable.
- Design refresh on EzTable pagination for better support for small screen sizes.

#### Bug fixes

- Fix: [`EzField[type=select]`](/components/ez-field) highlighting incorrect option to assistive devices. Closes [issue #398](https://github.com/ezcater/recipe/issues/398).
- Fix: [EzFlashMessage](/components/ez-flash-message) dismiss button now appears in the top right, rather than vertically centered.
- Fix: ensure [Links](/components/ez-link) have correct cursor (pointer)
- Fix: Prevent [status](/components/ez-status) wrapping below Action Required indicator
- Fix: Align page headings with body content on narrow screens.
- Fix: Remove unwanted hover color on EzTable selection message banner.
- Fix: Remove unwanted padding for [tertiary buttons with icons](/components/ez-button/#tertiary-button-with-icon) when button is icon-only.

#### Documentation

- Update [EzFlashMessage](/components/ez-flash-message) with clearer guidelines to help pick the right tone of message for a variety of situations.
- Update [EzFlashMessage](/components/ez-flash-message) examples to more closely follow the provided guidelines.

#### Development workflow

- Updated Recipe's internal build tool to using latest `babel-plugin-emotion` release that had been held back from an upgrade as it had an issue detecting [component selectors](https://emotion.sh/docs/styled#targeting-another-emotion-component). Switched away from using component selectors internally so that we could proceed with the upgrade to the v10 plugin (to avoid any potential pitfalls downstream of using a v9 plugin with v10 code).
- Disabled autolabel and sourcemap options for the `babel-plugin-emotion`. See [PR#387](https://github.com/ezcater/recipe/pull/264) for more details.

## 10.4.2 - 2020-06-26

#### Enhancements

- EzField now supports `type="password"`, allowing the user to securely enter a password using the [browsers default password input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password). Closes [#332](https://github.com/ezcater/recipe/issues/332).
- Better support for tree-shaking. If you're using ES6 modules and a bundler that supports tree-shaking (such as [webpack](https://webpack.js.org/guides/tree-shaking/) or [Parcel](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)), you can now safely use named imports and get an optimized bundle size automatically - only including the Recipe components you're actually using in your application. Closes [#371](https://github.com/ezcater/recipe/issues/371).

#### Bug fixes

- fix: EzPageHeader selected link color is now black (consistent with selected link button color). Closes [#348](https://github.com/ezcater/recipe/issues/348).
- fix: EzNavigation link hover color is now always white (instead of purple/blue for router-based links). Closes [#374](https://github.com/ezcater/recipe/issues/374).
- fix: EzLink `to` prop now correctly supports. Closes [#345](https://github.com/ezcater/recipe/issues/345).
- fix: EzBlankState now correctly horizontally centers messages that wrap multiple lines (instead of left-justified). Closes [#319](https://github.com/ezcater/recipe/issues/319).
- fix: EzBlankState now correctly vertically centers EzBlankState content (removes uneven space below message text).
- fix: EzNavigation notification positioning in Safari. Closes [#380](https://github.com/ezcater/recipe/issues/380).
- fix: EzPageHeader usage in documentation site, causing missing bottom margin in Safari.

#### Documentation

- Fix issue in code playground component can sometimes cause the scroll position to "jump" when interacting with playground examples
- Re-prioritized EzField documentation to demonstrate validation API before other API examples
- Added more detailed usage descriptions for validation API: `touched` and `error` props.
- Added complete validation example demonstrating the process of filling out an empty form, validating form input (required fields/input format/range) and managing the state of the form.
- Added documentation for the EzToggle inline saving feedback feature. The example now demonstrates handling the asynchronous actions with an optimistic response and compensating actions on failure.

## 10.4.1 - 2020-05-26

#### Bug fixes

- fix: regression causing EzField[type="radio"] and EzField[type="checkbox"] to ignore `disabled` flag (Closes [#369](https://github.com/ezcater/recipe/issues/369)).

## 10.4.0 - 2020-05-26

#### Enhancements

- New alignment options on EzLayout.
  - The `cluster` layout has a new `alignX` option. This option allows the horizontal alignment to be changed to `left`, `right`, `center` or conditionally based on the current screen size.
  - The `stack` layout has a new `alignX` option. This option allows the horizontal alignment to be changed to `left`, `right`, `center`, or `stretch` or conditionally based on the current screen size.
  - The following layout have a new `alignY` option: `basic`, `right`, `equal`, `split`, `tile` and `cluster`. This option allows the vertical alignment to be changed to `top`, `bottom`, `center`, `stretch` or conditionally based on the current screen size.
- New Card image feature for EzCard. Support for `top`, `left` or `right` aligned, full-bleed images (i.e. image fills the card / no padding). By default, images will fill the width of the container while maintaining their aspect ratio, however images positioned to the right or left of the container will fill half of the card, clipping the image if to match the aspect ratio of the available space.
- New `horizontal` option for [page sections](/components/ez-page#horizontal-sections), ideal for comparing content, such as in feature sections.
- New alignment options for [EzTextStyle](/components/ez-text-style#text-alignment) and [EzHeading](/components/ez-heading#heading-alignment). Use align to control the text alignment: `left`, `center` or `right`. Alter the alignment for different screen sizes using `{base: 'left', medium: 'center'}`.
- Relax type definition for `EzTextStyle` to allow any ReactNode content. This allows other text content, such as links, to be included within the component, allowing for control over alignment.

#### Design updates

- Adjusted styling of disabled EzField[type=checkbox] options and EzField[type=radio] options to more clearly emphasize the disable state.
- Allow EzField[type=date] width to be controlled/overridden by parent component where needed.
- Normalize the height of EzSegmentedControl to match the same height as EzButton and EzField inputs.

#### Bug fixes

- Fix issue with margin resets when using cluster or tile layouts
- Fix issue with width reset causing layout items to ignore their extrinsic width value (where defined)
- Fix invalid markup in EzField[type=checkbox|radio] (fieldset legend nested inside div)
- Fix invalid markup in EzField[type=checkbox|radio] (div inside label)
- Fixed wrapping of long EzField[type=checkbox] options and EzField[type=radio] options.
- Fixed: support for [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) EzField[type=radio], in addition to the more component controlled component usage. As an uncontrolled component, the DOM handles state changes, instead of React state.
- Generate less CSS for tile layouts wherever css vars are supported.

#### Documentation

- Update layout docs with placeholder content to more clearly indicate the differences between layouts. This also allows us to avoid using custom CSS in the layout examples, which may be confused for being part of the API.
- Added prop usage information to EzField[type=checkbox] and EzField[type=radio] to describe the multiple choice `options` prop and how options may be marked as `disabled`.
- Added complex form pattern example, showing how a create promotion page might be made from Recipe components.
- Added marketing page pattern example, showing how a Get more orders page might be made from Recipe components.

#### Development workflow

- Fix issue with visual regression Media component that was causing styles to leak across tests.
- Support map function is responsive helper (internal tooling)
- Better handling of invalid prop values for components that have responsive props. When using the live-editor in the doc-site, prop values may be temporarily invalid (while typing). Log these errors to the development console, rather than throwing to avoid losing state in the live-editor.

## 10.3.0 - 2020-05-13

#### Enhancements

- Added regression test coverage for disabled EzField[type=checkbox] options and EzField[type=radio] options.
- Added new `bordered` style variation for EzField[type=checkbox] options and EzField[type=radio].
- added new "acknowledgement" variation for [EzCheckbox](/components/ez-checkbox/#acknowledgement-checkbox) to support disclaimer/terms of service style checkboxes.
- Support title/subtitle/actions within [EzCardSections](/components/ez-card/#card-with-sections).
- New ["cluster" variation of EzLayout](/components/ez-layout/#cluster-layout) for arranging content a grid with equal spacing between. Cluster layouts are a good choice when the number of items in the layout may vary and the content varies in shape and length; The layout will automatically wrap items into rows based on the available screen space.

#### Design updates

- Adjusted styling of disabled EzField[type=checkbox] options and EzField[type=radio] options to more clearly emphasize the disable state.

#### Bug fixes

- Fixed wrapping of long EzField[type=checkbox] options and EzField[type=radio] options.
- Fixed SSR error when rendering EzModal.
- Fixed uniqueId generation logic, to avoid using the `$` character (reserved for selector level-4 attribute selectors).

#### Documentation

- Added prop usage information to EzField[type=checkbox] and EzField[type=radio] to describe the multiple choice `options` prop and how options may be marked as `disabled`.

## 10.2.0 - 2020-05-07

#### Enhancements

- Support "small" label style in EzField.
- New ["tile" variation of EzLayout](/components/ez-layout/#tile-layout) for arranging content a grid with equal spacing between rows and columns. Tile layouts are a good choice when the number of items in the layout may vary, or when the exact number of items is unknown, since the layout will automatically wrap items into rows.
- New ["icon" prop for tertiary buttons](/components/ez-button/#tertiary-button-with-icon), to enhance the user experience of the application where logos may be more easily recognizable than plain text.
- Implemented new subheader feature for EzPageHeader, supporting both filters, related links and page-wide actions (Closes [#205](https://github.com/ezcater/recipe/issues/205)).

#### Design updates

- Make label elements `display: block` by default, allowing the margin/line-height of labels to be controlled via css.

#### Bug fixes

- Labels for interactive controls (i.e. input fields) rendered by EzLabelledItem now render using the `label` element and correctly apply the `htmlFor` prop to associate the label element with the form control. This allows the label to increase the hit-surface to focus/activate the input, as well as allowing assistive technology to identify the label when the input is focused.

#### Documentation

- Improved guidance on label variations (when to use small labels).
- New Recipe Cookbook feature, to show how combinations of Recipe components can be composed like lego-blocks to build complete pages.
- Details page pattern example, showing how a full Order details page might be made from Recipe components.
- Forms page pattern example, showing how a create lead page might be made from Recipe components.
- Added placeholders for other cookbook recipes/patterns that are on our road map.

## 10.1.1 - 2020-04-23

#### Enhancements

- Relaxed the restriction that an EzOrderSummary must have a title, to more closely match EzCard (a title is only necessary when there are corresponding actions, such that the target of the action is clear).

#### Bug fixes

- Fix: EzField[type=date] fires `onChange` multiple times on change as well as calling `onChange` erroneously on render.
- Fix: hover style on EzBanner link button renders differently for anchor vs button (Closes [#248](https://github.com/ezcater/recipe/issues/248)).
- Fix: Applied text wrapping in EzOrderSummary columns to avoid overflowing the bounds of the parent container (Closes [#338](https://github.com/ezcater/recipe/issues/338)).
- Fix: Reakit "Can't trap focus within modal dialog" warning when multiple `EzModal` dialogs are present in a page.

#### Development workflow

- Added support for visual regression testing CSS pseudo class states (i.e. `:hover` and `:active`)

## 10.1.0 - 2020-04-16

#### Enhancements

- support date range restrictions in EzField[type=date] via either `minDate` or `maxDate` restrictions or using a `filterDate` function, allowing for more control over excluding restricted dates, such as weekends or holidays. (Closes [#325](https://github.com/ezcater/recipe/issues/325)).

#### Bug fixes

- Implemented React.forwardRef on EzField[type=textarea]. This was previously preventing text areas from using features such as EzTooltip.
- Fixed regression bug introduced by 10.0.3 that caused inputs to lose focus after their error state changed.

#### Documentation

- Update documentation usages of EzField that incorrectly used EzField[type=input] instead of EzField[type=text].

## 10.0.5 - 2020-04-14

#### Design updates

- Added new visual component index to the Recipe doc-site in place of an long alphabetized component list. The component index groups components into categories: Layout, Navigation, Data, Inputs, Feedback, Marketing, Overlays, and Typography.
- Updated [EzModal](/components/ez-modal) documentation to present each example with each modal open, in order to assist readers in quickly finding what they are looking for.
- emphasize flyout shadow in EzField[type=select] to more closely match original design

#### Bug fixes

- Fixed `EzLayout` screen breakpoint bug causing layout items to have unwanted margin.
- Fixed reakit warnings logged by EzField[type=select] (Closes [#295](https://github.com/ezcater/recipe/issues/295)).
- Fixed console warning caused by @reach/dialog (Closes [#39](https://github.com/ezcater/recipe/issues/39)).
- Fixed reakit deprecation warning triggered by EzNavigation component usage of `<Dialog modal={false}>`.
- Fixed `:focus` styles on close button for EzModal, EzBanner and EzFlashMessage.
- Fixed positioning issue with EzField[type=select] causing flyout to overflow the bounds of the screen. The flyout will now "flip" above the input if the dropdown list would otherwise overflow the bottom of the screen. (Closes [#289](https://github.com/ezcater/recipe/issues/289)).
- Fixed positioning issue with EzField[type=select] causing flyout to be clipped by scrolling container elements (such as modal dialogs).
- Fixed z-index issue with EzField[type=time] icon appearing above other content (Closes [#326](https://github.com/ezcater/recipe/issues/326)).

#### Documentation

- Updated github issue templates for bug reports to include codesandbox template to assist with reproducing issues.

#### Dependency upgrades

- Updated reakit to 1.0.0-rc.0
- Removed dependency on @reach/dialog

## 10.0.4 - 2020-03-19

#### Enhancements

- deprecated usage of `accessor` prop on EzTable in favor of separate `key` and `component` properties.

#### Design updates

- update the EzTooltip styles to use 'white-space: pre-line', adding support for newlines within a tooltip.
- updated doc-site to more closely align with the updated ezcater branding (icon/colors/typography).

#### Bug fixes

- relax type definition for EzStatus to make `size` optional (already has a default value of `normal`)
- Prevent EzTooltip flyout from overflowing its clipping container (fixes [issue 240](https://github.com/ezcater/recipe/issues/240))
- Fix EzTooltip placement relative to page scroll position (fixes [issue 313](https://github.com/ezcater/recipe/issues/313))

#### Documentation

- use centered layout for most doc-site pages to help limit line-length to promote readability.
- update page header docs to use the correct component to present the page status (i.e. EzStatus instead of EzAlert).

## 10.0.3 - 2020-03-05

#### Enhancements

- Use svgomg to optimize file sizes of a some commonly used icons.

#### Design updates

- Reduced label spacing for EzField[type=radio] and EzField[type=checkbox] to match other types of input.
- Reduced spacing between radio/checkbox items to keep item spacing equal with label spacing.
- Switched EzField[type=select] to display error icon and messaging against the field label, rather than inline on the input for consistency with EzField[type=date] and EzField[type=time] (fixes [issue 300](https://github.com/ezcater/recipe/issues/300)).
- Updated EzField and EzButton to match in height when rendered side-by-side (fixes [issue 221](https://github.com/ezcater/recipe/issues/221)).
- Updated EzField[type=select] to apply an ellipsis when a select option has a value too long for the available space for the input (fixes [issue 213](https://github.com/ezcater/recipe/issues/213)).
- Updated EzField internals to use flexbox for centering icons within inputs.

#### Bug fixes

- EzField ref now correctly targets the underlying input element, rather than the container (fixes [issue 298](https://github.com/ezcater/recipe/issues/298)).
- Remove unwanted user-agent padding on fieldset legend (i.e. EzField[type=radio] and EzField[type=checkbox])
- Remove unwanted margin-bottom on fieldset legend
- Fixed issue with EzField[type=select] causing the selected text to overlap with the input chevron or the selected option checkmark.
- Fixed issue with EzField[type=custom] missing rounded corners (fixes [issue 302](https://github.com/ezcater/recipe/issues/302)).
- Fixed issue where EzField[labelHidden] has unwanted top margin causing alignment issues with similar height components (fixes [issue 194](https://github.com/ezcater/recipe/issues/194)).
- Fixed issue with component playground in the doc-site causing full-width components to have unwanted top margin.
- Fixed issue with EzCard throwing an error when empty (fixes [issue 294](https://github.com/ezcater/recipe/issues/294)).d
- Update type definition for EzLayout to no longer require a `layout` prop. The type definition now represents our existing usage pattern. The default (EzLayout[layout=basic]) remains unchanged.
- Fixed flash of unstyled content on the doc-site caused by incorrect usage of emotion CacheProvider for static rendering setup.

#### Development workflow

- Added new component to enable visual testing of components at various different breakpoints
- Added regression test coverage for EzField[type=select/date/time] with error message on small devices

## 10.0.2 - 2020-02-20

#### Enhancements

- Added accessibility labels to EzModal.
- Extract internal EzPortal and EzPopover components for easier reuse and to simplify EzTooltip internals.

#### Bug fixes

- Fix EzModal issue on doc-site causing modal to appear unstyled at the bottom of the screen (fixes [issue 288](https://github.com/ezcater/recipe/issues/288)). The modal will now appear inside the component playground/iframe consistent with other components.
- Fix height resizing of EzTooltip documentation playground examples to no longer clip the tooltip flyout.
- Fix EzTooltip flashing up temporarily in the wrong position on screen.
- Fix EzModal issue on IE where content gets hidden if height exceeds container.

#### Dependency upgrades

- update reach/dialog to 0.8.2.
- update prettier devDependency to 1.19.1 to support optional chaining syntax.

## 10.0.1 - 2020-02-07

#### Enhancements

- added visual regression coverage for EzField[type=time] with validation messages
- added visual regression coverage for EzField[type=fn] with validation messages

#### Design updates

- Update doc-site h3 level headings to use EzHeader[size=3]
- Add syntax highlighting for doc-site code snippets
- Added thematic breaks to [Colors](/styles/colors) and [Typography](/styles/typography) to break up related content into easier to digest parts.

#### Bug fixes

- Fix EzNavigation issue where clicking the currently selected page causes the content to disappear on large screens. (fixes [issue 237](https://github.com/ezcater/recipe/issues/237))
- fix regression bug causing EzField[type=select] to stringify `event.target.value`. This bug impacted any usage of EzField[type=select] where an option value was of type Number or Boolean.
- fix styling of EzField[type=time] when the field is in an error state
- fix positioning of error message and validation flyout on EzField[type=fn]
- fix incorrect EzField[type=date] tests (missing Label which is a required prop)

#### Documentation

- add documentation for [migration to Recipe 8.x releases](/advanced/migrating-to-recipe-8)
- add documentation for [migration to Recipe 10.x releases](/advanced/migrating-to-recipe-10)

## 10.0.0 - 2020-01-23

#### Breaking changes

- Update dependency on emotion from v9 to v10. This is a significant breaking change. At a minimum, downstream applications will be required to update their emotion dependencies to v10 in order to take this Recipe release. Additionally, this release may require significant changes to downstream applications as part of the Emotion upgrade. See the [emotion docs](https://emotion.sh/docs/migrating-to-emotion-10) and our [github issue](https://github.com/ezcater/recipe/issues/218) for more information on breaking changes.
- EzLink and EzField now support React.ForwardRef instead of `innerRef`. You will need to **upgrade React Router to at least v5.1** if your application passes refs to EzLink and uses EzLink's `as` prop.
- Update the Recipe analytics bookmarklet tool to support emotion 10. If you wish to be able to run analytics against emotion 9 based applications, you should retain you current bookmarklet link as a separate bookmark.

#### Enhancements

- Internally use emotion 10's `Global` Component for global styles.
- Modified Recipe's CSS selector usage for closer compatibility with Emotion 10's SSR approach. See: https://github.com/emotion-js/emotion/issues/1178

#### Bug fixes

- fix react list unique key warning in typography docs

#### Documentation

- Updated doc-site to use emotion v10
- Update documentation about peerDependencies

#### Dependency upgrades

- Remove devDependency on React (for testing).
- Update devDependency emotion from v9 to v10.

## 8.0.3 - 2020-01-23

#### Enhancements

- Added missing type definitions for EzField[type=time]

#### Bug fixes

- Make EzField[type=time] start/end props case insensitive
- Make EzField[type=time] step prop optional (fixes [issue 257](https://github.com/ezcater/recipe/issues/257))
- Fix issue causing potential infinite loop when using EzField[type=select|date|time]
- Fix EzField[type=select|date|time] "current" icon positioning
- Fix `event.target` element on the `onChange` event of EzField[type=select|date|time] (fixes [issue 257](https://github.com/ezcater/recipe/issues/282))

#### Development workflow

- split up tests for EzField by type (i.e. checkbox, radio, select, date, time etc)
- updated EzField[type=time] tests to use public API, rather than internal/private methods

---

## Version 8

## 8.0.2 - 2020-01-16

#### Breaking changes

- Use `active` as the `activeClassName` in EzNavigation links. While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes due to the change in HTML generated by the component. In particular applications that contain a CSS rule that targets elements with a `.active` selector may be affected.

#### Enhancements

- Refactored Recipe's internal component for generating icons to compose styles using Emotion's `styled` helper instead of relying on the class name generated by the `css` helper.

#### Bug fixes

- Fixed clock icon positioning on EzField type="time". See [issue 271](https://github.com/ezcater/recipe/issues/271)
- Removed `aria-labelledby` attribute from combobox element. This attribute/value pair was already applied to the combobox input, causing the latest version of `@testing-library/react` to fail to match a unique element.
- Fixed test code usage of `act()` (using `react-dom/test-utils` instead of `TestRenderer.act()`)
- Fixed warning raised by accidentally forwarding `loading` flag from EzButton to the underlying DOM element.
- Fix `Using kebab-case for css properties in objects is not supported. Did you mean marginBottom?` warning generated by the internal EzLabel component.

#### Documentation

- Remove usage of `javascript:urls` from component examples ([deprecated in React 16.9](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#deprecating-javascript-urls))
- Allow links within examples to trigger navigation of the parent window, rather than the iframe

#### Dependency upgrades

- Remove unused `babel-core` dev dependency. We're using babel 7 (and @babel/core), so `babel-core` is no longer being used.
- Remove `react-test-renderer` in favor of consistently using `@testing-library/react`.

#### Development workflow

- Created a lint plugin for recipe (`@ezcater/eslint-plugin-recipe`) for using static analysis to track Recipe usage in downstream applications.
- Updated Recipe's devDependencies used for build/dev tooling. This addressed some npm audit reported known vulnerabilities.
- Updated doc-site's package dependencies
- Remove usage of enzyme's shallow/mount methods in tests, in favor of `@testing-library/react`.
- Remove DOM snapshot based testing template. Recipe tests should include visual regression tests instead.

## 8.0.1 - 2020-01-07

#### Bug fixes

- Fixed doc-site rendering issue. See [issue 265](https://github.com/ezcater/recipe/issues/265).
- Fixed unintentional modal closing issue. See [issue 243](https://github.com/ezcater/recipe/issues/243).

#### Dependency upgrades

- Updated hosted visual regression test runtime to use latest chrome-aws-lambda and puppeteer libraries to be compatible with the AWS runtime support policy updated on Jan 1, 2020.

#### Development workflow

- Created a babel plugin for recipe (`@ezcater/babel-plugin-recipe`) for using static analysis to track Recipe usage in downstream applications.

## 8.0.0 - 2019-12-16

#### Breaking changes

- Changed base font size to 16px (from 14px) to be inline with our recommended guidance for readability. For compatibility with applications that are not yet using our recommended base font size, a new `EzBaseFontSizeCompatibility` component is provided to support a base font size of 14px.
- Defer the internal "pixel to rem" calculation within Theme until runtime. This allows us to make the `baseFontSize` changeable in downstream applications, even if `spacing`, `fontSize` or `pageContentWidth` values are read from our theme module immediately on script import (rather than the intended use of reading from the theme within a theme provider). While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes, in particular, if an application performs math/calculations upon these values.
- Use CSS custom variable (property) for Recipe's base font size. This is also in support of allowing the `baseFontSize` to be changeable in downstream applications. For applications that need to support IE11, to provide support for CSS custom properties a polyfill will be required. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).

#### Documentation

- Updated Spacing and Typography documentation to no longer perform "rem to pixel" math on theme values.
- Added guidance on base font size compatibility to support applications that use a 14px base font size instead of Recipe's recommended size of 16px.
- Added CSS Custom Variable Polyfill recommendation for applications that need to support IE.

---

## Version 7

## 7.1.3 - 2019-12-16

#### Enhancements

- Support Component preview in IE11. Note: Component Editor is not yet supported as Docz doesn't support IE11.

#### Bug fixes

- Include polyfills when running doc-site in dev mode for browsing with IE11. See: gatsbyjs/gatsby#14502.
- Fix logo sizing for IE11.
- Avoid loading docz component playground when running IE11. Docz doesn't support IE11. See: doczjs/docz#249.
- Fix sidebar/main content spanning beyond the width of the page in IE11.
- Fixes for Component Playground for FireFox
  - Suppress error inserting styles into iframe
  - Delay rendering iframe portal until iframe `onLoad` has fired
  - Include iframe `srcDoc` to ensure `onLoad` event is fired

## 7.1.2 - 2019-12-9

#### Bug fixes

- Fix max-width and max-height of EzSuperRadioButton image such that it is constrained within its wrapper in IE11. Fixes [#256](https://github.com/ezcater/recipe/issues/256).

## 7.1.1 - 2019-12-3

#### Bug fixes

- Fixes EzSelect focus issue that caused problems with IE11 #252

## 7.1.0 - 2019-12-3

#### Enhancements

- Added `disabledMessage` property to EzButton to make using buttons wrapped with an EzTooltip easier.

## 7.0.3 - 2019-11-6

#### Bug fixes

- Reverts changes made in in 7.0.2. Dependency react-remove-scroll breaks the doc site.

## 7.0.2 - 2019-11-6

#### Bug fixes

- Fix modal closing when the cursor is clicked on the modal and released on the overlay [#243](https://github.com/ezcater/recipe/issues/243)

## 7.0.1 - 2019-10-30

#### Bug fixes

- Fix layout of EzFlashMessage in IE11. Setting the height / width of the icon ensures the flex layout is respected. Fixes [#231](https://github.com/ezcater/recipe/issues/231)

## 7.0.0 - 2019-10-23

#### Breaking changes

- Removed previously deprecated `e.target.selected` property from the `onChange` callback of both EzField[type="radio"] and EzField[type="checkbox"] in favor `e.target.value` for consistency with the `onChange` event handlers for other EzField types.

#### Bug fixes

- Change EzBlankState message to use a `div` instead of a `p` to prevent the style from being overriden by EzPage
- Set line-height and remove padding for `EzInlineFeedback` to prevent shifting in `EzToggle`. This fixes [#223](https://github.com/ezcater/recipe/issues/223)

#### Documentation

- Fix image paths in EzBlankState docs
- Added github issue templates for bug reports and new component proposals
- Updated PR template to include checklist for including tests/release notes.

#### Dependency upgrades

- updated ez-scripts (linting) version
- Dependency bumps for security vulnerability warning from npm audit.

---

## Version 6

## 6.1.3 - 2019-08-28

#### Bug fixes

- Bump width of content of EzModal to accomodate a 3 wide super radio button with scroll bar. Fixes [#209](https://github.com/ezcater/recipe/issues/209)

#### Documentation

- Improve tooltip notes to explicitly call out the need for the target element to support refs, mouse events and focus events.

## 6.1.2 - 2019-08-22

#### Enhancements

- add unique landmarks to EzNavigation improve a11y

#### Bug fixes

- fix EzField[type="select"] bug preventing the ability to "reset" the value of a select list via props

## 6.1.1 - 2019-08-19

#### Enhancements

- Exposed Recipe version on each component for generating analytics. Added a new [bookmarklet package](https://github.com/ezcater/recipe/tree/master/packages/analytics-bookmarklet) for highlighting Recipe usage in downstream applications.

#### Bug fixes

- Changed EzModal to vertically space content, such that it behaves the same as EzCard content.
- Changed EzField to only trigger `onChange` if the selection causes a change to the initially provided value.

#### Documentation

- Fix image paths in application layout and super radio button docs
- updated contribution instructions and provided detailed guidelines for approaching development of new components
  - Working towards a more open governance model
  - Iterating on the process for getting new developers up-to-speed with contributing to Recipe
- added new [meet-the-team](/meet-the-team) page.

#### Dependency upgrades

- Dependency bump (jest-axe) for security vulnerability warning from npm audit.

## 6.1.0 - 2019-07-29

#### Bug fixes

- fix font-size typo causing (inputs/text area in) EzField to render at incorrect font-size)
- Fix flash-of-unstyled-content during server render, due to global styles.

#### Documentation

- Update timeline with components from 5.2.0-6.0.0 releases.
- fix: make app layout documentation images scale to fit the window

## 6.0.0 - 2019-07-29

#### Breaking changes

- Added [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) support to `EzField`, `EzCheckbox`, `EzToggle` and `EzStatus` to allow access to the underlying native DOM elements for providing support for tooltips. While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes, in particular, around exported type definitions. For more information, see: https://reactjs.org/docs/forwarding-refs.html#note-for-component-library-maintainers.
- Added Global Styles to the `EzAppLayout` component to ensure applications use the correct font size/style/color/smoothing rules. While we do not anticipate this being a breaking change for most consumers of Recipe, any applications that use the `EzAppLayout` component that do not already apply the necessary base font settings may experience observable changes in font appearance.

#### New components

- Added EzTooltip component.
- Added EzBlankState component.
- Added EzSuperRadioButtons component.
- Add new `EzGlobalStyles` component that enables the sharing of global styles rules for Recipe, so that these rules are applied consistently throughout your application. Note: Global Styles is automatically included by the EzAppLayout component, and direct usage of this component is typically unnecessary except to support backwards-compatibility.

#### Enhancements

- Support for `EzField[type="Select"]` to allow users to pick from a dropdown list of options.
- Support for option groups for `EzField[type="Select"]`.
- Support for `EzField[type="time"]` to allow users to pick from a list of times.
- Added `fonts` object to standard theme with grouped styles.
- Added `size` property to EzField with type textarea for changing the default size of the textarea.

#### Design updates

- Updated EzField to use consistent presentation for "drop down" styles across `type="date"`, `type="time"` and `type="select"`.
- Revised interaction behavior EzField[type="date"] to no longer auto-open on focus to behave consistently with `type="time"` and `type="select"`.
- Updated Table headings to match small label style (Closes [#133](https://github.com/ezcater/recipe/issues/133)).
- Updated simple table to no longer grow to fill the available space (Closes [#147](https://github.com/ezcater/recipe/issues/147))
- Added zebra striping to simple tables in place of row hover style.
- Changed width of modal to 550px.
- Set base font-size and type on EzTable, EzField and EzButton.
- Tweaked input placeholder styles to more closely match mocks
- Removed the constraint that select all must be implemented if both selection and pagination are implemented together. This change is intended to facilitate an easier migration path for pages that offer pagination and selection, but are not in a position to implement "select all", either due to data-size constraints, or due to the added complexity of handling both a "select many" vs "select all" action. Closes [#160](https://github.com/ezcater/recipe/issues/160) and [#165](https://github.com/ezcater/recipe/issues/160).

#### Bug fixes

- Fix z-index issue with validation message flyout appearing underneath subsequent content
- Fix keyboard selection of dates in EzField[type="date"]
- Fix focus bug with EzField[type="date"] that causes the control to draw focus when clicking other page elements
- Fix up/down icon toggle on EzField[type="date"] for open/closed states
- Fix font color and icon colors on EzField[type="date"] disabled state

#### Documentation

- Adds documentation for [application layout](/components/ez-app-layout). Closes #146.
- Update 'Getting started' documentation to include more complete instructions around setting up Recipe to work with emotion and theming
- Added instructions for setting up applications to import Recipe's base font
- Update doc-site to include Recipe's font link (as per the new getting started docs) and to include the `EzGlobalStyles` within the Component playground
- Trimmed down excess global styles impacting Recipe components

#### Dependency upgrades

- npm audit fixes

#### Development workflow

- Fixed an issue with emotion css-in-js leaking state across visual regression test runs
- Replace manual style reset from `jest.config` in favor of using `EzGlobalStyles` component.

---

## Version 5

## 5.2.0 - 2019-06-24

#### New components

- Added new `EzSearchInput` component to allow users to search for specific content by providing search terms or simple keywords.
- Added new `EzBanner` component to display a prominent, succinct message with a related link or action.
- Added new `EzNavigation` component. The navigation component provides the primary means for users to move between sections of the application. On small screens, the Navigation menu is presented as a top-bar, while on larger screens the Navigation menu is presented as a left side-bar.

#### Enhancements

- Added new `date` type to `EzField` component.
- Added `label` attribute to `EzToggle`.
- Added semantic names for Recipe colors to more clearly define a consistent set of rules around color usage and to better support for theming in the future.
- Changed `EzModal`, `EzFlashMessage` and `EzBanner` to use a consistent button for dismissing.

#### Design updates

- Consistency changes to EzSegmentedControl, EzTable and EzFlashMessage to reflect [the new guidance](styles/style/#colors) around semantic variable names.
- Design updates for input fields:
  - Add box-shadow to form input fields
  - Added default font color to form input fields
- Changed `EzModal` and `EzFlashMessage` to have a transparent color for `:active` and `:hover` click-surface styles.
- Added `flex-grow` to `EzPage` to ensure pages expand to fill the available space when placed inside a flex container.

#### Bug fixes

- Suppressed global styles from the doc-site playground impacting how Recipe components render
- Fixed an issue with server-rendering/static rendering playground component (ResizeObserver undefined)
- Deprecated target.selected in favor of target.value in the onChange callback parameters on checkboxes and radio buttons.
- Add workaround for doc-site playground to ensure the navigation component docs render at a minimum height when the content of the playground determines it's height from the container (e.g. height: 100%).
- Restore overflow:visible in EzCard to allow for "flyout" content to overflow the card container. Closes [#144](https://github.com/ezcater/recipe/issues/144).

#### Documentation

- Complete reskin of the doc-site, using Recipe components as the building blocks
- update timeline/roadmap with recent releases

#### Dependency upgrades

- update devDependency on sosia-remote-puppeteer to improve support for larger visual regression tests
- update to latest js-dom to facilitate testing of component that internally uses [`Element.prototype.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest).
- Introduce dependency on `Reakit` to simplify building accessible components.

## 5.1.0 - 2019-05-30

#### Enhancements

- Added Clickable rows API to [EzTable](/components/ez-table/#clickable-rows), which allows the table to target specific links to trigger when the table row is clicked.
- Added hover color to table rows to improve scannability of tables
- Better support for EzTable on small screens. When screens are constrained in width, the responsive table now pins the first column (including selection where present) and allows for the remaining columns in the row to overflow with support for scrolling.

#### Bug fixes

- Fixed type definition of EzSegmentedControl `onChange` to use `(value: string) => void` instead of `((event: FormEvent<any>) => void) & ((value: string) => void)`.

#### Documentation

- Switch doc-site to using the [playground component from docz](https://github.com/pedronauck/docz/tree/master/core/docz-theme-default) instead of React-live as a direct dependency.
- Run doc-site examples within an iframe. This enables the docz resize/responsive controls to apply the correct viewport, allowing media queries to apply correctly.

#### Dependency upgrades

- Update devDependency on sosia to reduce test execution time (by half!)
- Update devDependency on sosia-markdown to improve support for larger visual regression tests

## 5.0.0 - 2019-05-13

#### Breaking changes

- Changed the `EzTable` API by moving/grouping the props `onRowSelectClick`, `onBulkSelectClick` and `isRowSelected` under a new selection prop, rather than being individual props to `EzTable`.

#### New components

- Added new EzStatus component.
- Added new EzFlashMessage component.
- Added new EzCheckbox component.
- Added new EzToggle component.

#### Enhancements

- Added `onSelectAllClick` and `onSelectNoneClick` to the `selection` prop of `EzTable` to handle the new interactions available from the table select all banner.
- Support controlled and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) usage of [EzSegmentedControl](./components/ez-segmented-control)
- Prevent accidental text selection in [EzSegmentedControl](./components/ez-segmented-control)

#### Design updates

- Reduced the width of the checkbox/selection column for [EzTable](./components/ez-table#bulk-row-selection) to improve the layout and more clearly emphasize the relationship between the selection and the row data.
- Updated EzField type="checkbox" to use new EzCheckbox component.
- Update EzField type="radio" to use custom styles

#### Bug fixes

- Fixed type definition of EzTable `rowsPerPageOptions` to use `number[]` instead of `[number]`.
- Added background color on `EzCheckbox` component.
- Removed export-to-sketch feature from doc-site due to some unexpected side-effects with how the feature rendered components "off screen":
  - EzSegmented control documentation examples were broken due to duplicated radio-buttons with the same id
  - Documentation pages were presenting excessive scroll bars due to hidden content out of the screen dimensions
- updated checkbox styles to be consistent with radiobutton
  - simpler implementation
  - added `:active` checkbox styles
  - fixed focus style to tightly hug the checkbox (was previously a few pixels out)
  - replace focus style to avoid using `:focus-within` (for compatibility)

#### Documentation

- Simplified pagination documentation for [EzTable](./components/ez-table#pagination).

#### Development workflow

- Added the `--open` flag to `gatsby develop` NPM target. This will launch the doc site during development similar to how create-react-app auto launches when running.

---

## Version 4

## 4.5.0 - 2019-05-06

#### New components

- Added EzAppLayout which is used for centering page content at a fixed or full width.

#### Enhancements

- Added pagination support to EzTable.
- Added support for `actions` on EzTable
- Added initial docs for sub nav (tabs) support in EzPageHeader.
- Added sub navigation support to EzPageHeader, either via state change or via route change
- Add type definitions to enable support for EzButton to accept/pass through standard HTML button props (such as type, role, etc) to the underlying DOM element
- Add support for [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) on EzButton and EzLink components to allow access to underlying DOM element
- Support URL and client-side router links in [EzPageHeader](/components/ez-page-header/#page-header-with-breadcrumb-links). Closes issue [#60](https://github.com/ezcater/recipe/issues/60);
- Add support for using components to define custom cell content in [EzTable](./components/ez-table#custom-cell-rendering). Closes [#92](https://github.com/ezcater/recipe/issues/92). Previously, the EzTable accessor allowed functions to be provided to define a template for custom cell content. By supporting Components instead of basic functions, we allow access to the full set of React features (state, life cycle etc) when rendering each custom cell.

#### Design updates

- Support wider card actions that wrap correctly under the card heading

#### Bug fixes

- Fix server render of components rendered inside react router in doc-site

#### Documentation

- Improved visibility of the inline code tags.

#### Development workflow

- Improved local development workflow by way of a new NPM target `start`. `npm start` runs both `recipe` and the documentation site in the same terminal window. This command will also auto link the `recipe` NPM package to the documentation site.

## 4.4.0 - 2019-04-30

#### New components

- Added new [EzOrderSummary](/components/ez-order-summary) component

## 4.3.0 - 2019-04-24

#### New components

- Added new [EzLink](/components/ez-link) component

#### Enhancements

- Added underline styles to [EzButton](/components/ez-button) component, consistent with [EzLink](/components/ez-link) component.
- Added support for collapsible/expandable [EzCard](/components/ez-card#expandable).

#### Design updates

- set base font color in doc-site (in lieu of global style reset)
- set base font color in visual regression test suite
- enable font antialiasing in doc-site
- remove unwanted font-size media query from doc-site (causing inconsistencies between how doc-site and production sites behave)

#### Bug fixes

- fixed runtime error in doc-site when rendering `jsxwide` examples

## 4.2.1 - 2019-04-10

#### Bug fixes

- Fixed [regression in table select all](https://github.com/ezcater/recipe/issues/71).
- Fixed [Card action stretching](https://github.com/ezcater/recipe/issues/62).

#### Documentation

- Added timeline page with current status of components in pipeline

## 4.2.0

#### Enhancements

- Added support for [sorting EzTable](/components/ez-table#with-sortable-columns).
  - Can now mark columns as `sortable`. EzTable will call `onSortClick` when sortable columns are clicked.
  - Can mark column as `defaultSort: 'asc' | 'desc'` to indicate the default sort order for data sets

## 4.1.1

#### Development workflow

- Re-enabled linting using [ez-scripts](https://github.com/ezcater/ez-scripts)

## 4.1.0

#### New components

- Added new [EzPageHeader](/components/ez-page-header) component

#### Documentation

- Fixed spelling/typos in changelog and other docs
- Corrected deprecation warning of EzPageContent component to refer to EzLayout

#### Dependency upgrades

- Switched usage of React.SFC to React.FC as [React.SFC is now deprecated](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30364).

#### Development workflow

- Removed google font loading service from visual testing path to reduce visual test flakiness caused by delay in font-loading

## 4.0.0

#### Breaking changes

- Removed `margin-right` from [EzButton](/components/ez-button). To apply spacing between buttons, the preferred approach is to use an [EzLayout](/components/ez-layout) as the direct parent of the buttons.
- Removed padding from the [`tertiary` variant of EzButton](/components/ez-button#tertiary-button). As with other buttons, spacing between sibling buttons should be applied via a direct parent [EzLayout](/components/ez-layout).
- Replaced `onRowClick` property on [EzTable](/components/ez-table) with `onRowSelectClick` to more closely align with the existing `onBulkSelectClick` property.
- Replaced `rowIsSelected` property on [EzTable](/components/ez-table) with `isRowSelected`. Using question phrasing to more clearly indicate that this property is a function.

#### Enhancements

- Simplified internal type definitions for [EzTable](/components/ez-table) bulk selection properties. Replaced custom type definitions for click handlers with `React.MouseEvent` based handlers.

#### Documentation

- Simplified [EzTable](/components/ez-table) examples in the documentation
  - Replaced `Component` wrapper for state with `useState` hooks
  - Remove unneeded `Component` wrapper from example that didn't use state
  - Use reference equality for bulk selection example to simplify selection logic

---

## Version 3

## 3.0.1

#### Enhancements

- Visual changes to the [EzTable bulk select](components/ez-table#bulk-row-selection) feature. Check boxes now use custom styling rather than the browser default.

## 3.0.0

#### Breaking changes

- Updated internals of EzField to use React hooks, which required a peerDependency bump of React to a >16.8 version.

---

## Version 2

## 2.4.1

#### Dependency upgrades

- Updated minor version of @emotion/is-prop-valid dependency
- Update patch version of @reach/dialog dependency
- Updated various dev dependencies

## 2.4.0

#### Enhancements

- Added focus styles for tertiary buttons (to improve accessibility)
- Minor padding changes for tertiary buttons (to improve accessibility)

#### Dependency upgrades

- Removed peerDependency on polished (Fixes [#44](https://github.com/ezcater/recipe/issues/44))

## 2.3.0

#### Enhancements

- Add 'bulk select' functionality to EzTable

## 2.2.0

#### New components

- Add new [EzField](/components/ez-field) and [EzFormLayout](/components/ez-form-layout) components

#### Enhancements

- apply line-height/color/spacing to `EzHeading`
- internally updated `EzCard` to use `EzHeading` for consistency

#### Bug fixes

- fixed type definition of `EzButton` onClick to `MouseEventHandler`

#### Documentation

- Added titles to [EzHeading](/components/ez-heading) docs

#### Development workflow

- Fixed `npm run build:watch` mode for TypeScript builds

## 2.1.0

#### Enhancements

- Adds optional `actions` prop to [EzCard](/components/ez-card) component for rendering secondary calls-to-action.

## 2.0.0

#### Breaking changes

- Removed `styled<Theme>` export from Recipe's public api. This undocumented api became available as part of the 2.0.0-alpha.0 release, but the api is too broad for the scope of Recipe.

#### Enhancements

- Restored backwards-compatible behavior of providing the `standard` theme to Recipe components where no `ThemeProvider` is in use. This was a breaking change for the 2.0.0-alpha.0 release, but the impact on downstream projects would delayed the upgrade path to 2.0.0 with this change in place.

#### Documentation

- Added documentation for the upcoming `EzFormLayout` and `EzFormField` components
- Fix `Lato` font import in the doc-site

#### Development workflow

- Integrated code climate with CI build
- Added code climate config to separate doc-site from recipe code quality checks
- Added `npm run build:watch` mode for TypeScript builds
- Suppress lint warning from development doc-site builds

## 2.0.0-alpha.2

#### Documentation

- Removed empty bullet list of "related components" section in several components
- Updated structure of `EzModal` docs to follow the same format of other components
  - Removed "props table" style documentation in favor of demonstrating how properties are applied to achieve various use cases

## 2.0.0-alpha.1

#### Bug fixes

- Fixed bug in `EzLayout` type definition that prevented the base layout (mobile view) of a responsive layout from using any layout other than stack
- Fixed bug in `EzLayout` type definition that prevented multiple breakpoints being specified for responsive layouts
- Linked the `EzLayout` type definition to the breakpoints specified by the `theme`, such that changes to the number of breakpoints don't require changes to `EzLayout`.

## 2.0.0-alpha.0

#### Breaking changes

- Upgraded Recipe to Typescript
- Removed internal `withTheme` wrapper around components; Recipe components must now be used inside a `ThemeProvider`

---

## Version 1

## 1.13.0 - 2018-11-28

#### Enhancements

- Remove need to specify `appElement` prop on [EzModal](/components/ez-modal) component

#### Design updates

- Use consistent spacing withing EzModal header/footer/body

#### Bug fixes

- EzModal close button stretching when heading flows onto multiple lines
- Render bug with EzModal and EzHeading causing unnecessary re-renders and event handlers to be removed/reapplied every render

#### Documentation

Updated formatting of [changelog](/changelog) to conform to our [changelog guidelines](/guides/versioning-and-changelog)

#### Dependency upgrades

- Revert back to @reach/dialog for EzModal

## 1.12.1 - 2018-11-19

#### Bug fixes

- Remove automatic error for yarn installs

## 1.12.0 - 2018-11-15

#### Dependency upgrades

- Reverts [EzModal](/components/ez-modal) component back to using react-modal

#### Design updates

- Restore slide up animation on [EzModal](/components/ez-modal) component
- Reintroduce optional `appElement` prop on [EzModal](/components/ez-modal) component

## 1.11.3 - 2018-11-14

#### Bug fixes

- Fix flexbox issues seen on [EzModal](/components/ez-modal) component in older browsers
- Remove slide animation on [EzModal](/components/ez-modal) component to avoid janky rendering on some browsers

## 1.11.1 - 2018-11-13

#### Bug fixes

- Include table styles missed due default doc-site styles

#### Documentation

- Enumerate specific `peerDepenedency` requirements in Getting Started docs

## 1.11.0 - 2018-11-8

#### New components

- Adds new [EzTable](/components/ez-table) component.

#### Enhancements

- Remove need to specify `appElement` prop on [EzModal](/components/ez-modal) component

#### Bug fixes

- Fixes component `displayName` and [EzCard](/components/ez-card) bug causing `EzCardSection` to not render correctly.

#### Dependency upgrades

- Switches [EzModal](/components/ez-modal) component to use @reach/dialog

## 1.10.1 - 2018-11-2

#### Design updates

- Minor refactor of CSS styles on [EzModal](/components/ez-modal) component.

#### Documentation

- Adds documentation around props on [EzModal](/components/ez-modal) component.

## 1.10.0 - 2018-10-30

#### New components

- Adds new [EzModal](/components/ez-modal) component.

## 1.9.0 - 2018-10-4

#### New components

- Adds new [EzPage](/components/ez-page) component.

#### Documentation

- Deprecated [EzPageContent](/components/ez-page-content).

## 1.8.2 - 2018-09-17

#### Bug fixes

- Removes an unnecessary addition of `className` to [EzAlert](/components/ez-alert)

## 1.8.1 - 2018-09-17

#### New components

- Adds new [EzHeading](/components/ez-heading) component.

#### Enhancements

- Made [EzPageContent](/components/ez-page-content) padding responsive.

#### Design updates

- Changed value of `spacing.xl2`.

## 1.7.2 - 2018-09-17

#### Bug fixes

- Clean up some design fixes for [EzAlert](/components/ez-alert)

## 1.7.1 - 2018-09-14

#### Bug fixes

- Fixed `theme` property for [EzAlert](/components/ez-alert)

## 1.7.0 - 2018-09-12

#### New components

- Added [EzAlert](/components/ez-alert) component and accompanying documentation

## 1.6.0 - 2018-09-07

#### Enhancements

- Refactored color variable names and added new colors

#### Documentation

- Added documentation for [colors](/styles/style/#colors)

## 1.5.0 - 2018-08-15

#### Enhancements

- Added optional accent prop to [EzCard](/components/ez-card)

## 1.4.1 - 2018-08-13

#### Bug fixes

- Fixed issue with buttons getting a white border due to the order of declared styles.

## 1.4.0 - 2018-08-08

#### Enhancements

- Added responsive layout options to [EzLayout](/components/ez-layout)

#### Documentation

- Added info on progressive enhancement to [Principles](/guides/principles)

## 1.3.0 - 2018-08-07

#### Enhancements

- Added tertiary button use type to [EzButton](/components/ez-button)
- Added optional subtitle prop to [EzCard](/components/ez-card)

#### Documentation

- Added guidance on when and how to use tertiary buttons
- Added guidance on when and how to use EzCards with subheadings

## 1.2.0 - 2018-08-02

#### Enhancements

- Updated [EzButton](/components/ez-button) to be bold font and not wrap on whitespace
- New variables for [spacing](/styles/style/#spacing), [typography](/styles/style/#typography) (including [font sizes](/styles/style/#font-sizes) and [font weights](/styles/style/#font-weights))

## 1.1.0 - 2018-07-30

#### Enhancements

- New "[stack](/components/ez-layout#stack-layout)" variant added for [EzLayout](/components/ez-layout)

#### Documentation

- Added guidance on [versioning and releasing](/guides/versioning-and-changelog) Recipe.

#### Development workflow

- Added [changelog](/changelog)
