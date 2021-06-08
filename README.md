# Feedr Technical Challenge

## Notes

Functionality implemented:

- Fetching items dynamically from API
- Filtering items on API per search query
- Items can be added / deleted from menu
- Adding duplicate items increases the quantity of the item rather than adding duplicate rows
- Quantity of each item can be changed
- Header tracks total item count / dietaries count (taking into consideration quantities)

Client -> API layer encapsulated in `useQueryItems` hook which abstracts fetching / loading the data from
its client component.

`menuItems` managed as an ES6 `Map` object (indexed by `id`) to allow for easy / efficient look up of existing items (for purposes of checking if they're already there on add from the left menu, in which case we adjust the quantity intead of adding duplicate rows).

I decided to put some logic into the `Header` (re: counting items and dietaries) rather than make it purely a presentational component,
which is probably the decision I'm least convinced about (since it exposes `menuItems` as necessarily being a `Map`, coupling `Header` and the main `App` component tighter than I might like).

Given time constraints, styling effort is minimal - re-used the `X` button CSS also for an `+` button for adding the items with.

Enjoy! ;-)

Tom

# Quick Start

Fork the repository, clone it to your local system, then:

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Run tests

yarn test (or npm run test)
