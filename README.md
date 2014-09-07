# SCsite

This repository contains the source code for static SlugCam website hosted at
<http://www.SlugCam.com>. Since we were already using Node.js for some other
aspects of the project Wintersmith was chosen as a clean method of building this
static site.

Some custom code is contained in the SCsite_module.js file which is brought into
Wintersmith as the SCsite module. This could later be ported to a plugin, but
works for now :-)

The actual site is fairly simple. Pages directly under the content folder can be
put in the navigation bar by giving them a navOrder in their metadata (which
also will determine their ordering in the navbar). All entries in the
/content/news directory will be displayed on the home page. Like all Wintersmith
content, these can be in the form of json or markdown files.

## Requirements

To build the site requires Wintersmith and Sass (Ruby Sass to be specific).

After Wintersmith and Sass are installed properly, run npm install at the root
of the project then `wintersmith build` or `wintersmith preview`.

## TODO

Add example json and md updates.

Styling of news and nav bar.
