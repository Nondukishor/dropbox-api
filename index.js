import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  accessToken:
    "DsiDcA3C3eAAAAAAAAAAC0UiuMHs155Zi0qZpPZkYNVZaCVtKS3qCQU8jtemaO2G",
  fetch
});

// http://dropbox.github.io/dropbox-sdk-js/Dropbox.html

dbx.filesListFolder({
    path: ''
}).then(res => console.log(res))