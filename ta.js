const TA={
	brkt:['()','{}','[]',...'\'"`'],
	ah(x){Object.assign(x.style,{boxSizing:'border-box',marginBottom:x.style.height,height:''}).height=x.offsetHeight+x.scrollHeight-x.clientHeight+'px';x.style.marginBottom='';},
	sizer(x){TA.ah(x);x.addEventListener('input',()=>TA.ah(x));},
	editor(x){TA.sizer(x);x.addEventListener('keydown',e=>{if(!e.isComposing){
		const{selectionStart:S,selectionEnd:E,value:V}=x,P=()=>e.preventDefault(),C=(y,z=y)=>{x.selectionStart=y;x.selectionEnd=z;},
			I=y=>{x.value=V.slice(0,S)+y+V.slice(E);},D=()=>{if(S==E&&(TA.brkt.includes(V.slice(S-1,S+1))||(V[S-1]==V[S]&&TA.brkt.includes(V[S]))))C(S-1,E+1);};
		(({
			Tab(){C(S+1,I('	',P()));},Backspace:D,Dete:D,Enter(){const s='\n'+V.slice(0,S).match(/([	 ]*).*$/)[1]+(TA.brkt.some(y=>V[S-1]==y[0])?'	':'');C(S+s.length,I(s,P()));},
			...Object.fromEntries(TA.brkt.flatMap(y=>y[1]?[[y[0],()=>C(S,I(V.slice(S,E)+y[1]))],[y[1],()=>{if(V[S]==y[1])C(S+1,P());}]]:[[y,()=>{if(V[S]==y)C(S+1,P());if(V[S-1]!=y)C(S,I(V.slice(S,E)+y));}]]))
		})[e.key]||Array)();if(e.defaultPrevented)TA.ah(x);
	}});}
};
