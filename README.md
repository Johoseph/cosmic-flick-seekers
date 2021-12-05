# 🚀 Cosmic Flick Seekers 🚀

Comsic Flick Seekers (CFS) is a 2021 Advent Calendar that was made specially for my partner Flick. The concept draws inspiration from the [album artwork](https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Cosmic_Thrill_Seekers_Collage_Final_ektulh/prince-daddy-and-the-hyena-cosmic-thrill-seekers-album-stream-premiere-interview.jpg) for Prince Daddy and The Hyena's second studio album [Cosmic Thrill Seekers](https://princedaddyandthehyena.bandcamp.com/album/cosmic-thrill-seekers). This project is the successor to the [Advent Gifmas](https://github.com/Johoseph/advent-gifmas) calendar that was made for the 2020 season and has been made with [Vue](https://vuejs.org/).

![image](https://user-images.githubusercontent.com/49534136/144743426-ef069023-b7c5-47a0-93fd-2945c602f802.png)

## How does it work?

The concept for this calendar is simple - each day of Advent a new image is added to the collage; the collage is gradually built over the 24 days of Advent. In addition to this, each image can be clicked to play a song that (somewhat) correlates to the image for that day - so the calendar is a combination of a **collage** AND **mixtape**.

## Usage

Due to the copyrighted songs the project uses, CFS has NOT been deployed to the web, nor have the songs been committed to this repository. If you would like to have a look at the project, you can clone the repo and get setup by installing (`yarn install`) the code. Before running (`yarn dev`) the code, you will want to add a `.env` file to the root of the repository with the following configuration:

| Configuration Key       | Value | Purpose                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------- | :---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VUE_APP_IGNORE_DATES    |  `1`  | Enabling this ignores the date constraints of the project - i.e. you can see ALL of the collage before the 24th of December.                                                                                                                                                                                                                                              |
| VUE_APP_DISABLE_LOADING |  `1`  | When first accessing the web page, a welcome screen is shown to allow all the calendar assets to be fully loaded. This can quickly become irritating when developing locally with hot-reload. Set this value to `1` to disable the welcome screen.                                                                                                                        |
| VUE_APP_EXAMPLE_SONGS   |  `1`  | By default, this project looks for files `1.mp3` ➡ `24.mp3` within the [`assets/songs`](https://github.com/Johoseph/cosmic-flick-seekers/tree/main/src/assets/songs) directory. As mentioned above, these have been 'git ignored' due to copyright. This config option tells the app to use example sounds that HAVE been committed rather than the numbered `mp3` files. |

## Project Reflections 🤔

This project was my first time working with [Vue](https://vuejs.org/), and as someone who predominately works within the React ecosystem, I really like the framework. I didn't read any Vue documentation before starting development, so I was glad to find a lot of React hook equivalents within the framework (i.e. specifying a `watch` key is similar to using the `useEffect` hook, or using the `provide` and `inject` keys instead of the `useContext` hook). I also love the `template`, `script`, `style` organisation of `.vue` files - this gives anyone with a basic understanding of web development an entrypoint into the framework as these tags are already familiar/recognisable concepts.

Looking at the code and project more generally, I am very pleased with the end result. Not only does the collage look really good but the code works fully as intended. For more details, I have included retrospective-style 'what went well' and 'what could be improved' lists below.

### What was done well? 💪

- **Song player** - The song player component was enabled by the [howlerjs](https://github.com/goldfire/howler.js/) library, which handles the loading, playing and caching of the songs. I was able to wrap a lot of the howlerjs methods in custom functions to enable looping, shuffling and moving back/forth through the songs (see the `methods` within the [App.vue](https://github.com/Johoseph/cosmic-flick-seekers/blob/main/src/App.vue) component).
- **Image hover implementation** - One of the most important features of CFS is the ability to click an image to play the song associated with that day. The problem I was challenged with here is that the images used within the collage are all partially _transparent_. If I were to simply use a HTML `image` element on its own, the mouse events bound to that image (responsible for playing the associated song) would still fire even if a user clicked on the transparent portion of that image - this does not make sense and would be undesirable.

  The solution here was to overlay the entirety of the collage with an `svg`, which contains `path` elements that 'outline' each specific image within the collage. The effect this has is very similar to using an [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) tags, however I found that I could more easily export svg paths from [Photopea](https://www.photopea.com/) (where I was doing the design work for the collage) rather than manually creating `<area>` tags for each image. The mouse events for playing songs where then bound to these svg paths instead of the images, so now clicking on a transparent section of an image has no effect 🎉

- **Motion within the app** - Tranisitions and motion have been used to enrich the overall experience of using the calendar. Checkout the [`handleMouseMove`](https://github.com/Johoseph/cosmic-flick-seekers/blob/main/src/components/Canvas.vue#L73) method which is responsible for moving the background in the direction of the mouse, while moving the collage in the opposite direction of the mouse - this simple effect makes playing with the calendar more enjoyable and really engages a user's curiosity.

### What can I improve upon next time? 🐛

- **More consistency with styling** - Styling within the project is very inconsistent - you'll quickly see a mixture of the native style tag, scoped vue styles and [tailwind](https://tailwindcss.com/) style classes all on the same component. While this may not directly affect performance, the lack of a standard would make it harder for another developer to jump on and effectively contribute to this project.

  These styling inconsistencies stemmed from the time crunch I was under to finish the project (before the commencement of Advent), combined with my lack of tailwind configuration knowledge. This was my first time using tailwind css, so rather than worrying about configuration, I decided it was much easier for me to slap styles natively on elements when I could not find the appropriate tailwind class. Next time I think it would be wise to invest more time in defining a styling standard before jumping into a project.

- **Svg icon importing** - Currently the `svg` icons used for the Info and Song Player menus have been included inline in their respective components. This is okay for this project, as these icons are only needed in one place. If I were to build a larger-scale project in Vue, I would investigate the [vue-svg-loader](https://vue-svg-loader.js.org/) library to enable storing these svgs in separate files to be imported as required.

## Interested in the music? 🎵

If you would like to listen to actual mixtape used in the calendar, I have created a [YouTube playlist](https://www.youtube.com/playlist?list=PL_tmX_pFmjJ7xJlG57HicPsvTcypd5oDb) that contains all the songs in calendar order. Let me know what you think of my selections 🤘
