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

# Quick Start

Fork the repository, clone it to your local system, then:

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Run tests

yarn test (or npm run test)
