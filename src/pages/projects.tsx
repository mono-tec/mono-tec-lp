import React from 'react';
import Layout from '@theme/Layout';
import ProjectCard, {Project} from '../components/ProjectCard';

const projects: Project[] = [
{
  title: 'ConsistRunner',
  description: 'Windows 環境で一貫性のある配布・ログ管理・自動実行 を実現するためのサンプルアプリケーション群です。.NET Framework 4.7.2ベースで構築しています。',
  href: 'https://github.com/mono-tec/ConsistRunner',
  tags: ['Console', '.NET Framework'],
},
];

export default function Projects(): JSX.Element {
  return (
    <Layout title="Projects" description="公開中のサンプル・テンプレート">
      <main className="container" style={{padding:'3rem 0'}}>
        <h1>Projects</h1>
        <p>学習・個人利用を想定したサンプルやテンプレートを公開しています。</p>
        <div className="row" style={{marginTop:'1rem'}}>
          {projects.map(p => (
            <div key={p.title} className="col col--6" style={{marginBottom:'1rem'}}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
