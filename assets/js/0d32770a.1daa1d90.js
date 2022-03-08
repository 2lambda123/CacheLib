"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5924],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,p=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?i.createElement(p,r(r({ref:t},h),{},{components:n})):i.createElement(p,r({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"ram_cache_indexing_and_eviction",title:"RAM cache indexing and eviction"},s=void 0,c={unversionedId:"Cache_Library_Architecture_Guide/ram_cache_indexing_and_eviction",id:"Cache_Library_Architecture_Guide/ram_cache_indexing_and_eviction",title:"RAM cache indexing and eviction",description:"This article takes a deep look at CacheLib's RAM cache's AccessContainer and",source:"@site/docs/Cache_Library_Architecture_Guide/RAM_cache_indexing_and_eviction.md",sourceDirName:"Cache_Library_Architecture_Guide",slug:"/Cache_Library_Architecture_Guide/ram_cache_indexing_and_eviction",permalink:"/docs/Cache_Library_Architecture_Guide/ram_cache_indexing_and_eviction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_Architecture_Guide/RAM_cache_indexing_and_eviction.md",tags:[],version:"current",frontMatter:{id:"ram_cache_indexing_and_eviction",title:"RAM cache indexing and eviction"},sidebar:"archguideSideBar",previous:{title:"Cachelib Common Components",permalink:"/docs/Cache_Library_Architecture_Guide/common_components"},next:{title:"Slab Rebalancing - How Does It Work?",permalink:"/docs/Cache_Library_Architecture_Guide/slab_rebalancing"}},h={},m=[{value:"<strong>Containers</strong>",id:"containers",level:2},{value:"<strong>AccessContainer</strong>",id:"accesscontainer",level:2},{value:"<strong>CHAINEDHASHTABLE</strong>",id:"chainedhashtable",level:3},{value:"<strong>MMContainer</strong>",id:"mmcontainer",level:2},{value:"<strong>DLIST</strong>",id:"dlist",level:3},{value:"<strong>LRU</strong>",id:"lru",level:3},{value:"<strong>LRU-2Q</strong>",id:"lru-2q",level:3},{value:"<strong>TINY-LFU</strong>",id:"tiny-lfu",level:3},{value:"<strong>COMMON CONFIGURATIONS</strong>",id:"common-configurations",level:3},{value:"<strong>THREAD SAFETY</strong>",id:"thread-safety",level:4},{value:"<strong>OPTIONAL PROMOTION</strong>",id:"optional-promotion",level:4},{value:"<strong>LRU REFRESH TIME</strong>",id:"lru-refresh-time",level:4},{value:"<strong>EVICTION AGE STATISTICS</strong>",id:"eviction-age-statistics",level:4},{value:"<strong>Summary</strong>",id:"summary",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article takes a deep look at CacheLib's RAM cache's AccessContainer and\nMMContainer, which powers the indexing and eviction of RAM cache."),(0,o.kt)("h2",{id:"containers"},(0,o.kt)("strong",{parentName:"h2"},"Containers")),(0,o.kt)("p",null,'The word "container" in the names of AccessContainer and MMContainer refers to\n',(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5004162/what-does-it-mean-for-a-data-structure-to-be-intrusive"},"intrusive containers"),".\nFor the purpose of understanding this article, the gist here is that the\ncontainer does not store a copy of the element. So an item in CacheLib can be\nretrieved by both AccessContainer and MMContainer without duplicating copies.\nThis is achieved by storing some metadata in the item itself. The details would\nbe discussed in the sections below."),(0,o.kt)("h2",{id:"accesscontainer"},(0,o.kt)("strong",{parentName:"h2"},"AccessContainer")),(0,o.kt)("p",null,"The AccessContainer is an intrusive hook based container and supports a\nstandard interface that works with CacheAllocator. It could be viewed as a\nlarge hash table that serves as the index of the entire CacheLib cache. An\nitem's accessibility is controlled only by the access container. So an item is\naccessible (can be returned by find request) only after it is inserted into the\naccess container and is no longer accessible once it is removed from the access\ncontainer. There is only one access container for the entire CacheLib cache\n(see ",(0,o.kt)("inlineCode",{parentName:"p"},"accessContainer_")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/CacheAllocator.h"),")."),(0,o.kt)("p",null,"It has the following major API functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"find: Given a string key, return the item handle. This is used when the client calls find on a key.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example call-site: ",(0,o.kt)("inlineCode",{parentName:"li"},"CacheAllocator::findInternal"),"."))),(0,o.kt)("li",{parentName:"ul"},"insert: Insert an item handle into the AccessContainer, making it accessible\nto future find requests. This is used when the client calls the\nCacheAllocator's inset API.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example call-site: ",(0,o.kt)("inlineCode",{parentName:"li"},"CacheAllocator::insertImpl"),"."))),(0,o.kt)("li",{parentName:"ul"},"remove: Remove an item from the AccessContainer, making it not accessible to\nfuture find requests. This is used when the client removes an item from the\ncache. This is also used when moving an item (more details on\n",(0,o.kt)("a",{parentName:"li",href:"/docs/Cache_Library_Architecture_Guide/Slab_Rebalancing_-_How_Does_It_Work/#4-how-do-we-handle-chain"},"moving"),").",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example call-site: ",(0,o.kt)("inlineCode",{parentName:"li"},"CacheAllocator::removeImpl"),".")))),(0,o.kt)("p",null,"The full API can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"ChainedHashTable::Container"),"."),(0,o.kt)("h3",{id:"chainedhashtable"},(0,o.kt)("strong",{parentName:"h3"},"CHAINEDHASHTABLE")),(0,o.kt)("p",null,"This is our only implementation of access container."),(0,o.kt)("p",null,"The memory payload is a hash table (",(0,o.kt)("em",{parentName:"p"},"ChainedHashTable::Container::ht_"),"), which\ncontains a list of compressed pointers (",(0,o.kt)("inlineCode",{parentName:"p"},"ChainedHashTable::Impl::hashTable_"),").\nEach compressed pointer in this list (together with the compressor) points to\nthe head node of each bucket's chain. In CacheLib cache, this node (the ",(0,o.kt)("inlineCode",{parentName:"p"},"type T")," in\nin type parameter for ChainedHashTable::Impl) is a CacheItem\n(",(0,o.kt)("inlineCode",{parentName:"p"},"allocator/CacheItem.h"),"). For CacheItem to be eligible as a node here, it needs\nto meet the following criterium:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Carries the hook (",(0,o.kt)("inlineCode",{parentName:"p"},"accessHook_")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/CacheItem.h"),"): This\nhook is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"struct CACHELIB_PACKED_ATTR Hook")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/ChainedHashTable.h"),", which points to the next item in the\nbucket's chain. This adds a compressed pointer to CacheItem's payload.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Implements ",(0,o.kt)("inlineCode",{parentName:"p"},"isAccessible()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"markAccessible()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"unmarkAccessible()"),". This\nis backed by one bit in the CacheItem's flags.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Implements ",(0,o.kt)("inlineCode",{parentName:"p"},"getKey()"),". This doesn't require extra memory, as the CacheItem\nalready store the key for other purpose."))),(0,o.kt)("p",null,"With the intrusive implementation, operations on this hash table is easy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"find()"),": Hash the key and get the bucket then iterate over the bucket chain\n(",(0,o.kt)("inlineCode",{parentName:"p"},"Handle find(Key key)")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/ChainedHashTable.h"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"insert()"),": Find the bucket and replace the head with the node to be inserted\n(",(0,o.kt)("inlineCode",{parentName:"p"},"bool ChainedHashTable::Container<...::insert(T& node)")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/ChainedHashTable-inl.h"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"remove()"),": Find the bucket and remove the node from the chain\n(",(0,o.kt)("inlineCode",{parentName:"p"},"bool ChainedHashTable::Container<T, HookPtr, LockT>::remove(T& node)")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/ChainedHashTable-inl.h"),")."))),(0,o.kt)("p",null,"Find and remove requires iteration on the bucket chain but insert does not.\nNote that remove requires the iteration on the chain not to locate the node\nitself (as we have it from the API) but to find the previous item so that the\nnode can be removed from the linked list."),(0,o.kt)("h2",{id:"mmcontainer"},(0,o.kt)("strong",{parentName:"h2"},"MMContainer")),(0,o.kt)("p",null,"RAM evictions are controlled by MMContainers. It can be viewed as an eviction\nalgorithm powered by intrusive containers. When an item is inserted, it is\nadded into the MMContainer (e.g. entering the eviction queue). When an item is\naccessed, it is recorded (e.g. promoted in LRU). When the cache allocator asks\nfor an item to evict, it returns an iterator for the next item to be evicted.\nWhen the item is finally removed form the queue, it removes the item form the\nqueue. There is one MMContainer ",(0,o.kt)("strong",{parentName:"p"},"per allocation class in each\npool")," (see ",(0,o.kt)("inlineCode",{parentName:"p"},"evictableMMContainers_")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/CacheAllocator.h"),")."),(0,o.kt)("p",null,"It has the following major API functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"insert"),": Add an item into the eviction queue. This is called when an item is\ninserted into the cache. This can also happen when we are moving an item and we\nneed to remove it from one MMContainer and add to another\n(",(0,o.kt)("inlineCode",{parentName:"li"},"CacheAllocator<CacheTrait>::insertInMMContainer(Item& item)")," in\n",(0,o.kt)("inlineCode",{parentName:"li"},"cachelib/allocator/CacheAllocator-inl.h"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"record"),": Record an access of the item. Typically this means promoting the\nitem in some form of LRU queue (",(0,o.kt)("inlineCode",{parentName:"li"},"void\n  CacheAllocator<CacheTrait>::recordAccessInMMContainer(Item& item, AccessMode\n  mode)")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"cachelib/allocator/CacheAllocator-inl.h"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remove"),": Remove an item from the eviction queue. This is called when an item\nis removed form the cache (evicted or explicitly removed by the client) (",(0,o.kt)("inlineCode",{parentName:"li"},"bool\n  CacheAllocator<CacheTrait>::removeFromMMContainer(Item& item)")," in\n",(0,o.kt)("inlineCode",{parentName:"li"},"cachelib/allocator/CacheAllocator-inl.h"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getEvictionIterator"),": Return an iterator of items to be evicted. This is\ncalled when the cache allocator is looking for eviction. Usually the first item\nthat can be evicted (no active handles, not moving, etc) is used (see\n",(0,o.kt)("inlineCode",{parentName:"li"},"CacheAllocator<CacheTrait>::findEviction(PoolId pid, ClassId cid)")," in\n",(0,o.kt)("inlineCode",{parentName:"li"},"cachelib/allocator/CacheAllocator-inl.h"),").")),(0,o.kt)("p",null,"The full API can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"struct Container")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/MMLru.h"),".  This links to MMLru, which is one of the\nmultiple MMContainers we implemented. All the operations above have constant\ntime complexity in each of the implementations."),(0,o.kt)("p",null,"The eviction requires an iterator instead of a single item because it is\npossible that the item best for eviction is being referred to, moved, or for\nsome other reason can not be evicted. In this case, CacheAllocator advances the\niterator until a good victim is found or fails the eviction after too many\nretries and further results in an allocation failrue."),(0,o.kt)("h3",{id:"dlist"},(0,o.kt)("strong",{parentName:"h3"},"DLIST")),(0,o.kt)("p",null,"The multiple implementations of MMContainer all relies on the same intrusive\ndoubly-linked list implementation (",(0,o.kt)("inlineCode",{parentName:"p"},"class DList")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/datastruct/DList.h"),").\nThe ",(0,o.kt)("em",{parentName:"p"},"hook")," required by this is straightforward: just compressed pointers to the\nnext and previous item (",(0,o.kt)("inlineCode",{parentName:"p"},"struct DListHook")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/datastruct/DList.h"),")."),(0,o.kt)("h3",{id:"lru"},(0,o.kt)("strong",{parentName:"h3"},"LRU")),(0,o.kt)("p",null,"[MMLru]","(",(0,o.kt)("inlineCode",{parentName:"p"},"class MMLru")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/MMLru.h"),") powers the LRU (see ","[/docs/Cache_Library_User_Guides/eviction_policy/#lru]",")."),(0,o.kt)("p",null,"It is powered by a single DList, which holds the head and tail of the queue. It\nalso has a reference to ",(0,o.kt)("em",{parentName:"p"},"the insertion\npoint")," (see ",(0,o.kt)("inlineCode",{parentName:"p"}," T* insertionPoint_{nullptr};")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/MMLru.h"),")\nwhere new items are inserted. The operations are straightforward standard\nlinked list operation that takes constant time:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Insert: A new item is inserted to the insertion point."),(0,o.kt)("li",{parentName:"ul"},"Record: A promoted item is moved to the head of the queue."),(0,o.kt)("li",{parentName:"ul"},"Remove: The item is removed from the queue."),(0,o.kt)("li",{parentName:"ul"},"Eviction iterator: An iterator pointing to the tail of the queue is returned and moves backward.")),(0,o.kt)("h3",{id:"lru-2q"},(0,o.kt)("strong",{parentName:"h3"},"LRU-2Q")),(0,o.kt)("p",null,"MM2Q powers ",(0,o.kt)("a",{parentName:"p",href:"/docs/Cache_Library_User_Guides/eviction_policy/#lru-2q"},"LRU2Q"),".\nIt is powered by ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiDList")," (variable LruList",(0,o.kt)("inlineCode",{parentName:"p"},"in"),"struct Container",(0,o.kt)("inlineCode",{parentName:"p"},"in"),"cachelib/allocator/MM2Q.h`).\nUnderneath, it contains 5 DLists: Hot, Warm, WarmTail, Cold, ColdTail."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Insert: A new item is inserted to the head of the Hot queue."),(0,o.kt)("li",{parentName:"ul"},"Record:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"An item in Hot list is moved to the head of the Hot queue."),(0,o.kt)("li",{parentName:"ul"},"An item in Warm or WarmTail list is moved to the head of the Warm queue."),(0,o.kt)("li",{parentName:"ul"},"An item in Cold or ColdTail list is moved to the head of the Warm queue."))),(0,o.kt)("li",{parentName:"ul"},"Remove: The item is removed from the current queue."),(0,o.kt)("li",{parentName:"ul"},"Eviction iterator: An iterator goes from the tail of ColdTail backwards, then to Cold, WarmTail, Warm, Hot.")),(0,o.kt)("p",null,"The Tail lists are optional queues designed to supply statistics on access\ncounts on the last 1 slab worths of items on the Cold and Warm queue. This\nstats can help us understand if assigning one more slab to this particular\nallocation class would be a good tradeoff. The marginal hits policy of\nrebalancing relies on this statistics (more details in\n","[/docs/Cache",(0,o.kt)("em",{parentName:"p"},"Library_Architecture_Guide/Slab_Rebalancing"),"-_How_Does_It_Work/#2-how-do-we-pick-a-slab]",")."),(0,o.kt)("h3",{id:"tiny-lfu"},(0,o.kt)("strong",{parentName:"h3"},"TINY-LFU")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"class MMTinyLFU")," (in ",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/MMTinyLFU.h"),") powers\n",(0,o.kt)("a",{parentName:"p",href:"/docs/Cache_Library_User_Guides/eviction_policy/#tinylfu"},"Tiny-LFU"),". This is an\nimplementation of W-TinyLFU cache eviction policy described in\n","[https://arxiv.org/pdf/1512.00727.pdf]",".\nThe main cache and the tiny cache. The tiny cache is typically sized to be 1%\nof the total cache with the main cache being the rest 99%. Both caches are\nimplemented using LRUs. New items land in tiny cache. During eviction, the tail\nitem from the tiny cache is promoted to main cache if its frequency is higher\nthan the tail item of of main cache, and the tail of main cache is evicted.\nThis gives the frequency based admission into main cache. Hits in each cache\nsimply move the item to the head of each LRU cache."),(0,o.kt)("p",null,"The frequency is maintained by ",(0,o.kt)("strong",{parentName:"p"},"count-min-sketch")," (",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/common/CountMinSketch.h"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Insert: A new item is added into the Tiny queue",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the Tiny queue's size is larger than expected, promote the tail of the\nTiny queue into Main queue. Otherwise, swap the tails of the queues, if the\nTiny queue's tail is more frequently accessed than the Main tail."),(0,o.kt)("li",{parentName:"ul"},"If the count-min-sketch is too small for the number of items in the queue, recreate the counters with doubled capacity.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: if recreation happens, the existing frequency counts will be erased."))))),(0,o.kt)("li",{parentName:"ul"},"Record: A promoted item is move to the head of the current queue."),(0,o.kt)("li",{parentName:"ul"},"Remove: The item is removed from the queue."),(0,o.kt)("li",{parentName:"ul"},"Eviction iterator: The iterator consists of two sub-iterators pointing\ntowards the tails of Tiny and Main. The overall iterator returns the less\nfrequently used item of the current two sub-iterators.")),(0,o.kt)("h3",{id:"common-configurations"},(0,o.kt)("strong",{parentName:"h3"},"COMMON CONFIGURATIONS")),(0,o.kt)("p",null,"There are a few common set ups shared by all these three implementations."),(0,o.kt)("h4",{id:"thread-safety"},(0,o.kt)("strong",{parentName:"h4"},"THREAD SAFETY")),(0,o.kt)("p",null,"All of the operations are protected by a mutex."),(0,o.kt)("h4",{id:"optional-promotion"},(0,o.kt)("strong",{parentName:"h4"},"OPTIONAL PROMOTION")),(0,o.kt)("p",null,"Configs on whether to update on a read and/or write can be specified. For\nexample if updateOnRead is set to false, no operation would be taken if the\nitem is read."),(0,o.kt)("h4",{id:"lru-refresh-time"},(0,o.kt)("strong",{parentName:"h4"},"LRU REFRESH TIME")),(0,o.kt)("p",null,"LRU refresh time is an interval within which consecutive record access won't\nre-promote the item. The intention for this mechanism is to reduce lock\ncontention. LRU refresh time is calculated on the oldest element's age\nmultiplied by lruRefreshRatio set in config and capped by a max time (currently\n900 seconds). It is recalculated once every time interval as specified in the\nconfig (mmReconfigureIntervalSecs). The different MMContainers do have slightly\ndifferent implementations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In MMLru, items accessed for the first time are not constrained by LRU\nrefresh time and will be promoted for sure. It uses the time difference between\ncurrent time and the tail item's last update time as the oldest element age.  *\nIn MMTiny-LFU, items accessed for the first time are not constrained by LRU\nrefresh time and will be promoted for sure. It uses the time difference between\ncurrent time and the tail of main queue's last update time as the oldest\nelement age."),(0,o.kt)("li",{parentName:"ul"},"In MM2Q, the time difference between current time and the tail of wamr queue\nis used as the oldest element age.")),(0,o.kt)("h4",{id:"eviction-age-statistics"},(0,o.kt)("strong",{parentName:"h4"},"EVICTION AGE STATISTICS")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EvictionAgeStat")," (",(0,o.kt)("inlineCode",{parentName:"p"},"struct EvictionAgeStat")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/CacheStats.h"),") can be retrieved from all of the\nimplementations. The projectedAge is calculated when the caller calls eviction\nstat with a projectedLength > 0. It is the time difference between current and\nthe last updated time of the projectedLength'th item from the tail of the major\nqueue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For MMLru, there is only one queue and its statistics is populated into\nwarmQueueStat while the other two queue stats are left 0."),(0,o.kt)("li",{parentName:"ul"},"For MM2Q, all the stats are populated. The major queue that is used for\nprojection is the warm queue."),(0,o.kt)("li",{parentName:"ul"},"For MMTiny-LFU, only the main queue's stats is populated into warmQueueStat.\nAnd the main queue is used for projection.")),(0,o.kt)("h2",{id:"summary"},(0,o.kt)("strong",{parentName:"h2"},"Summary")),(0,o.kt)("p",null,"In this article we went over the indexing (Access Container) and eviction (MM\nContainer) mechanism of CacheLib. They are implemented by intrusive hooks in\nthe CacheItem. For public API in CacheAllocator, AccessContainer and\nMMContainer works together to perform indexing and eviction management\nefficiently."),(0,o.kt)("p",null,"Usually, when the API takes a key from the client, AccessContainer::find is\nused to locate the CacheItem. Then the MMContainer can be identified from the\nitem and operation can be performed in constant time.  The most time overhead\non common cache operations (find, insert, remove) is two iterations on the hash\ntable's chain, which is still quite efficient (happens on remove)."))}u.isMDXComponent=!0}}]);