module.exports = {
    title: "baselib",
    description: "A simple and beautiful vuepress doc theme .",
    dest: "public",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    theme: "reco",
    themeConfig: {
        nav: [
            { text: "指南", link: "/", icon: "reco-home" },
            {
                text: "文档",
                icon: "reco-api",
                items: [{ text: "0.x", link: "/docs/theme-reco/" }]
            },
            { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
            {
                text: "GitLab",
                icon: "reco-GitLab",
                link: "https://github.com/lsxlsxxslxsl"
            }
        ],
        sidebar: {
            "/docs/theme-reco/": ["", "theme", "plugin", "api"]
        },
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
          ],
        // 自动形成侧边导航
        // sidebar: 'auto',
        type: "api",
        logo: "/logo.png",
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 最后更新时间
        lastUpdated: "Last Updated",
        /**
         * 密钥 (if your blog is private)
         */

        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        /**
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        [
            "vuepress-plugin-typedoc",

            // plugin options
            {
                // list of input files relative to docusaurus.config.js
                inputFiles: ["../../src/"],

                // out directory relative to docs folder (defaults to `api`)
                out: "api",

                // options for auto generated sidebars.json (pass `null` to skip generation completely)
                sidebar: {
                    // display full names with module path if applicable - (defaults to 'false')
                    fullNames: false,
                    // the parent category label for sidebar - (defaults to `none` - no parent category)
                    parentCategory: "none"
                },

                // include additional TypeDoc plugins in addition to the markdown plugin (optional)
                // plugin: ["typedoc-plugin-xyz"],

                // Pass in any additional TypeDoc options (see typedoc --help)
                mode: "modules"
            }
        ]
    ]
};
