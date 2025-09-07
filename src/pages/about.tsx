import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout title="About" description="自己紹介ページ">
      <main className="container" style={{padding: '3rem 0'}}>
        <h1>About</h1>
        <p>
          はじめまして、mono-Tecです。<br/>
          普段はプログラム開発を行っており、業務アプリやツール作成をしています。
        </p>
        <p>
          このサイトでは、初心者から中級者の方が学習や実務に応用できるよう、最小構成のサンプルコードやプロジェクトを公開しています。
        </p>
        <p>
          学んだ内容を整理しながら発信することで、自分自身の理解を深めるとともに、同じように学んでいる方々のお役に立てればと思っています。
        </p>
        <p>
          さらに詳しい記事や技術ノートは <a href="https://zenn.dev/mono_tec" target="_blank" rel="noreferrer">Zenn</a> にまとめていますので、ぜひご覧ください。
        </p>
      </main>
    </Layout>
  );
}
