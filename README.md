<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isTriangularNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a [triangular number][triangular-number].

<section class="intro">

[Triangular numbers][triangular-number] can be computed using the following formula

<!-- <equation class="equation" label="eq:triangular_number" align="center" raw="T_n = \frac{n(n+1)}{2}" alt="Triangular number formula."> -->

<div class="equation" align="center" data-raw-text="T_n = \frac{n(n+1)}{2}" data-equation="eq:triangular_number">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@0e41839343d292d7f99581a15ee8086b1e1dea68/lib/node_modules/@stdlib/assert/is-triangular-number/docs/img/equation_triangular_number.svg" alt="Triangular number formula.">
    <br>
</div>

<!-- </equation> -->

for `n >= 0`.

By analogy with the square root of `x`, one can define the positive triangular root of `x` such that `T_n = x`

<!-- <equation class="equation" label="eq:triangular_root" align="center" raw="n = \frac{\sqrt{8x+1} - 1}{2}" alt="Triangular root formula."> -->

<div class="equation" align="center" data-raw-text="n = \frac{\sqrt{8x+1} - 1}{2}" data-equation="eq:triangular_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@0e41839343d292d7f99581a15ee8086b1e1dea68/lib/node_modules/@stdlib/assert/is-triangular-number/docs/img/equation_triangular_root.svg" alt="Triangular root formula.">
    <br>
</div>

<!-- </equation> -->

Accordingly, an integer `x` is a [triangular number][triangular-number] **if and only** if `8x+1` is a [square number][@stdlib/assert/is-square-number].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-triangular-number
```

</section>

<section class="usage">

## Usage

```javascript
var isTriangularNumber = require( '@stdlib/assert-is-triangular-number' );
```

#### isTriangularNumber( value )

Tests if a `value` is a [triangular number][triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isTriangularNumber( 36.0 );
// returns true

bool = isTriangularNumber( new Number( 36.0 ) );
// returns true

bool = isTriangularNumber( 3.14 );
// returns false

bool = isTriangularNumber( -5.0 );
// returns false

bool = isTriangularNumber( NaN );
// returns false

bool = isTriangularNumber( null );
// returns false
```

#### isTriangularNumber.isPrimitive( value )

Tests if a `value` is a primitive [triangular number][triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isTriangularNumber.isPrimitive( 36.0 );
// returns true

bool = isTriangularNumber.isPrimitive( new Number( 36.0 ) );
// returns false
```

#### isTriangularNumber.isObject( value )

Tests if a `value` is a `Number` object having a value which is a [triangular number][triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isTriangularNumber.isObject( 36.0 );
// returns false

bool = isTriangularNumber.isObject( new Number( 36.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Return values are not reliable for numbers greater than `1125899906842624`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var isTriangularNumber = require( '@stdlib/assert-is-triangular-number' );

var bool = isTriangularNumber( 36.0 );
// returns true

bool = isTriangularNumber( new Number( 36.0 ) );
// returns true

bool = isTriangularNumber( 0.0 );
// returns true

bool = isTriangularNumber( 1.0 );
// returns true

bool = isTriangularNumber( 3.14 );
// returns false

bool = isTriangularNumber( -5.0 );
// returns false

bool = isTriangularNumber( NaN );
// returns false

bool = isTriangularNumber( '0.5' );
// returns false

bool = isTriangularNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]: test if a value is a number having an integer value.
-   [`@stdlib/assert/is-number`][@stdlib/assert/is-number]: test if a value is a number.
-   [`@stdlib/assert/is-square-number`][@stdlib/assert/is-square-number]: test if a value is a square number.
-   [`@stdlib/assert/is-square-triangular-number`][@stdlib/assert/is-square-triangular-number]: test if a value is a square triangular number.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-triangular-number.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-triangular-number

[test-image]: https://github.com/stdlib-js/assert-is-triangular-number/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-triangular-number/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-triangular-number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-triangular-number?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-triangular-number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-triangular-number/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-triangular-number/main/LICENSE

[triangular-number]: https://en.wikipedia.org/wiki/Triangular_number

<!-- <related-links> -->

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert-is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number

[@stdlib/assert/is-square-number]: https://github.com/stdlib-js/assert-is-square-number

[@stdlib/assert/is-square-triangular-number]: https://github.com/stdlib-js/assert-is-square-triangular-number

<!-- </related-links> -->

</section>

<!-- /.links -->
