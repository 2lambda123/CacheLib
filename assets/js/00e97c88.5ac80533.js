"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6166],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(i),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return i?n.createElement(d,r(r({ref:t},u),{},{components:i})):n.createElement(d,r({ref:t},u))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1137:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),r=["components"],s={id:"eviction_policy",title:"Eviction policy"},l=void 0,c={unversionedId:"Cache_Library_User_Guides/eviction_policy",id:"Cache_Library_User_Guides/eviction_policy",title:"Eviction policy",description:"Cachelib offers different eviction policies, suitable for different use cases. To select a specific eviction policy, choose the appropriate allocator type.",source:"@site/docs/Cache_Library_User_Guides/eviction_policy.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/eviction_policy",permalink:"/docs/Cache_Library_User_Guides/eviction_policy",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/eviction_policy.md",tags:[],version:"current",frontMatter:{id:"eviction_policy",title:"Eviction policy"},sidebar:"userguideSidebar",previous:{title:"Item and Handle",permalink:"/docs/Cache_Library_User_Guides/Item_and_Handle"},next:{title:"Partition cache into pools",permalink:"/docs/Cache_Library_User_Guides/Partition_cache_into_pools"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Configuration",id:"configuration-1",level:2}],h={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cachelib offers different eviction policies, suitable for different use cases. To select a specific eviction policy, choose the appropriate allocator type."),(0,a.kt)("h1",{id:"lru"},"LRU"),(0,a.kt)("p",null,"This is the classic least recently used (LRU) eviction policy with a couple optional modifications. We assume the reader is familiar with the classic LRU. Before we start, let's get familiar a few concepts. ",(0,a.kt)("strong",{parentName:"p"},"Tail age")," is the time the item in the LRU tail spent in the cache. If ",(0,a.kt)("inlineCode",{parentName:"p"},"Tins(tail)")," is the time when an item was inserted into the cache, ",(0,a.kt)("inlineCode",{parentName:"p"},"tail_age = now() - Tins(tail)"),". ",(0,a.kt)("strong",{parentName:"p"},"Insertion point")," (IP) is a position in LRU where a new item is inserted. Classic LRU IP is the head of the list. Moving an item from its current position in LRU to the head is called ",(0,a.kt)("strong",{parentName:"p"},"promotion"),". Now let's look at the following picture:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:i(521).Z,width:"922",height:"223"})),(0,a.kt)("p",null,"The first modification cachelib made is custom IP, which is not at the head of the list. New items will be inserted at the position ",(0,a.kt)("inlineCode",{parentName:"p"},"ipos(p) = size(LRU) * p")," from the tail, where ",(0,a.kt)("inlineCode",{parentName:"p"},"p \u2208 [0,1]")," is a ratio parameter. For example, suppose the regular LRU tail age be 600s, but you want to cache only items that were accessed during the 200s after insertion. Inserting new items at position ",(0,a.kt)("inlineCode",{parentName:"p"},"ipos(1/3)")," from the tail may help you to achieve this. Not that custom IP affects only items that're inserted into the cache the first time; it doesn't affect items that on access are moved to the head of the list."),(0,a.kt)("p",null,"The second modification is promotion delay. Normally every access item is moved to the LRU head. In fact, you need to be precise about promotions from the tail of LRU and don't bother promoting items close to the head. Before promotion, we check the time since the last promotion and promote only if it is longer than the delay parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),". This is performance optimization. In the setup of the last example, you may want to promote only items with tail age of 300s, roughly when they get to the bottom half of the LRU."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"lruRefreshTime"),"\nHow often does cachelib refresh a previously accessed item. By default this is 60 seconds.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"updateOnWrite"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"updateOnRead"),"\nSpecifies if a LRU promotion happens on read or write or both. As a rule of thumb, for most services that care primarily about read performance, turn on ",(0,a.kt)("inlineCode",{parentName:"p"},"updateOnRead"),". However, if your service cares a lot about retention time of items that are recently written, then turn on ",(0,a.kt)("inlineCode",{parentName:"p"},"updateOnWrite")," as well.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ipSpec"),"\nThis essentially turns the LRU into a two-segmented LRU. Setting this to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," means every new insertion will be inserted 1/2 from the end of the LRU, ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," means 1/4 from the end of the LRU, and so on."))),(0,a.kt)("h1",{id:"lru-2q"},"LRU 2Q"),(0,a.kt)("p",null,"LRU 2Q deals with bursty accesses. The term ",(0,a.kt)("em",{parentName:"p"},"LRU 2Q")," is a little misleading. It actually uses 3 LRUs (which are called queue here): hot, warm, and cold. Let us explain how items move between them. Look at the following picture, where the gray arrows indicate promotions:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:i(9198).Z,width:"382",height:"552"})),(0,a.kt)("p",null,"Initially, items are inserted into the hot queue. Items in the hot queue are promoted to the head of hot queue (internal promotion). Items evicted from the hot queue goes to the cold queue. If an item in the cold queue is accessed, it gets promoted to the ",(0,a.kt)("strong",{parentName:"p"},"warm")," queue (cross-queue promotion). An item evicted from the cold queue gets evicted from cache. Similarly to the hot queue, an item in the warm queue s promoted internally and evicted to the cold queue."),(0,a.kt)("p",null,"The warm queue and the cold queue are effectively an LRU with custom IP (see above) - they're the head of cold queue."),(0,a.kt)("p",null,"Hot items evicted to the cold queue have quite limited time to get a hit and move to the warm queue. This captures items that are aggressively accessed and then are no longer used."),(0,a.kt)("p",null,"Usually, the warm queue is about 60%, the cold queue 30%, and the hot queue 10%."),(0,a.kt)("h2",{id:"configuration-1"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lruRefreshTime"),"\nSame as above for memory management LRU (MMLru)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateOnWrite"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"updateOnRead"),"\nSame as above for MMLru."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hotSizePercent"),"\nThis specifies the ratio of items that will be inserted into the hot queue. Items that are never accessed in the hot queue will be moved to the cold queue, which will be evicted faster. Items that have been accessed while in the hot queue will be moved to the head of the hot queue so they will live in the hot queue for longer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coldSizePercent"),"\nItems that are accessed in the cold queue will be moved to the warm queue. Increasing this ratio can give the items accessed on a longer, but regular period a higher chance to stay in the cache.")),(0,a.kt)("h1",{id:"tinylfu"},"TinyLFU"),(0,a.kt)("p",null,"TinyLFU consists of two parts: frequency estimator (FE) and LRU. FE is an approximate data structure that computes an item's access frequency (Count-Min Sketch used) before inserting it to LRU. Only items that pass frequency threshold get accepted to LRU and evicted otherwise."))}m.isMDXComponent=!0},9198:function(e,t,i){t.Z=i.p+"assets/images/cachelib_2Q-14acaae058c03bdf08425a94a534845b.png"},521:function(e,t,i){t.Z=i.p+"assets/images/cachelib_LRU-4ded88fcaa39ccd440f4e069923501d2.png"}}]);