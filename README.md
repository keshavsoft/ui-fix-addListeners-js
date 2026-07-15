# EndPoints Fix

Utility for automatically maintaining Express route files.

## Purpose

This module updates `end-points.js` files by:

* Adding new route handlers
* Preventing duplicate routes
* Preserving route order
* Maintaining consistent formatting

---

## Generated Structure

```js
import express from "express";

const tableName = "BillsTable";

const router = express.Router();

router.post("/Alter", express.json(), (req, res) =>
    AlterFunc({ req, res, inTablePath: tablePath })
);

export { router };
```

---

## Rules

### First Route

When the first route is inserted:

* Add one blank line after `const router = express.Router();`
* Add one blank line before `export { router };`

Example:

```js
const router = express.Router();

router.post("/Alter", express.json(), handler);

export { router };
```

### Additional Routes

New routes are always appended after the last route.

Example:

```js
router.post("/Alter", express.json(), handler);
router.post("/Alter1", express.json(), handler);
router.post("/Alter2", express.json(), handler);
```

No blank lines are inserted between routes.

---

## Duplicate Protection

If a route already exists, no new route is added.

---

## Goal

Produce clean and predictable Express route files automatically.
