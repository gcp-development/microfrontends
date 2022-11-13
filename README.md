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
  <li>Aids with the application being more resilient to non-working or broken portions</li>
  <li>Helps to overcome the law of diminishing returns</li>
</ul> 

<h2>Architecture</h2>

[Module Federation](https://webpack.js.org/concepts/module-federation/) lets us combine separate builds to form a single application. This lets us develop and deploy modules independently and combine them at runtime. Since modules combine to a single application you can share bundles for third party libraries, events propagate nicely and all parts of the applications have equal references to global browser objects.

![image](https://user-images.githubusercontent.com/76512851/201527769-320b41d1-d4c3-4014-8b91-37cd0914abc7.png)

PoC(Proof of Concept) source code:
 <ul>
  <li><a href="https://github.com/gcp-development/microfrontends/tree/main/app">app(Host App)</a></li>
  <li>[backscreen(Micro App)](https://github.com/gcp-development/microfrontends/tree/main/backscreen)</li>
  <li>[frontscreen(Micro App)](https://github.com/gcp-development/microfrontends/tree/main/frontscreen)</li>
</ul> 

References:<br>
[Micro-Frontends](https://martinfowler.com/articles/micro-frontends.html)
