import{h as M,r as s,aq as j,i as A,x as t,au as H,t as l,y as _,aH as R,aI as G,aJ as J,H as u,L,bo as O,A as K,bs as Q,bg as W,aN as X,aP as Y,aM as Z,aV as ee,as as te,ae,E as g,j as le}from"./vendor-BxNawP4f.js";import{_ as oe}from"./index-DyxCg8e9.js";const ne={class:"postal-codes"},se={class:"card-header"},re={class:"pagination"},de={class:"dialog-footer"},ue=M({__name:"codes",setup(ie){const V=s([]),f=s(1),v=s(10),C=s(0),r=s(!1),i=s("add"),b=s(),o=j({id:0,code:"",city:"",province:"",zone:1,status:!0}),E={code:[{required:!0,message:"请输入邮编",trigger:"blur"},{pattern:/^\d{5,10}$/,message:"邮编格式不正确",trigger:"blur"}],city:[{required:!0,message:"请输入城市",trigger:"blur"}],province:[{required:!0,message:"请输入省份",trigger:"blur"}],zone:[{required:!0,message:"请选择分区",trigger:"change"}]},p=async()=>{},z=n=>{v.value=n,p()},x=n=>{f.value=n,p()},w=()=>{i.value="add",o.id=0,o.code="",o.city="",o.province="",o.zone=1,o.status=!0,r.value=!0},k=n=>{i.value="edit",Object.assign(o,n),r.value=!0},U=async n=>{try{await ae.confirm("确定要删除该邮编吗？","提示",{type:"warning"}),g.success("删除成功"),p()}catch(e){e!=="cancel"&&(console.error("Failed to delete postal code:",e),g.error("删除失败"))}},S=async()=>{b.value&&await b.value.validate(async n=>{if(n)try{g.success(i.value==="add"?"添加成功":"更新成功"),r.value=!1,p()}catch(e){console.error("Failed to save postal code:",e),g.error(i.value==="add"?"添加失败":"更新失败")}})};return p(),(n,e)=>{const m=K,d=G,B=J,h=O,q=R,I=Q,N=H,y=Z,c=Y,P=ee,T=te,D=X,F=W;return le(),A("div",ne,[t(N,null,{header:l(()=>[_("div",se,[e[10]||(e[10]=_("span",null,"邮编列表",-1)),t(m,{type:"primary",onClick:w},{default:l(()=>e[9]||(e[9]=[u("添加邮编")])),_:1})])]),default:l(()=>[t(q,{data:V.value,border:"",stripe:""},{default:l(()=>[t(d,{prop:"code",label:"邮编",width:"120"}),t(d,{prop:"city",label:"城市",width:"150"}),t(d,{prop:"province",label:"省份",width:"150"}),t(d,{prop:"zone",label:"分区",width:"100"}),t(d,{prop:"status",label:"状态",width:"100"},{default:l(({row:a})=>[t(B,{type:a.status?"success":"danger"},{default:l(()=>[u(L(a.status?"启用":"禁用"),1)]),_:2},1032,["type"])]),_:1}),t(d,{label:"操作",width:"200"},{default:l(({row:a})=>[t(h,null,{default:l(()=>[t(m,{type:"primary",link:"",onClick:$=>k(a)},{default:l(()=>e[11]||(e[11]=[u("编辑")])),_:2},1032,["onClick"]),t(m,{type:"danger",link:"",onClick:$=>U(a)},{default:l(()=>e[12]||(e[12]=[u("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),_("div",re,[t(I,{"current-page":f.value,"onUpdate:currentPage":e[0]||(e[0]=a=>f.value=a),"page-size":v.value,"onUpdate:pageSize":e[1]||(e[1]=a=>v.value=a),total:C.value,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next",onSizeChange:z,onCurrentChange:x},null,8,["current-page","page-size","total"])])]),_:1}),t(F,{modelValue:r.value,"onUpdate:modelValue":e[8]||(e[8]=a=>r.value=a),title:i.value==="add"?"添加邮编":"编辑邮编",width:"500px"},{footer:l(()=>[_("span",de,[t(m,{onClick:e[7]||(e[7]=a=>r.value=!1)},{default:l(()=>e[13]||(e[13]=[u("取消")])),_:1}),t(m,{type:"primary",onClick:S},{default:l(()=>e[14]||(e[14]=[u("确定")])),_:1})])]),default:l(()=>[t(D,{ref_key:"formRef",ref:b,model:o,rules:E,"label-width":"100px"},{default:l(()=>[t(c,{label:"邮编",prop:"code"},{default:l(()=>[t(y,{modelValue:o.code,"onUpdate:modelValue":e[2]||(e[2]=a=>o.code=a),maxlength:"10"},null,8,["modelValue"])]),_:1}),t(c,{label:"城市",prop:"city"},{default:l(()=>[t(y,{modelValue:o.city,"onUpdate:modelValue":e[3]||(e[3]=a=>o.city=a),maxlength:"50"},null,8,["modelValue"])]),_:1}),t(c,{label:"省份",prop:"province"},{default:l(()=>[t(y,{modelValue:o.province,"onUpdate:modelValue":e[4]||(e[4]=a=>o.province=a),maxlength:"50"},null,8,["modelValue"])]),_:1}),t(c,{label:"分区",prop:"zone"},{default:l(()=>[t(P,{modelValue:o.zone,"onUpdate:modelValue":e[5]||(e[5]=a=>o.zone=a),min:1,max:8},null,8,["modelValue"])]),_:1}),t(c,{label:"状态",prop:"status"},{default:l(()=>[t(T,{modelValue:o.status,"onUpdate:modelValue":e[6]||(e[6]=a=>o.status=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}}),ce=oe(ue,[["__scopeId","data-v-8fa81ae2"]]);export{ce as default};
