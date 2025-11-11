// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Mono Tec',
    tagline: '初心者～中級者のためのプログラム学習メモ',
    favicon: 'img/logo.png',

    // 公開URL（GitHub Pages）
    url: 'https://mono-tec.github.io',
    baseUrl: '/mono-tec-lp/',
    organizationName: 'mono-tec',
    projectName: 'mono-tec-lp',
    deploymentBranch: 'gh-pages',
    trailingSlash: false, // 末尾スラッシュの揺れを抑止

    onBrokenLinks: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    // 日本語のみ運用
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
        localeConfigs: { ja: { htmlLang: 'ja-JP' } }, // 保険
    },

    // 使わない機能をOFF（軽量化）
    presets: [
        [
            'classic',
            {
                docs: false,     // ← Docsを使わない
                blog: false,     // ← Blogも使わない
                theme: { customCss: require.resolve('./src/css/custom.css') },
                sitemap: { changefreq: 'weekly', priority: 0.5 },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // ダーク/ライトの初期設定とスイッチ表示
        colorMode: {
            defaultMode: 'light',
            respectPrefersColorScheme: false,
            disableSwitch: false, // スイッチを消したいなら true
        },

        navbar: {
            title: 'mono-tec',
            logo: { alt: 'Logo', src: 'img/logo.png' },
            items: [
                { to: '/projects', label: 'Projects', position: 'left' },
                { to: '/about', label: 'About', position: 'left' },
                { href: 'https://zenn.dev/mono_tec', label: 'Zenn', position: 'right' },
                { href: 'https://github.com/mono-tec', label: 'GitHub', position: 'right' },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                { title: 'Links', items: [{ label: 'Zenn', href: 'https://zenn.dev/mono_tec' }] },
            ],
            copyright: `© ${new Date().getFullYear()} mono-tec`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['powershell', 'bash', 'diff'],
        },

    },

    // （必要なら）クライアント起動時に lang=ja を適用する応急処置
    // SSR出力の<html lang>がenのままでも見た目上はjaにできます
    // clientModules: [require.resolve('./src/client-modules/setLang.ts')],
};

export default config;
