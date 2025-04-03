import{h as F,r as v,o as M,i as g,x as t,t as a,aN as U,aP as q,y as n,aV as P,as as I,aD as b,H as u,A as R,au as j,E as d,j as c}from"./vendor-BxNawP4f.js";import{u as A}from"./notification-DH1Fk0TC.js";import{_ as H}from"./index-DyxCg8e9.js";const T={class:"notification-settings"},z={class:"form-item-tip"},G=F({__name:"settings",setup(J){const V=A(),m=v(),o=v({maxCount:50,expirationDays:7,soundEnabled:!0,desktopNotification:!1,groupByModule:!1,autoCleanup:!0}),N={maxCount:[{required:!0,message:"请设置通知数量限制",trigger:"blur"},{type:"number",min:10,max:100,message:"数量限制必须在10-100之间",trigger:"blur"}],expirationDays:[{required:!0,message:"请设置通知保留天数",trigger:"blur"},{type:"number",min:1,max:30,message:"保留天数必须在1-30之间",trigger:"blur"}]},p=v(!1),r=v(!1),_=()=>{p.value="Notification"in window,p.value&&(r.value=Notification.permission==="granted")},x=async()=>{try{const l=await Notification.requestPermission();r.value=l==="granted",r.value?(o.value.desktopNotification=!0,d.success("授权成功")):d.warning("您拒绝了通知权限")}catch(l){console.error("Failed to request notification permission:",l),d.error("请求授权失败")}},C=l=>{l&&!r.value&&(o.value.desktopNotification=!1,x())},E=async()=>{m.value&&await m.value.validate(async l=>{if(l)try{await V.updateSettings(o.value),d.success("设置已保存")}catch(e){console.error("Failed to save settings:",e),d.error("保存失败")}})},w=()=>{m.value&&m.value.resetFields()},S=async()=>{try{const l=await V.getSettings();o.value={...l}}catch(l){console.error("Failed to load settings:",l),d.error("加载设置失败")}};return M(()=>{_(),S()}),(l,e)=>{const k=P,i=q,f=I,y=R,B=U,D=j;return c(),g("div",T,[t(D,null,{header:a(()=>e[6]||(e[6]=[n("div",{class:"card-header"},[n("span",null,"通知设置")],-1)])),default:a(()=>[t(B,{ref_key:"formRef",ref:m,model:o.value,rules:N,"label-width":"120px"},{default:a(()=>[t(i,{label:"通知数量限制",prop:"maxCount"},{default:a(()=>[t(k,{modelValue:o.value.maxCount,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value.maxCount=s),min:10,max:100,step:10},null,8,["modelValue"]),e[7]||(e[7]=n("div",{class:"form-item-tip"},"超过限制的通知将自动清理",-1))]),_:1}),t(i,{label:"通知保留天数",prop:"expirationDays"},{default:a(()=>[t(k,{modelValue:o.value.expirationDays,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.expirationDays=s),min:1,max:30,step:1},null,8,["modelValue"]),e[8]||(e[8]=n("div",{class:"form-item-tip"},"超过天数的通知将自动清理",-1))]),_:1}),t(i,{label:"声音提醒",prop:"soundEnabled"},{default:a(()=>[t(f,{modelValue:o.value.soundEnabled,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value.soundEnabled=s)},null,8,["modelValue"]),e[9]||(e[9]=n("div",{class:"form-item-tip"},"收到新通知时播放提示音",-1))]),_:1}),t(i,{label:"桌面通知",prop:"desktopNotification"},{default:a(()=>[t(f,{modelValue:o.value.desktopNotification,"onUpdate:modelValue":e[3]||(e[3]=s=>o.value.desktopNotification=s),disabled:!p.value||!r.value,onChange:C},null,8,["modelValue","disabled"]),n("div",z,[p.value?r.value?(c(),g(b,{key:2},[u(" 在系统托盘显示通知提醒 ")],64)):(c(),g(b,{key:1},[e[11]||(e[11]=u(" 需要授权才能开启桌面通知 ")),t(y,{type:"primary",link:"",onClick:x},{default:a(()=>e[10]||(e[10]=[u(" 点击授权 ")])),_:1})],64)):(c(),g(b,{key:0},[u(" 您的浏览器不支持桌面通知 ")],64))])]),_:1}),t(i,{label:"按模块分组",prop:"groupByModule"},{default:a(()=>[t(f,{modelValue:o.value.groupByModule,"onUpdate:modelValue":e[4]||(e[4]=s=>o.value.groupByModule=s)},null,8,["modelValue"]),e[12]||(e[12]=n("div",{class:"form-item-tip"},"通知列表按模块分组显示",-1))]),_:1}),t(i,{label:"自动清理",prop:"autoCleanup"},{default:a(()=>[t(f,{modelValue:o.value.autoCleanup,"onUpdate:modelValue":e[5]||(e[5]=s=>o.value.autoCleanup=s)},null,8,["modelValue"]),e[13]||(e[13]=n("div",{class:"form-item-tip"},"自动清理过期和超量的通知",-1))]),_:1}),t(i,null,{default:a(()=>[t(y,{type:"primary",onClick:E},{default:a(()=>e[14]||(e[14]=[u("保存设置")])),_:1}),t(y,{onClick:w},{default:a(()=>e[15]||(e[15]=[u("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}}),Q=H(G,[["__scopeId","data-v-81cad322"]]);export{Q as default};
