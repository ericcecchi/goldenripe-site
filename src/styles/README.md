
# Sprout Social CSS Guidelines

*Something clever about how CSS gets out of control that Arlo will probably think up in the shower*

## CSS Syntax

* Tabs, not spaces.
* One selector per line.
* One space before the opening brace of property declaration blocks.
* Closing brace on a new line.
* No spaces before and one space after `:` for each property.
* One property per line.
* End all declarations with a semicolon, even the last one.
* *Optional*: Single selectors with one property declaration all on one line.
* One space around combinators, e.g., `p > a`, not `p>a`.
* One space after commas in property values (e.g., `box-shadow`).
* No spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.
* No leading zeros (e.g., `.5` instead of `0.5` and `-.5px` instead of `-0.5px`).
* Lowercase hex values, e.g., `#fff`.
* Shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.
* Double quotes.
* Quote attribute values in selectors, e.g., `input[type="text"]`.
* No units on 0 values, e.g., `margin: 0;` instead of `margin: 0px;`.
* Double-colon on pseudoelements.

``` scss
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}
.selector-single:before {
  content: 'Optional: ';
}

// Good CSS
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin: 0 0 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
.selector-single::before { content: "Optional: "; }
```

## Writing Selectors—Class Names, elements

* Irreducible patterns, such as a button or a dialog, are written as one word: `.button`, `.dialog`. If a name has multiple words, write as one word anyway, i.e., `.twowords`.
* Child elements of patterns for which there is no semantically appropriate HTML element are delineated with hyphens, e.g., `.button-text`, `.dropdown-menu`. If you aren't sure if the HTML element you're using has enough semantic value on it's own, then it doesn't---use a class.
* Modifier classes are prefixed with an underscore. E.g., a large button could be written as `<button class="button _large">Large Button</button>` and defined as `.button._large` in the CSS.
* State classes are prefixed with `.is-`. These classes are intended for JavaScript manipulation and in nearly all instances should **not** be written out in the HTML.
* `.js-*` classes are intended for hooking event listeners in the JavaScript and should **never** appear in the CSS.
* HTML elements, modifier, and state classes are bound to a pattern or child element. **HTML elements, modifiers, and state classes should not be defined globally except in very specific instances. If you think you need a global modifier or state class, you're probably wrong.**

Example:

```scss
.button {
  // Button styles
  background: #7ac143;

  &:hover {
    background: #62b621;
  }

  // Child element
  &-text {
    font-weight: bold;
  }
  > nav {
    position: absolute;
  }

  // Button states
  &:active.is-spinning,
  &:active.is-disabled {
    transform: none;
  }

  // Button modifiers
  &._warning {
    background: #ee0029;

    &:hover {
      background: #d40025;
    }
  }

  &._passive {
    color: #4d4d4d;
    background: #d5d5d5;
    border-color: #b3b3b3;

    &:hover {
      background: #ddd;
    }
  }

  &._large {
    min-height: 40px;
  }

  &._back {
    > .button-text::before {
      content: '< ';
    }
  }
}
```

## Mixing Patterns

A class attribute should only ever contain one pattern class. `<button class="button icon-back">` may cause conflicts in modifer and state classes. Instead, use `@extend` or `@include` to require another pattern as a dependency. For instance:

```scss
.button {
  &._back {
    > .button-text::before {
      @extend .icon-back;
    }
  }
}
```

## Declaration Order

Related property declarations should be grouped together following the order:

1. Variable declarations, extends, and mixins
1. Positioning
1. Box model
1. Flexbox
1. Table Layout
1. List styles
1. Typography
1. Visual (backgrounds, borders, opacity)
1. Pseudoelements and other CSS content
1. Behavior (pointer events, user select)
1. Transforms and Animations

Don't waste your time memorizing the order. Use [CSScomb](https://github.com/csscomb/csscomb.js) with [this config](https://gist.github.com/arlodesign/9da59a67ae9d690a2b32) to sort your declarations and fix most of the syntax described in the previous section. ([CSScomb Sublime package](https://github.com/csscomb/sublime-csscomb)

## Media query placement

Place media queries as close to their relevant rule sets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document. Doing so only makes it easier for folks to miss them in the future. Here's a typical setup.

## Prefixed properties

Don’t use vendor prefixes on properties---write pure CSS according to the latest W3C specs. Our build uses [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) to add only the prefixes we need for the browsers we support.

## Shorthand notation

Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:

* padding
* margin
* font
* background
* border
* border-radius

Often times we don't need to set all the values a shorthand property represents. For example, HTML headings only set top and bottom margin, so when necessary, only override those two values. Excessive use of shorthand properties often leads to sloppier code with unnecessary overrides and unintended side effects.

The Mozilla Developer Network has a great article on [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for those unfamiliar with notation and behavior.

## Sass Nesting

Avoid unnecessary nesting. Just because you can nest, doesn't mean you always should. Consider nesting only if you must scope styles to a parent and if there are multiple elements to be nested.

``` scss
// Without nesting
.table > thead > tr > th { … }
.table > thead > tr > td { … }

// With nesting
.table > thead > tr {
  > th { … }
  > td { … }
}
```

## Responsible `&` Usage

The `&` operator is a great way to indicate the scope of a child element, modifier class, or state class. For legibility and to ease searching source, do not nest ampersands.

```scss
// Bad
.button {
  &-text {
    color: red;
    &::before { content: "BAD"; }
  }
}

// Good
.button {
  &-text { color: red; }
  &-text::before { content: "GOOD"; }
}
```

## Comments

Write in complete sentences for larger comments and succinct phrases for general notes.

Comments are removed by by [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) in production, so it is safe to use both inline and multiline comment styles in Sass. Use inline comments for single-line comments and inline comments, and use multiline comments for, um, multiline comments.

``` scss
// Bad
// Modal header
// This is a modal header.
.modal-header {
  margin: 0 !important;
  z-index: -37; /* Explanation of this weird property */
  ...
}

// Good
/**
 * Dialog Headers
 *
 * An optional header area for dialog titles and [X] close buttons
 */
.modal-header {
  margin: 0 !important; // A comment to justify the evil occurring on this line
  ...
}
```

## Editor preferences

Set your editor to the following settings to avoid common code inconsistencies and dirty diffs:

* Use tabs.
* Trim trailing white space on save. ([Get the ST2/3 plugin](https://github.com/SublimeText/TrailingSpaces))
* Set encoding to UTF-8.
* Add a new line at end of files.

[You can use a plugin](http://editorconfig.org/#download) to have these settings automatically set in your text editor using our `.editorconfig` file.

## Bibliography

Our syntax styles and guidelines are ~~pilfered~~adapted from many sources, including:

* [codeguide.co](http://codeguide.co)
* [SMACSS](https://smacss.com)
* [BEM](http://bem.info/method/)
* CSS Wizardry, especially [this article](http://csswizardry.com/2012/11/code-smells-in-css/)
