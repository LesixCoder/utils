const { path } = require("@vuepress/shared-utils");

module.exports = ctx => ({
    dest: path.resolve(__dirname, "../../vuepress"),
    locales: {
        "/zh/": {
            lang: "zh-CN",
            title: "Baselib",
            description: "基于 Typescript 的工具库"
        }
    },
    head: [
        ["link", { rel: "icon", href: `/logo.png` }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" }
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                href: `/icons/apple-touch-icon-152x152.png`
            }
        ],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/icons/safari-pinned-tab.svg",
                color: "#3eaf7c"
            }
        ],
        [
            "meta",
            {
                name: "msapplication-TileImage",
                content: "/icons/msapplication-icon-144x144.png"
            }
        ],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }]
    ],
    theme: "@vuepress/vue",
    themeConfig: {
        smoothScroll: true,
        locales: {
            "/zh/": {
                label: "简体中文",
                selectText: "选择语言",
                ariaLabel: "选择语言",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: require("./nav/zh"),
                // sidebar: {
                //     "/zh/api/": getApiSidebar(),
                //     "/zh/guide/": getGuideSidebar("指南")
                // }
                sidebar: 'auto'
            }
        }
    },
    plugins: [
        ["@vuepress/back-to-top", true],
        ["@vuepress/medium-zoom", true],
        [
            "vuepress-plugin-typedoc",
            {
                // list of input files relative to docusaurus.config.js
                inputFiles: [path.resolve(__dirname, "../../src")],

                // out directory relative to docs folder (defaults to `api`)
                out: "./zh/api",

                // options for auto generated sidebars.json (pass `null` to skip generation completely)
                sidebar: {
                    // display full names with module path if applicable - (defaults to 'false')
                    fullNames: true,
                    // the parent category label for sidebar - (defaults to `none` - no parent category)
                    parentCategory: "none"
                },

                // include additional TypeDoc plugins in addition to the markdown plugin (optional)
                // plugin: ["typedoc-plugin-xyz"],

                // Pass in any additional TypeDoc options (see typedoc --help)
                mode: "file",
                // theme: "minimal",
                name: '工具库',
                includeVersion: true
            }
        ]
    ],
    extraWatchFiles: [".vuepress/nav/zh.js", "zh/api/**.md"]
});

function getApiSidebar() {
    return [""];
}

function getGuideSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: ["", "getting-started"]
        }
    ];
}
