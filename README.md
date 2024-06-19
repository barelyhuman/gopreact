# go-preact

A **tiny** server rendering utility for working with Go and Preact.

> Oh, you did not!!

Well, I did. And it works, and it's tiny.

> [!NOTE]
> It's specifically tied to Preact for personal usage. If you wish to
> port this to other frameworks or make it more generic, be my guest :)

## Usage

Read the [`./cmd/server/server.go`](/cmd/server/server.go) file for an example.

## Why

I've made this work with `go generate` and `vite` a few times, but it felt weird
and I didn't like it. I want it to be rendered on the server but still be a
client-first app.

A.k.a, render the simple bits and then hydrate, saving a bit on the overall tree
creation in JS (Preact is already fast enough to handle it all, so it shouldn't
matter, but I have my own mental issues).

## What

It's a set of utilities that help you specify where your Preact app is and then
take care of rendering it on the server using an `index.html`, while keeping all
hydration and logic on the JavaScript side.

## Why and When should I use it?

Hmm, good question. It's not for everyone, and it doesn't work well in all use
cases.

It's specifically for content and low interactivity websites. But if you wish to
use the utilities to create a server that can both render the website routes and
handle the API routes in a single binary, then this would be good idea

## License

[MIT](/LICENSE)
