# John Paul Mina — Portfolio

A static, no-build portfolio site (plain HTML/CSS/JS). All the content you'll
want to change day-to-day — work, projects, and gallery images — lives in one
file: `js/portfolio-data.js`.

## Project structure

```
index.html            Home page
about/index.html       About page
contact/index.html     Contact page
work/index.html        "Work" grid (client/brand projects)
projects/index.html    "Projects" grid (concept projects)
work/project/          Work detail page template (reads ?slug=... from the URL)
projects/project/       Project detail page template (reads ?slug=... from the URL)
css/style.css           All styling
js/portfolio-data.js    ALL work + project content (edit this to add/change entries)
js/portfolio-list.js    Renders the grid cards on work/, projects/, and detail pages
js/project-page.js      Renders a single project's detail page
js/site.js              Theme toggle, mobile menu, contact form submit
assets/work/<folder>/   Images for each "work" entry
assets/projects/<folder>/  Images for each "projects" entry
```

The detail pages (`work/project/` and `projects/project/`) are single
templates shared by every entry — you never create a new HTML page per
project. The right content is loaded based on the `slug` in the URL.

## How to add a new "Work" entry

1. Create a folder for the images, e.g. `assets/work/my-new-client/`, and add
   your images there (e.g. `cover.png`, `01.png`, `02.png`, ...).
2. Open `js/portfolio-data.js` and add a new object to the `work` array:

   ```js
   {
     title: "My New Client",
     category: "Branding",
     scope: "Visual identity, packaging",
     summary: "Short overview of the project.",
     cover: "/assets/work/my-new-client/cover.png",
     gallery: [
       { src: "/assets/work/my-new-client/01.png", alt: "Campaign artwork" },
       { src: "/assets/work/my-new-client/02.png", alt: "Campaign artwork" },
     ],
   },
   ```

3. Save the file. The card appears automatically on `work/` and the detail
   page works automatically at `work/project/?slug=my-new-client`.

   The `slug` (used in the URL) is generated automatically from the title.
   If your title contains characters that don't slugify cleanly (like `&`),
   add an explicit `slug: "my-slug"` field, matching the folder name.

## How to add a new "Project" (concept work)

Projects use numbered images (`cover.ext`, `01.ext`, `02.ext`, ...), so you
only need to describe the folder and count — the gallery is generated for
you.

1. Create `assets/projects/my-new-project/` and add `cover.png` (or `.jpg`),
   then `01.png`, `02.png`, etc.
2. Open `js/portfolio-data.js` and add an entry to the `projectSpecs` array:

   ```js
   { title: "My New Project", folder: "my-new-project", extension: "png", count: 5 },
   ```

   `count` is the number of numbered images (not including the cover).
3. Save. The card and detail page are generated automatically.

## How to edit an entry

Find the entry (in `work` or `projectSpecs`) in `js/portfolio-data.js` and
change any field — `title`, `category`, `scope`, `summary`, `cover`, or the
`gallery`/`count`. Changes appear immediately on refresh (no build step).

## How to delete an entry

Delete its object from the `work` array (or its line from `projectSpecs`) in
`js/portfolio-data.js`. Optionally also delete its image folder under
`assets/work/` or `assets/projects/` to free up space.

## Using the site

- **Navigation**: top nav links to Work, Projects, About, Resume, and the
  logo returns home. The hamburger menu (small screens) toggles the "More
  pages" links.
- **Theme toggle**: switches between light/dark; the choice is remembered
  via `localStorage`.
- **Contact form**: submits to Formsubmit.co (see `contact/index.html`
  `action` attribute) and shows a success message in place of the form.
- **No build step**: this is plain HTML/CSS/JS — just open `index.html` in a
  browser or serve the folder with any static file server (e.g.
  `npx serve .`). There is nothing to compile.
