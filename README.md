# The Pie Factory Web Application
## Objective
The purpose of this project was to use React to build a SPA for a Houston wholesale pie/dessert distributor. 

## Lessons Learned
 - For the gallery, we can minimize the number of import statements needed to bring in the photos by creating an index.js in the /img folder which places all of the import/export statements in a single file. We can then import the images we need in a single line under the Component file using: import { imgName1, imgName2, ... } from './img'
 - React does not like defining properties within an export statement. This is most likely due to memory needing to be allocated for the property values prior to exporting.
 - To improve scalability, consider using Amazon S3 API (ListObjects) to retrieve additional images from server. Currently we have all images stored locally under public/img folder