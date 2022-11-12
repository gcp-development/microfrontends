# Micro-Frontends
<h2>Motivation</h2>

Since most of my work with FinTech is scaling up their eCommerce Business. I need to ensure my work have a strong foundation. The [Micro-Frontends](https://micro-frontends.org/) approach allow for more flexible and scalable code development across my work and will enable each team to work independently.  This scale-up work is normally part of a bigger programme that includes things like a search engine optimization(SEO) of an online store, a strong marketing strategy and a scale-up of the customer service.<br>
Meaning we should only consider this approach for FinTech of a certain dimension and organization. Some times it's better to have a large frontend monolith application. 

<h2>Introduction</h2>

The idea behind Micro-Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in.

Each team would be responsible for the creation of the UI portion of the application, styling, code, layout, architecture, backend, devops, and connection to the databasev ia Rest APIs.  It has its own build and test pipelines and CI/CD procedures. 
This enables the following:
 <ul>
  <li>Better scaling capabilities of the frontend application</li>
  <li>Fewer communication issues between the multiple teams for one feature change</li>
  <li>Reduced code and testing complexity</li>
  <li>Aids with the application being more resilient to non-working or broken portions</li>
  <li>Helps to overcome the law of diminishing returns</li>
</ul> 








This PoC(Proof of Concept) was done with the [Module Federation(Webpack.js)](https://webpack.js.org/concepts/module-federation/).
