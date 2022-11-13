# Micro-Frontends
<h2>Motivation</h2>

Since most of my work with FinTech is scaling up their eCommerce Business. I need to ensure my work have a strong foundation. The [Micro-Frontends](https://micro-frontends.org/) approach allow for more flexible and scalable code development across my work and will enable each team to work independently.  This scale-up work is normally part of a bigger programme that includes things like a search engine optimization(SEO) of an online store, a strong marketing strategy and a scale-up of the customer service.<br>

Meaning we should only consider this approach for FinTech of a certain dimension and organization. Some times it's better to have a large frontend monolith application. 

<h2>Introduction</h2>

The idea behind Micro-Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in.

Each team would be responsible for the creation of the UI portion of the application, styling, code, layout, architecture, backend, devops, and connection to the database via Rest APIs.  It has its own build and test pipelines and CI/CD procedures. 
This enables the following:
 <ul>
  <li>Better scaling capabilities of the frontend application</li>
  <li>Fewer communication issues between the multiple teams for one feature change</li>
  <li>Reduced code and testing complexity</li>
  <li>Application is more resilient to non-working or broken portions</li>
  <li>Faster Feature Rollouts</li>
</ul> 

<h2>Architecture</h2>

[Module Federation(Webpack 5)](https://webpack.js.org/concepts/module-federation/) lets us combine separate builds to form a single application(Host App). This lets us develop and deploy modules independently(Micro App) and combine them at runtime. Any JavaScript application that is bundled with Webpack 5.0 or greater can dynamically load or share code and dependencies with any other at runtime.
 
![image](https://user-images.githubusercontent.com/76512851/201527769-320b41d1-d4c3-4014-8b91-37cd0914abc7.png)

We need to familiarize ourself with some terminology when using Webpack Module Federation:
<ul>
 <li><b>A host</b>: a Webpack build that is initialized first during a page load (when the onLoad event is triggered)</li>
 <li><b>A remote</b>: another Webpack build, where part of it is being consumed by a “host”</li>
 <li><b>Bidirectional-hosts</b>: when a bundle or Webpack build can work as a host or as a remote. Either consuming other applications or being consumed by others — at runtime.</li>
 <li><b>Vendor Federation</b>: Vendor Federation is an important feature that aids in solving a significant performance issue in micro-frontend architecture. Regardless of where the modules are loaded from, it enables all or part of a remote or host’s npm modules to share at runtime declaratively.</li>
</ul>

<h2>Conclusion</h2>

Webpack Module Federation is a feature that enables loading separately compiled applications at runtime and allows sharing of common dependencies.It is a highly beneficial approch to consider, especially with its scalability in sharing code among independent applications, which is bound to improve the overall performance.

<h3>PoC(Proof of Concept) source code:</h3>
<ul>
  <li><a href="https://github.com/gcp-development/microfrontends/tree/main/app" target="_blank">app(Host App)</a></li>
  <li><a href="https://github.com/gcp-development/microfrontends/tree/main/backscreen" target="_blank">backscreen(Micro App)</a></li>
  <li><a href="https://github.com/gcp-development/microfrontends/tree/main/frontscreen" target="_blank">frontscreen(Micro App)</a></li>
</ul> 

References:<br>
[Micro-Frontends](https://martinfowler.com/articles/micro-frontends.html)<br>
[Why webpack](https://webpack.js.org/concepts/why-webpack/)
