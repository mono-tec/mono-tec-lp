import React from 'react';

export type Project = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export default function ProjectCard({title, description, href, tags = []}: Project) {
  return (
    <a href={href} className="card" style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
      <div className="card__header"><h3>{title}</h3></div>
      <div className="card__body"><p>{description}</p></div>
      {tags.length > 0 && (
        <div className="card__footer">
          <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
            {tags.map(t => <span key={t} className="badge badge--primary">{t}</span>)}
          </div>
        </div>
      )}
    </a>
  );
}
