module.exports = {
    title: 'C++',
    description: 'C++ Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',
    themeConfig: {
        nav: [
            { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
            { text: 'Report Issue', link: 'https://github.com/LudovicEspeel/course-object-oriented-programming-with-cpp/issues' },
            { text: 'Organization', link: 'https://www.vives.be' }
        ],
        sidebar: [{
                title: 'About this Course', // required
                path: '/about-this-course/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
            },
            {
                title: 'Introductory', // required
                // path: '/a-introductory/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/a-introductory/01-what-is-cpp/',
                    '/a-introductory/02-hello-world/',
                ]
            },
            {
                title: 'Fundamentals', // required
                // path: '/b-fundamentals/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/b-fundamentals/01-variables-and-datatypes/',
                    '/b-fundamentals/02-operators/',
                    '/b-fundamentals/03-input-output/',
                    '/b-fundamentals/04-conditional-constructs/',
                    '/b-fundamentals/05-loops/',
                    '/b-fundamentals/06-arrays/',
                    '/b-fundamentals/07-enums/',
                    '/b-fundamentals/08-functions/',
                ]
            },
            {
                title: 'Object Oriented Thinking', // required
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/c-object-oriented-thinking/',
                    '/c-object-oriented-thinking/01-abstraction/',
                    '/c-object-oriented-thinking/02-all_about_objects/',
                ]
            },
            {
                title: 'Object Oriented Programming', // required
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/d-object-oriented-programming/01-using-objects/',
                    '/d-object-oriented-programming/02-creating-classes/',
                    '/d-object-oriented-programming/03-constructors/',
                    '/d-object-oriented-programming/04-composition/',
                    // '/d-object-oriented-programming/05-destructors/',
                    // TODO - Refactor !! '/d-object-oriented-programming/06-structs/',
                ]
            },
            {
                title: 'Compiling and Linking', // required
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/e-compiling-and-linking/01-the-compilation-process/',
                    '/e-compiling-and-linking/02-makefiles/',
                    // TODO - Refactor !! '/e-compiling-and-linking/03-libraries/'
                ]
            },
            {
                title: 'More Advanced C++', // required
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    // '/f-more-advanced-cpp/01-references/',
                    '/f-more-advanced-cpp/01-pointers/',
                    '/f-more-advanced-cpp/02-dynamic-memory-allocation/',
                    '/f-more-advanced-cpp/03-exceptions/',
                    '/f-more-advanced-cpp/04-file-streams/',
                    // '/f-more-advanced-cpp/05-standard-templating-libraries/',
                    // '/f-more-advanced-cpp/06-smart-pointers/',
                ]
            },
            {
                title: 'Inheritance', // required
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/g-inheritance/01-basic-inheritance/',
                    '/g-inheritance/02-polymorphism/',
                    '/g-inheritance/03-abstract-methods-classes-interfaces/',
                    // '/g-inheritance/04-multiple-inheritance/'
                ]
            },
            {
               title: 'Mental Topics',   // required
               // path: '/foo/',      // optional, which should be a absolute path.
               collapsable: false, // optional, defaults to true
               sidebarDepth: 1,    // optional, defaults to 1
               children: [
                   '/h-mental-topics/01-operator-overloading/',
            //     '/h-mental-topics/02-threads/',
            //     '/h-mental-topics/03-templating/'
               ]
            },
            // {
            //   title: 'Common Design Patterns',
            //   // path: '/foo/',      // optional, which should be a absolute path.
            //   collapsable: false, // optional, defaults to true
            //   sidebarDepth: 1,    // optional, defaults to 1
            //   children: [
            //     '/w-common-design-patterns/factory-pattern/',
            //     '/w-common-design-patterns/singleton-pattern/',
            //     '/w-common-design-patterns/observer-pattern/',
            //   ]
            // },
            // Not sure about how to call this chapter. Or maybe should be split up.
            //{
            //    title: 'Guides',
            //    // path: '/foo/',      // optional, which should be a absolute path.
            //    collapsable: false, // optional, defaults to true
            //    sidebarDepth: 1, // optional, defaults to 1
            //    children: [
                    // '/x-guides/linked-lists/',
                    // '/x-guides/json/',
                    // TODO - Refactor !! '/x-guides/mqtt/',
                    // '/x-guides/generating-documentation/',
                    // '/x-guides/cross-compiling-for-rpi/',
                    // '/x-guides/remote-debugging/',
            //    ]
            //},
            //{
            //    title: 'Example Apps',
            // path: '/foo/',      // optional, which should be a absolute path.
            //  collapsable: false, // optional, defaults to true
            //sidebarDepth: 1, // optional, defaults to 1
            //children: [
            // ['https://github.com/LudovicEspeel/course-object-oriented-programming-with-cpp-examples/word-blaster-solution', 'Word Blaster'],
            //]
            //},
            {
                title: 'Standard Library',
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    '/y-standard-library/std-vector/'
                ]
            },
            {
                title: 'References',
                // path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                    // '/z-reference/keyword-overview/',
                    ['https://www.stroustrup.com/bs_faq2.html', 'Bjarne Stroustrups C++ Style and Technique FAQ']
                ]
            },
        ],
        sidebarDepth: 1,
        repo: 'LudovicEspeel/course-object-oriented-programming-with-cpp',
        docsDir: 'docs',
        docsBranch: 'master',
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true
    },
    markdown: {
        lineNumbers: true,
    },
    serviceWorker: true,
    plugins: [
        ['vuepress-plugin-zooming', {
            // selector for images that you want to be zoomable
            selector: 'img', // default: '.content img'
            options: {
                bgColor: 'black',
                zIndex: 10000,
            },
        }],
        ['container', {
            type: 'output',
            defaultTitle: 'Output',
        }],
        ['container', {
            type: 'definition',
            defaultTitle: 'Definition',
        }],
        ['container', {
            type: 'kata',
            defaultTitle: 'Code Kata',
        }],
        ['container', {
            type: 'question',
            defaultTitle: 'Question',
        }],
        ['container', {
            type: 'insight',
            defaultTitle: 'Key insight',
        }],
        ['vuepress-plugin-code-copy', {
            // selector: String,
            align: 'bottom',
            // color: '#DC322F',
            // backgroundTransition: Boolean,
            // backgroundColor: String,
            // successText: String,
            staticIcon: true,
        }],
        ['@snowdog/vuepress-plugin-pdf-export', {
            puppeteerLaunchOptions: {
              args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
        }],
    ],
}