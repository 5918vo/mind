import{E as n,C as c,I as f,b as m}from"./index-a485f522-1712150424140.js";import{d,b as p,R as _,p as u,s as v,A as b,f as r,n as i,_ as M}from"./index-1712150424140.js";const g={class:"app-page"},k=d({__name:"Preview",setup(w){const{selections:l}=m();let{proxy:a}=p();return _(()=>l.pen,e=>{if(e){let{events:o}=e;o&&o.some(t=>{switch(t.action){case 7:switch(t.value){case"l-dialog":meta2d.on(t.value,s=>{a.$refs.commonModal&&(Object.assign(a.$refs.commonModal,{visible:!0,title:"自定义弹窗"}),i(()=>{a.$refs.commonModal.init(s)}))});break;case"iframe-dialog":meta2d.on(t.value,s=>{a.$refs.iframeModal&&(Object.assign(a.$refs.iframeModal,{visible:!0,title:"展示",url:t.params}),i(()=>{a.$refs.iframeModal.init(s)}))});break}break}})}}),u(()=>{let e=localStorage.getItem("meta2d");e&&(e=JSON.parse(e),e.locked=1,e.rule=!1,meta2d.open(e),meta2d.fitView(!0,24))}),(e,o)=>(v(),b("div",g,[r(n),r(c,{ref:"commonModal"},null,512),r(f,{ref:"iframeModal"},null,512)]))}});const h=M(k,[["__scopeId","data-v-9f84f1b2"]]);export{h as default};
