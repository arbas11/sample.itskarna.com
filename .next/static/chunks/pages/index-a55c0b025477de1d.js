(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8010)}])},8010:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return K}});var n=a(5893),o=a(7294),s=a(5675),i=a.n(s),r=a(1536),c=a.n(r),l=a(5007),d=a(7259),m=function(e){let{projectTitle:t,projectLink:a,cardImage:o,projectDescription:s,buttonTitle:r,buttonFunc:d,techIcons:m,type:p,idx:g}=e;return(0,l.I0)(),(0,n.jsxs)("div",{className:"".concat(c().cardContainer," flex flex-col max-w-sm rounded overflow-hidden shadow-lg mx-2 my-1 mb-7 transition-colors bg-slate-400 hover:border-blue-300 hover:bg-slate-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"),children:[(0,n.jsx)("div",{className:" ".concat(c().imageWraper," rounded-xl mb-5 mt-2 flex w-full justify-center"),children:"portofolio"===p?(0,n.jsx)("div",{className:"mx-2 p-3 ".concat(c().imageContain),children:(0,n.jsx)(i(),{className:"".concat(c().porto," ").concat(c().image),src:o,fill:!0,style:{objectFit:"contain"}})}):(0,n.jsx)("div",{className:"mx-2 ".concat(c().imageContain),children:(0,n.jsx)(i(),{className:"".concat(c().image),src:o,fill:!0,style:{objectFit:"contain"}})})}),(0,n.jsx)("div",{className:"".concat(c().techLogoContainer),children:m.map((e,t)=>(0,n.jsx)("div",{className:"".concat(c().techLogo," mr-2"),children:(0,n.jsx)(i(),{src:"/images/".concat(e),width:"30",height:"30",alt:"background"})},t))}),(0,n.jsxs)("div",{className:"px-6 py-4",children:[(0,n.jsx)("div",{className:"font-bold text-xl mb-2",children:t}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"text-gray-700 text-base",children:s})})]}),(0,n.jsx)("div",{className:"grow flex justify-center items-end",children:(0,n.jsx)("button",{className:"mb-2 bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded",onClick:()=>{d()},children:"Detail"})})]},g)},p=a(2530),g=a.n(p);let u=e=>e.global.modal;var h=a(4675),b=a.n(h),k=a(990);function _(e){let{children:t}=e,a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{console.log(t);let e=k.ZP.quickTo(a.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),n=k.ZP.quickTo(a.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});a.current.addEventListener("mousemove",t=>{let{clientX:o,clientY:s}=t,{height:i,width:r,left:c,top:l}=a.current.getBoundingClientRect();e(.35*(o-(c+r/2))),n(.35*(s-(l+i/2)))}),a.current.addEventListener("mouseleave",t=>{e(0),n(0)})},[]),o.cloneElement(t,{ref:a})}var f=function(){let e=(0,l.v9)(u),t=(0,l.I0)(),a=()=>t(d.fw.hideModal()),o=e=>{window.location.href=e};return e?"sukses"===e.type?(0,n.jsxs)("div",{className:"".concat(b().modalOverlay," relative z-10"),"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[(0,n.jsx)("div",{className:"fixed inset-0 transition-opacity",children:" "}),(0,n.jsx)("div",{className:"fixed inset-0 z-90 w-screen overflow-y-auto",children:(0,n.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center md:p-0 sm:items-center sm:p-0",children:(0,n.jsxs)("div",{className:"".concat(b().modal," relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"),children:[(0,n.jsxs)("section",{className:"".concat(b().carousel),"aria-label":"Gallery",children:[(0,n.jsx)("div",{className:"".concat(b().modalClose),onClick:a,children:(0,n.jsx)(_,{children:(0,n.jsx)("div",{className:b().round,children:(0,n.jsx)("div",{className:b().x,children:"X"})})})}),(0,n.jsx)("ol",{className:"".concat(b().carouselViewport),children:e.data.projectImages.map((t,a)=>(0,n.jsxs)("li",{id:"carousel__slide".concat(a),tabindex:"0",className:"".concat(b().carouselSlide),children:[(0,n.jsx)("div",{className:"mx-2 ".concat(b().imageContain),children:(0,n.jsx)(i(),{className:"".concat(b().image),src:"/images/".concat(t),fill:!0,style:{objectFit:"contain"}})}),(0,n.jsx)("div",{className:"".concat(b().carouselSnapper)}),(0,n.jsx)("a",{href:"#carousel__slide".concat(0===a?e.data.projectImages.length-1:a),class:"carousel__prev"}),(0,n.jsx)("a",{href:"#carousel__slide".concat(a+1===e.data.projectImages.length?0:a),class:"carousel__next"})]},a))}),(0,n.jsx)("aside",{className:"".concat(b().carouselNavigation),children:(0,n.jsx)("ol",{className:"".concat(b().carouselNavigationList),children:e.data.projectImages.map((e,t)=>(0,n.jsx)("li",{className:"".concat(b().carouselNavigationItem),children:(0,n.jsxs)("a",{href:"#carousel__slide".concat(t),className:"".concat(b().carouselNavigationButton),children:["Go to slide ",t]})},t))})})]}),(0,n.jsx)("div",{className:"".concat(b().techLogoContainer),children:e.data.techIcons.map((e,t)=>(0,n.jsx)("div",{className:"".concat(b().techLogo," mx-2"),children:(0,n.jsx)(i(),{src:"/images/".concat(e),width:"40",height:"40",alt:"background"})},t))}),e.data.detail&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Summary:"}),(0,n.jsx)("p",{children:e.data.detail})]}),e.data.objective&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Objective:"}),(0,n.jsx)("p",{children:e.data.objective})]}),(0,n.jsx)("div",{className:"".concat(b().buttonModalContainer),children:(0,n.jsx)("div",{className:"px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:Object.keys(e.data.buttons).map(t=>(0,n.jsx)("button",{onClick:()=>{o(e.data.buttons[t])},type:"button",className:"mt-3 ml-4 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",children:t}))})})]})})})]}):(0,n.jsx)("div",{className:"".concat(b().modalOverlay),onClick:a,children:(0,n.jsx)("div",{className:" d-flex h-100 ",children:(0,n.jsxs)("div",{className:"".concat(b().modal," shadow-sm rounded-3 "),children:[(0,n.jsx)("div",{className:"".concat(b().modalClose," justify-content-end d-flex "),onClick:a,children:"✕"}),(0,n.jsx)("div",{className:" fs-1 ",children:e.title}),(0,n.jsx)("div",{className:" pb-3 ",children:e.description}),(0,n.jsx)("div",{className:" d-flex gap-2 justify-content-end ",children:e.buttons.map((e,t)=>(0,n.jsx)("button",{className:"btn btn-primary",type:"button",onClick:e.buttonFunc,children:e.title},t))})]})})}):null},j=a(3159),x=a.n(j),v=a(9332),y=a(1526),w=a(9347),I=a.n(w),C=a(6720);let N={initial:{x:"calc(100% + 100px)"},enter:{x:"0",transition:{duration:.8,ease:[.76,0,.24,1]}},exit:{x:"calc(100% + 100px)",transition:{duration:.8,ease:[.76,0,.24,1]}}},L={initial:{x:80},enter:e=>({x:0,transition:{duration:.8,ease:[.76,0,.24,1],delay:.05*e}}),exit:e=>({x:80,transition:{duration:.8,ease:[.76,0,.24,1],delay:.05*e}})},M={open:{scale:1,transition:{duration:.3}},closed:{scale:0,transition:{duration:.4}}};var T=a(286),D=a.n(T),S=a(1664),E=a.n(S);function B(e){let{data:t,isActive:a,setSelectedIndicator:o}=e,{title:s,href:i,index:r}=t;return(0,n.jsxs)(C.E.div,{className:D().link,onMouseEnter:()=>{o(i)},custom:r,variants:L,initial:"initial",animate:"enter",exit:"exit",children:[(0,n.jsx)(C.E.div,{variants:M,animate:a?"open":"closed",className:D().indicator}),(0,n.jsx)(E(),{href:i,children:s})]})}var U=a(1931),R=a.n(U);function P(){let e="M100 0 L100 ".concat(window.innerHeight," Q-100 ").concat(window.innerHeight/2," 100 0"),t="M100 0 L100 ".concat(window.innerHeight," Q100 ").concat(window.innerHeight/2," 100 0");return(0,n.jsx)("svg",{className:R().svgCurve,children:(0,n.jsx)(C.E.path,{variants:{initial:{d:e},enter:{d:t,transition:{duration:1,ease:[.76,0,.24,1]}},exit:{d:e,transition:{duration:.8,ease:[.76,0,.24,1]}}},initial:"initial",animate:"enter",exit:"exit"})})}let q=[{name:"frontend",href:"/#frontend",title:"FRONTEND",data:[{cardImage:"/images/teknik-crm-1.png",projectTitle:"Flutter Markindo Customer app",projectLink:"http://sample.itskarna.com",projectDescription:"Mobile app version for Markindo rekateknik customer apps. User can browse around our catalog and registered user can see their company registered machines and making report if there is a problem.",buttonTitle:"Detail",modalData:{projectImages:["teknik-crm-1.png","teknik-crm-2.png","teknik-crm-3.png","teknik-crm-4.png","teknik-crm-5.png","teknik-crm-6.png","teknik-crm-7.png","teknik-crm-7.png","teknik-crm-8.png","teknik-crm-9.png","teknik-crm-10.png","teknik-crm-11.png","teknik-crm-12.png"],techIcons:["dart.png","flutter.png"],buttons:{Close:"http://sample.itskarna.com"},detail:"Mobile app version for Markindo rekateknik customer apps. User can browse around our catalog and registered user can see their company registered machines and making report if there is a problem."}},{type:"portofolio",cardImage:"/images/portfolio-intropage.png",projectTitle:"My portfolio page",projectLink:"http://sample.itskarna.com",projectDescription:"my portofolio page build using next js",buttonTitle:"Detail",modalData:{projectImages:["portfolio-intropage.png","portfolio1.png","portfolio2.png","portfolio3.png"],techIcons:["next.svg","sass.png","tailwind.png"],buttons:{Home:"http://sample.itskarna.com"},detail:"Showcasing some of my project. Using nextjs with a help from sass and tailwind to styling. Just go back now and start look around instead of reading this. stop reading it, go back now!"}},{cardImage:"/images/markindo-crm-web-home.png",projectTitle:"Markindo Sales Customer Form",projectLink:"http://portal.markindo.co.id:3001",projectDescription:"Sales simple page to fastly access customers data during the exibition. While they encourage customers to fill out their data they also able to help them fill out for them so customer still able to access our landing page",buttonTitle:"Detail",modalData:{projectImages:["sales-dashboard-login.png","sales-dashboard-home.png","sales-dashboard-customerdetail.png","sales-dashboard-create.png"],techIcons:["js.png","css.png","react.png","sass.png"],buttons:{Close:"http://sample.itskarna.com"},detail:"Sales simple page to fastly access customers data during the exibition of. While they encourage customers to fill out their data they also able to help them fill out for them so customer still able to access our landing page"}},{cardImage:"/images/landing-page-allpack-home.png",projectTitle:"Exhibition landing page",projectLink:"http://portal.markindo.co.id/mobile",projectDescription:"A simple landing page for showcasing company products to customers during an exibition. customer required to enter their phone number either using form at the beginning of the site or using barcode that connect customer to a chatbot",modalData:{projectImages:["mkd-landing-home.png","mkd-landing-tech.png","mkd-landing-about.png","mkd-landing-whatsapp.png","markindo-chatbot.png","mkd-landing-solution.png","mkd-landing-solution2.png"],techIcons:["react.png","sass.png","bootstrap.png","axios.jpg"],buttons:{Link:"http://portal.markindo.co.id/mobile"},detail:"During the exibition visitor scan sales person barcode and they will be directed to our whatsapp chatbot. They will receive a link that direct them to this landing page. Only a till a certain parts they will able to see before they redirect again to our chatbot to fill out some details"}},{cardImage:"/images/markindo-website.png",projectTitle:"markindo.co.id",projectLink:"https://markindo.co.id",projectDescription:"A website for markindo rekateknik. packaging, coding and marking industry copmpany.",modalData:{projectImages:["markindo-website-home.png","markindo-website-packaging.png"],techIcons:["wordpress.png"],buttons:{Link:"https://markindo.co.id"},detail:"Markindo company website using WordPress. Show company details and products its carry."}},{cardImage:"/images/kata-bahasa.png",projectTitle:"Kata-bahasa",projectLink:"https://game.itskarna.com/kata-bahasa/",projectDescription:"a simple game to test your bahasa Indonesia grammar. I create within a week knowing react.",modalData:{projectImages:["katabahasa_homescreen.png","katabahasa_gameboard.png","katabahasa_gameoverscreen.png"],techIcons:["js.png","react.png","sass.png"],buttons:{"Let's play!":"https://game.itskarna.com/kata-bahasa/",Github:"https://github.com/arbas11/grammar_game"},detail:"In this project I use react to create a game with a simple rule. There will be two sets of sentence as a question and player have to choose the correct one. This game supposedly created to promote Bahasa Indonesia so that people can learn more about grammar in Bahasa Indonesia. Learning Bahasa can be fun. Watch out for the timer",objective:"Using react create a simple game. Implementation of react hooks.  Make sets of rules and implement it into code. Using sass to styling. Save user highscore in local storage and show it in home page"}},{cardImage:"/images/ngochat.png",projectTitle:"Ngochat",projectLink:"https://sample.itskarna.com/100/",projectDescription:"let's talk! ngochat let you socialize with your friend and ngoceh without limit.",buttonTitle:"Detail",modalData:{projectImages:["ngochat.png"],techIcons:["react.png","sass.png","bootstrap.png","axios.jpg","socket.png"],buttons:{Github:"https://github.com/arbas11/ngochat_chatapps/"},detail:'React chatting apps for front end using socket io client to receive a realtime message. "ngoceh" means talking in Bahasa Indonesia so there where ngochat was born.',objective:"A react single page app implementation. Send a real time chat to other user. User can change their profile name and also save other user contact to chat with. Using firebase email authentication"}},{cardImage:"/images/shop-com.png",projectTitle:"shop.com",projectLink:"https://shop.itskarna.com/#",projectDescription:"React product catalog and merchant. Sell your product here so people can see.",modalData:{projectImages:["shop.com_catalog.png","shop.com_dashboardpage.png","shop.com_detailmodal_broke.png","shop.com_detailmodal_uneccessary.png","shop.com_editmodal.png","shop.com_loginpage.png","shop.com_profilepage.png","shop.com_registerpage.png"],techIcons:["react.png","sass.png","bootstrap.png"],buttons:{Checkout:"https://shop.itskarna.com/#",Github:"https://github.com/arbas11/react_miniproject/tree/main"},detail:"In this project I build an E-commerce website. User can create and manage their account. User can access their account and dashboard to create, update and delete a product. There also a catalog page where anyone can access it. The catalog page will include all the product from different users.",objective:"Using react to create a front end for CRUD functionality. Implementation of JWT to apply to every request that needs token to access. Create a dashboard for user to manage their products. Displaying all product from all different users in a catalog page"}},{cardImage:"/images/100!_homepage.png",projectTitle:"100!",projectLink:"https://sample.itskarna.com/100/",projectDescription:"HTML, CSS combine with JS in vanila flavor, displaying art to the masses.",modalData:{projectImages:["100!_homepage.png","100!_maincollection.png","100!_modalupload.png","100!_detailmodal.png"],techIcons:["html.png","css.png","bootstrap.png","js.png"],buttons:{"Live art":"https://sample.itskarna.com/100/",Github:"https://github.com/arbas11/100art"},detail:"In this project I use basic HTML, CSS, Javacript and Bootstrap. to create a website where artist can sell their craft. User can upload their creation with detail description, tittle, and set their price.",objective:"Implementation of HTML, CSS and JS. Create homepage and about page. Using bootstrap to create a responsive website and styling pages. Implementing javascript to manipulate HTML document"}}]},{name:"backend",href:"/#backend",title:"BACKEND",data:[{cardImage:"/images/markindo-crm-web-home.png",projectTitle:"Markindo CRM Backend",projectLink:"http://portal.markindo.co.id:3001",projectDescription:"Backend for company resources management web application ranging from managing customer data, customer machines data, landing page content management system",modalData:{projectImages:["markindo-crm-web-home.png"],techIcons:["js.png","express.png","mysql.png"],buttons:{Close:"http://sample.itskarna.com"},detail:"Backend for company resources management web application ranging from managing customer data, customer machines data, landing page content management system"}},{cardImage:"/images/landing-page-allpack-home.png",projectTitle:"Markindo event landing page CMS",projectLink:"http://portal.markindo.co.id/mobile",projectDescription:"Backend for a frontend for managing its content so the marketing team can change the product its displayed for the campaign they required",modalData:{projectImages:["landing-page-allpack-home.png"],techIcons:["js.png","express.png","mysql.png"],buttons:{Close:"http://sample.itskarna.com"},detail:"Backend for a frontend for managing its content so the marketing team can change the product its displayed for the campaign they required"}},{cardImage:"/images/microservice3.png",projectTitle:"Markindo IT ticket system",projectLink:"https://github.com/arbas11",projectDescription:"Backend for Markindo internal company ticketing system. Using typecript for building microservices aranging from user data and authentication, ticket tracking, role management and approval, to inventory management",modalData:{projectImages:["microservice1.png","microservice2.png","microservice3.png","microservice4.png"],techIcons:["ts.png","kafka.png","posgres.png"],buttons:{Close:"http://sample.itskarna.com"},detail:"Backend for Markindo internal company ticketing system. Using typecript for building microservices aranging from user data and authentication, ticket tracking, role management and approval, to inventory management"}},{cardImage:"/images/shop.com-backend1.png",projectTitle:"shop.com backend",projectLink:"https://github.com/arbas11",projectDescription:"A backend for shop.com E-commerce site. I use mySQL for database and nodeJS as a server using javascript and expressjs framework",modalData:{projectImages:["shop.com-backend1.png","shop.com-backend2.png"],techIcons:["jest.png","node.png","express.png","mysql.png","jwt.svg"],buttons:{Github:"https://github.com/arbas11/backend_with_testing",link:"https://shop.itskarna.com/#"},detail:"In this part I create a backend for E- commerce site. I use mySQL for database and nodeJS as a server. Front end can create user in the database, and delete them. Send access token to front end to access our database for creating, update, delete and show products belong to the user.",objective:"Implementation of JWT for auth method to access CRUD functionality of the API. Create, Read, Update, and delete from database using NodeJs and mySQL as database. Use Sequelize for object data mapper and connect to mySQL database"}},{cardImage:"/images/microservice1.png",projectTitle:"Microservices",projectDescription:"Microservices using typescript and express. Handling request for user to get authenticate, to access their account. Using postgress as database, kafka as message broker.",modalData:{projectImages:["microservice1.png","microservice2.png","microservice3.png","microservice4.png"],techIcons:["ts.png","kafka.png","posgres.png"],buttons:{Close:"http://sample.itskarna.com"},detail:"Microservices using typescript and express. Handling request for user to get authenticate, to access their account. Using postgress as database, kafka as message broker."}},{cardImage:"/images/shop-backend.png",projectTitle:"express-js-backend",projectLink:"https://github.com/arbas11/backend_with_testing/",projectDescription:"Implementation of JWT for auth method to access CRUD functionality of the API Create, Read, Update, and delete from database using NodeJs and mySQL as database Use Sequelize for object data mapper and connect to mySQL database",modalData:{projectImages:["shop.com-backend1.png","shop.com-backend2.png"],techIcons:["jest.png","node.png","express.png","mysql.png","jwt.svg"],buttons:{Github:"https://github.com/arbas11/backend_with_testing"},detail:"Implementation of JWT for auth method to access CRUD functionality of the API Create, Read, Update, and delete from database using NodeJs and mySQL as database Use Sequelize for object data mapper and connect to mySQL database"}}]},{name:"infrastructure",href:"/#infrastructure",title:"INFRASTRUCTURE",data:[{cardImage:"/images/dockerfile.png",projectTitle:"Docker",projectLink:"https://www.npmjs.com/package/@mkdglobal/mk22kfcl/",projectDescription:"Containerization using Docker",modalData:{projectImages:["dockerfile.png"],techIcons:["docker.png"],buttons:{Github:"https://github.com/arbas11?tab=repositories"},detail:"Contenerizing using docker to deploying application. Installing docker in vps and setting up some config to deploying apps and services to the docker."}},{cardImage:"/images/kubernetes.png",projectTitle:"Kubernetes",projectLink:"https://github.com/arbas11",projectDescription:"Kubernetes container orchestration",modalData:{projectImages:["kubernetes.png"],techIcons:["kuberneteslogo.png"],buttons:{Github:"https://github.com/arbas11?tab=repositories"},detail:"Kubernetes container orchestration. I used to maintain my microservices and all my nodes server. Install kubernetes in all our server and cofigurations"}},{cardImage:"/images/kafka-lib.png",projectTitle:"Kafka library",projectLink:"https://www.npmjs.com/package/@mkdglobal/mk22kfcl/",projectDescription:"A library for kafka message broker. Build on top of kafkaJs. Using typescript and available on npm library.",modalData:{projectImages:["kafka-lib.png"],techIcons:["kafka.png","ts.png"],buttons:{Npm:"https://www.npmjs.com/package/@mkdglobal/mk22kfcl"},detail:"This libary is build on top of kafkajs. Trying to solve a the usage of kafkajs. I implement a separation of concern design principle. Configuration in one place to then run inside the index where all the connections happen, also seperate out handlers and assigners so it better organize and scalability"}},{cardImage:"/images/kafka-lib.png",projectTitle:"Nginx",projectLink:"https://www.npmjs.com/package/@mkdglobal/mk22kfcl/",projectDescription:"nginx server",modalData:{projectImages:["100!_homepage.png"],techIcons:["nginx.png"],buttons:{"Live art":"https://sample.itskarna.com/100/",Github:"https://github.com/arbas11/100art"},detail:"Set up nginx in a bare metal server"}}]},{name:"others",href:"/#others",title:"OTHERS",data:[{cardImage:"/images/markindo-chatbot.png",projectTitle:"Chatbot",projectLink:"https://www.npmjs.com/package/@mkdglobal/mk22kfcl/",projectDescription:"Markindo chatbot for exhibition",modalData:{projectImages:["markindo-chatbot.png"],techIcons:["js.png","express.png"],buttons:{"Live art":"https://sample.itskarna.com/100/",Github:"https://github.com/arbas11/100art"},detail:"Markindo whatsapp chatbot used for customer to be able to connect with the company. It is used mainly during an exibition, where visitors come to booth and scan qr to then directed to out chatbot to then fill out some detail about them to be able to access company product catalog "}}]}];var F=()=>{function e(){let e=window.innerWidth,t=window.innerHeight;return{width:e,height:t}}let[t,a]=(0,o.useState)(e());return(0,o.useEffect)(()=>{function t(){a(e())}return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[!0]),t};function A(){let e=(0,v.usePathname)(),[t,a]=(0,o.useState)(e),{height:s,width:i}=F();return(0,n.jsxs)(C.E.div,{variants:N,initial:"initial",animate:"enter",exit:"exit",className:I().menu,children:[(0,n.jsx)("div",{className:I().body,children:(0,n.jsx)("div",{onMouseLeave:()=>{a(e)},className:i<=400?"".concat(I().nav," ").concat(I().navSm):"".concat(I().nav),children:q.map((e,o)=>(0,n.jsx)(B,{data:{...e,index:o},isActive:t==e.href,setSelectedIndicator:a},o))})}),(0,n.jsx)(P,{})]})}var J=a(6546),H=a(4458),Z=a.n(H);function G(e){let{children:t,backgroundColor:a="#455CE9",...s}=e,i=(0,o.useRef)(null),r=(0,o.useRef)(null),c=null;(0,o.useEffect)(()=>{r.current=k.ZP.timeline({paused:!0}),r.current.to(i.current,{top:"-25%",width:"150%",duration:.4,ease:"power3.in"},"enter").to(i.current,{top:"-150%",width:"125%",duration:.25},"exit")},[]);let l=()=>{c&&clearTimeout(c),r.current.tweenFromTo("enter","exit")},d=()=>{c=setTimeout(()=>{r.current.play()},300)};return(0,n.jsx)(_,{children:(0,n.jsxs)("div",{className:Z().roundedButton,style:{overflow:"hidden"},onMouseEnter:()=>{l()},onMouseLeave:()=>{d()},...s,children:[t,(0,n.jsx)("div",{ref:i,style:{backgroundColor:a},className:Z().circle})]})})}function W(){let e=(0,o.useRef)(null),[t,a]=(0,o.useState)(!1),s=(0,v.usePathname)(),i=(0,o.useRef)(null),{height:r,width:c}=F();return(0,o.useEffect)(()=>{t&&a(!1)},[s]),(0,o.useLayoutEffect)(()=>{k.ZP.registerPlugin(J.ScrollTrigger),k.ZP.to(i.current,{scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,onLeave:()=>{k.ZP.to(i.current,{scale:1,duration:.25,ease:"power1.out"})},onEnterBack:()=>{k.ZP.to(i.current,{scale:0,duration:.25,ease:"power1.out"},a(!1))}}})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{ref:e,className:x().header,children:[(0,n.jsx)("div",{className:x().logo}),(0,n.jsx)("div",{className:x().nav,children:q.map((e,t)=>c<=488&&"others"===e.name||c<=400&&("others"===e.name||"infrastructure"===e.name)?null:(0,n.jsx)(_,{children:(0,n.jsxs)("div",{className:x().el,children:[(0,n.jsx)(E(),{href:"#".concat(e.name),children:e.title}),(0,n.jsx)("div",{className:x().indicator})]})},t))})]}),(0,n.jsx)("div",{ref:i,className:x().headerButtonContainer,children:(0,n.jsx)(G,{onClick:()=>{a(!t)},className:"".concat(x().button),children:(0,n.jsx)("div",{className:"".concat(x().burger," ").concat(t?x().burgerActive:"")})})}),(0,n.jsx)(y.M,{mode:"wait",children:t&&(0,n.jsx)(A,{})})]})}var z=a(6279),O=a.n(z),Q=a(7562);function X(){let e=(0,o.useRef)(null),t=(0,o.useRef)(null),a=(0,o.useRef)(null),s=0,i=-1;(0,o.useLayoutEffect)(()=>{k.ZP.registerPlugin(Q.ScrollTrigger),k.ZP.to(a.current,{scrollTrigger:{trigger:document.documentElement,scrub:.25,start:0,end:window.innerHeight,onUpdate:e=>i=-1*e.direction},x:"-500px"}),requestAnimationFrame(r)},[]);let r=()=>{s<-100?s=0:s>0&&(s=-100),k.ZP.set(e.current,{xPercent:s}),k.ZP.set(t.current,{xPercent:s}),requestAnimationFrame(r),s+=.1*i};return(0,n.jsxs)("div",{className:O().landing,children:[(0,n.jsxs)("div",{className:O().imageContain,children:[(0,n.jsx)("p",{children:"I'm"}),(0,n.jsx)("p",{children:"Ario Baskoro"}),(0,n.jsx)("p",{className:"".concat(O().subTittle),children:"Here is some of my works, check it out!"})]}),(0,n.jsx)(E(),{href:"#frontend",className:"".concat(O().scrolldownlink," ").concat(O().scrolldownarrow),"data-iconfont":"ETmodules","data-icon":!0,children:(0,n.jsx)("svg",{className:O().arrow,children:(0,n.jsx)("path",{className:O().a1,d:"M0 0 L30 26 L60 0"})})})]})}function K(){let[e,t]=(0,o.useState)(!0),a=(0,l.I0)(),{height:s,width:i}=F();return(0,n.jsxs)("main",{className:"flex justify-center flex-col min-h-screen items-center justify-between lg:p-10",children:[(0,n.jsx)(f,{}),(0,n.jsx)(W,{}),(0,n.jsx)(X,{}),q.map((e,t)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:i<=370?"".concat(g().title," ").concat(g().titleSm," relative flex place-items-center"):"".concat(g().title," relative flex place-items-center"),children:(0,n.jsx)("h1",{id:e.name,children:e.title})},t),(0,n.jsx)("div",{className:"mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left",children:e.data.map((e,t)=>(0,n.jsx)(m,{cardImage:e.cardImage,projectTitle:e.projectTitle,projectLink:e.projectLink,projectDescription:e.projectDescription,buttonTitle:e.buttonTitle,techIcons:e.modalData.techIcons,type:e.type,buttonFunc:()=>{a(d.fw.showModal({type:"sukses",data:e.modalData,buttons:[{buttonFunc:()=>{a(d.fw.hideModal()),handleClose()},title:"close"}]}))}}))})]}))]})}},2530:function(e){e.exports={title:"homepage_title__Skb_l",titleSm:"homepage_titleSm__0WOk4",footer:"homepage_footer__xJuZF"}},4458:function(e){e.exports={roundedButton:"style_roundedButton__DJiXC",circle:"style_circle__9TGud"}},1931:function(e){e.exports={svgCurve:"styles_svgCurve__NhnIr"}},286:function(e){e.exports={link:"style_link__7FpLA",indicator:"style_indicator__SkMJU"}},9347:function(e){e.exports={menu:"style_menu__sASVJ",body:"style_body__2jbuq",nav:"style_nav__5Hqpb",header:"style_header__gXiRX",navSm:"style_navSm__5e1_U"}},3159:function(e){e.exports={header:"style_header__IrB9Y",logo:"style_logo__Z8paE",name:"style_name__3qURf",copyright:"style_copyright__aHRv7",codeBy:"style_codeBy__Fg_Fj",dennis:"style_dennis__zMbnF",snellenberg:"style_snellenberg__JPZi8",nav:"style_nav__a9szt",el:"style_el__EqyFN",indicator:"style_indicator__yBE_H",headerButtonContainer:"style_headerButtonContainer__V31wu",button:"style_button__3LGtI",burger:"style_burger__cLiPN",burgerActive:"style_burgerActive__EMmlM",headerButtonContainerSm:"style_headerButtonContainerSm__zBKq4"}},6279:function(e){e.exports={landing:"style_landing__59Gdg",imageContain:"style_imageContain__YeHKR",subTittle:"style_subTittle__i58YZ",arrow:"style_arrow___mE6L",scrolldownlink:"style_scrolldownlink__T2Cuo",fade_move_down:"style_fade_move_down__7ECYp"}},4675:function(e){e.exports={modalOverlay:"CustomModal_modalOverlay__lG7DG",modal:"CustomModal_modal__s0qfu",techLogoContainer:"CustomModal_techLogoContainer__INDZR",techLogo:"CustomModal_techLogo__C73Ru",buttonModalContainer:"CustomModal_buttonModalContainer__Dd3dM",modalLoading:"CustomModal_modalLoading__IkX_B",loading:"CustomModal_loading__quZe0",modalClose:"CustomModal_modalClose__XGw9Q",round:"CustomModal_round__nXhIC",x:"CustomModal_x__T0jxc",carousel:"CustomModal_carousel__T_fOC",carouselViewport:"CustomModal_carouselViewport__BikKZ",carouselSlide:"CustomModal_carouselSlide__kAJhD",carouselSnapper:"CustomModal_carouselSnapper__I5h3T",tonext:"CustomModal_tonext__xXfi_",snap:"CustomModal_snap__W2NEL",tostart:"CustomModal_tostart__iGX9r",none:"CustomModal_none__2Y8cw",carouselNavigation:"CustomModal_carouselNavigation__rw6tC",carouselNavigationList:"CustomModal_carouselNavigationList__hgg2T",carouselNavigationItem:"CustomModal_carouselNavigationItem__f_XyT",carouselNavigationButton:"CustomModal_carouselNavigationButton__eOqKx",carouselPrev:"CustomModal_carouselPrev__4Jl_w",carouselNext:"CustomModal_carouselNext__DSeLR",imageWraper:"CustomModal_imageWraper__Zn1cB",imageContain:"CustomModal_imageContain__iNU0M",image:"CustomModal_image__o1MQx"}},1536:function(e){e.exports={cardContainer:"project-card_cardContainer__BeMeT",imageWraper:"project-card_imageWraper__ltUBP",imageContain:"project-card_imageContain__0NoV8",porto:"project-card_porto__WEZSM",techLogoContainer:"project-card_techLogoContainer__Ami3P",techLogo:"project-card_techLogo__kIUeS"}}},function(e){e.O(0,[802,875,966,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);