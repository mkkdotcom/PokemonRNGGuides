(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7frF":function(e,t,a){"use strict";a("HAE/");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},Mdw5:function(e,t,a){"use strict";a.r(t);a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Vd3H");var n=a("q1tI"),r=a.n(n),i=a("YPLI"),o=a("Wbzz"),l=a("ofer"),u=a("R/WZ"),c=a("eD//"),d=a("tVbE"),s=a("IsqK"),m=a("7frF"),f=a.n(m),p=a("PsDL"),g=Object(u.a)((function(e){return{guideInfo:{display:"flex",paddingTop:"3rem",paddingBottom:"3rem",borderBottom:"1px solid "+e.palette.divider},viewButton:{marginRight:"2rem"},subCategoryTitle:{marginTop:"3rem"}}})),b=function(e){var t=e.subCategoryTitle,a=e.guides,n=g(),i=a.map((function(e){var t=e.frontmatter,a=t.title,i=t.slug,u=t.description,c=function(e){return"guide-"+e+"-title"}(i),m=function(e){return"guide-"+e+"-description"}(i);return r.a.createElement(d.a,{className:n.guideInfo,key:a,disableGutters:!0},r.a.createElement(p.a,{component:o.a,className:n.viewButton,to:"/"+i,role:"link","aria-labelledby":c+" "+m},r.a.createElement(f.a,null)),r.a.createElement(s.a,null,r.a.createElement(l.a,{variant:"h5",component:"p",id:c},a),r.a.createElement(l.a,{variant:"body2",id:m},u)))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"h4",component:"h2",className:n.subCategoryTitle},t),r.a.createElement(c.a,null,i))};a.d(t,"query",(function(){return v}));t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.nodes,o=a.category,l=n.reduce((function(e,t){var a=t.frontmatter.subCategory||"General",n=e[a]||[];return n.push(t),e[a]=n,e}),{}),u=Object.keys(l).sort().map((function(e){return r.a.createElement(b,{key:e,subCategoryTitle:e,guides:l[e]})}));return r.a.createElement(i.a,{title:o},u)};var v="2416492288"}}]);
//# sourceMappingURL=component---src-templates-category-js-73c70ba2d503e5122c06.js.map