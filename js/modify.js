// 重定向浏览器地址
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function(responseText, request, href, options) {
    Object.defineProperty(request, 'responseURL', {
        value: href
    });
    pjax.site_handleResponse(responseText, request, href, options);
}

  /** 移除 URL 末尾的 index.html */
  async function removeIndex(manifestEntries) {
    const manifest = manifestEntries.map(entry => {
      entry.url = entry.url.replace(/(^|\/)index\.html$/, '/');
      return entry;
    });
    return { manifest };
  }


  