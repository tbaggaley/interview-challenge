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

`menuItems` managed as an ES6 `Map` object (indexed by `id`) to allow for efficient insertion / deletion (yet still maintaining order).

I decided to put some logic into the `Header` (re: counting items and dietaries) rather than make it purely a presentational component,
which is probably the decision I'm least convinced about (since it exposes `menuItems` as necessarily being a `Map`, coupling `Header` and the main
`App` component tighter than I might like).

Otherwise (given time constraints), I think I'm fairly happy with the approach I've chosen for this. Enjoy! ;-)

Tom

# Quick Start

Fork the repository, clone it to your local system, then:

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Run tests

yarn test (or npm run test)
