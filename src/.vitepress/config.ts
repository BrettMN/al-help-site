import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accursed Lands Help",
  description: "Help site for the Accursed Lands MUD",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/al-help-site/',  // change this to repo name or the path where the site will be hosted
  themeConfig: {
    logo: '/al-icon.png',


    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mudlet UI', link: '/gui/' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Accursed Lands Mudlet User Interface',
        items: [
          { text: 'Getting Started', link: '/gui/' },
          { text: 'Map, Room Info, and Character Info', link: '/gui/left-side-bar/' },
          { text: 'Hunger, Thirst, Fatigue, Posture, Mercy, Travel, Common Sense, and Help', link: '/gui/menu-bar/' },
          { text: 'Styles, Survey, and Chat', link: '/gui/right-side-bar/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {

    }
  }
})
