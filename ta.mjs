export default{
	brkt:['()','{}','[]',...'\'"`'],
	ah(w){Object.assign(w.style,{boxSizing:'border-box',transition:'height 0s',marginBottom:w.style.height,height:''}).height=w.offsetHeight+w.scrollHeight-w.clientHeight+1+'px';w.style.marginBottom='';},
	sizer(w){this.ah(w);w.addEventListener('input',_=>this.ah(w));},
	editor(w){this.sizer(w);w.addEventListener('keydown',(
		e,_,{selectionStart:S,selectionEnd:E,value:V}=w,ZS=V.slice(0,S),SE=V.slice(S,E),DP,P=_=>e.preventDefault(DP=1),I=(x,y,z=y,s=S)=>(x!==0&&(w.value=V.slice(0,s)+x+V.slice(E)),w.selectionStart=y,w.selectionEnd=z),
		D=_=>S==E&&this.brkt.map(x=>x.length<2?x+x:x).includes(V.slice(S-1,E+1))&&I(0,S-1,E+1),C=x=>w.addEventListener('input',_=>I(0,S+1,E+1),{once:1},I(SE+x,S))
	)=>(e.isComposing||e.metaKey||e.ctrlKey||e.altKey)||(_={
			Backspace:D,Delete:D,Escape:_=>w.blur(),Tab:(i=0,j=0,LS=ZS.lastIndexOf('\n')+1)=>P()||S==E&&!e.shiftKey?I('	',S+1):I(V.slice(LS,E).replace(/^([	]*)/gm,(_,x,k)=>(e.shiftKey?x?x.slice(0,-1,k||(i--),j--):x:(k||(i++),j++,x+'	'))),S+i,E+j,LS),
			Enter:(s='\n'+ZS.match(/([	 ]*).*$/)[1]+(this.brkt.some(x=>V[S-1]==x[0])?'	':''))=>I(s,S+s.length,P()),...Object.fromEntries(this.brkt.flatMap(x=>x[1]?[[x[0],_=>C(x[1])],[x[1],_=>V[S]==x[1]&&I(0,S+1,P())]]:[[x,[_=>C(x),,_=>I(0,S+1,P())]['0212'[((V[S]==x)+(V[S-1]==x)*2)*(S==E)]]]]))
		}[e.key],_&&_(),DP&&this.ah(w))
	);}
};