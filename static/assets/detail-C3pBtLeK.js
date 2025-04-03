import{h as ie,a as z,Q as re,r as p,w as j,o as ce,E as b,P as de,bc as ue,bi as _e,i as v,y as o,x as g,p as pe,N as ge,t as w,H as C,C as fe,q as M,bD as ve,A as me,L as c,aJ as he,aY as ye,bE as be,b4 as we,aD as I,aE as D,b3 as Ee,bF as Ae,j as f}from"./vendor-BxNawP4f.js";import{g as Se,a as Ie,b as De,e as ke,f as Re}from"./products-DYzYKE6u.js";import{g as Ze,_ as Ne}from"./index-DyxCg8e9.js";/* empty css                                                                        */const $e={list:"/api/v1/products/special-rules/"};async function Oe(F,V){return Ze($e.list,{params:{...V,product_id:F}})}const xe=Oe,Te={ADDITIONAL_HANDLING:"ADDITIONAL_HANDLING",OVERSIZE_COMMERCIAL:"OVERSIZE",OVERSIZE_RESIDENTIAL:"RESIDENTIAL",OVERWEIGHT:"ADDITIONAL_HANDLING",OVERSIZE:"OVERSIZE_COMMERCIAL",RESIDENTIAL:"OVERSIZE_RESIDENTIAL"},Le={ADDITIONAL_HANDLING:"附加处理费",OVERSIZE_COMMERCIAL:"超大尺寸商业件",OVERSIZE_RESIDENTIAL:"超大尺寸住宅件",OVERWEIGHT:"附加处理费",OVERSIZE:"超大尺寸商业件",RESIDENTIAL:"超大尺寸住宅件"},ze={class:"product-detail-container"},Ce={class:"page-header"},Ve={class:"title-section"},Me={class:"action-buttons"},Fe={class:"example-section"},He={class:"example-table-wrapper"},Ge={class:"example-table-container"},Ye={class:"example-table"},We={class:"example-section"},Ue={class:"example-table-wrapper"},je={class:"example-table-container"},Be={class:"example-table"},qe={class:"example-section"},Je={class:"example-table-wrapper"},Xe={class:"example-table-container"},Pe={class:"example-table"},Qe={class:"example-section"},Ke={class:"example-table-wrapper"},et={class:"example-table-container"},tt={class:"example-table"},ot={class:"example-section"},at={class:"example-table-wrapper"},nt={class:"example-table-container"},lt={class:"example-table"},st=ie({__name:"detail",setup(F){const V=re(),Z=de(),L=z(()=>{const l=V.params.code;return(Array.isArray(l)?l[0]:String(l))||""}),i=p({id:"",name:"",code:"",provider:"",provider_id:0,dim_factor:0,dim_factor_unit:"",effective_date:"",expiration_date:"",country:"",currency:"",weight_unit:"",dim_unit:"",description:"",is_active:!1,created_at:"",updated_at:"",status:0,enabled_weight_band:!1}),m=p([]),H=p([]),B=p([]),q=p([]),_=p([]),h=p([]),k=p([]),A=p([]),S=p([]),G=p(!1),N=p(!1),$=p(!1),O=p("basic");p(!0),p(!0),z(()=>{const l=new Set;return _.value.forEach(a=>{l.add(a.zone.toString())}),Array.from(l).sort()});const J=l=>{if(console.log("提取重量信息:",l),!l||typeof l!="string")return console.warn("无效的重量范围字符串:",l),{weightValue:0,unit:"lb"};const a=l.match(/(\d+(?:\.\d+)?)(?:\s*-\s*(?:\d+(?:\.\d+)?))?\s*(kg|lb|oz)/i);if(a)return console.log("匹配到重量范围格式1:",a),{weightValue:parseFloat(a[1]),unit:a[2].toLowerCase()};const t=l.match(/(\d+(?:\.\d+)?)\s*(kg|lb|oz)/i);if(t)return console.log("匹配到单一重量格式:",t),{weightValue:parseFloat(t[1]),unit:t[2].toLowerCase()};const e=l.match(/^(\d+(?:\.\d+)?)(?:\s*-\s*(?:\d+(?:\.\d+)?))?$/);if(e)return console.log("匹配到纯数字格式:",e),{weightValue:parseFloat(e[1]),unit:"lb"};const s=l.match(/(\d+(?:\.\d+)?)/);return s?(console.log("提取到的任意数字:",s),{weightValue:parseFloat(s[1]),unit:"lb"}):(console.warn("无法从字符串中提取重量信息:",l),{weightValue:0,unit:"lb"})};z(()=>{console.log("生成groupedByWeight计算属性，基础费用数据:",_.value);const l=new Map;if(!_.value||_.value.length===0)return console.warn("基础费用数据为空，返回空数组"),[];try{_.value.forEach((t,e)=>{console.log(`处理基础费用项 ${e}:`,t);try{const{weightValue:s,unit:n}=J(t.weight_band),d=`${s}-${n}`;l.has(d)||l.set(d,{weightValue:s,unit:n,zones:{}});const y=l.get(d);y&&(console.log(`添加区域 ${t.zone} 的价格 ${t.price} 到重量 ${s}${n}`),y.zones[t.zone.toString()]=t.price)}catch(s){console.error("处理基础费用项时出错:",s)}});const a=Array.from(l.values()).sort((t,e)=>t.unit!==e.unit?t.unit==="oz"&&e.unit==="lb"?-1:t.unit==="lb"&&e.unit==="oz"?1:t.unit.localeCompare(e.unit):t.weightValue-e.weightValue);return console.log("分组后的重量数据:",a),a}catch(a){return console.error("生成groupedByWeight计算属性时出错:",a),[]}});const Y=async()=>{$.value=!0;try{const l=L.value;if(!l){b.warning("产品代码不能为空"),Z.push("/product/list");return}console.log("获取产品详情, 产品代码:",l);let a=0;const t=3;for(;a<t;)try{a>0&&(console.log(`尝试第 ${a+1} 次获取产品详情...`),await new Promise(d=>setTimeout(d,1e3*a))),console.log(`正在调用API获取产品 ${l} 详情...`);const e=await Se({show_all:!0,t:new Date().getTime()});console.log("获取产品列表响应:",e);let s=null;if(e&&"data"in e&&Array.isArray(e.data)&&(console.log(`获取到 ${e.data.length} 个产品，开始查找匹配的产品...`),e.data.forEach(d=>{console.log(`产品: ${d.code} (ID: ${d.id})`)}),s=e.data.find(d=>d.code&&d.code.trim()===l.trim()),s?console.log(`找到匹配的产品: ${s.code} (ID: ${s.id})`):console.warn(`未找到产品代码为 ${l} 的产品`)),!s)throw new Error(`未找到产品代码为 ${l} 的产品`);i.value=s,console.log("产品详情数据:",i.value),console.log("产品代码:",i.value.code),console.log("产品ID:",i.value.id),console.log("产品名称:",i.value.name);const n=s.id;console.log(`使用产品ID: ${n} 加载相关数据`),N.value=!1,await X(n);break}catch(e){if(console.error("产品数据处理失败:",e),a===t-1){b.error(`数据处理失败: ${e.message}`),Z.push("/product/list");return}a++}}catch(l){console.error("产品详情获取失败:",l),b.error({message:"获取产品详情发生错误，请刷新页面重试",duration:5e3,showClose:!0}),Z.push("/product/list")}finally{$.value=!1}},W=()=>{console.log("刷新数据，模拟数据开关状态:",N.value),N.value?(m.value=[],_.value=[],h.value=[],k.value=[],A.value=[],S.value=[],x(),b.success("已启用模拟数据，数据已刷新")):L.value&&(Y(),b.info("已关闭模拟数据，正在加载真实数据"))};j(N,l=>{W()});const X=async l=>{if(!l&&(!i.value||!i.value.id)){console.warn("没有产品ID，无法加载相关数据");return}const a=l||i.value.id,t=String(a);try{try{console.log(`开始获取产品ID为 ${t} 的重量范围数据`);const e=await Ie(t);console.log("重量范围原始响应:",e);let s=[];e?"items"in e&&Array.isArray(e.items)?(s=e.items,console.log("从items获取到重量范围数据:",s)):Array.isArray(e)?(s=e,console.log("从数组获取到重量范围数据:",s)):e.data&&Array.isArray(e.data)?(s=e.data,console.log("从data数组获取到重量范围数据:",s)):e&&typeof e=="object"?(s=[e].filter(Boolean),console.log("从对象转换得到重量范围数据:",s)):(s=[],console.warn("未能从响应中提取重量范围数据")):(s=[],console.warn("重量范围响应为空")),m.value=s.map(n=>({id:n.id||`weight-range-${Math.random().toString(36).substring(2,9)}`,min_weight:typeof n.min_weight=="number"?n.min_weight:n.weight_min!==void 0?Number(n.weight_min):0,max_weight:typeof n.max_weight=="number"?n.max_weight:n.weight_max!==void 0?Number(n.weight_max):null,created_at:n.created_at||new Date().toISOString(),updated_at:n.updated_at||void 0,pricing_type:n.pricing_type||"STEP",base_price:typeof n.base_price=="number"?n.base_price:0,price_per_unit:typeof n.price_per_unit=="number"?n.price_per_unit:0,sequence:typeof n.sequence=="number"?n.sequence:0,is_special:!!n.is_special,product_id:n.product_id||t})),console.log("处理后的重量范围数据:",m.value),console.log("重量范围数据数量:",m.value.length)}catch(e){console.error("获取重量范围失败:",e),m.value=[]}try{console.log("开始获取附加费数据");const e=await De(t);console.log("附加费原始响应:",e);let s=[];e?"items"in e&&Array.isArray(e.items)?(s=e.items,console.log("从items获取到附加费数据:",s)):Array.isArray(e)?(s=e,console.log("从数组获取到附加费数据:",s)):e.data&&Array.isArray(e.data)?(s=e.data,console.log("从data数组获取到附加费数据:",s)):e&&typeof e=="object"?(s=[e].filter(Boolean),console.log("从对象转换得到附加费数据:",s)):(s=[],console.warn("未能从响应中提取附加费数据")):(s=[],console.warn("附加费响应为空")),h.value=s.map(n=>{const d={id:n.id||`surcharge-${Math.random().toString(36).substring(2,9)}`,name:n.name||n.surcharge_type||"未命名附加费",type:n.type||"fixed",value:typeof n.value=="number"?n.value:n.fee!==void 0?Number(n.fee):0,is_active:n.is_active!==void 0?n.is_active:!0,surcharge_type:n.surcharge_type||n.type||"OTHER",subtype:n.subtype||"",condition_description:n.condition_description||n.description||"",zone_values:n.zone_values||n.zone_fees||{}};if(n.zones&&typeof n.zones=="object"){d.zone_values={};for(const[y,R]of Object.entries(n.zones))d.zone_values[y]=Number(R)}return d}),console.log("处理后的附加费数据:",h.value),console.log("附加费数据数量:",h.value.length)}catch(e){console.error("获取附加费失败:",e),h.value=[]}try{console.log("开始获取特殊规则数据");const e=await xe(t);console.log("特殊规则原始响应:",e);let s=[];try{if(!e)s=[];else if(Array.isArray(e))s=e;else if(typeof e=="object"){const n=e;n.data?Array.isArray(n.data)?s=n.data:typeof n.data=="object"&&!Array.isArray(n.data)&&(s=[n.data]):n.items&&Array.isArray(n.items)?s=n.items:n.results&&Array.isArray(n.results)?s=n.results:s=[e]}console.log("提取的规则原始数据:",s),k.value=s.filter(n=>n).map(n=>{var d;return{id:n.id??void 0,name:n.name||"",rule_type:n.rule_type||"SPECIAL_TIME",priority:typeof n.priority=="number"?n.priority:50,status:typeof n.status=="boolean"?n.status:!0,description:n.description||`${n.name||""} (${((d=n.conditions)==null?void 0:d.surcharge_type)||"未知类型"})`,conditions:n.conditions||{},actions:n.actions||{},created_at:n.created_at||new Date().toISOString(),updated_at:n.updated_at}})}catch(n){console.error("解析特殊规则数据时出错:",n),k.value=[]}console.log("处理后的特殊规则数据:",k.value)}catch(e){console.error("获取特殊规则失败:",e),k.value=[]}try{console.log("开始获取区域价格数据");const e=await ke(t);console.log("区域价格原始响应:",e);let s=[];e&&("items"in e&&Array.isArray(e.items)?(s=e.items,console.log("从items获取到区域价格数据:",s)):Array.isArray(e)?(s=e,console.log("从数组获取到区域价格数据:",s)):e.data&&Array.isArray(e.data)?(s=e.data,console.log("从data数组获取到区域价格数据:",s)):e&&typeof e=="object"?(s=[e].filter(Boolean),console.log("从对象转换得到区域价格数据:",s)):(s=[],console.warn("未能从响应中提取区域价格数据"))),console.log("提取的区域价格数据:",s),console.log("区域价格数据长度:",s.length),_.value=P(s),console.log("格式化后的基础费用数据:",_.value),console.log("基础费用数据长度:",_.value.length)}catch(e){console.error("获取区域价格失败:",e),_.value=[]}try{console.log("开始处理旺季附加费数据"),k.value&&k.value.length>0?(A.value=k.value.filter(e=>e.rule_type==="SPECIAL_TIME"||e.rule_type==="SEASONAL").map(e=>{var y,R,r,u;const s=((y=e.conditions)==null?void 0:y.surcharge_type)||"",n=Te[s]||s;return{id:e.id||`temp-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,name:e.name||Le[s]||"未命名旺季费",surcharge_type:n,start_date:((R=e.conditions)==null?void 0:R.start_date)||"",end_date:((r=e.conditions)==null?void 0:r.end_date)||"",fee_amount:typeof((u=e.actions)==null?void 0:u.fee_amount)=="number"?e.actions.fee_amount:0,is_active:typeof e.status=="boolean"?e.status:!0,description:e.description||""}}),console.log(`从${k.value.length}个特殊规则中提取了${A.value.length}个旺季附加费`)):(console.log("没有找到特殊规则数据，无法提取旺季附加费"),A.value=[]),console.log("处理后的旺季附加费数据:",A.value)}catch(e){console.error("处理旺季附加费数据失败:",e),A.value=[]}try{console.log("开始获取增值服务数据");try{const e=await Re(t);e?"items"in e&&Array.isArray(e.items)?S.value=e.items:Array.isArray(e)?S.value=e:e.data&&Array.isArray(e.data)?S.value=e.data:e&&typeof e=="object"?S.value=[e].filter(Boolean):S.value=[]:S.value=[],console.log("增值服务数据:",S.value)}catch(e){const s=e;s.response&&s.response.status===404?(console.warn("增值服务API未实现，请联系后端开发人员"),b.warning("增值服务功能正在开发中，暂不可用"),G.value=!0):(console.error("获取增值服务失败:",e),b.error("获取增值服务数据失败"),G.value=!0),S.value=[]}}catch(e){console.error("处理增值服务数据失败:",e),S.value=[]}}catch(e){console.error("加载产品相关数据失败:",e),b.warning("部分产品相关数据加载失败")}finally{const e=_.value&&_.value.length>0,s=h.value&&h.value.length>0,n=m.value&&m.value.length>0&&m.value.some(d=>d.product_id===parseInt(t));!e||!s?(console.log("API数据不完整，启用模拟数据："),console.log("- 有效区域价格数据:",e),console.log("- 有效附加费数据:",s),console.log("- 有效重量段数据:",n),console.log("开始生成模拟数据..."),N.value=!0,x(),console.log("模拟数据生成完成")):console.log("已获取到真实数据，不生成模拟数据")}},P=l=>{console.log("开始格式化区域价格数据，原始数据:",l);const a=[];return!l||l.length===0?(console.warn("区域价格数据为空，返回空数组"),a):(console.log("区域价格数据第一项:",l[0]),l.forEach((t,e)=>{const s=t.zone||t.zone_number||`Zone${e+1}`;console.log(`处理区域价格项 ${e}，区域:`,s);const n=t.min_weight!==void 0?t.min_weight:t.weight_min!==void 0?t.weight_min:0,d=t.max_weight!==void 0?t.max_weight:t.weight_max!==void 0?t.weight_max:null;let y="";d!==null?y=`${n} - ${d} ${t.weight_unit||"lb"}`:y=`${n}+ ${t.weight_unit||"lb"}`;const R=t.price!==void 0?t.price:t.rate!==void 0?t.rate:t.fee!==void 0?t.fee:0,r={id:t.id||`zone-price-${e}`,zone:s.toString(),weight_band:y,price:Number(R),effective_date:t.effective_date||new Date().toISOString().split("T")[0]};console.log("添加基础费用项:",r),a.push(r),t.rates&&Array.isArray(t.rates)&&(console.log(`区域 ${s} 包含rates数组:`,t.rates),t.rates.forEach((u,E)=>{const T={id:`${r.id}-rate-${E}`,zone:s.toString(),weight_band:u.weight_range||u.weight_band||`${u.min_weight||0} - ${u.max_weight||"无上限"}`,price:Number(u.price||u.rate||u.value||0),effective_date:u.effective_date||r.effective_date};console.log("添加嵌套费率项:",T),a.push(T)})),t.prices&&Array.isArray(t.prices)&&(console.log(`区域 ${s} 包含prices数组:`,t.prices),t.prices.forEach((u,E)=>{const T={id:`${r.id}-price-${E}`,zone:s.toString(),weight_band:u.weight_range||u.weight_band||`${u.min_weight||0} - ${u.max_weight||"无上限"}`,price:Number(u.price||u.rate||u.value||0),effective_date:u.effective_date||r.effective_date};console.log("添加嵌套价格项:",T),a.push(T)}))}),console.log("格式化完成，转换后的基础费用数据:",a),console.log("基础费用数据项数量:",a.length),a)},Q=()=>{Z.push("/product/list")},K=()=>{if(!i.value.id){b.warning("请先选择要编辑的产品");return}console.log("准备跳转到编辑页面，产品信息:",i.value),console.log("当前激活的tab:",O.value);try{try{const t=A.value.map(e=>({...e,surcharge_type:e.surcharge_type}));localStorage.setItem("current_product_seasonal_fees",JSON.stringify(t)),console.log("已保存旺季附加费数据到localStorage:",t)}catch(t){console.error("保存旺季附加费数据到localStorage失败:",t)}const l=i.value.code;if(!l)throw new Error("产品代码不能为空");let a="";switch(O.value){case"basic":a=`/product/edit/${l}/basic`;break;case"basefee":a=`/product/edit/${l}/basefee`;break;case"surcharge":a=`/product/edit/${l}/surcharge`;break;case"peak_season":a=`/product/edit/${l}/peak_season`;break;case"weight_breaks":a=`/product/edit/${l}/weight_breaks`;break;default:a=`/product/edit/${l}/basic`}console.log("跳转路径:",a),Z.push({path:a}).catch(t=>{console.error("路由跳转失败:",t),b.error("页面跳转失败，请稍后重试")})}catch(l){console.error("编辑操作失败:",l),b.error("操作失败，请稍后重试")}},x=()=>{var s,n;console.log("正在生成模拟数据，产品信息:",i.value);const l=i.value.code||"FDX-JCF-23";i.value.id;const a=i.value.name||"FEDEX JCF";i.value.provider_name;const t=i.value.effective_date||"2023-01-01",e=i.value.expiration_date||"2023-12-31";console.log(`使用当前产品信息生成模拟数据: ${l} (${a})`),_.value=[{id:"mock-1",zone:"Zone2",weight_band:"4 oz",price:7.25,effective_date:t},{id:"mock-2",zone:"Zone2",weight_band:"8 oz",price:7.4,effective_date:t},{id:"mock-3",zone:"Zone2",weight_band:"12 oz",price:7.55,effective_date:t},{id:"mock-4",zone:"Zone2",weight_band:"15.99 oz",price:7.7,effective_date:t},{id:"mock-5",zone:"Zone2",weight_band:"1 lb",price:8.68,effective_date:t},{id:"mock-6",zone:"Zone2",weight_band:"2 lb",price:9.35,effective_date:t},{id:"mock-7",zone:"Zone2",weight_band:"5 lb",price:14.85,effective_date:t},{id:"mock-8",zone:"Zone2",weight_band:"10 lb",price:21.65,effective_date:t},{id:"mock-9",zone:"Zone2",weight_band:"20 lb",price:26.85,effective_date:t},{id:"mock-10",zone:"Zone3",weight_band:"4 oz",price:7.5,effective_date:t},{id:"mock-11",zone:"Zone3",weight_band:"8 oz",price:7.65,effective_date:t},{id:"mock-12",zone:"Zone3",weight_band:"12 oz",price:7.8,effective_date:t},{id:"mock-13",zone:"Zone3",weight_band:"15.99 oz",price:7.95,effective_date:t},{id:"mock-14",zone:"Zone3",weight_band:"1 lb",price:8.68,effective_date:t},{id:"mock-15",zone:"Zone3",weight_band:"2 lb",price:9.45,effective_date:t},{id:"mock-16",zone:"Zone3",weight_band:"5 lb",price:15.3,effective_date:t},{id:"mock-17",zone:"Zone3",weight_band:"10 lb",price:22.35,effective_date:t},{id:"mock-18",zone:"Zone3",weight_band:"20 lb",price:28.95,effective_date:t},{id:"mock-19",zone:"Zone4",weight_band:"4 oz",price:7.95,effective_date:t},{id:"mock-20",zone:"Zone4",weight_band:"8 oz",price:8.1,effective_date:t},{id:"mock-21",zone:"Zone4",weight_band:"12 oz",price:8.25,effective_date:t},{id:"mock-22",zone:"Zone4",weight_band:"15.99 oz",price:8.4,effective_date:t},{id:"mock-23",zone:"Zone4",weight_band:"1 lb",price:8.68,effective_date:t},{id:"mock-24",zone:"Zone4",weight_band:"2 lb",price:9.65,effective_date:t},{id:"mock-25",zone:"Zone4",weight_band:"5 lb",price:16.25,effective_date:t},{id:"mock-26",zone:"Zone4",weight_band:"10 lb",price:25.4,effective_date:t},{id:"mock-27",zone:"Zone4",weight_band:"20 lb",price:35.8,effective_date:t}],console.log(`生成了 ${_.value.length} 条基础费用模拟数据`),h.value=[{id:"mock-s1",name:"附加处理费",surcharge_type:"ADDITIONAL_HANDLING",subtype:"A-weight",condition_description:"50磅 < 实际重量 < 150磅",type:"fixed",value:8.49,is_active:!0,zone_values:{Zone2:8.49,Zone3:8.49,Zone4:8.96,Zone5:8.96,Zone6:9.66,Zone7:9.66,Zone8:9.66}},{id:"mock-s2",name:"附加处理费",surcharge_type:"ADDITIONAL_HANDLING",subtype:"B-length",condition_description:"48英寸 < 最长边 ≤ 96英寸",type:"fixed",value:5.42,is_active:!0,zone_values:{Zone2:5.42,Zone3:5.88,Zone4:5.88,Zone5:6.35,Zone6:6.35,Zone7:6.99,Zone8:6.99}},{id:"mock-s3",name:"超大尺寸商业件",surcharge_type:"OVERSIZE_COMMERCIAL",subtype:"a",condition_description:"实际重量 < 150磅，且130英寸 < 长+周长[2*(宽+高)] ≤ 165英寸",type:"fixed",value:37.29,is_active:!0,zone_values:{Zone2:37.29,Zone3:40.43,Zone4:40.43,Zone5:42.8,Zone6:42.8,Zone7:45.96,Zone8:45.96}}],console.log(`生成了 ${h.value.length} 条附加费模拟数据`),A.value=[{id:"mock-pss1",name:"附加处理费",surcharge_type:"ADDITIONAL_HANDLING",start_date:t,end_date:e,fee_amount:4.68,description:"所有分区统一价格",is_active:!0},{id:"mock-pss2",name:"超大尺寸商业件",surcharge_type:"OVERSIZE_COMMERCIAL",start_date:t,end_date:e,fee_amount:54.82,description:"所有分区统一价格",is_active:!0},{id:"mock-pss3",name:"超大尺寸住宅件",surcharge_type:"OVERSIZE_RESIDENTIAL",start_date:t,end_date:e,fee_amount:45.48,description:"所有分区统一价格",is_active:!0},{id:"mock-pss4",name:"附加处理费",surcharge_type:"ADDITIONAL_HANDLING",start_date:t,end_date:e,fee_amount:5.85,description:"高峰期阶段二费率",is_active:!0}],m.value.length===0&&(m.value=[{id:"WB-001",min_weight:0,max_weight:1,pricing_type:"STEP",base_price:10,product_id:((s=i.value)==null?void 0:s.id)||"",is_special:!1,effective_date:new Date().toISOString().split("T")[0],expiration_date:(()=>{const d=new Date;return d.setFullYear(d.getFullYear()+1),d.toISOString().split("T")[0]})(),status:!0,created_at:new Date().toISOString(),updated_at:new Date().toISOString()},{id:"WB-002",min_weight:1.01,max_weight:5,pricing_type:"STEP",base_price:15,product_id:((n=i.value)==null?void 0:n.id)||"",is_special:!1,effective_date:new Date().toISOString().split("T")[0],expiration_date:(()=>{const d=new Date;return d.setFullYear(d.getFullYear()+1),d.toISOString().split("T")[0]})(),status:!0,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}],console.log(`生成了 ${m.value.length} 条重量段模拟数据`))};ce(async()=>{if(L.value){$.value=!0;try{N.value=!1,console.log("首次加载详情页，产品代码:",L.value),await Y(),console.log("已获取真实数据:",i.value)}catch(l){console.error("初始化数据失败:",l),b.error("加载数据失败，请刷新重试"),console.log("真实数据加载失败，但不会回退到模拟数据")}finally{$.value=!1}}else b.warning("没有提供产品代码，无法加载产品详情"),Z.push("/product/list")}),z(()=>h.value.map(l=>{const a={fixed:"固定金额",percentage:"百分比",ADDITIONAL_HANDLING:"附加处理费",RESIDENTIAL_DELIVERY:"住宅附加费",FUEL_SURCHARGE:"燃油附加费",OVERSIZE_COMMERCIAL:"超大尺寸费用"};let t="";return l.surcharge_type?t=a[l.surcharge_type]||l.surcharge_type:t=a[l.type]||l.name,{...l,type_display:t,subtype:l.subtype||"",condition_description:l.condition_description||""}})),j(O,l=>{console.log("切换到选项卡:",l),l==="zone"&&_.value.length===0?ee():l==="surcharge"&&h.value.length===0?te():l==="peak_season"&&A.value.length===0?oe():l==="weight_breaks"&&m.value.length===0&&ae()});const ee=()=>{_.value.length===0&&(console.log("正在生成基础费用模拟数据..."),x())},te=()=>{h.value.length===0&&(console.log("正在生成附加费模拟数据..."),x())},oe=()=>{A.value.length===0&&(console.log("正在生成旺季附加费模拟数据..."),x())},ae=()=>{var l,a;m.value.length===0&&(m.value=[{id:"WB-001",min_weight:0,max_weight:1,pricing_type:"STEP",base_price:10,product_id:((l=i.value)==null?void 0:l.id)||"",is_special:!1,effective_date:new Date().toISOString().split("T")[0],expiration_date:(()=>{const t=new Date;return t.setFullYear(t.getFullYear()+1),t.toISOString().split("T")[0]})(),status:!0,created_at:new Date().toISOString(),updated_at:new Date().toISOString()},{id:"WB-002",min_weight:1.01,max_weight:5,pricing_type:"STEP",base_price:15,product_id:((a=i.value)==null?void 0:a.id)||"",is_special:!1,effective_date:new Date().toISOString().split("T")[0],expiration_date:(()=>{const t=new Date;return t.setFullYear(t.getFullYear()+1),t.toISOString().split("T")[0]})(),status:!0,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}])},U=(l,a)=>{const t=B.value.find(e=>e.weight_band===l&&e.zone.toLowerCase()===a.toLowerCase());return t?t.base_rate:"-"},ne=l=>({ADDITIONAL_HANDLING:"额外处理费",OVERSIZE:"超大超尺寸费",RESIDENTIAL:"住宅地址附加费",DELIVERY_AREA:"偏远地区配送费",ADDRESS_CORRECTION:"地址修正费",SIGNATURE:"签名服务费",SHIPPING_CHARGE_CORRECTION:"运费调整费",UNAUTHORIZED:"不可发包裹",FUEL_SURCHARGE:"燃油附加费",OTHER:"其他服务"})[l]||l,le=l=>({ADDITIONAL_HANDLING:"额外处理费",OVERSIZE_COMMERCIAL:"超大超尺寸费(商业地址)",OVERSIZE_RESIDENTIAL:"超大超尺寸费(住宅地址)",RESIDENTIAL:"住宅地址附加费",UNAUTHORIZED:"不可发包裹"})[l]||l,se=(l,a)=>l[a]!==void 0?l[a]:!l.zones||l.zones.includes(a.replace("zone",""))?l.amount+(l.charge_type==="PERCENTAGE"?"%":""):"-";return(l,a)=>{const t=fe,e=me,s=he,n=we,d=Ee,y=Ae,R=_e;return ue((f(),v("div",ze,[o("div",Ce,[o("div",Ve,[g(e,{onClick:Q,type:"default",plain:"",size:"large"},{default:w(()=>[g(t,null,{default:w(()=>[g(M(ve))]),_:1}),a[1]||(a[1]=C(" 返回 "))]),_:1}),o("h1",null,c(i.value.name||"产品详情"),1),i.value.id?(f(),pe(s,{key:0,type:i.value.status===1?"success":"danger",effect:"dark"},{default:w(()=>[C(c(i.value.status===1?"启用":"禁用"),1)]),_:1},8,["type"])):ge("",!0)]),o("div",Me,[g(e,{type:"primary",onClick:W},{default:w(()=>[g(t,null,{default:w(()=>[g(M(ye))]),_:1}),a[2]||(a[2]=C("刷新 "))]),_:1}),g(e,{type:"primary",onClick:K,disabled:!i.value.id},{default:w(()=>[g(t,null,{default:w(()=>[g(M(be))]),_:1}),a[3]||(a[3]=C("编辑 "))]),_:1},8,["disabled"])])]),g(d,{modelValue:O.value,"onUpdate:modelValue":a[0]||(a[0]=r=>O.value=r),class:"detail-tabs",type:"border-card",stretch:""},{default:w(()=>[g(n,{label:"基本信息",name:"basic"},{default:w(()=>[o("div",Fe,[a[5]||(a[5]=o("h4",null,"产品信息：",-1)),o("div",He,[o("div",Ge,[o("table",Ye,[a[4]||(a[4]=o("thead",null,[o("tr",null,[o("th",null,"产品代码"),o("th",null,"产品名称"),o("th",null,"服务商"),o("th",null,"体积重系数"),o("th",null,"体积重系数单位"),o("th",null,"生效日期"),o("th",null,"失效日期"),o("th",null,"国家"),o("th",null,"币种"),o("th",null,"重量单位"),o("th",null,"尺寸单位"),o("th",null,"描述"),o("th",null,"状态"),o("th",null,"启用重量段")])],-1)),o("tbody",null,[o("tr",null,[o("td",null,c(i.value.code||"无"),1),o("td",null,c(i.value.name||"无"),1),o("td",null,c(i.value.provider_name||"无"),1),o("td",null,c(i.value.dim_factor||"无"),1),o("td",null,c(i.value.dim_factor_unit||"无"),1),o("td",null,c(i.value.effective_date||"无"),1),o("td",null,c(i.value.expiration_date||"无"),1),o("td",null,c(i.value.country||"无"),1),o("td",null,c(i.value.currency||"无"),1),o("td",null,c(i.value.weight_unit||"无"),1),o("td",null,c(i.value.dim_unit||"无"),1),o("td",null,c(i.value.description||"无"),1),o("td",null,c(i.value.status?"启用":"禁用"),1),o("td",null,c(i.value.enabled_weight_band?"是":"否"),1)])])])])])])]),_:1}),g(n,{label:"基础费用",name:"baseFees"},{default:w(()=>[o("div",We,[a[8]||(a[8]=o("h4",null,"基础费用：",-1)),o("div",Ue,[o("div",je,[o("table",Be,[o("thead",null,[o("tr",null,[a[6]||(a[6]=o("th",null,"重量",-1)),a[7]||(a[7]=o("th",null,"单位",-1)),(f(),v(I,null,D(17,r=>o("th",{key:`zone-header-${r}`},"Zone"+c(r),1)),64))])]),o("tbody",null,[(f(!0),v(I,null,D(H.value,(r,u)=>(f(),v("tr",{key:`weight-band-${u}`},[o("td",null,c(r.min_weight)+c(r.max_weight?`-${r.max_weight}`:"+"),1),o("td",null,c(i.value.weight_unit),1),(f(),v(I,null,D(17,E=>o("td",{key:`zone-rate-${E}`},c(U(r.id,`zone${E}`)),1)),64))]))),128))])])])])])]),_:1}),g(n,{label:"附加费用",name:"surcharges"},{default:w(()=>[o("div",qe,[a[12]||(a[12]=o("h4",null,"附加费用：",-1)),o("div",Je,[o("div",Xe,[o("table",Pe,[o("thead",null,[o("tr",null,[a[9]||(a[9]=o("th",null,"附加费类型",-1)),a[10]||(a[10]=o("th",null,"子类型",-1)),a[11]||(a[11]=o("th",null,"条件描述",-1)),(f(),v(I,null,D(17,r=>o("th",{key:`surcharge-zone-header-${r}`},"Zone"+c(r),1)),64))])]),o("tbody",null,[(f(!0),v(I,null,D(h.value,(r,u)=>(f(),v("tr",{key:`surcharge-${u}`},[o("td",null,c(ne(r.surcharge_type||"")),1),o("td",null,c(r.subtype||"无"),1),o("td",null,c(r.condition_description||"无"),1),(f(),v(I,null,D(17,E=>o("td",{key:`surcharge-zone-${E}`},c(se(r,`zone${E}`)),1)),64))]))),128))])])])])])]),_:1}),g(n,{label:"旺季附加费",name:"peakSeasonSurcharges"},{default:w(()=>[o("div",Qe,[a[14]||(a[14]=o("h4",null,"旺季附加费：",-1)),o("div",Ke,[o("div",et,[o("table",tt,[a[13]||(a[13]=o("thead",null,[o("tr",null,[o("th",null,"附加费类型"),o("th",null,"开始日期"),o("th",null,"结束日期"),o("th",null,"费用金额")])],-1)),o("tbody",null,[(f(!0),v(I,null,D(q.value,(r,u)=>(f(),v("tr",{key:`pss-${u}`},[o("td",null,c(le(r.surcharge_type)),1),o("td",null,c(r.start_date),1),o("td",null,c(r.end_date),1),o("td",null,c(r.fee_amount),1)]))),128))])])])])])]),_:1}),g(n,{label:"重量段",name:"weightBands"},{default:w(()=>[o("div",ot,[a[21]||(a[21]=o("h4",null,"重量段表：",-1)),o("div",at,[o("div",nt,[o("table",lt,[o("thead",null,[o("tr",null,[a[15]||(a[15]=o("th",null,"重量段ID",-1)),a[16]||(a[16]=o("th",null,"最小重量",-1)),a[17]||(a[17]=o("th",null,"最大重量",-1)),a[18]||(a[18]=o("th",null,"计价类型",-1)),a[19]||(a[19]=o("th",null,"是否特殊重量段",-1)),a[20]||(a[20]=o("th",null,"基础价格",-1)),(f(),v(I,null,D(17,r=>o("th",{key:`weight-band-zone-header-${r}`},"Zone"+c(r)+"基础价格",1)),64))])]),o("tbody",null,[(f(!0),v(I,null,D(H.value,(r,u)=>(f(),v("tr",{key:`weight-band-detail-${u}`},[o("td",null,c(r.id),1),o("td",null,c(r.min_weight),1),o("td",null,c(r.max_weight||"无上限"),1),o("td",null,c(r.pricing_type==="STEP"?"阶梯式":"线性"),1),o("td",null,c(r.is_special?"是":"否"),1),o("td",null,c(r.base_price||"无"),1),(f(),v(I,null,D(17,E=>o("td",{key:`weight-band-zone-rate-${E}`},c(U(r.id,`zone${E}`)),1)),64))]))),128))])])])])])]),_:1})]),_:1},8,["modelValue"]),g(y,{right:20,bottom:20})])),[[R,$.value]])}}}),ut=Ne(st,[["__scopeId","data-v-ad336f18"]]);export{ut as default};
