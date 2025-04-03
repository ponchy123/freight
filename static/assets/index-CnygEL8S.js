import{h as ue,bp as ze,bw as De,r as v,aq as H,bx as te,A as K,E as g,v as Ce,i as M,j as _,x as e,t as l,y as F,bc as Ve,aN as ie,aO as ye,b9 as Le,aP as se,aM as re,ax as Fe,aD as x,aE as le,p as j,ay as he,H as i,C as we,aH as de,aI as pe,L as J,aJ as me,bi as _e,bs as Ee,au as ke,b3 as Be,b4 as Te,aV as Ue,as as qe,aA as Ge,ba as Me,bg as fe,by as Oe,ae as ne,bo as Se,bm as Ae,N as We,l as He,q as oe,be as Ke,bf as je,a5 as Je}from"./vendor-BxNawP4f.js";import{_ as ce}from"./index-DyxCg8e9.js";const Xe=ue({name:"ProductRules",components:{Plus:De,Delete:ze},setup(){const a=v(),o=v(!1),A=v(!1),I=v(""),C=v([]),R=v("basic"),b=H({id:null,name:"",calculationType:"fixed",basePrice:0,description:"",status:!0}),r=[{label:"全部",value:""},{label:"启用",value:1},{label:"禁用",value:0}],p=[{label:"固定价格",value:"fixed"},{label:"按重量计算",value:"weight"},{label:"按体积计算",value:"volume"},{label:"按距离计算",value:"distance"}],V={name:[{required:!0,message:"请输入规则名称",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],calculationType:[{required:!0,message:"请选择计算方式",trigger:"change"}],basePrice:[{required:!0,message:"请输入基础价格",trigger:"blur"}]},n=H({name:"",status:""}),h=v([]),w=H({page:1,pageSize:10,total:0}),E=v({calculationType:"STEP",weightBands:[]}),N=[{prop:"minWeight",label:"起始重量",width:150},{prop:"maxWeight",label:"结束重量",width:150},{prop:"basePrice",label:"基础价格",width:150},{prop:"pricePerUnit",label:"单位价格",width:150},{label:"操作",width:100,fixed:"right",render:(f,{$index:S})=>te(K,{type:"danger",link:!0,onClick:()=>ee(S)},()=>"删除")}],y=v({items:[]}),s=[{prop:"name",label:"名称",width:150},{prop:"type",label:"类型",width:150},{prop:"rate",label:"费率",width:150},{label:"操作",width:100,fixed:"right",render:(f,{$index:S})=>te(K,{type:"danger",link:!0,onClick:()=>D(S)},()=>"删除")}],m=v({nonDeliverable:[]}),z=[{prop:"conditionType",label:"条件类型",width:150},{prop:"minValue",label:"最小值",width:150},{prop:"maxValue",label:"最大值",width:150},{prop:"penaltyFee",label:"惩罚性费用",width:150},{prop:"handlingType",label:"处理方式",width:150},{label:"操作",width:100,fixed:"right",render:(f,{$index:S})=>te(K,{type:"danger",link:!0,onClick:()=>q(S)},()=>"删除")}],d=f=>{const S=p.find(ae=>ae.value===f);return S?S.label:f},$=f=>{C.value=f},X=f=>{w.pageSize=f,k()},L=f=>{w.page=f,k()},k=async()=>{o.value=!0;try{}catch{g.error("加载数据失败")}finally{o.value=!1}},Y=()=>{w.page=1,k()},Z=()=>{n.name="",n.status="",w.page=1,k()},O=()=>{I.value="添加规则",b.id=null,b.name="",b.calculationType="fixed",b.basePrice=0,b.description="",b.status=!0,A.value=!0},Q=f=>{I.value="编辑规则",Object.assign(b,f),A.value=!0},c=async f=>{try{g.success("删除成功"),k()}catch{g.error("删除失败")}},t=async()=>{if(!C.value.length){g.warning("请选择要删除的规则");return}try{g.success("批量删除成功"),C.value=[],k()}catch{g.error("批量删除失败")}},P=async()=>{if(a.value)try{await a.value.validate(),g.success("保存成功"),A.value=!1,k()}catch{g.error("表单验证失败")}},B=()=>{E.value.weightBands.push({minWeight:0,maxWeight:0,basePrice:0,pricePerUnit:0})},ee=f=>{E.value.weightBands.splice(f,1)},W=()=>{y.value.items.push({name:"",type:"fixed",rate:0,condition:null})},D=f=>{y.value.items.splice(f,1)},T=()=>{m.value.nonDeliverable.push({conditionType:"WEIGHT",minValue:0,maxValue:0,penaltyFee:0,handlingType:"REJECT"})},q=f=>{m.value.nonDeliverable.splice(f,1)},G=v({visible:!1,data:{type:"WEIGHT",minValue:0,maxValue:0,unit:"",zoneNumbers:[]},currentSurcharge:null});return{formRef:a,loading:o,showModal:A,modalTitle:I,selectedRows:C,statusOptions:r,calculationTypeOptions:p,searchForm:n,tableData:h,pagination:w,rules:V,getCalculationTypeLabel:d,handleSelectionChange:$,handleSizeChange:X,handleCurrentChange:L,handleSearch:Y,handleReset:Z,handleAdd:O,handleEdit:Q,handleDelete:c,handleBatchDelete:t,activeTab:R,formData:b,baseRules:E,handleSubmit:P,weightBandColumns:N,surchargeRules:y,surchargeColumns:s,specialRules:m,nonDeliverableColumns:z,addWeightBand:B,removeWeightBand:ee,addSurcharge:W,removeSurcharge:D,addNonDeliverable:T,removeNonDeliverable:q,conditionDialog:G,saveCondition:()=>{G.value.currentSurcharge&&(G.value.currentSurcharge.condition={...G.value.data}),G.value.visible=!1}}}}),Ye={class:"product-rules"},Ze={class:"search-filter mb-4"},Qe={class:"operation-buttons mb-4"},xe={class:"pagination-container"},el={class:"mt-2"},ll={class:"mt-2"},al={class:"mt-2"},tl={class:"dialog-footer"};function ol(a,o,A,I,C,R){const b=re,r=se,p=he,V=Fe,n=K,h=ie,w=Ce("Plus"),E=we,N=Ce("Delete"),y=pe,s=me,m=de,z=Ee,d=ke,$=Ue,X=qe,L=Te,k=Me,Y=Ge,Z=Be,O=fe,Q=Oe,c=_e;return _(),M("div",Ye,[e(d,{title:"产品规则管理",class:"mb-4"},{default:l(()=>[F("div",Ze,[e(h,{model:a.searchForm,rules:a.rules,inline:"","label-position":"left",onKeydown:o[2]||(o[2]=ye(Le(()=>{},["prevent"]),["enter"]))},{default:l(()=>[e(r,{label:"规则名称",prop:"name"},{default:l(()=>[e(b,{modelValue:a.searchForm.name,"onUpdate:modelValue":o[0]||(o[0]=t=>a.searchForm.name=t),placeholder:"请输入规则名称",onKeydown:ye(a.handleSearch,["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),e(r,{label:"状态",prop:"status"},{default:l(()=>[e(V,{modelValue:a.searchForm.status,"onUpdate:modelValue":o[1]||(o[1]=t=>a.searchForm.status=t),options:a.statusOptions,placeholder:"请选择状态",style:{"min-width":"150px"}},{default:l(()=>[(_(!0),M(x,null,le(a.statusOptions,t=>(_(),j(p,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","options"])]),_:1}),e(r,null,{default:l(()=>[e(n,{type:"primary",onClick:a.handleSearch},{default:l(()=>o[21]||(o[21]=[i("搜索")])),_:1},8,["onClick"]),e(n,{onClick:a.handleReset},{default:l(()=>o[22]||(o[22]=[i("重置")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),F("div",Qe,[e(n,{type:"primary",onClick:a.handleAdd},{default:l(()=>[e(E,null,{default:l(()=>[e(w)]),_:1}),o[23]||(o[23]=i(" 添加规则 "))]),_:1},8,["onClick"]),e(n,{type:"danger",disabled:!a.selectedRows.length,onClick:a.handleBatchDelete},{default:l(()=>[e(E,null,{default:l(()=>[e(N)]),_:1}),o[24]||(o[24]=i(" 批量删除 "))]),_:1},8,["disabled","onClick"])]),Ve((_(),j(m,{data:a.tableData,onSelectionChange:a.handleSelectionChange},{default:l(()=>[e(y,{type:"selection",width:"55"}),e(y,{prop:"name",label:"规则名称",width:"200"}),e(y,{prop:"calculationType",label:"计算方式",width:"150"},{default:l(({row:t})=>[i(J(a.getCalculationTypeLabel(t.calculationType)),1)]),_:1}),e(y,{prop:"basePrice",label:"基础价格",width:"150"}),e(y,{prop:"description",label:"描述",width:"200"}),e(y,{prop:"status",label:"状态",width:"100"},{default:l(({row:t})=>[e(s,{type:t.status?"success":"danger"},{default:l(()=>[i(J(t.status?"启用":"禁用"),1)]),_:2},1032,["type"])]),_:1}),e(y,{label:"操作",width:"200",fixed:"right"},{default:l(({row:t})=>[e(n,{type:"primary",link:"",onClick:P=>a.handleEdit(t)},{default:l(()=>o[25]||(o[25]=[i("编辑")])),_:2},1032,["onClick"]),e(n,{type:"danger",link:"",onClick:P=>a.handleDelete(t)},{default:l(()=>o[26]||(o[26]=[i("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[c,a.loading]]),F("div",xe,[e(z,{"current-page":a.pagination.page,"onUpdate:currentPage":o[3]||(o[3]=t=>a.pagination.page=t),"page-size":a.pagination.pageSize,"onUpdate:pageSize":o[4]||(o[4]=t=>a.pagination.pageSize=t),"page-sizes":[10,20,30,40],total:a.pagination.total,layout:"total, sizes, prev, pager, next",onSizeChange:a.handleSizeChange,onCurrentChange:a.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])]),_:1}),e(O,{modelValue:a.showModal,"onUpdate:modelValue":o[13]||(o[13]=t=>a.showModal=t),title:a.modalTitle,width:"800px","close-on-click-modal":!1},{footer:l(()=>[F("span",tl,[e(n,{onClick:o[12]||(o[12]=t=>a.showModal=!1)},{default:l(()=>o[32]||(o[32]=[i("取消")])),_:1}),e(n,{type:"primary",onClick:a.handleSubmit},{default:l(()=>o[33]||(o[33]=[i("确定")])),_:1},8,["onClick"])])]),default:l(()=>[e(Z,{modelValue:a.activeTab,"onUpdate:modelValue":o[11]||(o[11]=t=>a.activeTab=t)},{default:l(()=>[e(L,{name:"basic",label:"基本信息"},{default:l(()=>[e(h,{ref:"formRef",model:a.formData,rules:a.rules,"label-position":"left","label-width":"auto"},{default:l(()=>[e(r,{label:"规则名称",prop:"name"},{default:l(()=>[e(b,{modelValue:a.formData.name,"onUpdate:modelValue":o[5]||(o[5]=t=>a.formData.name=t),placeholder:"请输入规则名称"},null,8,["modelValue"])]),_:1}),e(r,{label:"计算方式",prop:"calculationType"},{default:l(()=>[e(V,{modelValue:a.formData.calculationType,"onUpdate:modelValue":o[6]||(o[6]=t=>a.formData.calculationType=t),placeholder:"请选择计算方式"},{default:l(()=>[(_(!0),M(x,null,le(a.calculationTypeOptions,t=>(_(),j(p,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"基础价格",prop:"basePrice"},{default:l(()=>[e($,{modelValue:a.formData.basePrice,"onUpdate:modelValue":o[7]||(o[7]=t=>a.formData.basePrice=t),placeholder:"请输入基础价格",min:0,precision:2},null,8,["modelValue"])]),_:1}),e(r,{label:"描述",prop:"description"},{default:l(()=>[e(b,{modelValue:a.formData.description,"onUpdate:modelValue":o[8]||(o[8]=t=>a.formData.description=t),type:"textarea",placeholder:"请输入规则描述"},null,8,["modelValue"])]),_:1}),e(r,{label:"状态",prop:"status"},{default:l(()=>[e(X,{modelValue:a.formData.status,"onUpdate:modelValue":o[9]||(o[9]=t=>a.formData.status=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(L,{name:"base",label:"基础运费规则"},{default:l(()=>[e(h,{model:a.baseRules,"label-width":"120px"},{default:l(()=>[e(r,{label:"计费方式"},{default:l(()=>[e(Y,{value:a.baseRules.calculationType,"onUpdate:value":o[10]||(o[10]=t=>a.baseRules.calculationType=t)},{default:l(()=>[e(k,{value:"STEP"},{default:l(()=>o[27]||(o[27]=[i("阶梯式")])),_:1}),e(k,{value:"LINEAR"},{default:l(()=>o[28]||(o[28]=[i("线性")])),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"重量段设置"},{default:l(()=>[e(m,{columns:a.weightBandColumns,data:a.baseRules.weightBands},null,8,["columns","data"]),F("div",el,[e(n,{type:"primary",onClick:a.addWeightBand},{default:l(()=>o[29]||(o[29]=[i("添加重量段")])),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])]),_:1}),e(L,{name:"surcharge",label:"附加费规则"},{default:l(()=>[e(h,{model:a.surchargeRules,"label-width":"120px"},{default:l(()=>[e(r,{label:"附加费列表"},{default:l(()=>[e(m,{columns:a.surchargeColumns,data:a.surchargeRules.items},null,8,["columns","data"]),F("div",ll,[e(n,{type:"primary",onClick:a.addSurcharge},{default:l(()=>o[30]||(o[30]=[i("添加附加费")])),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])]),_:1}),e(L,{name:"special",label:"特殊规则"},{default:l(()=>[e(h,{model:a.specialRules,"label-width":"120px"},{default:l(()=>[e(r,{label:"不可发包裹"},{default:l(()=>[e(m,{columns:a.nonDeliverableColumns,data:a.specialRules.nonDeliverable},null,8,["columns","data"]),F("div",al,[e(n,{type:"primary",onClick:a.addNonDeliverable},{default:l(()=>o[31]||(o[31]=[i("添加规则")])),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue","title"]),e(O,{modelValue:a.conditionDialog.visible,"onUpdate:modelValue":o[20]||(o[20]=t=>a.conditionDialog.visible=t),title:"条件编辑",width:"600px"},{footer:l(()=>[e(Q,{justify:"end"},{default:l(()=>[e(n,{onClick:o[19]||(o[19]=t=>a.conditionDialog.visible=!1)},{default:l(()=>o[34]||(o[34]=[i("取消")])),_:1}),e(n,{type:"primary",onClick:a.saveCondition},{default:l(()=>o[35]||(o[35]=[i("确定")])),_:1},8,["onClick"])]),_:1})]),default:l(()=>[e(h,{model:a.conditionDialog.data,"label-width":"100px"},{default:l(()=>[e(r,{label:"条件类型"},{default:l(()=>[e(V,{value:a.conditionDialog.data.type,"onUpdate:value":o[14]||(o[14]=t=>a.conditionDialog.data.type=t)},{default:l(()=>[e(p,{label:"重量",value:"WEIGHT"}),e(p,{label:"长度",value:"LENGTH"}),e(p,{label:"长度+周长",value:"LENGTH_GIRTH"}),e(p,{label:"宽度",value:"WIDTH"}),e(p,{label:"包装",value:"PACKAGING"})]),_:1},8,["value"])]),_:1}),e(r,{label:"最小值"},{default:l(()=>[e($,{value:a.conditionDialog.data.minValue,"onUpdate:value":o[15]||(o[15]=t=>a.conditionDialog.data.minValue=t),min:0,precision:2},null,8,["value"])]),_:1}),e(r,{label:"最大值"},{default:l(()=>[e($,{value:a.conditionDialog.data.maxValue,"onUpdate:value":o[16]||(o[16]=t=>a.conditionDialog.data.maxValue=t),min:0,precision:2},null,8,["value"])]),_:1}),e(r,{label:"单位"},{default:l(()=>[e(b,{value:a.conditionDialog.data.unit,"onUpdate:value":o[17]||(o[17]=t=>a.conditionDialog.data.unit=t)},null,8,["value"])]),_:1}),e(r,{label:"适用分区"},{default:l(()=>[e(V,{value:a.conditionDialog.data.zoneNumbers,"onUpdate:value":o[18]||(o[18]=t=>a.conditionDialog.data.zoneNumbers=t),multiple:""},{default:l(()=>[(_(),M(x,null,le(8,t=>e(p,{key:t,label:"分区 "+t,value:t},null,8,["label","value"])),64))]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const Ie=ce(Xe,[["render",ol],["__scopeId","data-v-a095f550"]]),nl=ue({name:"ConfigDialog",components:{ProductRules:Ie},props:{visible:{type:Boolean,required:!0},productId:{type:String,required:!0}},emits:["update:visible"],setup(a,{emit:o}){const A=v("rules"),I=v([]),C=H({visible:!1,type:"create",form:{versionName:"",effectiveDate:"",expirationDate:"",remarks:""}}),R={versionName:[{required:!0,message:"请输入版本名称",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],effectiveDate:[{required:!0,message:"请选择生效日期",trigger:"change"}],expirationDate:[{required:!0,message:"请选择失效日期",trigger:"change"}]},b=async()=>{try{const m=await(await fetch(`/api/products/${a.productId}/versions`)).json();I.value=m}catch(s){console.error("获取版本列表失败:",s)}},r=s=>({DRAFT:"info",ACTIVE:"success",EXPIRED:"info"})[s]||"info",p=s=>({DRAFT:"草稿",ACTIVE:"生效",EXPIRED:"失效"})[s]||s,V=async s=>{g.success("规则配置保存成功")},n=()=>{C.type="create",C.form={versionName:"",effectiveDate:"",expirationDate:"",remarks:""},C.visible=!0},h=s=>{C.type="view",C.form={versionName:s.versionName,effectiveDate:s.effectiveDate,expirationDate:s.expirationDate,remarks:s.remarks||""},C.visible=!0},w=async s=>{try{if(await ne.confirm("确认要使此版本生效吗？生效后将无法修改。","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),!(await fetch(`/api/products/${a.productId}/versions/${s.versionId}/activate`,{method:"POST"})).ok)throw new Error("激活失败");g.success("版本激活成功"),b()}catch(m){m instanceof Error&&g.error(m.message)}},E=async s=>{try{if(await ne.confirm("确认要删除此版本吗？删除后无法恢复。","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),!(await fetch(`/api/products/${a.productId}/versions/${s.versionId}`,{method:"DELETE"})).ok)throw new Error("删除失败");g.success("版本删除成功"),b()}catch(m){m instanceof Error&&g.error(m.message)}},N=async()=>{try{if(!(await fetch(`/api/products/${a.productId}/versions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C.form)})).ok)throw new Error("创建失败");g.success("版本创建成功"),C.visible=!1,b()}catch(s){s instanceof Error&&g.error(s.message)}},y=()=>{o("update:visible",!1)};return b(),{activeTab:A,versionList:I,versionDialog:C,versionRules:R,getStatusType:r,getStatusText:p,handleRuleSave:V,handleCreateVersion:n,handleViewVersion:h,handleActivateVersion:w,handleDeleteVersion:E,handleVersionSubmit:N,handleClose:y}}}),ul={class:"version-actions mt-4"},il={class:"dialog-footer"},sl={class:"dialog-footer"};function rl(a,o,A,I,C,R){const b=Ie,r=Te,p=pe,V=me,n=K,h=Se,w=de,E=Be,N=fe,y=re,s=se,m=Ae,z=ie;return _(),M(x,null,[e(N,{modelValue:a.visible,"onUpdate:modelValue":o[1]||(o[1]=d=>a.visible=d),title:"产品规则配置",width:"80%","close-on-click-modal":!1,class:"config-dialog"},{footer:l(()=>[F("span",il,[e(n,{onClick:a.handleClose},{default:l(()=>o[12]||(o[12]=[i("关闭")])),_:1},8,["onClick"])])]),default:l(()=>[e(E,{modelValue:a.activeTab,"onUpdate:modelValue":o[0]||(o[0]=d=>a.activeTab=d),type:"border-card"},{default:l(()=>[e(r,{label:"规则配置",name:"rules"},{default:l(()=>[e(b,{"product-id":a.productId,onSave:a.handleRuleSave},null,8,["product-id","onSave"])]),_:1}),e(r,{label:"版本管理",name:"versions"},{default:l(()=>[e(w,{data:a.versionList,border:"",style:{width:"100%"}},{default:l(()=>[e(p,{prop:"versionId",label:"版本ID",width:"120"}),e(p,{prop:"versionName",label:"版本名称",width:"200"}),e(p,{prop:"effectiveDate",label:"生效日期",width:"120"}),e(p,{prop:"expirationDate",label:"失效日期",width:"120"}),e(p,{prop:"status",label:"状态",width:"100"},{default:l(({row:d})=>[e(V,{type:a.getStatusType(d.status)},{default:l(()=>[i(J(a.getStatusText(d.status)),1)]),_:2},1032,["type"])]),_:1}),e(p,{prop:"createdBy",label:"创建人",width:"120"}),e(p,{prop:"createdAt",label:"创建时间",width:"180"}),e(p,{label:"操作",width:"200",fixed:"right"},{default:l(({row:d})=>[e(h,null,{default:l(()=>[e(n,{type:"primary",link:"",disabled:d.status!=="DRAFT",onClick:$=>a.handleActivateVersion(d)},{default:l(()=>o[8]||(o[8]=[i(" 生效 ")])),_:2},1032,["disabled","onClick"]),e(n,{type:"primary",link:"",onClick:$=>a.handleViewVersion(d)},{default:l(()=>o[9]||(o[9]=[i(" 查看 ")])),_:2},1032,["onClick"]),e(n,{type:"danger",link:"",disabled:d.status!=="DRAFT",onClick:$=>a.handleDeleteVersion(d)},{default:l(()=>o[10]||(o[10]=[i(" 删除 ")])),_:2},1032,["disabled","onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),F("div",ul,[e(n,{type:"primary",onClick:a.handleCreateVersion},{default:l(()=>o[11]||(o[11]=[i(" 创建新版本 ")])),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e(N,{modelValue:a.versionDialog.visible,"onUpdate:modelValue":o[7]||(o[7]=d=>a.versionDialog.visible=d),title:a.versionDialog.type==="create"?"创建新版本":"查看版本",width:"600px"},{footer:l(()=>[F("span",sl,[e(n,{onClick:o[6]||(o[6]=d=>a.versionDialog.visible=!1)},{default:l(()=>[i(J(a.versionDialog.type==="view"?"关闭":"取消"),1)]),_:1}),a.versionDialog.type==="create"?(_(),j(n,{key:0,type:"primary",onClick:a.handleVersionSubmit},{default:l(()=>o[13]||(o[13]=[i(" 确定 ")])),_:1},8,["onClick"])):We("",!0)])]),default:l(()=>[e(z,{ref:"versionFormRef",model:a.versionDialog.form,rules:a.versionRules,"label-width":"100px"},{default:l(()=>[e(s,{label:"版本名称",prop:"versionName"},{default:l(()=>[e(y,{modelValue:a.versionDialog.form.versionName,"onUpdate:modelValue":o[2]||(o[2]=d=>a.versionDialog.form.versionName=d),disabled:a.versionDialog.type==="view"},null,8,["modelValue","disabled"])]),_:1}),e(s,{label:"生效日期",prop:"effectiveDate"},{default:l(()=>[e(m,{modelValue:a.versionDialog.form.effectiveDate,"onUpdate:modelValue":o[3]||(o[3]=d=>a.versionDialog.form.effectiveDate=d),type:"date",placeholder:"选择生效日期",disabled:a.versionDialog.type==="view"},null,8,["modelValue","disabled"])]),_:1}),e(s,{label:"失效日期",prop:"expirationDate"},{default:l(()=>[e(m,{modelValue:a.versionDialog.form.expirationDate,"onUpdate:modelValue":o[4]||(o[4]=d=>a.versionDialog.form.expirationDate=d),type:"date",placeholder:"选择失效日期",disabled:a.versionDialog.type==="view"},null,8,["modelValue","disabled"])]),_:1}),e(s,{label:"备注",prop:"remarks"},{default:l(()=>[e(y,{modelValue:a.versionDialog.form.remarks,"onUpdate:modelValue":o[5]||(o[5]=d=>a.versionDialog.form.remarks=d),type:"textarea",rows:3,disabled:a.versionDialog.type==="view"},null,8,["modelValue","disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])],64)}const dl=ce(nl,[["render",rl],["__scopeId","data-v-cdfeef91"]]),pl={class:"product-management"},ml={class:"card-header"},fl={class:"search-bar"},cl={class:"pagination"},vl={class:"dialog-footer"},bl=ue({__name:"index",setup(a){const o=H({productId:"",productName:"",status:""}),A=v(!1),I=v([]),C=v(1),R=v(10),b=v(0),r=v(!1),p=v("add"),V=v(),n=H({productId:"",providerId:"",version:1,productName:"",dimFactor:139,effectiveDate:"",expirationDate:"",currencyCode:"USD",weightUnit:"LB",dimUnit:"IN",status:1}),h=v([{id:1,name:"UPS"},{id:2,name:"FedEx"},{id:3,name:"DHL"}]),w={productId:[{required:!0,message:"请输入产品编号",trigger:"blur"},{pattern:/^[A-Z]{3}-[A-Z]{3}-\d{4}$/,message:"产品编号格式不正确",trigger:"blur"}],providerId:[{required:!0,message:"请选择服务商",trigger:"change"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"}],productName:[{required:!0,message:"请输入产品名称",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],dimFactor:[{required:!0,message:"请输入体积重系数",trigger:"blur"}],effectiveDate:[{required:!0,message:"请选择生效日期",trigger:"change"}],expirationDate:[{required:!0,message:"请选择失效日期",trigger:"change"}]},E=()=>{},N=()=>{o.productId="",o.productName="",o.status=""},y=()=>{p.value="add",r.value=!0,V.value&&V.value.resetFields()},s=c=>{p.value="edit",r.value=!0,Object.assign(n,c)},m=v(!1),z=v(""),d=c=>{z.value=c.id,m.value=!0},$=async c=>{try{await ne.confirm(`确认要${c.status===1?"禁用":"启用"}该产品吗？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),g.success(`${c.status===1?"禁用":"启用"}成功`)}catch{}},X=async()=>{V.value&&await V.value.validate((c,t)=>{c&&(r.value=!1,g.success(`${p.value==="add"?"新增":"编辑"}成功`))})},L=c=>{R.value=c},k=c=>{C.value=c},Y=c=>{g.success("导入成功")},Z=c=>{g.error("导入失败："+c.message)},O=c=>{const t=c.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||c.type==="application/vnd.ms-excel",P=c.size/1024/1024<2;return t?P?!0:(g.error("文件大小不能超过2MB！"),!1):(g.error("只能上传Excel文件！"),!1)},Q=()=>{window.location.href="/api/v1/products/template"};return(c,t)=>{const P=we,B=K,ee=Ke,W=re,D=se,T=he,q=Fe,G=ie,U=pe,f=me,S=Se,ae=de,Ne=Ee,$e=ke,ve=Ue,be=Ae,Re=fe,Pe=_e;return _(),M("div",pl,[e($e,null,{header:l(()=>[F("div",ml,[t[21]||(t[21]=F("h2",null,"产品管理",-1)),e(B,{type:"primary",onClick:y},{default:l(()=>[e(P,null,{default:l(()=>[e(oe(De))]),_:1}),t[18]||(t[18]=i(" 新增产品 "))]),_:1}),e(ee,{class:"ml-4",action:"/api/v1/products/import",accept:".xlsx,.xls","show-file-list":!1,"on-success":Y,"on-error":Z,"before-upload":O},{default:l(()=>[e(B,{type:"primary"},{default:l(()=>[e(P,null,{default:l(()=>[e(oe(je))]),_:1}),t[19]||(t[19]=i(" 批量导入 "))]),_:1})]),_:1}),e(B,{type:"primary",class:"ml-4",onClick:Q},{default:l(()=>[e(P,null,{default:l(()=>[e(oe(Je))]),_:1}),t[20]||(t[20]=i(" 下载模板 "))]),_:1})])]),default:l(()=>[F("div",fl,[e(G,{inline:!0,model:o},{default:l(()=>[e(D,{label:"产品编号"},{default:l(()=>[e(W,{modelValue:o.productId,"onUpdate:modelValue":t[0]||(t[0]=u=>o.productId=u),placeholder:"请输入产品编号"},null,8,["modelValue"])]),_:1}),e(D,{label:"产品名称"},{default:l(()=>[e(W,{modelValue:o.productName,"onUpdate:modelValue":t[1]||(t[1]=u=>o.productName=u),placeholder:"请输入产品名称"},null,8,["modelValue"])]),_:1}),e(D,{label:"状态"},{default:l(()=>[e(q,{modelValue:o.status,"onUpdate:modelValue":t[2]||(t[2]=u=>o.status=u),placeholder:"请选择状态"},{default:l(()=>[e(T,{label:"全部",value:""}),e(T,{label:"启用",value:"1"}),e(T,{label:"禁用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(D,null,{default:l(()=>[e(B,{type:"primary",onClick:E},{default:l(()=>t[22]||(t[22]=[i("查询")])),_:1}),e(B,{onClick:N},{default:l(()=>t[23]||(t[23]=[i("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),Ve((_(),j(ae,{data:I.value,border:"",style:{width:"100%"}},{default:l(()=>[e(U,{prop:"productId",label:"产品编号",width:"150"}),e(U,{prop:"productName",label:"产品名称",width:"200"}),e(U,{prop:"dimFactor",label:"体积重系数",width:"120"}),e(U,{prop:"effectiveDate",label:"生效日期",width:"120"}),e(U,{prop:"expirationDate",label:"失效日期",width:"120"}),e(U,{prop:"currencyCode",label:"货币代码",width:"100"}),e(U,{prop:"weightUnit",label:"重量单位",width:"100"}),e(U,{prop:"dimUnit",label:"尺寸单位",width:"100"}),e(U,{prop:"status",label:"状态",width:"100"},{default:l(({row:u})=>[e(f,{type:u.status===1?"success":"danger"},{default:l(()=>[i(J(u.status===1?"启用":"禁用"),1)]),_:2},1032,["type"])]),_:1}),e(U,{label:"操作",width:"200",fixed:"right"},{default:l(({row:u})=>[e(S,null,{default:l(()=>[e(B,{type:"primary",link:"",onClick:ge=>s(u)},{default:l(()=>t[24]||(t[24]=[i("编辑")])),_:2},1032,["onClick"]),e(B,{type:"primary",link:"",onClick:ge=>d(u)},{default:l(()=>t[25]||(t[25]=[i("配置")])),_:2},1032,["onClick"]),e(B,{type:"primary",link:"",onClick:ge=>$(u),class:He({"text-red-500":u.status===1})},{default:l(()=>[i(J(u.status===1?"禁用":"启用"),1)]),_:2},1032,["onClick","class"])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[Pe,A.value]]),F("div",cl,[e(Ne,{"current-page":C.value,"onUpdate:currentPage":t[3]||(t[3]=u=>C.value=u),"page-size":R.value,"onUpdate:pageSize":t[4]||(t[4]=u=>R.value=u),"page-sizes":[10,20,50,100],total:b.value,layout:"total, sizes, prev, pager, next",onSizeChange:L,onCurrentChange:k},null,8,["current-page","page-size","total"])])]),_:1}),e(Re,{modelValue:r.value,"onUpdate:modelValue":t[16]||(t[16]=u=>r.value=u),title:p.value==="add"?"新增产品":"编辑产品",width:"600px"},{footer:l(()=>[F("span",vl,[e(B,{onClick:t[15]||(t[15]=u=>r.value=!1)},{default:l(()=>t[26]||(t[26]=[i("取消")])),_:1}),e(B,{type:"primary",onClick:X},{default:l(()=>t[27]||(t[27]=[i("确定")])),_:1})])]),default:l(()=>[e(G,{ref_key:"formRef",ref:V,model:n,rules:w,"label-width":"100px"},{default:l(()=>[e(D,{label:"产品编号",prop:"productId"},{default:l(()=>[e(W,{modelValue:n.productId,"onUpdate:modelValue":t[5]||(t[5]=u=>n.productId=u),placeholder:"请输入产品编号"},null,8,["modelValue"])]),_:1}),e(D,{label:"服务商",prop:"providerId"},{default:l(()=>[e(q,{modelValue:n.providerId,"onUpdate:modelValue":t[6]||(t[6]=u=>n.providerId=u),placeholder:"请选择服务商"},{default:l(()=>[(_(!0),M(x,null,le(h.value,u=>(_(),j(T,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(D,{label:"版本号",prop:"version"},{default:l(()=>[e(ve,{modelValue:n.version,"onUpdate:modelValue":t[7]||(t[7]=u=>n.version=u),min:1,step:1},null,8,["modelValue"])]),_:1}),e(D,{label:"产品名称",prop:"productName"},{default:l(()=>[e(W,{modelValue:n.productName,"onUpdate:modelValue":t[8]||(t[8]=u=>n.productName=u),placeholder:"请输入产品名称"},null,8,["modelValue"])]),_:1}),e(D,{label:"体积重系数",prop:"dimFactor"},{default:l(()=>[e(ve,{modelValue:n.dimFactor,"onUpdate:modelValue":t[9]||(t[9]=u=>n.dimFactor=u),min:1,precision:2},null,8,["modelValue"])]),_:1}),e(D,{label:"生效日期",prop:"effectiveDate"},{default:l(()=>[e(be,{modelValue:n.effectiveDate,"onUpdate:modelValue":t[10]||(t[10]=u=>n.effectiveDate=u),type:"date",placeholder:"选择生效日期"},null,8,["modelValue"])]),_:1}),e(D,{label:"失效日期",prop:"expirationDate"},{default:l(()=>[e(be,{modelValue:n.expirationDate,"onUpdate:modelValue":t[11]||(t[11]=u=>n.expirationDate=u),type:"date",placeholder:"选择失效日期"},null,8,["modelValue"])]),_:1}),e(D,{label:"货币代码",prop:"currencyCode"},{default:l(()=>[e(q,{modelValue:n.currencyCode,"onUpdate:modelValue":t[12]||(t[12]=u=>n.currencyCode=u),placeholder:"请选择货币代码"},{default:l(()=>[e(T,{label:"USD",value:"USD"}),e(T,{label:"CNY",value:"CNY"})]),_:1},8,["modelValue"])]),_:1}),e(D,{label:"重量单位",prop:"weightUnit"},{default:l(()=>[e(q,{modelValue:n.weightUnit,"onUpdate:modelValue":t[13]||(t[13]=u=>n.weightUnit=u),placeholder:"请选择重量单位"},{default:l(()=>[e(T,{label:"KG",value:"KG"}),e(T,{label:"LB",value:"LB"})]),_:1},8,["modelValue"])]),_:1}),e(D,{label:"尺寸单位",prop:"dimUnit"},{default:l(()=>[e(q,{modelValue:n.dimUnit,"onUpdate:modelValue":t[14]||(t[14]=u=>n.dimUnit=u),placeholder:"请选择尺寸单位"},{default:l(()=>[e(T,{label:"CM",value:"CM"}),e(T,{label:"IN",value:"IN"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),e(dl,{visible:m.value,"onUpdate:visible":t[17]||(t[17]=u=>m.value=u),"product-id":z.value},null,8,["visible","product-id"])])}}}),yl=ce(bl,[["__scopeId","data-v-239eb634"]]);export{yl as default};
