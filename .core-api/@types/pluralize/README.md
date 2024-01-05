# Installation
> `npm install --save @types/pluralize`

# Summary
This package contains type definitions for pluralize (https://www.npmjs.com/package/pluralize).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/pluralize.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/pluralize/index.d.ts)
````ts
/**
 * Pluralize or singularize a word based on the passed in count.
 *
 * @param word
 * @param count
 * @param inclusive
 */
declare function pluralize(word: string, count?: number, inclusive?: boolean): string;

declare namespace pluralize {
    /**
     * Pluralize a word based.
     *
     * @param word
     */
    function plural(word: string): string;

    /**
     * Singularize a word based.
     *
     * @param word
     */
    function singular(word: string): string;

    /**
     * Add a pluralization rule to the collection.
     *
     * @param rule
     * @param replacement
     */
    function addPluralRule(rule: string | RegExp, replacement: string): void;

    /**
     * Add a singularization rule to the collection.
     *
     * @param rule
     * @param replacement
     */
    function addSingularRule(rule: string | RegExp, replacement: string): void;

    /**
     * Add an irregular word definition.
     *
     * @param single
     * @param plural
     */
    function addIrregularRule(single: string, plural: string): void;

    /**
     * Add an uncountable word rule.
     *
     * @param word
     */
    function addUncountableRule(word: string | RegExp): void;

    /**
     * Test if provided word is plural.
     *
     * @param word
     */
    function isPlural(word: string): boolean;

    /**
     * Test if provided word is singular.
     *
     * @param word
     */
    function isSingular(word: string): boolean;
}

export = pluralize;
export as namespace pluralize;

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 09:09:39 GMT
 * Dependencies: none

# Credits
These definitions were written by [Syu Kato](https://github.com/ukyo), and [Karol Majewski](https://github.com/karol-majewski).