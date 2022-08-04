const TA={
	brkt:['()','{}','[]',...'\'"`'],
	ah(w){Object.assign(w.style,{boxSizing:'border-box',marginBottom:w.style.height,height:''}).height=w.offsetHeight+w.scrollHeight-w.clientHeight+1+'px';w.style.marginBottom='';},
	sizer(w){TA.ah(w);w.addEventListener('input',_=>TA.ah(w));},
	editor(w){TA.sizer(w);w.addEventListener('keydown',(e,{selectionStart:S,selectionEnd:E,value:V}=w,DP,P=_=>e.preventDefault(DP=1),I=(x,y,z=y)=>(x&&(w.value=V.slice(0,S)+x+V.slice(E)),w.selectionStart=y,w.selectionEnd=z),D=_=>S==E&&(this.brkt.includes(V.slice(S-1,S+1))||(V[S-1]==V[S]&&this.brkt.includes(V[S])))&&I(0,S-1,E+1))=>e.isComposing||(
		(({
			Backspace:D,Delete:D,Tab:_=>I('	',S+1,P()),Enter:(s='\n'+V.slice(0,S).match(/([	 ]*).*$/)[1]+(TA.brkt.some(y=>V[S-1]==y[0])?'	':''))=>I(s,S+s.length,P()),
			...Object.fromEntries(TA.brkt.flatMap(x=>x[1]?[[x[0],_=>I(V.slice(S,E)+x[1],S)],[x[1],_=>V[S]==x[1]&&I(0,S+1,P())]]:[[x,_=>(V[S]==x&&I(0,S+1,P()),V[S-1]!=x&&I(V.slice(S,E)+x,S))]]))
		})[e.key]||Array)(),DP&&TA.ah(w)
	));}
};