<h3>Why can't we use Ajax outside our domain?</h3>
If you try use ajax outside your domain, you will probably get this error message:

XMLHttpRequest cannot load http://www.domain.com/path/filename. 
Origin null is not allowed by Access-Control-Allow-Origin.

The reason you get this error message is because of the Same-origin policy. The policy permits scripts running on pages originating from the same site to access each other's data with no specific restrictions, but prevents scripts access to data that is stored on a different domain.

This could be a problem if you are trying to access publicly hosted data, but there are ways round it.

-----------

<h2> wxarticle.js </h2>

wxarticle.js is a javascript plugin that emulate a virtual javascript proxy to bypass the (above-mentioned) Same-origin policy issues, using a JSON-padded encoding type.

<h2>how to use it</h2>

1) copy the javascript in your project/console to import the plugin
2) be sure to have Jquery
3) execute the following code:

wxarticle("paste the link of your wechat article here..")

4) you will get as response a dictionary like this

Object

description: "Ready, set and go!"

img: "http://mmbiz.qpic.cn/mmbiz_jpg/3fFo521RHSdq5ibUCcGDnFn9KQhRgUmeGFlMlzQ2Yt59my5uP31E314aQfLmERbIwwrGgRYofxlxfhgatiafGkgA/0?wx_fmt=jpeg"

title: "ISA Futsal Tournament"

Object Prototype
