# The Pie Factory Web Application
## Objective
The purpose of this project was to use React to build a SPA for a Houston wholesale pie/dessert distributor. 

## Lessons Learned
### General
- For the gallery, we can minimize the number of import statements needed to bring in the photos by creating an index.js in the /img folder which places all of our img paths in a single file. We can then import the images we need in the Component file
- React does not like defining properties within an export statement. This is most likely due to memory needing to be allocated for the property values prior to exporting. So under /img/index.js, we pre-define each dessert list as an array prior to exporting. We then use object destructuring to iterate over the array in our component file.
- To improve scalability, consider using Amazon S3 API (ListObjects) to retrieve additional images from a database. Currently we have all images stored locally under public/img folder

### Styles
- To create an image that zooms in on hover, but maintains dimensions:
    - Wrap image in div and set div dimensions (via grid or manually)  
    - Set overflow: hidden and transition: transform 0.3s
    - Set nested img property transform: scale(1.15)






### Terminology
- A Lightbox popup is a window overlay that appears on top of a webpage. When popup appears, the background is often dimmed and disabled - usually used for expanding images in a gallery
- Accordian is an expandable/collapsable menu bar that can show/hide text or other content: see FAQs section 

