import{h as j,r as _,o as q,b0 as K,i as I,x as e,t as l,aw as X,au as Y,y as a,az as Z,bo as J,A as W,H as i,C as ee,q as g,aY as te,bZ as le,ax as ae,ay as ne,aH as se,aI as oe,L as P,aC as re,aD as ie,aE as de,at as ue,E as m,ae as A,av as me,j as c,p as C,aK as ce,l as pe,bQ as fe,bP as _e,aX as ge}from"./vendor-BxNawP4f.js";import{_ as ve}from"./index-DyxCg8e9.js";const ye={class:"monitor-container"},we={class:"card-header"},he={class:"resource-metrics"},be={class:"metric-item"},Ce={class:"metric-item"},ke={class:"metric-item"},xe={class:"metric-item"},Ee={class:"card-header"},Ae={class:"card-header"},Me={class:"card-header"},Te=j({__name:"monitor",setup(ze){const o=_({cpu:45,memory:68,disk:72,network:35}),p=_([{id:1,username:"admin",ip:"192.168.1.100",loginTime:"2024-03-08 14:30:00"},{id:2,username:"user1",ip:"192.168.1.101",loginTime:"2024-03-08 15:00:00"}]),M=_([{id:1,level:"error",type:"danger",time:"2024-03-08 15:30:00",message:"CPU使用率超过90%"},{id:2,level:"warning",type:"warning",time:"2024-03-08 15:25:00",message:"内存使用率超过80%"},{id:3,level:"info",type:"info",time:"2024-03-08 15:20:00",message:"系统自动清理了过期日志"}]),T=_("1h"),k=_(null);let r=null,d=null;const v=n=>n<60?"#67C23A":n<80?"#E6A23C":"#F56C6C",S=n=>{switch(n){case"error":return"#F56C6C";case"warning":return"#E6A23C";default:return"#909399"}},U=n=>({"alert-icon":!0,"is-error":n==="error","is-warning":n==="warning","is-info":n==="info"}),x=()=>{o.value={cpu:Math.floor(Math.random()*100),memory:Math.floor(Math.random()*100),disk:Math.floor(Math.random()*100),network:Math.floor(Math.random()*100)}},L=()=>{d?(window.clearInterval(d),d=null,m.info("已停止自动刷新")):(d=window.setInterval(x,5e3),m.success("已开启自动刷新（5秒）"))},V=n=>{A.confirm(`确定要将用户 ${n.username} 强制下线吗？`,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{p.value=p.value.filter(t=>t.id!==n.id),m.success(`已将用户 ${n.username} 强制下线`)})},F=()=>{A.confirm("确定要将所有用户强制下线吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{p.value=[],m.success("已将所有用户强制下线")})},Q=()=>{m.success("已确认所有告警")},R=()=>{A.confirm("确定要清空所有告警记录吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{M.value=[],m.success("已清空所有告警")})},$=()=>{if(!k.value)return;r=me(k.value);const n={title:{text:"系统性能趋势"},tooltip:{trigger:"axis"},legend:{data:["响应时间","QPS","错误率"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:Array.from({length:24},(t,f)=>`${f}:00`)},yAxis:[{type:"value",name:"响应时间(ms)"},{type:"value",name:"QPS/错误率",splitLine:{show:!1}}],series:[{name:"响应时间",type:"line",data:Array.from({length:24},()=>Math.floor(Math.random()*500))},{name:"QPS",type:"line",yAxisIndex:1,data:Array.from({length:24},()=>Math.floor(Math.random()*1e3))},{name:"错误率",type:"line",yAxisIndex:1,data:Array.from({length:24},()=>(Math.random()*2).toFixed(2))}]};r.setOption(n)},z=()=>{r==null||r.resize()};return q(()=>{x(),$(),window.addEventListener("resize",z)}),K(()=>{d&&window.clearInterval(d),window.removeEventListener("resize",z),r==null||r.dispose()}),(n,t)=>{const f=ee,u=W,B=J,y=Z,w=Y,h=X,E=ne,D=ae,b=oe,N=se,G=ce,H=re,O=ue;return c(),I("div",ye,[e(O,{gutter:20},{default:l(()=>[e(h,{xs:24,lg:12},{default:l(()=>[e(w,{class:"mb-4"},{header:l(()=>[a("div",we,[t[3]||(t[3]=a("span",null,"系统资源监控",-1)),e(B,null,{default:l(()=>[e(u,{type:"primary",size:"small",onClick:x},{default:l(()=>[e(f,null,{default:l(()=>[e(g(te))]),_:1}),t[1]||(t[1]=i(" 刷新 "))]),_:1}),e(u,{type:"success",size:"small",onClick:L},{default:l(()=>[e(f,null,{default:l(()=>[e(g(le))]),_:1}),t[2]||(t[2]=i(" 自动刷新 "))]),_:1})]),_:1})])]),default:l(()=>[a("div",he,[a("div",be,[t[4]||(t[4]=a("span",{class:"metric-label"},"CPU使用率",-1)),e(y,{percentage:o.value.cpu,color:v(o.value.cpu)},null,8,["percentage","color"])]),a("div",Ce,[t[5]||(t[5]=a("span",{class:"metric-label"},"内存使用率",-1)),e(y,{percentage:o.value.memory,color:v(o.value.memory)},null,8,["percentage","color"])]),a("div",ke,[t[6]||(t[6]=a("span",{class:"metric-label"},"磁盘使用率",-1)),e(y,{percentage:o.value.disk,color:v(o.value.disk)},null,8,["percentage","color"])]),a("div",xe,[t[7]||(t[7]=a("span",{class:"metric-label"},"网络带宽使用率",-1)),e(y,{percentage:o.value.network,color:v(o.value.network)},null,8,["percentage","color"])])])]),_:1})]),_:1}),e(h,{xs:24,lg:12},{default:l(()=>[e(w,{class:"mb-4"},{header:l(()=>[a("div",Ee,[t[8]||(t[8]=a("span",null,"应用性能监控",-1)),e(D,{modelValue:T.value,"onUpdate:modelValue":t[0]||(t[0]=s=>T.value=s),size:"small"},{default:l(()=>[e(E,{label:"最近1小时",value:"1h"}),e(E,{label:"最近6小时",value:"6h"}),e(E,{label:"最近24小时",value:"24h"})]),_:1},8,["modelValue"])])]),default:l(()=>[a("div",{ref_key:"performanceChart",ref:k,class:"performance-chart"},null,512)]),_:1})]),_:1}),e(h,{xs:24,lg:12},{default:l(()=>[e(w,{class:"mb-4"},{header:l(()=>[a("div",Ae,[a("span",null,"在线用户 ("+P(p.value.length)+")",1),e(u,{type:"danger",size:"small",onClick:F},{default:l(()=>t[9]||(t[9]=[i(" 强制下线 ")])),_:1})])]),default:l(()=>[e(N,{data:p.value,style:{width:"100%"},height:"350"},{default:l(()=>[e(b,{prop:"username",label:"用户名"}),e(b,{prop:"ip",label:"IP地址"}),e(b,{prop:"loginTime",label:"登录时间"}),e(b,{label:"操作",width:"100"},{default:l(s=>[e(u,{type:"danger",size:"small",onClick:Be=>V(s.row)},{default:l(()=>t[10]||(t[10]=[i(" 下线 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1}),e(h,{xs:24,lg:12},{default:l(()=>[e(w,null,{header:l(()=>[a("div",Me,[t[13]||(t[13]=a("span",null,"系统告警",-1)),e(B,null,{default:l(()=>[e(u,{type:"primary",size:"small",onClick:Q},{default:l(()=>t[11]||(t[11]=[i(" 全部确认 ")])),_:1}),e(u,{type:"danger",size:"small",onClick:R},{default:l(()=>t[12]||(t[12]=[i(" 清空 ")])),_:1})]),_:1})])]),default:l(()=>[e(H,null,{default:l(()=>[(c(!0),I(ie,null,de(M.value,s=>(c(),C(G,{key:s.id,type:s.type,timestamp:s.time,color:S(s.level)},{dot:l(()=>[e(f,{class:pe(U(s.level))},{default:l(()=>[s.level==="error"?(c(),C(g(fe),{key:0})):s.level==="warning"?(c(),C(g(_e),{key:1})):(c(),C(g(ge),{key:2}))]),_:2},1032,["class"])]),default:l(()=>[i(P(s.message)+" ",1)]),_:2},1032,["type","timestamp","color"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Se=ve(Te,[["__scopeId","data-v-ff28655a"]]);export{Se as default};
