import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {EzLayout} from '@ezcater/recipe';
import {ThemeProvider} from 'emotion-theming';
import {
  themes,
  EzAppLayout,
  EzCard,
  EzCardSection,
  EzPage,
  EzLink,
  EzHeading,
  EzFlashMessage,
} from '@ezcater/recipe';
import {GithubLink} from '../components/GithubLink';
import styled, {css} from 'react-emotion';

const themeAsObjectNotModule = Object.assign({}, themes.standard);

const Header = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #88bb40
    url(https://www.ezcater.com/ezrails/patterns/food_pattern-e104391a85399cde4594e0009d17d5db58732efa36de049a87ccd812a83666b4.svg)
    0 0 repeat;
  padding: 64px;

  > h1 {
    font-size: 100px;
    font-weight: 300;
  }
  > p {
    font-size: 20px;
  }
`;

const timelineBlip = css`
  content: '';
  width: 25px;
  height: 25px;
  background-color: #f3f7f8;
  border-radius: 25px;
  border: 4px solid #76ac2c;
  position: absolute;
  top: -15px;
`;

const Timeline = styled.div`
  border-top: solid 3px #76ad2c;
  width: 100%;
  position: relative;
  margin-top: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: center;

  :before {
    ${timelineBlip};
    left: calc(75% - 12.5px);
  }

  a:before {
    ${timelineBlip};
    left: calc(50% - 12.5px);
  }
  a:after {
    ${timelineBlip};
    left: calc(25% - 12.5px);
  }
`;

const StyledCard = styled(EzCard)`
  && > * {
    flex-wrap: wrap;
    > * {
      flex-basis: 50%;
    }
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.large}) {
    && > * > * {
      flex-basis: 0;
    }
  }
`;

const IndexPage = () => (
  <EzAppLayout layout="centered">
    <Helmet
      title="Recipe"
      meta={[
        {name: 'description', content: 'Recipe Design System'},
        {name: 'keywords', content: 'Recipe Design System EzCater'},
      ]}
    >
      <html lang="en" />
    </Helmet>
    <GithubLink repository="https://github.com/ezcater/recipe" />

    <ThemeProvider theme={themeAsObjectNotModule}>
      <>
        <Header>
          <h1>Recipe</h1>
          <p>Now we're Cookin'!</p>
        </Header>

        <EzPage>
          <EzFlashMessage use="info" headline="Want to contribute to Recipe?">
            <p>
              We’re currently considering making this project fully open source. In the meantime, if
              you’re an ezcater employee and are interested in contributing, check out our{' '}
              <EzLink to="/guides/contributing/" as={Link}>
                contributing guidelines
              </EzLink>{' '}
              to get started.
            </p>
          </EzFlashMessage>
          <StyledCard horizontal>
            <EzCardSection>
              <EzHeading size="3">Getting started</EzHeading>
              <p>
                Onboarding for designers and developers who are using Recipe for the first time.
              </p>
              <p>
                <EzLink to="/guides/getting-started/" as={Link}>
                  View quick start guide
                </EzLink>
              </p>
            </EzCardSection>
            <EzCardSection>
              <EzHeading size="3">Components</EzHeading>
              <p>
                Explore the building blocks of our component library with code examples and
                guidelines.
              </p>
              <EzLayout layout="basic">
                <EzLink to="/components/" as={Link}>
                  View components
                </EzLink>
              </EzLayout>
            </EzCardSection>
            <EzCardSection>
              <EzHeading size="3">Style</EzHeading>
              <p>Guidance on how to approach the visual elements of our applications.</p>
              <p>
                <EzLink to="/styles" as={Link}>
                  View styles
                </EzLink>
              </p>
            </EzCardSection>
            <EzCardSection>
              <EzHeading size="3">Principles</EzHeading>
              <p>Explore our approach for building the design system.</p>
              <p>
                <EzLink to="/guides/principles/" as={Link}>
                  View design guidelines
                </EzLink>
              </p>
            </EzCardSection>
          </StyledCard>

          <br />
          <Timeline>
            <EzLink to="/timeline/" as={Link}>
              Roadmap/Timeline
            </EzLink>
          </Timeline>

          <EzCard title="What’s new?" subtitle="Recipe v5.1.0" accent="info">
            <p>
              A new and improved version of the Recipe React component library. Upgrade to v5.1.0
              today to take advantage of our new features in your apps and projects.
            </p>
            <p>
              <EzLink to="/changelog/" as={Link}>
                View all Recipe updates
              </EzLink>
            </p>
          </EzCard>
        </EzPage>
      </>
    </ThemeProvider>
  </EzAppLayout>
);

export default IndexPage;
