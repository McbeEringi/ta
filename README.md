# TA.js
A super tiny textarea code editor  
![](img/icon.svg)
## features
- Auto height
- Tab insert
- Auto bracket
- Auto indent
## usage
### methods
- **TA.ah( *HTMLTextAreaElement* ) -> *HTMLTextAreaElement*.style.height**  
	updates textarea height according to the content.
- **TA.sizer( *HTMLTextAreaElement* ) -> undefined**  
	adds TA.ah() to input eventlistner and execute instant.  
	use this if you only need auto height feature. 
- **TA.editor( *HTMLTextAreaElement* ) -> undefined**  
	setup the editor. TA.sizer() also executed.
### properties
- **TA.brkt=['()','{}','[]','「」','『』']**  
	defines bracket pairs.
- **TA.quot=['\'','"','`']**  
	defines quotations.
## LICENSE
MIT License. see [LICENSE](LICENSE)  
