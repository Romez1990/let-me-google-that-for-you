import React, { Fragment, useState } from 'react';
import Layout from '../layouts/Layout';
import copyToClipboard from '../src/utils/copyToClipboard';
import { useRouter } from 'next/router';
import Head from 'next/head';

function IndexPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function onQueryChange(value: string) {
    setQuery(value);
  }

  function getLink() {
    const url = `${location.origin}/search?q=${encodeURI(query)}`;
    copyToClipboard(url);
  }

  async function preview() {
    const url = `/search?q=${query}`;
    await router.push(url);
  }

  return (
    <Fragment>
      <Head>
        <title>Let me google that for you</title>
      </Head>

      <Layout
        onQueryChange={onQueryChange}
        buttons={[
          {
            text: 'Get Link',
            onClick: getLink,
          },
          {
            text: 'Preview',
            onClick: preview,
          },
        ]}
      />
    </Fragment>
  );
}

export default IndexPage;
