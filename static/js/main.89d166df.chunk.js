(this["webpackJsonpgit-dash"]=this["webpackJsonpgit-dash"]||[]).push([[0],{54:function(e,n,t){e.exports=t(71)},62:function(e,n,t){},68:function(e,n,t){},69:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(31),l=t.n(o),c=t(26),i=t(30),u=t(15),s=t(12),m=t(23),d=t(7),f=function(e,n){var t,r=localStorage.getItem(e);return r?(t=r,JSON.parse(t)):n},b=function(e,n){return localStorage.setItem(e,(t=n,JSON.stringify(t)));var t},p=function(e,n){var t=Object(r.useRef)(e),a=Object(r.useState)((function(){return f(t.current,n)})),o=Object(d.a)(a,2),l=o[0],c=o[1];return Object(r.useEffect)((function(){b(t.current,l)}),[l]),[l,c]},g="AUTH",E="SELECTED_REPOS",v="LABEL_WHITELIST",h="LABEL_BLACKLIST",w="LABEL_FILTER_ENABLED",x="LABEL_FILTER_MODE",y="DARK_MODE",k="REPO_PICKER_OPEN",O="WHITELIST",N="BLACKLIST",j=function(){var e=p(y,window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){t?document.documentElement.classList.add("mode-dark"):document.documentElement.classList.remove("mode-dark")}),[t]),Object(r.useMemo)((function(){return{isDarkMode:t,toggleDarkMode:function(){a((function(e){return!e}))}}}),[t,a])},M=Object(r.createContext)(),R=function(){return Object(r.useContext)(M)},A=function(e){var n=e.children,t=function(){var e=p(g,""),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(r.useMemo)((function(){return{token:t,setToken:a}}),[t,a])}(),o=function(){var e=p(E,[]),n=Object(d.a)(e,2),t=n[0],a=n[1],o=Object(r.useMemo)((function(){return e=function(e){return e.owner.login},t.reduce((function(n,t,r){var a=e(t,r);return n[a]?n[a].push(t):n[a]=[t],n}),{});var e}),[t]),l=Object(r.useMemo)((function(){return t.map((function(e){return e.nameWithOwner}))}),[t]);return Object(r.useMemo)((function(){return{repos:t,groupedRepos:o,repoKeys:l,containsRepo:function(e){return l.includes(e.nameWithOwner)},addRepo:function(e){a((function(n){return[].concat(Object(m.a)(n),[e])}))},removeRepo:function(e){a((function(n){return n.filter((function(n){return n.nameWithOwner!==e.nameWithOwner}))}))}}}),[t,o,l,a])}(),l=function(){var e=N,n=O,t=p(w,!1),a=Object(d.a)(t,2),o=a[0],l=a[1],c=p(x,e),i=Object(d.a)(c,2),u=i[0],s=i[1],f=p(v,[]),b=Object(d.a)(f,2),g=b[0],E=b[1],y=p(h,[]),k=Object(d.a)(y,2),j=k[0],M=k[1],R=Object(r.useCallback)((function(e){return function(n){return n.findIndex((function(n){return n.name===e.name}))>=0?n:[].concat(Object(m.a)(n),[e])}}),[]);return Object(r.useMemo)((function(){return{whitelist:g,blacklist:j,filterMode:u,filterList:u===n?g:j,filterEnabled:o,listHasLabel:function(e,n){return e.findIndex((function(e){return e.name===n.name}))>=0},toggleFilter:function(){l((function(e){return!e}))},toggleFilterMode:function(){s((function(t){return t===n?e:n}))},addToWhitelist:function(e){E(R(e))},clearWhitelist:function(){E([])},removeFromWhitelist:function(e){E((function(n){return n.filter((function(n){return n.name!==e.name}))}))},addToBlacklist:function(e){M(R(e))},clearBlacklist:function(){M([])},removeFromBlacklist:function(e){M((function(n){return n.filter((function(n){return n.name!==e.name}))}))}}}),[g,j,E,M,u,s,o,l,e,n,R])}(),c=j(),i=Object(r.useMemo)((function(){return{auth:t,selectedRepos:o,labels:l,darkMode:c}}),[t,o,l,c]);return a.a.createElement(M.Provider,{value:i},n)},C=function(e){var n=e.children,t=R().auth.token,o=Object(r.useMemo)((function(){return new c.a}),[]),l=Object(r.useMemo)((function(){return new i.a({uri:"https://api.github.com/graphql",headers:{authorization:"bearer ".concat(t)}})}),[t]),m=Object(r.useMemo)((function(){return new u.a({link:l,cache:o})}),[l,o]);return a.a.createElement(s.a,{client:m},n)},L=function(e){return Object(r.useMemo)((function(){return Object.entries(e).reduce((function(e,n){var t=Object(d.a)(n,2),r=t[0],a=t[1];return e[r]=Array.isArray(a)?a.join(" "):a,e}),{})}),[e])},T=function(e){var n=e.children,t=L({container:"\n      px-8 max-w-5xl mx-auto h-full\n    "});return a.a.createElement("div",{className:t.container},n)},S=t(34),I=t(6),D=t(35),W=t(27),B=t(25);function P(){var e=Object(D.a)(["\n  {\n    viewer {\n      repositories(\n        first: 12\n        affiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]\n        ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]\n        orderBy: { field: UPDATED_AT, direction: DESC }\n      ) {\n        nodes {\n          name\n          nameWithOwner\n          owner {\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n  }\n"]);return P=function(){return e},e}var F=Object(W.a)(P()),_=t(85),H=t(84),q=(t(62),function(e){var n=e.repos,t=e.onRepoClick,r=void 0===t?null:t,o=e.removable,l=void 0!==o&&o,c=L({repos:"\n        flex flex-row items-center justify-center flex-wrap mb-4\n    ",repo:"\n        bg-gray-400 dark:bg-gray-800\n        focus:bg-purple-300 dark-focus:bg-purple-800\n        text-gray-800 dark:text-gray-400\n        focus:text-purple-800 dark-focus:text-purple-300\n        inline-block whitespace-no-wrap\n        m-1 rounded-full p-1 pr-3\n        flex flex-row items-center\n\n        hover:bg-gray-500\n        focus:outline-none\n    ",imageContainer:"\n        relative mr-2 rounded-full overflow-hidden\n    ",removeOverlay:"\n        absolute top-0 bottom-0 right-0 left-0\n        bg-gray-600\n        flex items-center justify-center\n        opacity-75\n    ",removeIcon:"text-gray-200 text-xs leading-none",image:"\n        w-6 h-6\n    ",text:"\n        text-sm leading-none font-semibold\n    "});return a.a.createElement(_.a,{className:c.repos},n.map((function(e){return a.a.createElement(H.a,{key:e.nameWithOwner,timeout:200,classNames:"item"},a.a.createElement("button",{className:c.repo,onClick:r?r(e):null},a.a.createElement("div",{className:c.imageContainer},a.a.createElement("img",{src:e.owner.avatarUrl,className:c.image,alt:e.nameWithOwner}),l?a.a.createElement("div",{className:c.removeOverlay},a.a.createElement("p",{className:c.removeIcon},"\u2715")):null),a.a.createElement("p",{className:c.text},e.nameWithOwner)))})))}),U=t(43),G=t.n(U),$=function(e){var n=e.open,t=e.selectedCount,r=e.onClick,o=L({button:"\n      py-2 px-1 mr-8\n      border-b border-t border-gray-400 dark:border-gray-850\n      text-gray-800 dark:text-white text-sm leading-loose\n      flex justify-between w-full\n      focus:outline-none\n    ",icon:"\n      transition transition-transform duration-200 ease-in-out\n      transform rotate-90\n    ",open:"\n       rotate-180\n    ",count:"\n       font-bold\n    "}),l=0!==t||n?" ".concat(1===t?"repository":"repositories"," selected"):"Click to select repositories you want to see";return a.a.createElement("button",{className:o.button,onClick:r},a.a.createElement("div",{className:[o.icon,n?o.open:null]},a.a.createElement(G.a,null)),a.a.createElement("div",null,a.a.createElement("span",{className:o.count},n?t:t||""),l))},K=(t(68),t(45)),z=t.n(K),J=t(46),Q=t.n(J),V=function(){var e=R().darkMode,n=L({container:"\n        flex flex-row items-center justify-end\n    ",icon:"\n        text-gray-600\n    ",switch:"\n        bg-gray-400 dark:bg-gray-800\n        box-content\n        border-2 border-gray-400 dark:border-gray-800\n        w-12 h-6 rounded-full\n        relative\n        focus:outline-none\n        transition-shadow duration-200\n        active:shadow\n        mx-2\n    ",knob:"\n        w-6 h-6 rounded-full\n        bg-gray-200 dark:bg-gray-700\n        absolute top-0 left-1/2\n        transition-transform duration-200\n        transform translate-x-0\n    ",knobInactive:"\n        -translate-x-full\n    "});return a.a.createElement("div",{className:n.container},a.a.createElement(z.a,{className:n.icon,fontSize:"small"}),a.a.createElement("button",{onClick:function(){return e.toggleDarkMode()},className:n.switch},a.a.createElement("div",{className:[n.knob,e.isDarkMode?n.knobActive:n.knobInactive]})),a.a.createElement(Q.a,{className:n.icon,fontSize:"small"}))},Z=function(e){e.onChoose;var n=function(){var e=Object(B.a)(F),n=e.data,t=Object(I.a)(e,["data"]);return Object(S.a)({data:n,repos:n?n.viewer.repositories.nodes:null},t)}(),t=n.loading,r=n.repos,o=n.error,l=R().selectedRepos,c=p(k,!0),i=Object(d.a)(c,2),u=i[0],s=i[1],m=L({barWrapper:"\n      flex flex-row mb-8 pt-4\n    ",container:"-mt-4 mb-12",text:"\n        mb-2 text-gray-900 dark:text-gray-500 font-light\n        leading-none\n    "});return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:m.barWrapper},a.a.createElement($,{open:u,selectedCount:l.repos.length,onClick:function(){return s((function(e){return!e}))}}),a.a.createElement(V,null)),a.a.createElement(H.a,{in:u,timeout:200,classNames:"picker",unmountOnExit:!0},a.a.createElement("div",{className:m.container},a.a.createElement("p",{className:m.text},"Get started by picking some repos you want to see:"),t?a.a.createElement("p",null,"Loading..."):o?a.a.createElement("p",null,"something went wrong..."):a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{repos:r.filter((function(e){return!l.containsRepo(e)})),onRepoClick:function(e){return function(n){n.preventDefault(),l.addRepo(e)}}}),l.repos.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.text},"Selected:"),a.a.createElement(q,{repos:l.repos,onRepoClick:function(e){return function(n){n.preventDefault(),l.removeRepo(e)}},removable:!0})):null))))},X=function(e){var n=e.children,t=R().auth,o=L({container:"\n        flex flex-col items-center justify-center h-full\n    ",text:"\n        text-center max-w-md\n        text-gray-800 mb-4\n        dark:text-gray-600\n    ",link:"\n        text-purple-600 font-semibold\n    ",form:"\n        shadow-lg rounded\n    ",input:"\n        w-56 h-12 px-4 rounded-l\n        border border-r-0\n        border-gray-400 dark:border-gray-750\n        bg-gray-100 dark:bg-gray-600\n        focus:outline-none\n        focus:border-purple-600\n        placeholder-gray-500\n        text-gray-800 dark:text-gray-400\n    ",button:"\n        h-12 px-4 bg-purple-600 text-purple-100 rounded-r\n        border border-purple-800 border-l-0\n    "}),l=Object(r.useState)(""),c=Object(d.a)(l,2),i=c[0],u=c[1];return t.token?n:a.a.createElement("div",{className:o.container},a.a.createElement("p",{className:o.text},"Welcome! Before you can get started, you need to supply us with a Personal Access Token so we can see your repositories.",a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/settings/tokens/new?scopes=repo&description=git-dash",target:"_blank",rel:"noopener noreferrer",className:o.link},"Click here to generate one on Github.")),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.setToken(i)},className:o.form},a.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Paste PAT Here",className:o.input}),a.a.createElement("button",{type:"submit",className:o.button},"Go")))},Y=t(83),ee=t(82),ne=t(47),te=t.n(ne),re=t(48),ae=t.n(re),oe=t(49),le=t.n(oe),ce=t(50),ie=t.n(ce),ue=function(e){var n=e.status,t=(Object(I.a)(e,["status"]),L({container:"\n        w-8 h-8 absolute\n        flex items-center justify-center\n        rounded-full shadow\n    ",icon:"\n        leading-none font-xs\n    "})),r={COMMENTED:te.a,CHANGES_REQUESTED:ae.a,APPROVED:le.a,PENDING:ie.a}[n],o={COMMENTED:"bg-white",CHANGES_REQUESTED:"bg-red-500",APPROVED:"bg-green-600",PENDING:"bg-yellow-500"}[n],l={COMMENTED:"text-gray-600",CHANGES_REQUESTED:"text-red-100",APPROVED:"text-green-100",PENDING:"text-yellow-900"}[n];return a.a.createElement("div",{className:"".concat(o," ").concat(l," ").concat(t.container),style:{right:"-.75rem",bottom:"-.75rem"}},a.a.createElement(r,{className:t.icon,fontSize:"inherit"}))},se=function(e){var n=function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return[n,n,t,t,r,r].join("")})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=Object(d.a)(t,4);return[r[1],r[2],r[3]].map((function(e){return parseInt(e,16)}))}(e),t=Object(d.a)(n,3),r=t[0],a=t[1],o=t[2];return Math.round((299*r+587*a+114*o)/1e3)>125?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.9)"},me=function(e,n){Object(r.useEffect)((function(){var t,r=(t=e,(Array.isArray(t)?t:[t]).map((function(e){return e instanceof HTMLElement||!e?e:e.current}))),a=function(e){r.some((function(n){return n&&n.contains(e.target)}))||n(e)};return document.addEventListener("mousedown",a),function(){return document.removeEventListener("mousedown",a)}}),[e,n])},de=function(e){var n=e.label,t=e.buttons,o=void 0===t?null:t,l=L({container:"\n        relative mr-1\n    ",tag:"\n        leading-none text-xs px-2 py-1\n        rounded-full font-semibold\n        shadow-inner\n        focus:outline-none\n        focus:opacity-75\n        hover:shadow\n    ",tooltipWrapper:"\n        absolute bottom-full left-1/2 pb-1\n    ",tooltip:"\n        bg-white dark:bg-gray-750 rounded\n        border border-gray-300 dark:border-gray-800\n        shadow-lg py-1 min-w-48 flex flex-col items-stretch\n    ",button:"\n        lowercase whitespace-no-wrap\n        leading-none px-4 py-2 text-sm\n        text-gray-700 dark:text-gray-300\n        hover:bg-purple-300 hover:text-purple-800\n        dark-hover:bg-purple-600 dark-hover:text-purple-100\n        focus:outline-none\n        focus:bg-gray-200\n    "}),c=Object(r.useState)(!1),i=Object(d.a)(c,2),u=i[0],s=i[1],m=Object(r.useRef)();return me(m,Object(r.useCallback)((function(){s(!1)}),[])),a.a.createElement("div",{className:l.container},a.a.createElement("button",{onClick:function(){return s(!0)},disabled:!o,className:l.tag,style:{background:"#".concat(n.color),color:se(n.color)}},n.name),a.a.createElement("div",{ref:m,className:l.tooltipWrapper,style:{transform:"translateX(-50%)",display:u&&o?"block":"none"}},o?a.a.createElement("div",{className:l.tooltip},o({className:l.button,label:n,hideTooltip:function(){s(!1)}})):null))},fe=function(e){var n=e.labels,t=e.buttons,r=void 0===t?null:t,o=L({container:"\n        flex flex-row items-center\n    "});return a.a.createElement("div",{className:o.container},n.map((function(e){return a.a.createElement(de,{key:e.name,label:e,buttons:r})})))},be=function(e){var n=e.pullRequest,t=L({pullRequest:"\n        p-6\n        border-b border-gray-300 dark:border-gray-750\n        last:border-b-0\n    ",preTitle:"\n        flex flex-row items-center mb-1\n    ",owner:"\n        flex flex-row items-center\n    ",ownerAvatar:"\n        w-6 h-6 rounded-full shadow mr-1\n    ",repo:"\n        text-base text-gray-800 dark:text-gray-500 leading-none mr-2\n    ",titleBar:"\n        flex flex-row justify-between items-center mb-1\n    ",title:"\n        text-gray-900 font-semibold text-lg\n        dark:text-gray-300\n        block p-1 -mx-1\n    ",author:"\n        inline-flex flex-row items-center\n        relative\n        bg-gray-400 dark:bg-gray-850\n        rounded-full py-2 pl-3 pr-12\n        shadow-inner\n    ",authorAvatar:"\n        w-10 h-10 rounded-full\n        absolute right-0\n        shadow\n    ",authorName:"\n        text-sm leading-none whitespace-no-wrap\n        text-gray-900 dark:text-gray-400\n    ",timestamps:"\n        text-sm leading-none text-gray-700 dark:text-gray-500\n        pointer-events-none\n    ",reviewers:"\n        flex flex-row mt-3\n    ",review:"\n        relative mr-4\n    ",reviewerAvatar:"\n        w-10 h-10 rounded-full\n        shadow\n    ",reviewStatus:"\n        absolute\n    "}),r=R().labels,o=Object(Y.a)(Object(ee.a)(n.createdAt),"do MMM HH:mm"),l=Object(Y.a)(Object(ee.a)(n.updatedAt),"do MMM HH:mm");return a.a.createElement("div",{className:t.pullRequest,key:n.id},a.a.createElement("div",{className:t.titleBar},a.a.createElement("div",null,a.a.createElement("div",{className:t.preTitle},a.a.createElement("div",{className:t.owner},a.a.createElement("img",{src:n.repository.owner.avatarUrl,alt:n.repository.nameWithOwner,className:t.ownerAvatar}),a.a.createElement("p",{className:t.repo},n.repository.nameWithOwner)),a.a.createElement(fe,{labels:n.labels.nodes,buttons:function(e){var n=e.className,t=e.label,o=e.hideTooltip,l=r.listHasLabel(r.whitelist,t),c=r.listHasLabel(r.blacklist,t);return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:n,onClick:function(){l?r.removeFromWhitelist(t):r.addToWhitelist(t),o()}},l?"remove from":"add to"," whitelist"),a.a.createElement("button",{className:n,onClick:function(){c?r.removeFromBlacklist(t):r.addToBlacklist(t),o()}},c?"remove from":"add to"," blacklist"))}})),a.a.createElement("a",{className:t.title,href:n.permalink,target:"_blank",rel:"noopener noreferrer"},n.title)),a.a.createElement("div",{className:t.author},a.a.createElement("img",{src:n.author.avatarUrl,alt:n.author.login,className:t.authorAvatar}),a.a.createElement("p",{className:t.authorName},n.author.login))),a.a.createElement("p",{className:t.timestamps},"created ",o,", last updated ",l),a.a.createElement("div",{className:t.reviewers},n.reviews.nodes.filter((function(e){return"COMMENTED"!==e.state})).map((function(e){return a.a.createElement("div",{className:t.review,key:e.id,title:"Created ".concat(Object(Y.a)(Object(ee.a)(e.createdAt),"do MMM HH:mm"))},a.a.createElement("img",{src:e.author.avatarUrl,alt:e.author.login,className:t.reviewerAvatar}),a.a.createElement(ue,{status:e.state}))}))))};function pe(){var e=Object(D.a)(["\n  query PullRequests($query: String!, $limit: Int!) {\n    search(query: $query, type: ISSUE, last: $limit) {\n      nodes {\n        ... on PullRequest {\n          id\n          title\n          createdAt\n          updatedAt\n          permalink\n          author {\n            login\n            avatarUrl\n          }\n          repository {\n            nameWithOwner\n            owner {\n              avatarUrl\n            }\n          }\n          labels(first: 15) {\n            nodes {\n              name\n              color\n            }\n          }\n          reviews(last: 100) {\n            nodes {\n              id\n              createdAt\n              state\n              author {\n                login\n                avatarUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return pe=function(){return e},e}var ge=Object(W.a)(pe()),Ee=function(){var e=R(),n=e.selectedRepos,t=e.labels,o=L({pullRequests:"\n        bg-gray-100 dark:bg-gray-800\n        border-gray-300 dark:border-gray-750\n        mb-4 shadow-sm rounded border\n    "}),l=n.repos.length<1?10:100,c=function(e,n){var t=Object(B.a)(ge,{variables:{query:e,limit:n},pollInterval:3e4}),r=t.data,a=Object(I.a)(t,["data"]);return Object(S.a)({data:r,pullRequests:r?r.search.nodes:null},a)}(Object(r.useMemo)((function(){var e=n.repos.map((function(e){return"repo:".concat(e.nameWithOwner)})).join(" "),r=t.filterEnabled?t.filterMode===N?t.blacklist.map((function(e){return'-label:"'.concat(e.name,'"')})).join(" "):t.whitelist.map((function(e){return'label:"'.concat(e.name,'"')})).join(" "):"";return"is:pr is:open ".concat(e," ").concat(r)}),[n.repos,t]),l),i=c.loading,u=c.error,s=c.pullRequests;return i?a.a.createElement("p",null,"Loading..."):u?a.a.createElement("p",null,"Something went wrong..."):a.a.createElement("div",{className:o.pullRequests},s.map((function(e){return a.a.createElement(be,{pullRequest:e,key:e.id})})))},ve=function(){var e=R().labels,n=e.filterMode,t=e.filterList,r=e.removeFromWhitelist,o=e.removeFromBlacklist,l=e.toggleFilterMode,c=e.filterEnabled,i=e.toggleFilter,u=L({container:"\n        flex flex-row justify-between items-end\n        w-full mb-2 px-1\n    ",selected:"\n        flex flex-row items-center\n    ",selectedLabel:"\n        -mb-px text-sm\n        mr-2 leading-none\n        text-gray-700 dark:text-gray-500\n    ",button:"\n        text-sm\n        text-purple-600\n        focus:outline-none\n        active:font-semibold\n    ",button2:"\n        text-sm ml-4\n        text-gray-700 dark:text-gray-500\n        focus:outline-none\n        active:font-semibold\n    "}),s=t.length<1;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:u.container},a.a.createElement("div",{className:u.selected},c?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:u.selectedLabel},n===O?s?"no items in whitelist":"showing only":s?"no items in blacklist":"hiding"),a.a.createElement(fe,{labels:t,buttons:function(e){var t=e.className,l=e.label;return a.a.createElement("button",{className:t,onClick:function(){return n===O?r(l):o(l)}},"remove from ",n.toLowerCase())}})):null),a.a.createElement("div",null,c?a.a.createElement("button",{className:u.button,onClick:function(){return l()}},"switch to"," ",n===O?"blacklist":"whitelist"," ","mode"):null,a.a.createElement("button",{className:u.button2,onClick:function(){return i()}},c?"disable":"enable"," filter"))))};t(69);l.a.render(a.a.createElement((function(){return a.a.createElement(A,null,a.a.createElement(T,null,a.a.createElement(X,null,a.a.createElement(C,null,a.a.createElement(Z,null),a.a.createElement(ve,null),a.a.createElement(Ee,null)))))}),null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.89d166df.chunk.js.map