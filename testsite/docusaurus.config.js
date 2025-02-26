// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Docusaurus JSON Schema Plugin",
  tagline: "JSON Schema plugin viewer / editor in Docusaurus v2.",
  url: "https://jy95.github.io",
  baseUrl: "/docusaurus-json-schema-plugin/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false, // Needed for Gh pages - https://github.com/facebook/docusaurus/issues/5026
  organizationName: "jy95", // Usually your GitHub org/user name.
  projectName: "docusaurus-json-schema-plugin", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "JSON Schema viewer / editor",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          label: "Github",
          position: "right",
          to: "https://github.com/jy95/docusaurus-json-schema-plugin",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/",
        },
        // Optional: disable the blog plugin
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [["../lib/index.js", {}]],
}
