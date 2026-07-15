# EndPoints Fix - Developer Notes

## Insertion Strategy

Search order:

```js
[
    "router.",
    "const router = "
]
```

### Case 1

No routes exist.

Insert immediately after:

```js
const router = express.Router();
```

Result:

```js
const router = express.Router();

router.post(...);

export { router };
```

---

### Case 2

Routes already exist.

Append after the last route.

Result:

```js
router.post("/Alter", ...);
router.post("/Alter1", ...);
router.post("/Alter2", ...);
```

No extra blank lines between routes.

---

## Formatting Rules

### First Insert

```text
router declaration
blank line
route
blank line
export
```

### Subsequent Inserts

```text
existing route
new route
new route
export
```

No additional spacing.

---

## Duplicate Check

Example:

```js
router.post("/Alter"
```

If found, skip insertion.

---

## Expected Final Layout

```js
import express from "express";

const tableName = "BillsTable";

const router = express.Router();

router.post("/Alter", ...);
router.post("/Alter1", ...);
router.post("/Alter2", ...);

export { router };
```
