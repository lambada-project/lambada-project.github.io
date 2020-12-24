(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),o=(a(0),a(86)),l={title:"Quickstart",sidebar_label:"Quickstart",slug:"/quickstart"},r={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Requirements",source:"@site/docs/quickstart.md",slug:"/quickstart",permalink:"/quickstart",editUrl:"https://github.com/lambada-project/lambada/edit/main/docs/docs/quickstart.md",version:"current",sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"What is lambada?",permalink:"/"},next:{title:"AWS Configuration",permalink:"/aws-config"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Build and Deploy",id:"build-and-deploy",children:[{value:"Final steps",id:"final-steps",children:[]}]}],s={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You'll need npm installed locally if you want to boostrap with the npm initializer"),Object(o.b)("li",{parentName:"ul"},"A pulumi account (free), or knowledge to store the deployment state somewhere else. To know more about this refer to their docs: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.pulumi.com/docs/intro/concepts/state/"}),"https://www.pulumi.com/docs/intro/concepts/state/")),Object(o.b)("li",{parentName:"ul"},"A AWS account, and credentials configured locally. If you are using several AWS profiles, please read ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"aws-config"}),"this page")," ")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"}," Scaffolding with the npm initializer ")," "),Object(o.b)("p",{parentName:"li"},"Create a directory for your project, change to it, and run the initializer:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u26a0 WARNING \u26a0")," At the moment, the initializer does not warn if executing on not empty directories, so be carefull where you call it from."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir <your-project-name> && cd <your-project-name>\nnpm init @lambada\n")))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"VSCode DevContainers")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker"}),"Docker")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"VSCode")," if you don't have them already "),Object(o.b)("li",{parentName:"ul"},"Install the following VSCode extension: ",Object(o.b)("inlineCode",{parentName:"li"},"ms-vscode-remote.vscode-remote-extensionpack")),Object(o.b)("li",{parentName:"ul"},"Open the project root with ",Object(o.b)("inlineCode",{parentName:"li"},"code .")," and once it's loaded, the extension will prompt you to  ",Object(o.b)("inlineCode",{parentName:"li"},"Reopen in Container"),", click it button and be the happiest developer ever \ud83d\ude00")))),Object(o.b)("p",null,"NOTE: If not using DevContainers open the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," and install in your local machine all the dependencies listed there."),Object(o.b)("h2",{id:"build-and-deploy"},"Build and Deploy"),Object(o.b)("p",null,"First, open the ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts")," file and as you can see, the default template comes with a simple one-liner healthcheck. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const result = run(projectName, environment,\n{\n    endpointDefinitions: [\n        (context) => createEndpointSimple('health', context, '/health', 'GET', async (event) => ({ ok: true }), [])\n    ]\n})\n\n")),Object(o.b)("p",null,"Every endpoint is a function that returns an object that describes your infrastructure. In this case we return an endpoint that describes our healthcheck api (listen on GET /health) and it has a callback that returns a simple object ",Object(o.b)("inlineCode",{parentName:"p"},"{ ok: true }"),"  that will be serialized to json with a ",Object(o.b)("inlineCode",{parentName:"p"},"200")," status code."),Object(o.b)("p",null,"Now, we want our new api up and running, and to do so we call the pulumi cli (comes installed in the dockerfile)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pulumi up\n")),Object(o.b)("p",null,"This will ask to create several resources in AWS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1 APIGateway"),Object(o.b)("li",{parentName:"ul"},"1 Lambda"),Object(o.b)("li",{parentName:"ul"},"Execution, access, etc")),Object(o.b)("p",null,"Evaluate the resources to be created and press ",Object(o.b)("inlineCode",{parentName:"p"},"Y")," once you confirmed all is good.\nIn a few minutes you'll have your api in AWS and you can call it with your favourite client. The url of the ApiGateway will be shown as an output of the last operation."),Object(o.b)("p",null,"If you want to know more about Pulumi, check out their amazing documentation: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pulumi.com/docs/intro/"}),"https://www.pulumi.com/docs/intro/")),Object(o.b)("h3",{id:"final-steps"},"Final steps"),Object(o.b)("p",null,"Congratulations!!, you have saved hours by using this took and not doing the ",Object(o.b)("inlineCode",{parentName:"p"},"ClickyClicky")," (Trademark pending) "))}b.isMDXComponent=!0}}]);