# Minimal React-like + Redux starter-kit _EVER_
# _13KB min+gzip_
- Preact a drop-in replacement for React: https://preactjs.com/
- tree-shaking and bundling with Rollup
- type-checking with TypeScript
- ES5 transpilation with Babel

## Demo Page: https://piotrwitek.github.io/preact-typescript-rollup-starter-kit/

## Bundle size comparison:
- preact + preact-compat + redux + react-redux ([Bundle](https://github.com/piotrwitek/preact-typescript-rollup-starter-kit/blob/master/bundle.js.gz))= 13KB!!!
- preact + preact-compat + redux + react-redux + google-map-react ([Demo Page](https://piotrwitek.github.io/preact-typescript-rollup-starter-kit/)) = 27KB!!!
- react + react-dom (same source code) = 138KB

## Installation
```
npm i
npm run tsc && npm run build
npm start
```

Copyright (C) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
