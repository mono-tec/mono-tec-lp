import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'ガイド',
      items: [
        'guide/get-started',
        'guide/how-to-read-code',
      ],
    },
    {
      type: 'category',
      label: 'サンプルコード',
      items: [
        'samples/cli-template',
        'samples/winforms-template',
      ],
    },
  ],
};

export default sidebars;
