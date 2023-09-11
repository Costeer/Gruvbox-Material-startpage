let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Hannover, Lower Saxony',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "Whatsapp",
            url: "https://web.whatsapp.com/",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/home",
          },
          {
            name: "Reddit",
            url: "https://www.reddit.com/",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "Chess",
            url: "https://www.chess.com/home",
          },
          {
            name: "Monkeytype",
            url: "https://monkeytype.com/",
          },
          {
            name: "Tetris",
            url: "https://tetris.com/",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "Youtube",
            url: "https://www.youtube.com/",
          },
          {
            name: "Hurawatch",
            url: "https://hurawatch.at/home",
          },
        ],
      }],
    },
    {
      name: "Design",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "Pinterest",
              url: "https://www.pinterest.es/",
            },
            {
              name: "Artstation",
              url: "https://www.artstation.com/?sort_by=community",
            },
            {
              name: "Leonardo Ai",
              url: "https://app.leonardo.ai/",
            },
            {
              name: "Dribble",
              url: "https://dribbble.com/following",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "Figma",
              url: "https://www.figma.com",
            },
            {
              name: "Uxpro",
              url: "https://uxpro.cc/",
            },
            {
              name: "Colorhunt",
              url: "https://colorhunt.co/",
            },
            {
              name: "Adobe Color",
              url: "https://color.adobe.com/es/create/color-wheel",
            },
            {
              name: "Terminalsexy",
              url: "https://terminal.sexy",
            },
          ],
        },
        {
          name: "Resources 3d",
          links: [
            {
              name: "Thingiverse",
              url: "https://www.thingiverse.com/",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Repositories",
          links: [
            {
              name: "Github",
              url: "https://github.com/",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "Phind",
              url: "https://www.phind.com/",
            },
            {
              name: "Flutter",
              url: "https://docs.flutter.dev/ui",
            },
            {
              name: "Vscode",
              url: "https://vscode.dev/",
            },
          ],
        },
      ],
    },
    {
      name: "Myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Mails",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/",
            },
          ],
        },
        {
          name: "Storage",
          links: [
            {
              name: "Drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
            },
            {
              name: "Dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
            },
            {
              name: "Fotos",
              url: "https://photos.google.com/u/1",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
