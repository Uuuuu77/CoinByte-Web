import{r as l,P as t,j as e}from"./index-cebe5534.js";function p({title:s,titleId:r,...a},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},a),s?l.createElement("title",{id:r},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const u=l.forwardRef(p),g=u,o={size:24,color:"currentColor",strokeWidth:1.5,className:""},n=({children:s,size:r=o.size,color:a=o.color,strokeWidth:i=o.strokeWidth,className:c=o.className,ariaLabel:d="",...h})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:a,strokeWidth:i,className:`inline-block ${c}`,style:{width:r,height:r},role:"img","aria-label":d||void 0,...h,children:s}),j={Twitter:s=>e.jsx(n,{...s,fill:"currentColor",stroke:null,children:e.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}),GitHub:s=>e.jsx(n,{...s,fill:"currentColor",stroke:null,children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),LinkedIn:s=>e.jsx(n,{...s,fill:"currentColor",stroke:null,children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})};n.propTypes={size:t.oneOfType([t.number,t.string]),color:t.string,strokeWidth:t.number,className:t.string,ariaLabel:t.string,children:t.node.isRequired};const v=()=>{const[s,r]=l.useState(""),[a,i]=l.useState(!1),{Twitter:c,GitHub:d,LinkedIn:h}=j,m=async x=>{x.preventDefault(),i(!0),setTimeout(()=>{i(!1),r("")},2e3)};return e.jsx("footer",{className:"border-t border-gray-800 bg-primary-black",children:e.jsxs("div",{className:"container py-16",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8",children:[e.jsxs("div",{className:"md:col-span-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-primary-orange mb-6",children:"CoinByte"}),e.jsx("p",{className:"text-secondary-light/80 mb-6 max-w-sm",children:"Revolutionizing stablecoin payments with secure, fast, and low-cost global transactions."}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(c,{className:"w-6 h-6 text-secondary-light hover:text-primary-orange transition-colors duration-300"}),e.jsx(d,{className:"w-6 h-6 text-secondary-light hover:text-primary-orange transition-colors duration-300"}),e.jsx(h,{className:"w-6 h-6 text-secondary-light hover:text-primary-orange transition-colors duration-300"})]})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("h4",{className:"text-lg font-semibold text-secondary-light mb-4",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsx("li",{children:e.jsx("a",{href:"#features",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Features"})}),e.jsx("li",{children:e.jsx("a",{href:"#how-it-works",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"How It Works"})}),e.jsx("li",{children:e.jsx("a",{href:"#prices",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Prices"})}),e.jsx("li",{children:e.jsx("a",{href:"#blog",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Blog"})})]})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("h4",{className:"text-lg font-semibold text-secondary-light mb-4",children:"Support"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsx("li",{children:e.jsx("a",{href:"#help",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Help Center"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Contact Us"})}),e.jsx("li",{children:e.jsx("a",{href:"#privacy",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx("a",{href:"#terms",className:"text-secondary-light/80 hover:text-primary-orange transition-colors duration-300",children:"Terms of Use"})})]})]}),e.jsxs("div",{className:"md:col-span-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-secondary-light mb-4",children:"Stay Updated"}),e.jsx("p",{className:"text-secondary-light/80 mb-4",children:"Subscribe to our newsletter for the latest updates and exclusive offers."}),e.jsxs("form",{onSubmit:m,className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("div",{className:"relative flex-grow",children:[e.jsx(g,{className:"w-5 h-5 text-secondary-light/50 absolute left-3 top-3.5"}),e.jsx("input",{type:"email",placeholder:"Enter your email",className:"input-field pl-10",value:s,onChange:x=>r(x.target.value),required:!0})]}),e.jsx("button",{type:"submit",disabled:a,className:"button-primary",children:a?"Submitting...":"Subscribe"})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 mt-12 pt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 text-sm",children:[e.jsxs("p",{className:"text-secondary-light/80",children:["© ",new Date().getFullYear()," CoinByte. All rights reserved."]}),e.jsxs("div",{className:"flex space-x-4 text-secondary-light/80",children:[e.jsx("a",{href:"#privacy",className:"hover:text-primary-orange transition-colors duration-300",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx("a",{href:"#terms",className:"hover:text-primary-orange transition-colors duration-300",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx("a",{href:"#cookies",className:"hover:text-primary-orange transition-colors duration-300",children:"Cookies"})]})]})})]})})};export{v as default};
//# sourceMappingURL=Footer-ec94752f.js.map
