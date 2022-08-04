export default{
	brkt:['()','{}','[]',...'\'"`'],
	ah(w){Object.assign(w.style,{boxSizing:'border-box',marginBottom:w.style.height,height:''}).height=w.offsetHeight+w.scrollHeight-w.clientHeight+1+'px';w.style.marginBottom='';},
	sizer(w){this.ah(w);w.addEventListener('input',_=>this.ah(w));},
	editor(w){this.sizer(w);w.addEventListener('keydown',(e,{selectionStart:S,selectionEnd:E,value:V}=w,ZS=V.slice(0,S),SE=V.slice(S,E),DP,P=_=>e.preventDefault(DP=1),I=(x,y,z=y,s=S)=>(x!==0&&(w.value=V.slice(0,s)+x+V.slice(E)),w.selectionStart=y,w.selectionEnd=z),D=_=>S==E&&(this.brkt.includes(V.slice(S-1,S+1))||(V[S-1]==V[S]&&this.brkt.includes(V[S])))&&I(0,S-1,E+1),C=(_,x=_=>I(0,S+1,E+1))=>w.addEventListener('input',x,{once:1}))=>
		(e.isComposing||e.metaKey||e.ctrlKey||e.altKey)||((({
			Backspace:D,Delete:D,Tab:(i=0,j=0,LS=ZS.lastIndexOf('\n')+1)=>P()||S==E&&!e.shiftKey?I('	',S+1):I(V.slice(LS,E).replace(/^([	]*)/gm,(_,x,k)=>(e.shiftKey?x?x.slice(0,-1,k||(i--),j--):x:(k||(i++),j++,x+'	'))),S+i,E+j,LS),
			Enter:(s='\n'+ZS.match(/([	 ]*).*$/)[1]+(this.brkt.some(x=>V[S-1]==x[0])?'	':''))=>I(s,S+s.length,P()),...Object.fromEntries(this.brkt.flatMap(x=>x[1]?[[x[0],_=>C(I(SE+x[1],S))],[x[1],_=>V[S]==x[1]&&I(0,S+1,P())]]:[[x,[_=>C(I(SE+x,S)),,_=>I(0,S+1,P())]['0212'[((V[S]==x)+(V[S-1]==x)*2)*(S==E)]]]]))
		})[e.key]||Array)(),DP&&this.ah(w))
	);}
};