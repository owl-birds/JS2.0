# HTTP

- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

http (Hypertext Transfer Protocol) : is an application-layer protocol for transmitting hypermedia documents, such as HTML, image video, text, etc.

![](./picts//fetching_a_page.png)
![](./picts//http-layers.png)

## Components of HTTP-based systems

![](./picts/client-server-chain.png)

## HTTP Request

![](./picts/http_request.png)

## HTTP Response

![](./picts/http_response.png)

## HTTP Response Status Code

- Informational responses (100 – 199)
- Successful responses (200 – 299)
- Redirection messages (300 – 399)
- Client error responses (400 – 499)
- Server error responses (500 – 599)

## Basic aspect of HTTP

- HTPP is Simple
  HTTP is generally designed to be simple and human readable
- HTTP is extensible
- HTTP is stateless, but not sessionless
  HTTP is stateless: there is no link between two requests being successively carried out on the same connection. This immediately has the prospect of being problematic for users attempting to interact with certain pages coherently, for example, using e-commerce shopping baskets. But while the core of HTTP itself is stateless, HTTP cookies allow the use of stateful sessions. Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.
- more : https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

# sources :

- https://developer.mozilla.org/en-US/docs/Web/HTTP
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
