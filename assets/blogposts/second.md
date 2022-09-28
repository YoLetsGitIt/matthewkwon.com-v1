## What is tensor search?

Tensor search is a new way of searching which allows the implementation and usage of
search to be more intuitive. Unlike traditional methods where the developer must specify a
set of rules to understand the data and query for it, tensor search uses deep-learning to
transform data into a collection of vectors called “tensors”, allowing queries to be more
human-like.


## Background

Searching is a giant business and its only getting bigger every day. Just a decade ago, Google
processed 3.3 billion searches per day. Today, there are over 99,000 searches per second,
totalling up to over **8.5 billion** searches a day. This figure doesn’t include searches on the
billions of Amazon products, Spotify playlists and Instagram profiles, so with all things
considered, search is without a doubt, *huge*.

New content is being created on the web, every single day, and with a society that’s
becoming more and more reliant on the internet as their source of information, effective
searching has become ever so important. Unfortunately, existing search engines like Google
are too general, and most of the time, other companies aren’t able to utilise it to fit their
requirements. Instead, frameworks like Elastic and Typesense which utilise symbolic search
are being used by developers to tailor the search algorithm to whatever the company
needs.

## Symbolic Search

Symbolic search has proven effective for many use cases, like Shopify, which uses Elastic to
search through their list of potentially millions of products.

Let’s have a look into how symbolic search works behind the scenes. Say I want to search for
‘slim blue Levis jeans’. A typical search system would most likely find what you’re looking
for, but what if the product you were looking for was actually tagged as navy instead of
blue? To prevent edge cases like this, a developer needs to write semantic rules like:

- Blue is a color
- Navy is a synonym of blue

These rules are typically expressed in JSON as key-value pairs:
>{
>
>    “color”: “red,
>
>    “color_synonyms”: [“navy”]
>
>}

Each of these key-value pairs represents a symbol, and when the user submits a search
query, the system will break the query into symbols and match them with the symbols from
the items that are in the database.

Historically, this works well most of the time, but regular usage of symbolic search has
surfaced some drawbacks imbedded into the design of the algorithm.
Text is complicated, and developers need to process the text that users input to make it
suitable for machines to run a search on. With the previous example of ‘slim blue Levis
jeans’, we need the search algorithm to recognise the following associations:

- Slim – Type of fit
- Blue – Colour
- Levis – Brand of the product
- Jeans – Type of product

Not to mention that the system needs to recognise that the search is in English! To make
sure that symbolic search works well, developers need to ensure a robust pipeline of
translating the search text into suitable query for the search system and this can be quite
arduous. Go to your favourite online shopping mall and check all the categories that you can
search items with. These are most likely hard coded by the developers, and just imagine if a
new category of clothing or product comes into the store, more work for the developers!

## Tensor search using Marqo
Marqo provides an easier alternative to building a search system. Using custom models and
shared repositories to train your data, you can plug a search model right into your system
without having to write and maintain arduous rules for your search system. Marqo abstracts
the difficult parts of the search system, like implementing the text and image search, but
still offers the end-to-end functionalities like filtering and highlighting for your search
system.

The best way to see if Marqo is a fit for your product is to try it out. Marqo is built on
accessibility, and its integration with Docker allows you to deploy on any cloud provider you
prefer. To get started, move on to the [docs](https://marqo.pages.dev/) to find more about how to install it, and the
functionality that you can tinker with.
Marqo GitHub Repository: https://github.com/marqo-ai/marqo#marqo