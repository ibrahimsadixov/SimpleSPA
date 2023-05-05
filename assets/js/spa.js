function showPage(pageId) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      const content = xhr.responseText;
      document.getElementById('content').innerHTML = content;
    }
  };
  xhr.open('GET', pageId + '.htm');
  xhr.send();
}

