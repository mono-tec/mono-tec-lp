import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="mono-tec"
      description="初心者～中級者向けに最小構成のサンプルコードを公開しています。">
      <header className="hero hero--primary" style={{padding: '4rem 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <img src={useBaseUrl('/img/logo.png')}  alt="logo" width={96} height={96} />
          <h1 style={{marginTop: '1rem'}}>Mono Tec</h1>
          <p className="hero__subtitle" style={{whiteSpace:'pre-line'}}>
            {"初心者～中級者向けに\n最小構成のサンプルコードを公開しています"}
          </p>
          <div style={{display:'flex', gap:'1rem', justifyContent:'center', marginTop:'1.5rem'}}>
            <Link className="button button--secondary button--lg button--cta" to="/projects">Projects</Link>
            <Link className="button button--primary button--lg button--cta" to="https://zenn.dev/mono_tec" target="_blank">Zenn</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container" style={{padding:'2rem 0'}}>
          <div className="row">
            <div className="col col--6">
              <h2>紹介</h2>
              <p>実務でも応用しやすいように、できるだけシンプルで読みやすいコードを心がけています。READMEを読めばすぐ動かせる構成にしており、つまづきやすいポイントはドキュメントにまとめています。</p>
            </div>
          </div>
        </section>

        <section className="container" style={{padding:'0 0 3rem'}}>
          <h2>注目のコンテンツ</h2>
          <ul>
            <li><Link to="/projects">Projects（公開テンプレート一覧）</Link></li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
