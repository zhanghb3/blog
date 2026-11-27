'use strict';

const urlFor = hexo.extend.helper.get('url_for');

// Resolve site-relative URLs embedded in Markdown HTML attributes.
hexo.extend.tag.register('site_url', function (args) {
  return urlFor.call(hexo, args.join(' '));
});
