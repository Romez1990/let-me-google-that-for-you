import React, { Fragment, useState } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import Layout from '../layouts/Layout';

SearchPage.getInitialProps = ({ query }: NextPageContext) => {
  if (typeof query.q !== 'string' && typeof query.q !== 'undefined')
    throw new Error('wrong query param q');
  return {
    initialQuery: query.q || '',
  };
};

interface Props {
  initialQuery: string;
}

function SearchPage({ initialQuery }: Props) {
  const [query, setQuery] = useState(initialQuery || '');

  function googleSearch() {
    location.href = `https://google.com/search?q=${query}`;
  }

  function onQueryChange(value: string) {
    setQuery(value);
  }

  return (
    <Fragment>
      <Head>
        <title>Let me google that for you</title>
      </Head>

      <Layout
        query={query}
        onTypingComplete={googleSearch}
        onQueryChange={onQueryChange}
        buttons={[
          {
            text: 'Google Search',
            onClick(): void { },
          },
          {
            text: 'I\'m Feeling Lucky',
            onClick(): void { },
          },
        ]}
      />
    </Fragment>
  );
}

export default SearchPage;
