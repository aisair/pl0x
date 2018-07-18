pl0x -- An osu!mania arrow skin.
Thread Link: https://osu.ppy.sh/community/forums/topics/619322

The Skin Includes:
	- Noteskin styles and variants (Primarily an arrow skin).
	- Standard Assets
	
--------------------------------------------------------------

To develop with this, pull it and create a symlink of "pl0x" to osu!'s skin directory.

--------------------------------------------------------------

"Legacy" contains older skin files before this repository's creation.  
"pl0x-source" contains source files of the skin assets.  
"pl0x" is the actual skin.  
"Staging" is a folder provided to setup the main download zip for the skin.
"Forum" contains all information and image assets relating to the respective forum post.  
"ExportPipeline" contains files and scripts to supersample and compress exports from Adobe Illustrator.(This is due to AI's poor render pipeline)    
"variants" contains all the different variants that can be used interchangably within the skin.  

--------------------------------------------------------------

How to manage export workflow with Adobe Illustator files:
	
	Need: NodeJS installed

	1. Export at 16x resolution with suffix "_16x" into ExportPipeline/assets
	2. Run "do work.bat"
	3. Finished files will be in the "done" folder

--------------------------------------------------------------	
	
I am not an author or creator of:

OptiPNG (http://optipng.sourceforge.net/)  
ImageMagick (https://www.imagemagick.org)  
NodeJS (https://nodejs.org/)  

--------------------------------------------------------------