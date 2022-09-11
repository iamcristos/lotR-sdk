# Lord Of The Rings SDK

This SDK has been created for a purpose of making it easy for developers to consume information about the trilogy [Lord Of The Rings API](https://the-one-api.dev/v2).

With this SDK you are able to have a complete access to API and even more.
Simple to install and easy to use.

[Requirements](#requirements)

[Installation](#installation)

[SDK Initialization](#sdk-initialization)

[Before use](#before-use)

[SDK Methods](#sdk-methods)

[Development](#development)

- [Testing](#testing)

---

## Requirements

For being able to use all the functionality except for [Books], that SDK provides, you will need to register at the [API WebSite](https://the-one-api.dev/sign-up).
After success registration you will receive an **API key**. It has to be used in an imported function call.
The complete installation instructions is right below.

## Installation

All you need to make an SDK installed is just run the following script in your command line:

```bash
yarn i cristos-lotr-sdk
```

## SDK Initialization

As was mentioned before at this step you will need to have **API key** retrieved from API ([How to retrieve an API key](#requirements)).

You have to import SDK to your application and provide following arguments to it:

- **apiKey** _(key that was retrieved from API)_

### CommonJS

Common JS SDK initialization example with setting cache reset to 10 seconds and enabling logger:

```javascript
const SDK = require('cristos-lotr-sdk')

const sdk = new SDK({ apiKey: 'api key' })
```

### ES Modules

ES Modules SDK initialization example without enabling it features:

```javascript
import SDK from 'cristos-lotr-sdk'

const sdk = new SDK({ apiKey: 'api key' })
```

## Before use

> Note: Lord of the Rings API has a limitation for requests. So you are able to send only **100** requests each **10** minutes.

In subsequent version we instead to add Caching so as to give you the flexibility to call the API as you like.

## SDK methods

SDK is created to make developers life easier. However it is just a layer between developers and API.

Our development team is working to cover as much usage cases as possible. But at the same moment we have left you some freedom in actions.

Please, discover the methods, that SDK provides, to understand how it can be useful for you.

### Methods

Initialized SDK includes five blocks of functions to operate with specific entities.

- GetABook;
- GetAllBook;
- GetABookCharacter;
- GetAChapter;
- ListCharacters;
- GetACharacterQuote
- GetACharacter
- ListMovies
- GetAMovieQuote
- GetAMovie
- GetAQuote

> Note: **query** is always an optional parameter, you don't need to provide the values.

```javascript
const filter = { name: '=Gandalf' }
const query = { limit: 20, page: 2, filter }
sdk.GetAllBook(query).then((result) => console.log(result))
```

### Query object

**query** is an optional item and might consist following properties:

- **limit?**: number;
- **offset?**: number;
- **page?**: number;
- **filter?**: Record<string string>

**Filtering example:**

```javascript
const filter = { name: '=Gandalf' }
const query = { filter }
sdk.ListMovies(query).then((result) => console.log(result))
```

### Error handling

For making a usage of current SDK we are throwing Error so as to help you figure out what you are not doing correctly.

## Development

### Testing

Testing is available for development purpose, you may discover test cases in our [GitHub Repository]

It's developed with a help of **Jest** testing framework on a unit

For this you will need to install development dependencies first:

```bash
yarn i
```

**Unit tests**
To run unit tests, execute following script:

```bash
yarn test
```
