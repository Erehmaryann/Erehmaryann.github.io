"use strict";(self.webpackChunkjam_forte=self.webpackChunkjam_forte||[]).push([[911],{3390:function(e,t,r){var n={currentTheme:"dark",changeCurrentTheme:function(e){}},a=(0,r(2791).createContext)(n);t.Z=a},3911:function(e,t,r){r.r(t);var n=r(885),a=r(2791),c=r(3390),u=r(184);t.default=function(e){var t=e.children,r=localStorage.getItem("theme"),o=(0,a.useState)(r||"light"),h=(0,n.Z)(o,2),s=h[0],i=h[1];return(0,a.useEffect)((function(){"light"===s?document.body.classList.remove("dark"):document.body.classList.add("dark")}),[s]),(0,u.jsx)(c.Z.Provider,{value:{currentTheme:s,changeCurrentTheme:function(e){i(e),localStorage.setItem("theme",e)}},children:t})}}}]);
//# sourceMappingURL=911.c7e90828.chunk.js.map