import * as React from 'react';
import Head from 'next/head';

import { colors, breakpoints } from '../utils/theme';
// import { Nav } from './Nav';

type Props = {
  title?: string;
};

export const Layout: React.FC<Props> = ({ children, title = 'DNYC' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="An itinerary for D's summer 2019 trip to NYC"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <style jsx global>{`
      html,
      body {
        height: 100%;
      }
      body {
        background: ${colors.lightBackground};
        color: ${colors.lightBodyText};
        font-family: 'Work Sans', 'Open Sans', Helvetica, sans-serif;
        max-width: 50em;
        line-height: 1.5;
        margin: 0 auto;
        padding: 1em 6em 0em;
        display: flex;
        flex-direction: column;
      }
      // medium screens
      @media all and (max-width: ${breakpoints.medium}) {
        html,
        body {
          padding: 1em 2em 1em;
        }
      }
      // small screens
      @media all and (max-width: ${breakpoints.small}) {
        html,
        body {
          padding: 1em 1em 1em;
        }
      }
      a {
        color: ${colors.brandColor};
        margin-right: 10px;
      }
      h1 {
        color: ${colors.lightEmphasisColor};
      }
      footer {
        flex: 2;
        height: 60px;
      }
      strong {
        font-weight: 800;
        font-size: 1.1em;
        font-color: ${colors.lightEmphasisColor};
      }
      p {
        text-align: justify;
      }
      li {
        text-align: justify;
      }
      a {
        margin-right: 0;
      }
    `}</style>
    {/* <Nav /> */}

    <div className="content">{children}</div>
    <style jsx>
      {`
        .content {
          flex: 1 0 auto;
        }
      `}
    </style>
    <footer>
      <hr />
      <span>© 2019 D!NYC</span>
    </footer>
  </div>
);
