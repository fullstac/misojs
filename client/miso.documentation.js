module.exports = function(){ return {"Goals.md":"<h1><a name=\"primary-goals\" class=\"anchor\" href=\"#primary-goals\"><span class=\"header-link\">Primary goals</span></a></h1><ul>\n<li>Easy setup of <a href=\"http://isomorphic.net/\" target=\"_blank\">isomorphic</a> application based on <a href=\"https://github.com/lhorie/mithril.js\" target=\"_blank\">mithril</a></li>\n<li>Skeleton / scaffold / Boilerplate to allow users to very quickly get up and running.</li>\n<li>minimal core</li>\n<li>easy extendible</li>\n<li>DB agnostic (e. G. plugins for different ORM/ODM)</li>\n</ul>\n<h1><a name=\"components\" class=\"anchor\" href=\"#components\"><span class=\"header-link\">Components</span></a></h1><ul>\n<li>Routing</li>\n<li>View rendering</li>\n<li>i18n/l10n</li>\n<li>Rest-API (could use restify: <a href=\"http://mcavage.me/node-restify/\" target=\"_blank\">http://mcavage.me/node-restify/</a>)</li>\n<li>optional Websockets (could use restify: <a href=\"http://mcavage.me/node-restify/\" target=\"_blank\">http://mcavage.me/node-restify/</a>)</li>\n<li>easy testing (headless and Browser-Tests)</li>\n<li>login/session handling</li>\n<li>models with validation</li>\n</ul>\n<h1><a name=\"useful-libs\" class=\"anchor\" href=\"#useful-libs\"><span class=\"header-link\">Useful libs</span></a></h1><p>Here are some libraries we are considering using, (in no particular order):</p>\n<ul>\n<li>leveldb</li>\n<li>mithril-query</li>\n<li>translate.js</li>\n<li>i18next</li>\n</ul>\n<p>And some that we&#39;re already using:</p>\n<ul>\n<li>express</li>\n<li>browserify</li>\n<li>mocha/expect</li>\n<li>mithril-node-render</li>\n<li>mithril-sugartags</li>\n<li>mithril-bindings</li>\n<li>mithril-animate</li>\n<li>lodash</li>\n<li>validator</li>\n</ul>\n","Home.md":"<p>Welcome to the misojs wiki!</p>\n<h1><a name=\"getting-started\" class=\"anchor\" href=\"#getting-started\"><span class=\"header-link\">Getting started</span></a></h1><p>See the <a href=\"https://github.com/jsguy/misojs#install\" target=\"_blank\">install guide</a>.\nRead <a href=\"/doc/How-miso-works.md\">how miso works</a>, and check out <a href=\"/doc/Patterns.md\">the patterns</a>, then create something cool!</p>\n","How-miso-works.md":"<h2><a name=\"models-views-controllers\" class=\"anchor\" href=\"#models-views-controllers\"><span class=\"header-link\">Models, views, controllers</span></a></h2><p>When creating a route, you must assign a controller and a view to it - this is achieved by creating a file in the <code>/mvc</code> directory - by convention, you should name it as per the path you want, (see the <a href=\"#routing\">routing section</a> for details).</p>\n<p>Here is a minimal example using the sugartags, and getting a parameter:</p>\n<pre><code class=\"lang-javascript\">var m = require(&#39;mithril&#39;),\n    miso = require(&#39;../server/miso.util.js&#39;),\n    sugartags = require(&#39;../server/mithril.sugartags.node.js&#39;)(m);\n\nmodule.exports.index = {\n    controller: function(params) {\n        this.who = miso.getParam(&#39;who&#39;, params, &#39;world&#39;);\n        return this;\n    },\n    view: function(ctrl){\n        with(sugartags) {\n            return DIV(&#39;Hello &#39; + ctrl.who);\n        }\n    }\n};\n</code></pre>\n<p>Save this into a file <code>/mvc/hello.js</code>, and open <a href=\"http://localhost/hellos\" target=\"_blank\">http://localhost/hellos</a>, this will show &quot;Hello world&quot;. Note the &#39;s&#39; on the end - this is due to how the <a href=\"#route-by-convention\">route by convention</a> works.</p>\n<p>Now open <code>/cfg/routes.json</code>, and add the following routes:</p>\n<pre><code class=\"lang-javascript\">    &quot;/hello&quot;: { &quot;method&quot;: &quot;get&quot;, &quot;name&quot;: &quot;hello&quot;, &quot;action&quot;: &quot;index&quot; },\n    &quot;/hello/:who&quot;: { &quot;method&quot;: &quot;get&quot;, &quot;name&quot;: &quot;hello&quot;, &quot;action&quot;: &quot;index&quot; }\n</code></pre>\n<p>Save the file, and go back to the browser, and you&#39;ll see an error! This is because we have now overridden the automatic route. Open <a href=\"http://localhost/hello\" target=\"_blank\">http://localhost/hello</a>, and you&#39;ll see our action. Now open <a href=\"http://localhost/hello/YOURNAME\" target=\"_blank\">http://localhost/hello/YOURNAME</a>, and you&#39;ll see it getting the first parameter, and greeting you!</p>\n<h2><a name=\"routing\" class=\"anchor\" href=\"#routing\"><span class=\"header-link\">Routing</span></a></h2><p>The routing can be defined in one of two ways</p>\n<h3><a name=\"route-by-convention\" class=\"anchor\" href=\"#route-by-convention\"><span class=\"header-link\">Route by convention</span></a></h3><p>You can use a naming convention as follows:</p>\n<table>\n<thead>\n<tr>\n<th>Action</th>\n<th>Method</th>\n<th>URL</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>index</td>\n<td>GET</td>\n<td>[controller] + &#39;s&#39;</td>\n<td>List the items</td>\n</tr>\n<tr>\n<td>edit</td>\n<td>GET</td>\n<td>[controller]/[id]</td>\n<td>Display a form to edit the item</td>\n</tr>\n<tr>\n<td>new</td>\n<td>GET</td>\n<td>[controller] + &#39;s&#39; + &#39;/new&#39;</td>\n<td>Display a form to add a new item</td>\n</tr>\n</tbody>\n</table>\n<p>Say you have a mvc file named &quot;user.js&quot;, and you define an action like so:</p>\n<pre><code class=\"lang-javascript\">module.exports.index = {...\n</code></pre>\n<p>Miso will automatically map a &quot;GET&quot; to &quot;/users&quot;.<br>Now say you have a mvc file named &quot;user.js&quot;, and you define an action like so:</p>\n<pre><code class=\"lang-javascript\">module.exports.edit = {...\n</code></pre>\n<p>Miso will automatically map a &quot;GET&quot; to &quot;/user/:user_id&quot;, so that users can access via a route such as &quot;/user/27&quot; for use with ID of 27. <em>Note:</em> You can get the user_id using a miso utility: <code>var userId = miso.getParam(&#39;user_id&#39;, params);</code>.</p>\n<h3><a name=\"route-by-configuration\" class=\"anchor\" href=\"#route-by-configuration\"><span class=\"header-link\">Route by configuration</span></a></h3><p>By using <code>/cfg/routes.json</code> config file:</p>\n<pre><code class=\"lang-javascript\">{\n    &quot;[Pattern]&quot;: { &quot;method&quot;: &quot;[Method]&quot;, &quot;name&quot;: &quot;[Route name]&quot;, &quot;action&quot;: &quot;[Action]&quot; }\n}\n</code></pre>\n<p>Where:</p>\n<ul>\n<li><strong>Pattern</strong> - the <a href=\"#routing-patterns\">route pattern</a> we want, including any parameters</li>\n<li><strong>Method</strong> - one of &#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;</li>\n<li><strong>Route</strong> name - name of your route file from /mvc</li>\n<li><strong>Action</strong> - name of the action to call on your route file from /mvc</li>\n</ul>\n<p><strong>Example</strong></p>\n<pre><code class=\"lang-javascript\">{\n    &quot;/&quot;: { &quot;method&quot;: &quot;get&quot;, &quot;name&quot;: &quot;home&quot;, &quot;action&quot;: &quot;index&quot; }\n}\n</code></pre>\n<p>This will map a &quot;GET&quot; to the root of the URL for the <code>index</code> action in <code>home.js</code></p>\n<p><strong>Note:</strong> The routing config will override any automatically defined routes, so if you need multiple routes to point to the same action, you must manually define them. For example, if you have a mvc file named &quot;term.js&quot;, and you define an action like so:</p>\n<pre><code class=\"lang-javascript\">module.exports.index = {...\n</code></pre>\n<p>Miso will automatically map a &quot;GET&quot; to &quot;/terms&quot;. Now, if you want to map it also to &quot;/AGB&quot;, you will need to add two entries in the routes config:</p>\n<pre><code class=\"lang-javascript\">{\n    &quot;/terms&quot;: { &quot;method&quot;: &quot;get&quot;, &quot;name&quot;: &quot;terms&quot;, &quot;action&quot;: &quot;index&quot; },\n    &quot;/AGB&quot;: { &quot;method&quot;: &quot;get&quot;, &quot;name&quot;: &quot;terms&quot;, &quot;action&quot;: &quot;index&quot; }\n}\n</code></pre>\n<p>This is because Miso assumes that if you override the defaulted routes, you actually want to replace them, not just override them. <em>Note:</em> this is correct behaviour, as it minority case is when you want more than one route pointing to the same action.</p>\n<h3><a name=\"routing-patterns\" class=\"anchor\" href=\"#routing-patterns\"><span class=\"header-link\">Routing patterns</span></a></h3><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Example</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Path</td>\n<td>&quot;/abcd&quot; - match paths starting with /abcd</td>\n</tr>\n<tr>\n<td>Path Pattern</td>\n<td>&quot;/abc?d&quot; - match paths starting with /abcd and /abd</td>\n</tr>\n<tr>\n<td>Path Pattern</td>\n<td>&quot;/ab+cd&quot; - match paths starting with /abcd, /abbcd, /abbbbbcd and so on</td>\n</tr>\n<tr>\n<td>Path Pattern</td>\n<td>&quot;/ab*cd&quot; - match paths starting with /abcd, /abxcd, /abFOOcd, /abbArcd and so on</td>\n</tr>\n<tr>\n<td>Path Pattern</td>\n<td>&quot;/a(bc)?d&quot; - will match paths starting with /ad and /abcd</td>\n</tr>\n<tr>\n<td>Regular Expression</td>\n<td>/\\/abc&#124;\\/xyz/ - will match paths starting with /abc and /xyz</td>\n</tr>\n<tr>\n<td>Array</td>\n<td>[&quot;/abcd&quot;, &quot;/xyza&quot;, /\\/lmn&#124;\\/pqr/] - match paths starting with /abcd, /xyza, /lmn, and /pqr</td>\n</tr>\n</tbody>\n</table>\n<h3><a name=\"links\" class=\"anchor\" href=\"#links\"><span class=\"header-link\">Links</span></a></h3><p>When you create links, in order to get the app to work as an SPA, you must pass in m.route as a config, so that the history will be updated correctly, for example:</p>\n<pre><code class=\"lang-javascript\">A({href:&quot;/users/new&quot;, config: m.route}, &quot;Add new user&quot;)\n</code></pre>\n<p>This will correctly work as a SPA. If you leave out <code>config: m.route</code>, the app will still work, but the page will reload every time the link is followed.</p>\n<ul>\n<li>Lightweight footprint</li>\n<li>Full-stack isomorphic framework</li>\n<li>SPA that renders the initial page server side</li>\n<li>Data models with isomorphic validation</li>\n<li>Auto-reload browser on changes</li>\n</ul>\n<h2><a name=\"data-models\" class=\"anchor\" href=\"#data-models\"><span class=\"header-link\">Data models</span></a></h2><p>Data models are progressively enhanced mithril models - you simply create your model as usual, then add validation and type information as it becomes pertinent.\nFor example, say you have a model like so:</p>\n<pre><code class=\"lang-javascript\">var userModel = function(data){\n    this.name = m.p(data.name||&quot;&quot;);\n    this.email = m.p(data.email||&quot;&quot;);\n    this.id = m.p(data._id||&quot;&quot;);\n    return this;\n}\n</code></pre>\n<p>In order to make it validatable, add the validator module:</p>\n<pre><code class=\"lang-javascript\">var validate = require(&#39;validator.modelbinder&#39;);\n</code></pre>\n<p>Then add a <code>isValid</code> validation method to your model, with any declarations based on <a href=\"https://github.com/chriso/validator.js#validators\" target=\"_blank\">node validator</a>:</p>\n<pre><code class=\"lang-javascript\">var userModel = function(data){\n    this.name = m.p(data.name||&quot;&quot;);\n    this.email = m.p(data.email||&quot;&quot;);\n    this.id = m.p(data._id||&quot;&quot;);\n\n    //    Validate the model        \n    this.isValid = validate.bind(this, {\n        name: {\n            isRequired: &quot;You must enter a name&quot;\n        },\n        email: {\n            isRequired: &quot;You must enter an email address&quot;,\n            isEmail: &quot;Must be a valid email address&quot;\n        }\n    });\n\n    return this;\n};\n</code></pre>\n<p>This creates a method that the miso database adaptor can use to validate your model.\nYou get full access to the validation info as well, so you can show an error message near your field, for example:</p>\n<pre><code class=\"lang-javascript\">user.isValid(&#39;email&#39;)\n</code></pre>\n<p>Will return <code>true</code> if the <code>email</code> property of your user model is valid, or a list of errors messages if it is invalid:</p>\n<pre><code class=\"lang-javascript\">[&quot;You must enter an email address&quot;, &quot;Must be a valid email address&quot;]\n</code></pre>\n<p>So you can for example add a class name to a div surrounding your field like so:</p>\n<pre><code class=\"lang-javascript\">DIV({class: (ctrl.user.isValid(&#39;email&#39;) == true? &quot;valid&quot;: &quot;invalid&quot;)}, [...\n</code></pre>\n<p>And show the error messages like so:</p>\n<pre><code class=\"lang-javascript\">SPAN(ctrl.user.isValid(&#39;email&#39;) == true? &quot;&quot;: ctrl.user.isValid(&#39;email&#39;).join(&quot;, &quot;))\n</code></pre>\n<h2><a name=\"client-vs-server-code\" class=\"anchor\" href=\"#client-vs-server-code\"><span class=\"header-link\">Client vs server code</span></a></h2><p>In miso, you include files using the standard nodejs <code>require</code> function. When you need to do something that works differently in the browser than the server, there are a few ways you can achieve it:</p>\n<ul>\n<li>The recommended way is to create and require a file in the <code>server/</code> directory, and then create the same file in the <code>client/</code> directory, and miso will automatically load that file for you on the client side.</li>\n<li>If this is not to your liking, another option is to use <code>miso.util</code> - you can use <code>miso.util.isServer()</code> to test if you&#39;re on the server or not, though it is better practice to use the server/client directory method.</li>\n</ul>\n","Patterns.md":"<p>There are several ways you can write your app and miso is not opinionated about how you go about this so it is important that you choose a pattern that suits your needs. Below are a few suggested patterns to follow when developing apps.</p>\n<p><strong>Note:</strong> miso is a single page app that loads server rendered HTML from any URL, so that SEO works out of the box.</p>\n<h2><a name=\"single-url-mvc\" class=\"anchor\" href=\"#single-url-mvc\"><span class=\"header-link\">Single url mvc</span></a></h2><p>In this pattern everything that your mvc needs to do is done on a single url for all the associated actions. The advantage for this style of development is that you have everything in one mvc container, and you don&#39;t need to map any routes - of course the downside being that there are no routes for the user to bookmark. This is pattern works well for smaller entities where there are not too many interactions that the user can do - this is essentially how most mithril apps are written - self-contained, and at a single url.</p>\n<p>Here is a &quot;hello world&quot; example using the single url pattern</p>\n<pre><code class=\"lang-javascript\">var m = require(&#39;mithril&#39;),\n    sugartags = require(&#39;../server/mithril.sugartags.node.js&#39;)(m);\n\nvar self = module.exports.index = {\n    models: {\n        //    Our model\n        hello: function(data){\n            this.who = m.p(data.who);\n        }\n    },\n    controller: function(params) {\n        this.model = new self.models.hello({who: &quot;world&quot;});\n        return this;\n    },\n    view: function(ctrl) {\n        var model = ctrl.model;\n        with(sugartags) {\n            return [\n                DIV(&quot;Hello &quot; + model.who())\n            ];\n        }\n    }\n};\n</code></pre>\n<p>This would expose a url /hellos (note: the &#39;s&#39;), and would display &quot;Hello world&quot;. (You can change the route using custom routing)</p>\n<h2><a name=\"multi-url-mvc\" class=\"anchor\" href=\"#multi-url-mvc\"><span class=\"header-link\">Multi url mvc</span></a></h2><p>In this pattern we expose multiple mvc routes that in turn translate to multiple URLs. This is useful for splitting up your app, and ensuring each mvc has its own sets of concerns.</p>\n<pre><code class=\"lang-javascript\">var m = require(&#39;mithril&#39;),\n    miso = require(&#39;../server/miso.util.js&#39;),\n    sugartags = require(&#39;../server/mithril.sugartags.node.js&#39;)(m);\n\nvar index = module.exports.index = {\n    models: {\n        //    Our model\n        hello: function(data){\n            this.who = m.p(data.who);\n        }\n    },\n    controller: function(params) {\n        this.model = new index.models.hello({who: &quot;world&quot;});\n        return this;\n    },\n    view: function(ctrl) {\n        var model = ctrl.model;\n        with(sugartags) {\n            return [\n                DIV(&quot;Hello &quot; + model.who()),\n                A({href: &quot;/hello/Leo&quot;, config: m.route}, &quot;Click me for the edit action&quot;)\n            ];\n        }\n    }\n};\n\nvar edit = module.exports.edit = {\n    controller: function(params) {\n        var who = miso.getParam(&#39;hello_id&#39;, params);\n        this.model = new index.models.hello({who: who});\n        return this;\n    },\n    view: function(ctrl) {\n        var model = ctrl.model;\n        with(sugartags) {\n            return [\n                DIV(&quot;Hello &quot; + model.who())\n            ];\n        }\n    }\n};\n</code></pre>\n<p>Here we also expose a &quot;/hello/[NAME]&quot; url, that will show your name when you visit /hello/[YOUR NAME], so there are now multiple urls for our SPA:</p>\n<ul>\n<li><strong>/hellos</strong> - this is intended to be an index page that lists all your &quot;hellos&quot;</li>\n<li><strong>/hello/[NAME]</strong> - this is intended to be an edit page where you can edit your &quot;hellos&quot;</li>\n</ul>\n<p>Note that the anchor tag has <code>config: m.route</code> in it&#39;s options - this is so that we can route automatically though mithril</p>\n"}; };