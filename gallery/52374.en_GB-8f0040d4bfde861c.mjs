(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[52374],{361259:(e,t,n)=>{n.d(t,{$:()=>l,r:()=>c});var a=n(667294),o=n(829407),r=n(497529),i=n(773285),s=n(425288),d=n(785893);const{Provider:p,useHook:l}=(0,s.Z)("PinRep");function c({children:e}){const[t,n]=(0,a.useState)(!0),[s,l]=(0,a.useState)(!1),c=(0,r.Z)(1000069),{checkExperiment:m}=(0,i.F)();(0,o.Z)((()=>{c.triggerExperimentsForPlacement(1000069);const e=m("web_simplify_pin_grid",{dangerouslySkipActivation:!0}).group.includes("enabled");(async()=>{var t,a,o,r;const i=e?await c.fetchAllExperiences():{};i&&i.payload&&500417===(null===(t=i.payload.experiences)||void 0===t||null===(a=t[1000069])||void 0===a?void 0:a.experience_id)&&null!==(o=i.payload.experiences)&&void 0!==o&&null!==(r=o[1000069])&&void 0!==r&&r.display_data.hide_footer||n(!1),l(!0)})()}));const u=(0,a.useMemo)((()=>({hasSimplifiedPinGridExpLoaded:s,hidePinRepFooter:t})),[s,t]);return(0,d.jsx)(p,{value:u,children:e})}},745760:(e,t,n)=>{n.d(t,{Ch:()=>m,nc:()=>v,a:()=>A,ZP:()=>h,cA:()=>T,li:()=>E,h1:()=>l});var a=n(682492),o=n.n(a),r=n(6637),i=n(594881),s=n(706922);var d=n(385740),p=n(172045);const l=()=>1e6*Date.now(),c=[6945,170],m={3829:"articleImpressions",18:"pinImpressions",3700:"boardImpressions",3803:"searchImpressions",170:"storyImpression",3704:"userImpressions"},u=[4700,4701,4702,4703,7042,7043],_=e=>function(e){let t=e.length;for(let n=e.length-1;n>=0;n-=1){const a=e.charCodeAt(n);a>127&&a<=2047?t+=1:a>2047&&a<=65535&&(t+=2),a>=56320&&a<=57343&&(n-=1)}return t}(JSON.stringify(e)),g=e=>c.includes(e);let y;function f(){const e=new Date;y?y&&y.getUTCDate()!==e.getUTCDate()&&(y=e,(0,i.Z)()):y=e}function b(e){return e.reduce(((e,t)=>{const n=e.find((a=t,e=>e.view_type===a.viewType&&e.view_parameter===a.viewParameter&&e.event_type===a.eventType&&e.object_id_str===a.objectIdStr&&(0,s.Z)(e.view_data,a.viewData)));var a;if(n&&!g(t.eventType))t.impressionType in n.event_data?n.event_data[t.impressionType].push(t.eventData):n.event_data[t.impressionType]=[t.eventData];else{const n={event_type:t.eventType,view_parameter:t.viewParameter,view_type:t.viewType,view_data:t.viewData,time:l(),component:t.component,clientUUID:(0,p.Z)(),aux_data:t.auxData||{},appState:t.appState,event_data:{[t.impressionType]:g(t.eventType)?{...t.eventData,...(t.eventData||{})[t.impressionType]}:[t.eventData]},object_id_str:t.objectIdStr||void 0};e.push(n)}return e}),[])}const T=e=>{const t=e.event_type,n=u.includes(t),a=(0,d.BE)();return!(!n&&13!==t&&!a)},E=(e,t)=>{const n=e.event_type,a=u.includes(n),r=(0,d.BE)();return a?e:13===n&&e.view_type?(null==t||t({viewType:e.view_type,viewParameter:e.view_parameter,viewData:null!=r&&r.viewData?o()(r.viewData,e.view_data):o()({},e.view_data)}),e):!r||e.view_type&&e.view_parameter?e:{...e,view_type:r.viewType,view_parameter:r.viewParameter,view_data:e.view_data?o()(e.view_data,r.viewData):o()({},r.viewData)}},v=(e,t)=>{var n,a;const o=e.component,r=e.object_id_str,i=e.view_type,s=e.event_type,d=e.appState;return null!==(n=((null===(a=e.event_data)||void 0===a?void 0:a[t])||[]).map((n=>({auxData:e.aux_data,...o?{component:o}:{},eventData:n,...s?{eventType:s}:{},...i?{viewType:i}:{},viewData:e.view_data,viewParameter:e.view_parameter,...r?{objectIdStr:r}:null,impressionType:t,appState:d}))))&&void 0!==n?n:[]},A=(e,t)=>({...e.component?{component:e.component}:{},...e.object_id_str?{objectIdStr:e.object_id_str}:null,...e.view_type?{viewType:e.view_type}:{},eventType:e.event_type,auxData:e.aux_data,impressionType:t,viewData:e.view_data,viewParameter:e.view_parameter,eventData:e.event_data});function h(){let e=[],t=[],n=0;function a(){return[...e,...b(t)]}function o(){e=[],t=[],n=0}function i(e=!1){const t=a();t.length&&(r.Z.create("ContextLogResource",{events:t,report_time:l()}).callCreate({async:!e,showError:!1}),o(),f())}return{flushContextEvents:i,getContextEvents:a,logContextEvent:function({object_id_str:t,...a}){const o={aux_data:{},event_data:{},view_data:{},...a,time:l(),clientUUID:(0,p.Z)(),...t?{object_id_str:t}:null};o.aux_data=function(e){if(!e)return e;const{element:t,eventData:n,component:a,objectId:o,view:r,viewParameter:i,viewData:s,durationNs:d,pairId:p,clientTrackingParams:l,...c}=e;return c}(o.aux_data),n+_(o)>20480&&i(!1),e.push(o),f()},logImpression:function(e){n+_(e)>20480&&i(!1),t.push(e)},resetEventsBuffer:o}}},66743:(e,t,n)=>{n.d(t,{NC:()=>r,Rc:()=>s,WK:()=>p,X9:()=>o,b9:()=>a,f9:()=>d,gu:()=>i});const a="pin-builder-font-faces",o="system-font-faces",r="pin-builder-education-font-faces",i="licensed",s="system",d="brand",p=4},56528:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(6637);const o=e=>{const t=a.Z.create("ApiResource",{url:"/v3/users/password/",data:e});return e.old?t.callCreate({showError:!1}):t.callUpdate({showError:!1})}},584992:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(667294),o=n(425288),r=n(198462),i=n(729524),s=n(860273),d=n(169213),p=n(358864),l=n(558775),c=n(505771),m=n(985271),u=n(383434),_=n(543059),g=n(453821),y=n(638089),f=n(607150),b=n(790348);const T=(0,u.X)("PwtStopwatch"),E=(e,t)=>{if(m.Z){if("start"===t.type&&!e.isTiming){const{name:n,startTime:a,navigationType:o}=t;return(0,b.A9)(`TIMING.${n}`),{isTiming:!0,name:n,isSampled:t.isSampled,startTime:"number"==typeof a?a:m.Z.now(),metricId:{type:"stopwatch",name:n,navigationType:o},pwtStaticContext:t.pwtStaticContext,annotations:e.annotations,binaryAnnotations:e.binaryAnnotations,spans:e.spans,traceId:e.traceId,spanNameUpdates:e.spanNameUpdates}}if(!e.isTiming){if(!t.bypassIsTimingCheck){const n=t.name||e.name;return T("ignoring action - stopwatch is not actively timing",t),(0,b.A9)(`WARN.${n}.noTiming.${t.type}`),e}T("allowing action while stopwatch is not actively timing (bypassIsTimingCheck is set to true)",t)}if("annotate"===t.type){const n=m.Z.now();return T(`adding annotation {${t.label}: ${n}}`),{...e,annotations:e.annotations.concat([{label:t.label,timestamp:n}])}}if("binaryAnnotate"===t.type)return T(`adding binary annotation {${t.name}: ${String(t.value)}}`),{...e,binaryAnnotations:{...e.binaryAnnotations,[t.name]:{value:t.value,type:t.annotationType}}};if("binaryAnnotateOperation"===t.type){const{value:n,type:a}=t.binaryAnnotationValueAndType;if(e.binaryAnnotations[t.name]){const o=e.binaryAnnotations[t.name].value||0;return T(`operating on binary annotation {\n          name: ${t.name}\n          pervious value: ${String(o)}\n          operand: ${String(n)}\n        }`),{...e,binaryAnnotations:{...e.binaryAnnotations,[t.name]:{value:n?t.operation(o,n):o,type:a}}}}return{...e,binaryAnnotations:{...e.binaryAnnotations,[t.name]:{value:n,type:a}}}}if("addSubspan"===t.type){T(`adding subspan {${t.name}}`);-1!==e.spans.findIndex((e=>e.name===t.name))&&T(`WARNING: adding duplicate subspan name {${t.name}}`);const n=t.id||(0,p.Z)();-1!==e.spans.findIndex((e=>e.id===n))&&T(`WARNING: adding duplicate subspan id {${t.name}: ${n}}`);let a=0;return t.startTime?a=t.startTime:e.startTime?a=e.startTime:T(`WARNING: adding subspan {${t.name}} without start time`),{...e,spans:[...e.spans,{name:t.name,id:n,startTime:a,endTime:t.endTime||1/0,annotationMap:{...t.annotations},binaryAnnotationMap:{...t.binaryAnnotations},parentId:t.parentId}]}}if("subspanStart"===t.type){var n;T(`starting subspan {${t.name}}`);-1!==e.spans.findIndex((e=>e.name===t.name))&&T(`WARNING: starting duplicate subspan name {${t.name}}`);const a=t.id||(0,p.Z)();-1!==e.spans.findIndex((e=>e.id===a))&&T(`WARNING: starting duplicate subspan id {${t.name}: ${a}}`);const o=t.parentName?null===(n=e.spans.find((e=>e.name===t.parentName)))||void 0===n?void 0:n.id:null;return{...e,spans:[...e.spans,{name:t.name,id:a,parentId:t.parentId||o,startTime:m.Z.now(),endTime:1/0,annotationMap:{...t.annotations},binaryAnnotationMap:{...t.binaryAnnotations}}]}}if("subspanStop"===t.type){if(T(`stopping subspan {${t.name}}`),!t.id){e.spans.reduce(((e,n)=>(n.name===t.name&&e.push(n),e)),[]).length>1&&(0,b.H)("duplicate_subspan_stop_name",{name:t.name,type:t.type})}const n=t.id?e.spans.findIndex((e=>e.id===t.id)):e.spans.findIndex((e=>e.name===t.name));return n>-1?(e.spans[n].endTime=m.Z.now(),t.annotations&&(e.spans[n].annotationMap={...e.spans[n].annotationMap,...t.annotations}),t.binaryAnnotations&&(e.spans[n].binaryAnnotationMap={...e.spans[n].binaryAnnotationMap,...t.binaryAnnotations})):(0,b.H)("invalid_subspan_stop_name",{name:t.name}),e}if("subspanUpdateName"===t.type){e.spans.reduce(((e,n)=>(n.name===t.currentName&&e.push(n),e)),[]).length>1&&(0,b.H)("duplicate_subspan_stop_name",{name:t.currentName,type:t.type});const n=e.spans.findIndex((e=>e.name===t.currentName));return n>-1?t.updateWhenStopwatchCompletes?e.spanNameUpdates=[...e.spanNameUpdates,{currentName:t.currentName,newName:t.newName}]:(T(`renaming subspan {${t.currentName}} to {${t.newName}}`),e.spans[n].name=t.newName):(0,b.H)("no_subspan_found_to_rename",{name:t.currentName}),e}if("stop"===t.type&&e.isTiming){const{startTime:n,metricId:a,pwtStaticContext:o,annotations:r,binaryAnnotations:d,isSampled:u,spans:b,traceId:E}=e;if(t.stopwatchPerformanceObserver&&t.stopwatchPerformanceObserver.disconnect(),u){const u=t.stopTime||m.Z.now(),v=[...b.map((t=>{t.endTime===1/0&&(t.endTime=u);const n=e.spanNameUpdates.findIndex((e=>t.name===e.currentName));return n>-1&&(T(`renaming subspan {${t.name}} to {${e.spanNameUpdates[n].newName}}`),t.name=e.spanNameUpdates[n].newName,e.spanNameUpdates=e.spanNameUpdates.filter((e=>e.newName!==t.name))),t}))];if(t.manualAndResourceSpans||0===b.length){const e=(0,p.Z)();v.push({name:"network_resources",id:e,startTime:n,endTime:u,annotationMap:{},binaryAnnotationMap:{},parentId:null},...(t.customStopwatchBuffer||[]).map((t=>(0,c.Z)((0,g.p)(t,[]),e))).filter(Boolean))}const A="initial_app_load"===a.navigationType&&(0,s.Z)(),h={type:"COMPLETE",traceId:E,startTime:n,endTime:u,spans:v,annotationMap:{...(0,i.Z)(r),...(0,f.jh)("browser_",A?(0,f.D3)(A):{}),...(0,f.jh)("mark_",(0,_.gQ)())},binaryAnnotationMap:(0,y.ng)({metricId:a,pwtStaticContext:o,binaryAnnotations:d,performanceResourceTimings:t.customStopwatchBuffer||[]})};(0,l.Z)({metricId:a,pwtStaticContext:o,result:h})}return{isTiming:!1,name:e.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,p.Z)(),spanNameUpdates:[]}}if("error"===t.type){const{error:n,stopwatchPerformanceObserver:a}=t;return n&&(0,b.H)(n),a&&a.disconnect(),{isTiming:!1,name:e.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,p.Z)(),spanNameUpdates:[]}}if("abort"===t.type&&e.isTiming){t.stopwatchPerformanceObserver&&t.stopwatchPerformanceObserver.disconnect();const{metricId:n,pwtStaticContext:a}=e,o=t.reason||"";return(0,l.Z)({metricId:n,pwtStaticContext:a,result:{type:"ABORT",reason:o}}),{isTiming:!1,name:e.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,p.Z)(),spanNameUpdates:[]}}}return e},v=({name:e,sampleRate:t,navigationType:n,manualAndResourceSpans:o=!1})=>{const i=(0,r.N5)(),s=(0,a.useRef)([]),l=(0,a.useRef)(null),[c,m]=(0,a.useReducer)(E,{isTiming:!1,name:e,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,p.Z)(),spanNameUpdates:[]});return i?{isTiming:c.isTiming,start:a=>{if(window.PerformanceObserver){const e=1e3;s.current=[],l.current=(0,d.Z)({entryTypes:["resource"]},(t=>{s.current=s.current.concat(t.getEntries()),s.current.length>e&&(s.current=s.current.slice(-e))}))}const o={type:"start",startTime:a,name:e,navigationType:n,pwtStaticContext:i,isSampled:!t||Math.random()<t};return m(o)},stop:e=>m({type:"stop",stopTime:e,stopwatchPerformanceObserver:l.current,customStopwatchBuffer:s.current,manualAndResourceSpans:o}),error:e=>{m({type:"error",stopwatchPerformanceObserver:l.current,error:e})},abort:e=>m({type:"abort",stopwatchPerformanceObserver:l.current,customStopwatchBuffer:s.current,reason:e}),annotate:(e,t,n=!1)=>m({type:"annotate",label:e,parentId:t,bypassIsTimingCheck:n}),binaryAnnotate:(e,t,n,a,o=!1)=>m({type:"binaryAnnotate",name:e,value:t,annotationType:n,parentId:a,bypassIsTimingCheck:o}),binaryAnnotateOperation:({name:e,binaryAnnotationValueAndType:t,operation:n,parentId:a,bypassIsTimingCheck:o=!1})=>m({type:"binaryAnnotateOperation",name:e,binaryAnnotationValueAndType:t,operation:n,parentId:a,bypassIsTimingCheck:o}),addSubspan:({name:e,startTime:t,endTime:n,annotations:a={},binaryAnnotations:o={},parentId:r=null,id:i=null,bypassIsTimingCheck:s=!1})=>m({type:"addSubspan",name:e,startTime:t,endTime:n,annotations:a,binaryAnnotations:o,parentId:r,id:i,bypassIsTimingCheck:s}),subspanStart:({name:e,annotations:t={},binaryAnnotations:n={},parentId:a=null,parentName:o=null,id:r=null,bypassIsTimingCheck:i=!1})=>m({type:"subspanStart",name:e,annotations:t,binaryAnnotations:n,parentId:a,parentName:o,id:r,bypassIsTimingCheck:i}),subspanStop:({name:e,annotations:t,binaryAnnotations:n,id:a,parentId:o,bypassIsTimingCheck:r=!1})=>m({type:"subspanStop",name:e,annotations:t,binaryAnnotations:n,id:a,parentId:o,bypassIsTimingCheck:r}),subspanUpdateName:({currentName:e,newName:t,bypassIsTimingCheck:n,updateWhenStopwatchCompletes:a=!0})=>m({type:"subspanUpdateName",currentName:e,newName:t,bypassIsTimingCheck:n,updateWhenStopwatchCompletes:a}),getSpans:(e,t)=>c.spans.filter((n=>n[e]===t)),getTraceId:()=>c.traceId}:null};var A=n(785893);const h=({name:e,sampleRate:t,abortOnUnloadOrClientNavigation:n=!0,navigationType:i,manualAndResourceSpans:s=!1})=>{const{Provider:d,useMaybeHook:p}=(0,o.Z)(`Stopwatch_${e}`);return{Provider:function({children:o}){const p=v({name:e,sampleRate:t,navigationType:i,manualAndResourceSpans:s}),l=(0,r.fM)(),c=l?l.time:0,m=(0,a.useRef)(!1),u=null==p?void 0:p.isTiming,_=(0,a.useCallback)((t=>{m.current?(m.current=!1,null==p||p.abort(t)):(0,b.A9)(`WARN.${e}.noTiming.abort`)}),[p]),g=(0,a.useCallback)(((e,t)=>{null==p||p.annotate(e,t)}),[p]),y=(0,a.useCallback)(((e,t,n,a)=>{null==p||p.binaryAnnotate(e,t,n,a)}),[p]),f=(0,a.useCallback)((({name:e,binaryAnnotationValueAndType:t,operation:n,parentId:a,bypassIsTimingCheck:o})=>{null==p||p.binaryAnnotateOperation({name:e,binaryAnnotationValueAndType:t,operation:n,parentId:a,bypassIsTimingCheck:o})}),[p]),T=(0,a.useCallback)((({name:e,startTime:t,endTime:n,annotations:a,binaryAnnotations:o,parentId:r,id:i,bypassIsTimingCheck:s})=>{null==p||p.addSubspan({name:e,startTime:t,endTime:n,annotations:a,binaryAnnotations:o,parentId:r,id:i,bypassIsTimingCheck:s})}),[p]),E=(0,a.useCallback)((({name:e,annotations:t,binaryAnnotations:n,parentId:a,parentName:o,id:r,bypassIsTimingCheck:i})=>{null==p||p.subspanStart({name:e,annotations:t,binaryAnnotations:n,parentId:a,parentName:o,id:r,bypassIsTimingCheck:i})}),[p]),h=(0,a.useCallback)((({name:e,annotations:t,binaryAnnotations:n,id:a,parentId:o,bypassIsTimingCheck:r})=>{null==p||p.subspanStop({name:e,annotations:t,binaryAnnotations:n,id:a,parentId:o,bypassIsTimingCheck:r})}),[p]),I=(0,a.useCallback)((({currentName:e,newName:t,bypassIsTimingCheck:n,updateWhenStopwatchCompletes:a})=>{null==p||p.subspanUpdateName({currentName:e,newName:t,bypassIsTimingCheck:n,updateWhenStopwatchCompletes:a})}),[p]),C=(0,a.useCallback)(((e,t)=>p?p.getSpans(e,t):[]),[p]),w=(0,a.useCallback)((()=>p?p.getTraceId():0),[p]),N=(0,a.useCallback)((t=>{m.current?(m.current=!1,null==p||p.error(t)):(0,b.A9)(`WARN.${e}.noTiming.error`)}),[p]),R=(0,a.useCallback)((e=>{m.current&&(null==p||p.abort("duplicated_init_stopwatch_action")),m.current=!0,null==p||p.start(e)}),[p]),D=(0,a.useCallback)((t=>{m.current?(m.current=!1,null==p||p.stop(t)):(0,b.A9)(`WARN.${e}.noTiming.stop`)}),[p]);(0,a.useEffect)((()=>()=>{n&&_("unloadOrClientNavigation")}),[c]);const S=(0,a.useMemo)((()=>({isTiming:u,abort:_,addAnnotation:g,addBinaryAnnotation:y,binaryAnnotationOperation:f,addSubspan:T,subspanStart:E,subspanStop:h,getSpans:C,getTraceId:w,updateSubspanName:I,stop:D,error:N,start:R})),[u,_,g,y,f,T,E,h,C,w,I,D,N,R]);return(0,A.jsx)(d,{value:S,children:o})},useHook:p}}},729524:(e,t,n)=>{n.d(t,{Z:()=>a});const a=e=>{let t={};e.forEach((({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}}));let n=Object.freeze({});return Object.keys(t).forEach((e=>{(t[e]||[]).forEach(((t,a)=>{const o=a?`${e}_${a+1}`:e;n={...n,[o]:t}}))})),n}},224496:(e,t,n)=>{n.d(t,{Cc:()=>c,Gf:()=>_,LX:()=>o,Rf:()=>d,YL:()=>s,ap:()=>r,h8:()=>l,jH:()=>g,kF:()=>m,pE:()=>p,s5:()=>u,yR:()=>i});var a=n(883119);const o={w:9,h:16},r=o.w/o.h,i=8,s=10,d=5e3;function p(e,t=1){return{x:(null!=e?e:24)/5,y:(null!=e?e:24)*(t-1)}}const l={COMMENT_REPLY_STICKER:"story_pin_comment_reply_block",GENERIC_STICKER:"story_pin_generic_interactive_sticker_block",HEADING:"story_pin_heading_block",IMAGE:"story_pin_image_block",INGREDIENT:"story_pin_ingredient_block",LINK:"story_pin_link_block",MENTION_STICKER:"story_pin_mention_sticker_block",MUSIC:"story_pin_music_block",PARAGRAPH:"story_pin_paragraph_block",PRODUCT_STICKER:"story_pin_product_sticker_block",SUPPLY:"story_pin_supply_block",VIDEO:"story_pin_video_block",VTO_MAKEUP_STICKER:"story_pin_virtual_try_on_makeup_sticker_block"},c={alignment:1,hex_color:"#111111",highlight_color:"#FFFFFF",vertical_alignment:1,font:{default_size:28,id:"1",key:"Graphik-Regular.otf",letter_spacing:-.4,line_height:1.25,name:"Teaspoon",url:"https://s.pinimg.com/story_pins/fonts/Graphik-Regular.otf"},font_size:28},m=new a.Ry(5),u=new a.H3([m]),_=new a.H3([u]),g=new a.Ry(1e3)},139405:(e,t,n)=>{n.d(t,{pb:()=>b,nf:()=>T,lV:()=>E});var a=n(667294),o=n(702664),r=n(6637),i=n(618446),s=n.n(i),d=n(682492),p=n.n(d);const l={feature_map:Object.freeze({})},c=(e,t)=>{const n={...p()({},e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return s()(e,n)?e:n},m=(e=l,t)=>{if("FETCH_COMPLETE"===t.type){const{payload:{resource:n}}=t,a=t.payload.response.resource_response.data;if("AggregatedCommentFeedResource"===n||"AggregatedCommentReplyFeedResource"===n||"DidItCommentsResource"===n){const t=(a||[]).reduce(((t,n)=>(t[n.id]=c(e[n.id],n),t)),{});return{...e,...t}}if("UnifiedCommentsResource"===n&&a&&a.length>0){const t=a.filter((e=>"aggregatedcomment"===e.type)).reduce(((t,n)=>(t[n.id]=c(e[n.id],n),t)),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===n&&a&&a.length>0){const t=a[0].aggregated_comment,n=t?{[t.id]:c(e[t.id],t)}:{},o=a[0].creator_reply,r=o?{[o.id]:c(e[o.id],o)}:{};return{...e,...n,...r}}if("AggregatedCommentFeaturesResource"===n&&a&&Object.keys(a).length>0)return{...e,feature_map:a}}else{if("AGGREGATED_COMMENT_CREATED"===t.type){const{payload:{aggregatedComment:n}}=t;return n.id?{...e,[n.id]:n}:e}if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){const{payload:{aggregatedCommentId:n}}=t,a={...e};return delete a[n],a}if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){const{payload:{userId:n}}=t;return Object.fromEntries(Object.entries(e).filter((e=>{var t;return(null===(t=e[1].user)||void 0===t?void 0:t.id)!==n})))}if("AGGREGATED_COMMENT_UPDATED"===t.type){const{payload:{data:n}}=t;return{...e,[n.id]:c(e[n.id],n)}}if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){const{payload:{data:n}}=t,a=e[n.id],o=a.reaction_counts[1]||0,r={1:n.reaction_by_me?o+1:o-1},i={...a,reaction_by_me:n.reaction_by_me,reaction_counts:r};return{...e,[n.id]:i}}if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){const{payload:{data:n}}=t,a=e[n.id],o=a.helpful_count||0,r=n.marked_helpful_by_me?o+1:o-1,i={...a,marked_helpful_by_me:n.marked_helpful_by_me,helpful_count:r};return{...e,[n.id]:i}}if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){const{payload:{data:n}}=t,a={...e[n.aggregated_comment_id],highlighted_by_pin_owner:n.is_highlighted};return{...e,[n.aggregated_comment_id]:a}}if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){const{payload:{data:{featureMap:n}}}=t;return{...e,feature_map:{...e.feature_map,...n}}}if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){const{payload:{increment:n,id:a}}=t,o=e[a],r={...o,comment_count:o.comment_count+n};return{...e,[a]:r}}if("DELETE_COMMENT_MENTION"===t.type){const{payload:{aggregatedCommentId:n,tagged_users:a}}=t,o={...e[n],tagged_users:a};return{...e,[n]:o}}}return e};var u=n(425288),_=n(505920),g=n(785893);const{Provider:y,useHook:f}=(0,u.Z)("AggregatedComments");function b({children:e}){const t=(0,o.useSelector)((({resources:e})=>e.UnifiedCommentsResource));let n=l;t&&Object.values(t).forEach((e=>{var t;const a=null===(t=e.data)||void 0===t?void 0:t.filter((e=>"aggregatedcomment"===e.type)),o=null==a?void 0:a.reduce(((e,t)=>(e[t.id]=c(n[t.id],t),e)),{});n={...n,...o}}));const[r,i]=(0,a.useReducer)(m,n),s=e=>{i({type:"FETCH_COMPLETE",payload:e})};(0,_.Z8)("AggregatedCommentFeaturesResource",s),(0,_.my)("AggregatedCommentFeaturesResource",s),(0,_.Z8)("AggregatedCommentFeedResource",s),(0,_.my)("AggregatedCommentFeedResource",s),(0,_.Z8)("AggregatedCommentReplyFeedResource",s),(0,_.my)("AggregatedCommentReplyFeedResource",s),(0,_.Z8)("DidItCommentsResource",s),(0,_.my)("DidItCommentsResource",s),(0,_.Z8)("UnifiedCommentsPreviewResource",s),(0,_.my)("UnifiedCommentsPreviewResource",s),(0,_.Z8)("UnifiedCommentsResource",s),(0,_.my)("UnifiedCommentsResource",s);const d=(0,a.useMemo)((()=>({aggregatedComments:r,dispatch:i})),[r,i]);return(0,g.jsx)(y,{value:d,children:e})}function T(){const{dispatch:e}=f();return(0,a.useMemo)((()=>({aggregatedCommentCreated(t,n){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:n}})},aggregatedCommentDeleted:(t,n)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:n}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({commentId:e,reason:t,detailedReasons:n})=>{const a={commentId:e,reason:t,detailedReasons:n};return r.Z.create("AggregatedCommentFlagResource",a).callCreate()},deleteCommentMention:async t=>{var n;const{resource_response:a}=await r.Z.create("MentionsResource",{aggregatedCommentId:t,field_set_key:"comment"}).callDelete(),o=null!==(n=null==a?void 0:a.data)&&void 0!==n?n:{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:o.id,tagged_users:o.tagged_users}})},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:n})=>{const a=r.Z.create("HelpfulResource",{helpfulModelType:1,objectId:t});n?a.callDelete({showError:!1}):a.callCreate({showError:!1}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!n}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:n,isHighlighted:a})=>{const o=r.Z.create("AggregatedCommentHighlightResource",{aggregatedCommentId:t,pinId:n});a?await o.callDelete({showError:!1}):await o.callCreate({showError:!1}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:n,is_highlighted:!a}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:n})=>{const a=r.Z.create("AggregatedCommentLikeResource",{aggregatedCommentId:t});n?a.callDelete({showError:!1}):a.callCreate({showError:!1}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:n?0:1}}})},updateAggregatedComment:async({commentId:t,force:n,orbacSubjectId:a,tags:o,text:i})=>{var s;const{resource_response:d}=await r.Z.create("AggregatedCommentResource",{commentId:t,force:n,tags:o,text:i,...a?{orbacSubjectId:a}:{}}).callUpdate({showError:!1}),{tagged_users:p}=null!==(s=null==d?void 0:d.data)&&void 0!==s?s:{},l=p.map((e=>({...e})));e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:l,tags:JSON.parse(o),text:i}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:n})=>{var a;const{resource_response:o}=await r.Z.create("AggregatedCommentFeaturesResource",{userId:t,featureMap:n}).callUpdate({showError:!1}),i=null!==(a=null==o?void 0:o.data)&&void 0!==a?a:Object.freeze({});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:i}}})},updateCommentCount:(t,n)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:n,id:t}})}})),[e])}function E(){const{aggregatedComments:e}=f();return e}},550448:(e,t,n)=>{n.d(t,{e:()=>o,p:()=>r});var a=n(425288);const{Provider:o,useHook:r}=(0,a.Z)("headerButtonContext")},924114:(e,t,n)=>{n.d(t,{H8:()=>u,Ut:()=>m,fr:()=>c});var a=n(667294),o=n(839377),r=n(311541),i=n(425288),s=n(785893);const d=()=>n.e(67891).then(n.bind(n,367891)),{Provider:p,useHook:l}=(0,i.Z)("IdeaPin");function c({children:e}){const[t,n]=(0,r.Z)(d,o.Z),i=(0,a.useMemo)((()=>({dispatch:n,ideaPin:t})),[n,t]);return(0,s.jsx)(p,{value:i,children:e})}function m(){const{dispatch:e}=l();return(0,a.useMemo)((()=>({setIdeaPinActivePage:t=>{e({type:"IDEA_PIN_ACTIVE_PAGE",payload:{activePage:t}})},setIdeaPinDynamicWidth:t=>{e({type:"IDEA_PIN_DYNAMIC_WIDTH",payload:{dynamicWidth:t}})}})),[e])}function u(){const{ideaPin:e}=l();return e}},839377:(e,t,n)=>{n.d(t,{Z:()=>a});const a={activePage:0,dynamicWidth:0}},878552:(e,t,n)=>{n.d(t,{P:()=>m,Q:()=>c});var a=n(667294),o=n(784590);const r=()=>(0,o.Z)({name:"ApiResource",options:{url:"/v3/users/me/",data:{fields:["user.full_name","user.email","user.is_name_eligible_for_lead_form_autofill","user.is_email_eligible_for_lead_form_autofill"]}}});var i=n(425288);const s={fullName:"",email:"",phoneNumber:"",zipCode:"",formSubmissions:{}};function d(e=s,t){switch(t.type){case"AUTOFILL_LEADGEN_USER_INFO":return{...e,fullName:t.payload.fullName,email:t.payload.email};case"SET_LEADGEN_USER_INFO":return{...e,formSubmissions:t.payload.formSubmissions};default:return e}}var p=n(785893);const{Provider:l,useHook:c}=(0,i.Z)("LeadGen");function m({children:e}){const{isLoaded:t,data:n}=r(),[o,i]=(0,a.useReducer)(d,s),c=(0,a.useCallback)((e=>i({type:"SET_LEADGEN_USER_INFO",payload:e})),[]);(0,a.useEffect)((()=>{if(t){const e={...s,fullName:null!=n&&n.is_name_eligible_for_lead_form_autofill?n.full_name:"",email:null!=n&&n.is_email_eligible_for_lead_form_autofill?n.email:""};i({type:"AUTOFILL_LEADGEN_USER_INFO",payload:e})}}),[t,n]);const m=(0,a.useMemo)((()=>({updateLeadGenInfo:c,leadGen:o})),[c,o]);return(0,p.jsx)(l,{value:m,children:e})}},94089:(e,t,n)=>{n.d(t,{G:()=>m,Kl:()=>u,vo:()=>c});var a=n(667294),o=n(311541),r=n(425288),i=n(505920),s=n(785893);const d=()=>n.e(18870).then(n.bind(n,218870)),{Provider:p,useHook:l}=(0,r.Z)("NativeEngagements");function c({children:e}){const[t,n]=(0,o.Z)(d,[]),r=e=>{n({type:"FETCH_COMPLETE",payload:e})};(0,i.Z8)("NativeInteractionsResource",r),(0,i.my)("NativeInteractionsResource",r);const l=(0,a.useMemo)((()=>({dispatch:n,nativeEngagements:t})),[n,t]);return(0,s.jsx)(p,{value:l,children:e})}function m(){const{dispatch:e}=l();return(0,a.useMemo)((()=>({nativeEngagementsHiddenForUser:t=>{e({type:"NATIVE_ENGAGEMENT_HIDDEN_FOR_USER",payload:{userId:t}})}})),[e])}function u(){const{nativeEngagements:e}=l();return e}},640064:(e,t,n)=>{n.d(t,{f:()=>s,w:()=>d});var a=n(667294),o=n(425288),r=n(785893);const{Provider:i,useHook:s}=(0,o.Z)("Session");function d({children:e}){const[t,n]=(0,a.useState)(void 0),o=(0,a.useCallback)((()=>n(void 0)),[]),s=(0,a.useMemo)((()=>({unauthFollowUserId:t,setUnauthFollowUserId:n,removeUnauthFollowUserId:o})),[t,o]);return(0,r.jsx)(i,{value:s,children:e})}},945698:(e,t,n)=>{n.d(t,{N4:()=>r,Wh:()=>a,hr:()=>o});const a=e=>e.bt("Log in to continue", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),o=e=>e.bt("You're almost there! Log in to access all of Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),r=({i18n:e,toFollow:t})=>t?e.bt("Log in to follow", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Log in to unfollow", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},205992:(e,t,n)=>{n.d(t,{Cp:()=>u,GT:()=>d,V6:()=>i,W6:()=>_,_L:()=>m,fm:()=>s,hT:()=>p});var a=n(56528),o=n(6637),r=n(379725);function i(e,t){return{type:"UPDATE_USER_SOCIAL_NETWORK",payload:{socialNetworkName:e,connected:t}}}const s=e=>({type:"USER_DOMAIN_VERIFIED",payload:{verifiedWebsite:e}}),d=e=>({type:"USER_DOMAIN_UNVERIFIED",payload:{verifiedWebsite:e}});function p(e){return{type:"UPDATE_HAS_QUICKSAVE_BOARD",payload:{createdQuicksaveBoard:e}}}const l=(e,t,n)=>a=>{a({type:"USER_SETTING_CHANGE",payload:{id:e,field:t,value:n}})},c=e=>{const t=e.split(" ");return{first_name:t[0],last_name:t[1]}},m=({field:e,value:t,onSettingSavedHn:n,showErrorHn:a,surfaceTag:i,userId:s})=>(d,p)=>{const m=p().users[s],u={user_id:s,surface_tag:i};if("full_name"===e)if(m.is_partner)u.business_name=t;else{const e=c(t);u.first_name=e.first_name,u.last_name=e.last_name||""}else u[e]=t;o.Z.create("UserSettingsResource",u).callUpdate().then((()=>{if("profile_image_url"===e)d((0,r.b)("UserResource",{options:u}));else if("full_name"===e)if(m.is_partner)d(l(s,"first_name",t));else{const e=c(t);d(l(s,"first_name",e.first_name)),d(l(s,"last_name",e.last_name))}!m.is_partner||"account_type"!==e&&"contact_name"!==e?d(l(s,e,t)):d(((e,t,n)=>a=>{a({type:"USER_PARTNER_SETTING_CHANGE",payload:{id:e,field:t,value:n}})})(s,e,t)),n()}),a)},u=(e,t,n,o,r)=>()=>{(0,a.Z)({new:t,new_confirm:n,old:e}).then(o,r)},_=(e,t,n,a,r,i)=>s=>{s(l(e,`${t}.${n}`,a));let d={},p="EmailSettingsResource";void 0!==r?(d={section:t,option:n,value:a,od:r.od,user_id:r.user_id},p="UnsubEmailSettingsResource"):d={section:t,option:n,value:a},o.Z.create(p,d).callUpdate().then(i).catch((()=>s(l(e,`${t}.${n}`,!a))))}},829084:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(66743);function o(e){var t;return{defaultStyle:0,fontFamily:null!==(t=e.name)&&void 0!==t?t:"",fontGroup:a.gu,fontOverrides:{letterSpacing:e.letter_spacing,lineHeight:e.line_height},format:"truetype",id:e.id,styles:[{fontStyle:"",fontUrl:e.url,fontWeight:"normal",name:"normal"}]}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/52374.en_GB-8f0040d4bfde861c.mjs.map