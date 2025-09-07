// src/theme/Html/index.tsx
import React from 'react';
import Html from '@theme-original/Html';

export default function HtmlWrapper(props: any) {
  return (
    <Html
      {...props}
      htmlAttributes={{
        ...props.htmlAttributes,
        lang: 'ja',                 // ← ここで強制上書き
        'data-lang-forced': 'true', // ← 検証用マーカー（build後HTMLで確認）
      }}
    />
  );
}
