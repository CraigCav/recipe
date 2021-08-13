import React from 'react';
import {EzCard, EzCardSection, EzPage, EzPageHeader} from '@ezcater/recipe';
import Layout from '../../components/Layout';
import styles from '../../styles/Team.module.css';

export default function Doc() {
  return (
    <Layout>
      <EzPageHeader title="Meet the Team" />
      <EzPage>
        <EzCard>
          <EzCardSection>
            <p>
              Recipe is governed and maintained by ezCater&apos;s DevEx team, but lots of hard work
              and contributions to Recipe have come from ezCater&apos;s product squads.
            </p>
          </EzCardSection>
          <EzCardSection title="Concept">
            <p>Recipe was co-created by Craig Cavalier and Andrew Yip.</p>
            <br />
            <a href="https://github.com/CraigCav">
              <img
                src="https://avatars0.githubusercontent.com/u/109814?s=160&amp;v=4"
                className={styles.avatar}
                alt="CraigCav"
                width="150"
                height="150"
              />
            </a>
            <a href="https://github.com/ayip8">
              <img
                src="https://pbs.twimg.com/profile_images/1826024514/avatar_200x200.jpg"
                className={styles.avatar}
                alt="ayip8"
                width="150"
                height="150"
              />
            </a>
          </EzCardSection>
          <EzCardSection title="Design">
            <p>
              Identifying emergent patterns, creating mockups and adding visual flare, the design
              team form a critical part of the Recipe core team.
            </p>
            <p>Meet some of the folks responsible for the look-and-feel of Recipe:</p>
            <br />
            <a href="https://github.com/ayip8">
              <img
                src="https://pbs.twimg.com/profile_images/1826024514/avatar_200x200.jpg"
                className={styles.avatar}
                alt="Andrew Yip"
                width="150"
                height="150"
              />
            </a>
            <a href="https://github.com/dave-ezcater">
              <img
                src="https://avatars1.githubusercontent.com/u/39057183?s=160&v=4"
                className={styles.avatar}
                alt="Dave Janelle"
                width="150"
                height="150"
              />
            </a>
            <a href="https://github.com/mcgrathcara">
              <img
                src="https://avatars1.githubusercontent.com/u/25209422?s=160&v=4"
                className={styles.avatar}
                alt="Cara McGrath"
                width="150"
                height="150"
              />
            </a>
            <a href="https://github.com/johnhemminger">
              <img
                src="https://avatars1.githubusercontent.com/u/42186057?s=160&v=4"
                className={styles.avatar}
                alt="Joh Hemminger"
                width="150"
                height="150"
              />
            </a>
          </EzCardSection>
          <EzCardSection title="Code Contributors">
            <p>
              Helping to turn the design vision into reality, the development team help create a
              cohesive component library to make it easier to create a consistent and high-quality
              experience for our users.
            </p>
            <br />
            <p>
              <a href="https://github.com/CraigCav">
                <img
                  src="https://avatars0.githubusercontent.com/u/109814?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="CraigCav"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/neogeek">
                <img
                  src="https://avatars0.githubusercontent.com/u/6753?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="neogeek"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/danidewitt">
                <img
                  src="https://avatars1.githubusercontent.com/u/3790037?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="danidewitt"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/ayip8">
                <img
                  src="https://pbs.twimg.com/profile_images/1826024514/avatar_200x200.jpg"
                  className={styles.avatar}
                  alt="ayip8"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/paulmthiebauth">
                <img
                  src="https://avatars1.githubusercontent.com/u/9626789?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="paulmthiebauth"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/jasper-chen">
                <img
                  src="https://avatars3.githubusercontent.com/u/4129220?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="jasper-chen"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/Julian-Jurai">
                <img
                  src="https://avatars0.githubusercontent.com/u/27185026?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Julian-Jurai"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/spdonegan1">
                <img
                  src="https://avatars0.githubusercontent.com/u/1735195?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Sean Donegan"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/ezrohall">
                <img
                  src="https://avatars3.githubusercontent.com/u/48689546?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Rick O'Halloran"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/acconrad">
                <img
                  src="https://avatars1.githubusercontent.com/u/422184?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="acconrad"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/bjackson2">
                <img
                  src="https://avatars2.githubusercontent.com/u/3217775?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="bjackson2"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/kevinmook">
                <img
                  src="https://avatars2.githubusercontent.com/u/832755?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="kevinmook"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/pgrippi">
                <img
                  src="https://avatars2.githubusercontent.com/u/1180841?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="pgrippi"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/brandonshar-ezcater">
                <img
                  src="https://avatars2.githubusercontent.com/u/39921564?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="brandonshar-ezcater"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/klaw772">
                <img
                  src="https://avatars2.githubusercontent.com/u/28101298?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Kat Law"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/jmccormick11">
                <img
                  src="https://avatars3.githubusercontent.com/u/3170453?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="jmccormick11"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/stacy-wells">
                <img
                  src="https://avatars0.githubusercontent.com/u/11218638?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Stacy Wells"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/eebs">
                <img
                  src="https://avatars1.githubusercontent.com/u/597311?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="eebs"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/ez-alexfrazer">
                <img
                  src="https://avatars.githubusercontent.com/u/77698413?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Alex Frazer"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/tjwp">
                <img
                  src="https://avatars3.githubusercontent.com/u/1476506?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="tjwp"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/morgannegagne">
                <img
                  src="https://avatars3.githubusercontent.com/u/32595022?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Morganne Gagne"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/maggiedbaker">
                <img
                  src="https://avatars3.githubusercontent.com/u/4922450?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Maggie Baker"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/kristenlk">
                <img
                  src="https://avatars1.githubusercontent.com/u/5618997?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="kristenlk"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/jaeger401">
                <img
                  src="https://avatars2.githubusercontent.com/u/2601267?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="jaeger401"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/evan-ezcater">
                <img
                  src="https://avatars1.githubusercontent.com/u/36675523?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="evan-ezcater"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/aprescott">
                <img
                  src="https://avatars1.githubusercontent.com/u/342081?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="Adam Prescott"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/alecortega">
                <img
                  src="https://avatars2.githubusercontent.com/u/6596787?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="alecortega"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/EliseFitz15">
                <img
                  src="https://avatars2.githubusercontent.com/u/10551597?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="EliseFitz15"
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://github.com/AlexMorreale">
                <img
                  src="https://avatars2.githubusercontent.com/u/8332983?s=60&amp;v=4"
                  className={styles.avatar}
                  alt="AlexMorreale"
                  width="50"
                  height="50"
                />
              </a>
            </p>
          </EzCardSection>
        </EzCard>
      </EzPage>
    </Layout>
  );
}
