(this["webpackJsonpgit-dash"]=this["webpackJsonpgit-dash"]||[]).push([[0],{49:function(e,t,n){e.exports=n(65)},57:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),l=n.n(o),c=n(24),i=n(29),u=n(15),s=n(12),m=n(18),f=n(8),d=function(e,t){var n,a=localStorage.getItem(e);return a?(n=a,JSON.parse(n)):t},b=function(e,t){return localStorage.setItem(e,(n=t,JSON.stringify(n)));var n},p=function(e,t){var n=Object(a.useRef)(e),r=Object(a.useState)((function(){return d(n.current,t)})),o=Object(f.a)(r,2),l=o[0],c=o[1];return Object(a.useEffect)((function(){b(n.current,l)}),[l]),[l,c]},E="AUTH",v="SELECTED_REPOS",g="LABEL_WHITELIST",h="LABEL_BLACKLIST",O="LABEL_FILTER_MODE",w="WHITELIST",x="BLACKLIST",N=Object(a.createContext)(),y=function(){return Object(a.useContext)(N)},j=function(e){var t=e.children,n=function(){var e=p(E,""),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useMemo)((function(){return{token:n,setToken:r}}),[n,r])}(),o=function(){var e=p(v,[]),t=Object(f.a)(e,2),n=t[0],r=t[1],o=Object(a.useMemo)((function(){return e=function(e){return e.owner.login},n.reduce((function(t,n,a){var r=e(n,a);return t[r]?t[r].push(n):t[r]=[n],t}),{});var e}),[n]),l=Object(a.useMemo)((function(){return n.map((function(e){return e.nameWithOwner}))}),[n]);return Object(a.useMemo)((function(){return{repos:n,groupedRepos:o,repoKeys:l,containsRepo:function(e){return l.includes(e.nameWithOwner)},addRepo:function(e){r((function(t){return[].concat(Object(m.a)(t),[e])}))},removeRepo:function(e){r((function(t){return t.filter((function(t){return t.nameWithOwner!==e.nameWithOwner}))}))}}}),[n,o,l,r])}(),l=function(){var e=p(O,x),t=Object(f.a)(e,2),n=t[0],r=t[1],o=p(g,[]),l=Object(f.a)(o,2),c=l[0],i=l[1],u=p(h,[]),s=Object(f.a)(u,2),d=s[0],b=s[1];return Object(a.useMemo)((function(){return{whitelist:c,blacklist:d,filterMode:n,toggleFilterMode:function(){var e=w,t=x;r((function(n){return n===e?t:e}))},addToWhitelist:function(e){i((function(t){return[].concat(Object(m.a)(t),[e])}))},clearWhitelist:function(){i([])},removeFromWhitelist:function(e){i((function(t){return t.filter((function(t){return t.name!==e.name}))}))},addToBlacklist:function(e){b((function(t){return[].concat(Object(m.a)(t),[e])}))},clearBlacklist:function(){b([])},removeFromBlacklist:function(e){b((function(t){return t.filter((function(t){return t.name!==e.name}))}))}}}),[c,d,i,b,n,r])}(),c=Object(a.useMemo)((function(){return{auth:n,selectedRepos:o,labels:l}}),[n,o,l]);return r.a.createElement(N.Provider,{value:c},t)},k=function(e){var t=e.children,n=y().auth.token,o=Object(a.useMemo)((function(){return new c.a}),[]),l=Object(a.useMemo)((function(){return new i.a({uri:"https://api.github.com/graphql",headers:{authorization:"bearer ".concat(n)}})}),[n]),m=Object(a.useMemo)((function(){return new u.a({link:l,cache:o})}),[l,o]);return r.a.createElement(s.a,{client:m},t)},R=function(e){return Object(a.useMemo)((function(){return Object.entries(e).reduce((function(e,t){var n=Object(f.a)(t,2),a=n[0],r=n[1];return e[a]=Array.isArray(r)?r.join(" "):r,e}),{})}),[e])},A=function(e){var t=e.children,n=R({container:"\n      px-8 max-w-5xl mx-auto h-full\n    "});return r.a.createElement("div",{className:n.container},t)},M=n(33),C=n(6),T=n(34),S=n(25),W=n(23);function L(){var e=Object(T.a)(["\n  {\n    viewer {\n      repositories(\n        first: 12\n        affiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]\n        ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]\n        orderBy: { field: UPDATED_AT, direction: DESC }\n      ) {\n        nodes {\n          name\n          nameWithOwner\n          owner {\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n  }\n"]);return L=function(){return e},e}var B=Object(S.a)(L()),I=n(80),D=n(79),q=(n(57),function(e){var t=e.repos,n=e.onRepoClick,a=void 0===n?null:n,o=e.removable,l=void 0!==o&&o,c=R({repos:"\n        flex flex-row items-center justify-center flex-wrap\n    ",repo:"\n        bg-gray-400 inline-block whitespace-no-wrap\n        m-1 rounded-full p-1 pr-3\n        flex flex-row items-center\n        text-gray-800\n\n        hover:bg-gray-500\n        focus:outline-none\n        focus:bg-purple-300\n\n        focus:text-purple-800\n    ",imageContainer:"\n        relative mr-2 rounded-full overflow-hidden\n    ",removeOverlay:"\n        absolute top-0 bottom-0 right-0 left-0\n        bg-gray-600\n        flex items-center justify-center\n        opacity-75\n    ",removeIcon:"text-gray-200 text-xs leading-none",image:"\n        w-6 h-6\n    ",text:"\n        text-sm leading-none font-semibold\n    "});return r.a.createElement(I.a,{className:c.repos},t.map((function(e){return r.a.createElement(D.a,{key:e.nameWithOwner,timeout:200,classNames:"item"},r.a.createElement("button",{className:c.repo,onClick:a?a(e):null},r.a.createElement("div",{className:c.imageContainer},r.a.createElement("img",{src:e.owner.avatarUrl,className:c.image,alt:e.nameWithOwner}),l?r.a.createElement("div",{className:c.removeOverlay},r.a.createElement("p",{className:c.removeIcon},"\u2715")):null),r.a.createElement("p",{className:c.text},e.nameWithOwner)))})))}),H=function(e){e.onChoose;var t=function(){var e=Object(W.a)(B),t=e.data,n=Object(C.a)(e,["data"]);return Object(M.a)({data:t,repos:t?t.viewer.repositories.nodes:null},n)}(),n=t.loading,a=t.repos,o=t.error,l=y().selectedRepos,c=R({text:"\n        mb-2 mt-4 text-gray-900 font-light\n    "});return r.a.createElement("div",{className:c.container},r.a.createElement("p",{className:c.text},"Get started by picking some repos you want to see:"),n?r.a.createElement("p",null,"Loading..."):o?r.a.createElement("p",null,"something went wrong..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{repos:a.filter((function(e){return!l.containsRepo(e)})),onRepoClick:function(e){return function(t){t.preventDefault(),l.addRepo(e)}}}),l.repos.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:c.text},"Selected:"),r.a.createElement(q,{repos:l.repos,onRepoClick:function(e){return function(t){t.preventDefault(),l.removeRepo(e)}},removable:!0})):null))},P=function(e){var t=e.children,n=y().auth,o=R({container:"\n        flex flex-col items-center justify-center h-full\n    ",text:"\n        text-center max-w-md\n        text-gray-800 mb-4\n    ",link:"\n        text-purple-600 font-semibold\n    ",form:"\n        shadow-lg rounded\n    ",input:"\n        w-56 h-12 px-4 rounded-l\n        border border-gray-400 border-r-0\n        focus:outline-none\n        focus:border-purple-600\n    ",button:"\n        h-12 px-4 bg-purple-600 text-purple-100 rounded-r\n        border border-purple-800 border-l-0\n    "}),l=Object(a.useState)(""),c=Object(f.a)(l,2),i=c[0],u=c[1];return n.token?t:r.a.createElement("div",{className:o.container},r.a.createElement("p",{className:o.text},"Welcome! Before you can get started, you need to supply us with a Personal Access Token so we can see your repositories.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/settings/tokens/new?scopes=repo&description=git-dash",target:"_blank",rel:"noopener noreferrer",className:o.link},"Click here to generate one on Github.")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.setToken(i)},className:o.form},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Paste PAT Here",className:o.input}),r.a.createElement("button",{type:"submit",className:o.button},"Go")))},U=n(78),_=n(77),F=n(43),G=n.n(F),$=n(45),J=n.n($),K=n(46),Q=n.n(K),V=function(e){var t=e.status,n=(Object(C.a)(e,["status"]),R({container:"\n        w-8 h-8 absolute\n        flex items-center justify-center\n        rounded-full shadow\n    ",icon:"\n        leading-none font-xs\n    "})),a={COMMENTED:G.a,CHANGES_REQUESTED:J.a,APPROVED:Q.a}[t],o={COMMENTED:"bg-white",CHANGES_REQUESTED:"bg-red-500",APPROVED:"bg-green-600"}[t],l={COMMENTED:"text-gray-600",CHANGES_REQUESTED:"text-red-100",APPROVED:"text-green-100"}[t];return r.a.createElement("div",{className:"".concat(o," ").concat(l," ").concat(n.container),style:{right:"-.75rem",bottom:"-.75rem"}},r.a.createElement(a,{className:n.icon,fontSize:"inherit"}))},z=function(e){var t=function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,a){return[t,t,n,n,a,a].join("")})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),a=Object(f.a)(n,4);return[a[1],a[2],a[3]].map((function(e){return parseInt(e,16)}))}(e),n=Object(f.a)(t,3),a=n[0],r=n[1],o=n[2];return Math.round((299*a+587*r+114*o)/1e3)>125?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.9)"},Z=function(e,t){Object(a.useEffect)((function(){var n,a=(n=e,(Array.isArray(n)?n:[n]).map((function(e){return e instanceof HTMLElement||!e?e:e.current}))),r=function(e){a.some((function(t){return t&&t.contains(e.target)}))||t(e)};return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)}}),[e,t])},X=function(e){var t=e.label,n=e.buttons,o=void 0===n?null:n,l=R({container:"\n        relative mr-1\n    ",tag:"\n        leading-none text-xs px-2 py-1\n        rounded-full font-semibold\n        shadow-inner\n        focus:outline-none\n        focus:opacity-75\n        hover:shadow\n    ",tooltipWrapper:"\n        absolute bottom-full left-1/2 pb-1\n    ",tooltip:"\n        bg-white rounded border border-gray-300\n        shadow-lg py-2 w-32 flex flex-col\n    ",button:"\n        leading-none px-4 py-2 text-sm text-gray-700\n        hover:bg-purple-300 hover:text-purple-800\n        focus:outline-none\n        focus:bg-gray-200\n    "}),c=Object(a.useState)(!1),i=Object(f.a)(c,2),u=i[0],s=i[1],m=Object(a.useRef)();return Z(m,Object(a.useCallback)((function(){s(!1)}),[])),r.a.createElement("div",{className:l.container},r.a.createElement("button",{onClick:function(){return s(!0)},disabled:!o,className:l.tag,style:{background:"#".concat(t.color),color:z(t.color)}},t.name),r.a.createElement("div",{ref:m,className:l.tooltipWrapper,style:{transform:"translateX(-50%)",display:u&&o?"block":"none"}},o?r.a.createElement("div",{className:l.tooltip},o({className:l.button,label:t})):null))},Y=function(e){var t=e.labels,n=e.buttons,a=void 0===n?null:n,o=R({container:"\n        flex flex-row items-center\n    "});return r.a.createElement("div",{className:o.container},t.map((function(e){return r.a.createElement(X,{key:e.name,label:e,buttons:a})})))},ee=function(e){var t=e.pullRequest,n=R({pullRequest:"\n        p-6\n        border-b border-gray-300\n    ",preTitle:"\n        flex flex-row items-center mb-2\n    ",owner:"\n        flex flex-row items-center\n    ",ownerAvatar:"\n        w-6 h-6 rounded-full shadow mr-1\n    ",repo:"\n        text-base text-gray-800 leading-none mr-2\n    ",titleBar:"\n        flex flex-row justify-between items-center mb-1\n    ",title:"\n        text-gray-900 font-semibold text-lg\n    ",author:"\n        inline-flex flex-row items-center\n        relative\n        bg-gray-400 rounded-full py-2 pl-3 pr-12\n        shadow-inner\n    ",authorAvatar:"\n        w-10 h-10 rounded-full\n        absolute right-0\n        shadow\n    ",authorName:"\n        text-sm leading-none text-gray-900 whitespace-no-wrap\n    ",timestamps:"\n        text-sm leading-none text-gray-700\n    ",reviewers:"\n        flex flex-row mt-3\n    ",review:"\n        relative mr-4\n    ",reviewerAvatar:"\n        w-10 h-10 rounded-full\n        shadow\n    ",reviewStatus:"\n        absolute\n    "}),a=y().labels,o=Object(U.a)(Object(_.a)(t.createdAt),"do MMM HH:mm"),l=Object(U.a)(Object(_.a)(t.updatedAt),"do MMM HH:mm");return r.a.createElement("div",{className:n.pullRequest,key:t.id},r.a.createElement("div",{className:n.titleBar},r.a.createElement("div",null,r.a.createElement("div",{className:n.preTitle},r.a.createElement("div",{className:n.owner},r.a.createElement("img",{src:t.repository.owner.avatarUrl,alt:t.repository.nameWithOwner,className:n.ownerAvatar}),r.a.createElement("p",{className:n.repo},t.repository.nameWithOwner)),r.a.createElement(Y,{labels:t.labels.nodes,buttons:function(e){var t=e.className,n=e.label;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:t,onClick:function(){return a.addToWhitelist(n)}},"Whitelist"),r.a.createElement("button",{className:t,onClick:function(){return a.addToBlacklist(n)}},"Blacklist"))}})),r.a.createElement("p",{className:n.title},r.a.createElement("a",{href:t.permalink,target:"_blank",rel:"noopener noreferrer"},t.title))),r.a.createElement("div",{className:n.author},r.a.createElement("img",{src:t.author.avatarUrl,alt:t.author.login,className:n.authorAvatar}),r.a.createElement("p",{className:n.authorName},t.author.login))),r.a.createElement("p",{className:n.timestamps},"created ",o,", last updated ",l),r.a.createElement("div",{className:n.reviewers},t.reviews.nodes.filter((function(e){return"COMMENTED"!==e.state})).map((function(e){return r.a.createElement("div",{className:n.review,key:e.id,title:"Created ".concat(Object(U.a)(Object(_.a)(e.createdAt),"do MMM HH:mm"))},r.a.createElement("img",{src:e.author.avatarUrl,alt:e.author.login,className:n.reviewerAvatar}),r.a.createElement(V,{status:e.state}))}))))};function te(){var e=Object(T.a)(["\n  query PullRequests($query: String!, $limit: Int!) {\n    search(query: $query, type: ISSUE, last: $limit) {\n      nodes {\n        ... on PullRequest {\n          id\n          title\n          createdAt\n          updatedAt\n          permalink\n          author {\n            login\n            avatarUrl\n          }\n          repository {\n            nameWithOwner\n            owner {\n              avatarUrl\n            }\n          }\n          labels(first: 15) {\n            nodes {\n              name\n              color\n            }\n          }\n          reviews(last: 100) {\n            nodes {\n              id\n              createdAt\n              state\n              author {\n                login\n                avatarUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return te=function(){return e},e}var ne=Object(S.a)(te()),ae=function(){var e=y(),t=e.selectedRepos,n=e.labels,o=R({pullRequests:"\n        bg-gray-100 my-4 shadow-sm rounded border border-gray-300\n    "}),l=t.repos.length<1?10:100,c=function(e,t){var n=Object(W.a)(ne,{variables:{query:e,limit:t},pollInterval:3e4}),a=n.data,r=Object(C.a)(n,["data"]);return Object(M.a)({data:a,pullRequests:a?a.search.nodes:null},r)}(Object(a.useMemo)((function(){var e=t.repos.map((function(e){return"repo:".concat(e.nameWithOwner)})).join(" "),a=n.filterMode===x?n.blacklist.map((function(e){return'-label:"'.concat(e.name,'"')})).join(" "):n.whitelist.map((function(e){return'label:"'.concat(e.name,'"')})).join(" ");return"is:pr is:open ".concat(e," ").concat(a)}),[t.repos,n]),l),i=c.loading,u=c.error,s=c.pullRequests;return i?r.a.createElement("p",null,"Loading..."):u?r.a.createElement("p",null,"Something went wrong..."):r.a.createElement("div",{className:o.pullRequests},s.map((function(e){return r.a.createElement(ee,{pullRequest:e,key:e.id})})))},re=function(){var e=y().labels,t=R({container:"\n        p-4 pb-0 bg-gray-100 shadow-sm rounded border bordery-gray-300\n        mt-4\n    ",section:"\n        pb-4\n    ",text:"\n        text-gray-900 font-light\n    ",button:"\n        rounded bg-gray-400 leading-none\n        p-2 mt-1\n    "});return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.section},r.a.createElement("p",{className:t.text},"mode: ",e.filterMode),r.a.createElement("button",{onClick:e.toggleFilterMode,className:t.button},"toggle")),r.a.createElement("div",{className:t.section},r.a.createElement("p",{className:t.text},"whitelist:"),r.a.createElement(Y,{labels:e.whitelist,buttons:function(t){var n=t.className,a=t.label;return r.a.createElement("button",{className:n,onClick:function(){return e.removeFromWhitelist(a)}},"Remove")}}),r.a.createElement("button",{onClick:e.clearWhitelist,className:t.button},"clear")),r.a.createElement("div",{className:t.section},r.a.createElement("p",{className:t.text},"blacklist:"),r.a.createElement(Y,{labels:e.blacklist,buttons:function(t){var n=t.className,a=t.label;return r.a.createElement("button",{className:n,onClick:function(){return e.removeFromBlacklist(a)}},"Remove")}}),r.a.createElement("button",{onClick:e.clearBlacklist,className:t.button},"clear")))};n(63);l.a.render(r.a.createElement((function(){return r.a.createElement(j,null,r.a.createElement(A,null,r.a.createElement(P,null,r.a.createElement(k,null,r.a.createElement(H,null),r.a.createElement(re,null),r.a.createElement(ae,null)))))}),null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.24fc63c3.chunk.js.map