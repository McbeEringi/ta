# TA.js
A super tiny textarea code editor  
![icon](img/icon.svg)
## features
- Auto height
- Tab insert
- Auto bracket
- Auto indent
## TA+.js
Ther is also module version with ranged indent feature.
## usage
### methods
- **TA.ah( *HTMLTextAreaElement* ) -> undefined**  
	updates textarea height according to the content.
- **TA.sizer( *HTMLTextAreaElement* ) -> undefined**  
	adds TA.ah() to input eventlistner and execute instant.  
	use this if you only need auto height feature.
- **TA.editor( *HTMLTextAreaElement* ) -> undefined**  
	setup the editor. TA.sizer() also executed.
### properties
- **TA.brkt=['()','{}','[]','\'','"','`']**  
	defines bracket pairs and quotations.
## LICENSE
MIT License. see [LICENSE](LICENSE)