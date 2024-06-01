/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Jing Tech',
  author: 'JingHuang Su',
  position: 'Software Engineer',
  headerTitle: 'v2.jing-tech.me',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-US',
  locale: 'en-US',
  theme: 'light', // system, dark or light
  siteUrl: 'https://en.jing-tech.me',
  siteRepo: 'https://github.com/jingsu96/en.jing-tech.me',
  siteLogo: '/static/images/logo.jpeg',
  socialBanner: '/static/images/logo.jpeg',
  email: 'jing.tech.tw@gmail.com',
  github: 'https://github.com/jingsu96/',
  twitter: 'https://twitter.com/Jing19794341',
  linkedin: 'https://www.linkedin.com/in/jinghuang-su/',
  buymeacoffee: 'https://www.buymeacoffee.com/jingtech',
  instagram: 'https://www.instagram.com/jing.tech/',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // umamiAnalytics: {
    // We use an env variable for this site to avoid other users cloning our analytics ID
    // umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    // You may also need to overwrite the script if you're storing data in the US - ex:
    // src: 'https://us.umami.is/script.js'
    // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'G-4GL5XYYCX2', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    // provider: 'kbar', // kbar or algolia
    // kbarConfig: {
    //   searchDocumentsPath: 'search.json', // path to load documents to search
    // },
    provider: 'algolia',
    algoliaConfig: {
      // The application ID provided by Algolia
      appId: '0LLTNLCZEX',
      // Public API key: it is safe to commit it
      apiKey: '1a50969226d205e23f742d9e6f7effe9',
      indexName: 'v2-jing-tech',
    },
  },
};

module.exports = siteMetadata;
