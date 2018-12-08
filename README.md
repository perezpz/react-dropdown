# react-dropdown

Simple Dropdown component for React

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]

<!-- [![npm download][download-image]][download-url] -->

[npm-image]: https://img.shields.io/npm/v/@bronzetrees/react-dropdown.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@bronzetrees/react-dropdown
[travis-image]: https://travis-ci.org/OnlyBreak/react-dropdown.svg?branch=master
[travis-url]: https://travis-ci.org/OnlyBreak/react-dropdown
[coveralls-image]: https://coveralls.io/repos/github/OnlyBreak/react-dropdown/badge.svg
[coveralls-url]: https://coveralls.io/github/OnlyBreak/react-dropdown
[node-image]: https://img.shields.io/badge/node.js-%3E%3D8.11.1-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/v/@bronzetrees/react-dropdown.svg?style=flat-square
[download-url]: https://www.nvpmjs.com/package/@bronzetrees/react-dropdown

## Install

```bash
npm install @bronzetrees/react-dropdown --save
```

## Usage

```jsx
import Dropdown from '@bronzetrees/react-dropdown';

ReactDOM.render(
  <Dropdown
    menu={
      <Dropdown.Menu>
        <Dropdown.Item>item1</Dropdown.Item>
        <Dropdown.Item>item2</Dropdown.Item>
      </Dropdown.Menu>
    }
    menuAlign="bottom"
  >
    <span>dropdown link</span>
  </Dropdown>,
  mountNode
);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>menuAlign</td>
          <td>String</td>
          <td>'bottom-end'</td>
          <td>placement of pop menu</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>String</td>
          <td>'click'</td>
          <td>the trigger mode which executes the dropdown action, only support the default mode by far.</td>
        </tr>
    </tbody>
</table>

## License

@bronzetrees/react-dropdown is released under the [MIT](https://github.com/OnlyBreak/react-dropdown/blob/master/LICENSE) license.
