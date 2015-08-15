# x11-icon-transform
Split X11 _NET_WM_ICON data into manageable chunks

Useful together with [`x11-prop-stream`](https://github.com/raymond-h/x11-icon-transform) to get a stream of data from the `_NET_WM_ICON` X window property.

## Installing
`npm install x11-icon-transform`

## Example usage
```js
var X11IconTransform = require('x11-icon-transform');

// Getting '_NET_WM_ICON' using X.GetProperty()
// will give you image data of all icons of a window.
// See: http://standards.freedesktop.org/wm-spec/wm-spec-latest.html#idm140200472568384

// assuming we have a stream outputting the data of the '_NET_WM_ICON' property...
stream.pipe(new X11IconTransform).pipe(/*...*/);
// The data is transformed to '{width, height, data}' objects.
// The 'data' property is the raw image data that comes after width and height.
```

## License
The MIT License (MIT)

Copyright (c) 2015 Raymond Hammarling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
