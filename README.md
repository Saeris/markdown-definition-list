# markdown-definition-list

Adds support for HTML Definition List `<dl>` using [@mdit/plugin-dl](https://github.com/mdit-plugins/mdit-plugins/tree/main/packages/dl)

### Usage Example

```md
Term 1

: Definition 1

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

Term 3

: Definition
with lazy continuation.

    Second paragraph of the definition.

---

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

becomes:
```html
<dl>
    <dt>Term 1</dt>
    <dd>
        <p>Definition 1</p>
    </dd>
    <dt>Term 2 with <em>inline markup</em></dt>
    <dd>
        <p>Definition 2</p>
        <pre>
            <code>  { some code, part of Definition 2 }</code>
        </pre>
        <p>Third paragraph of definition 2.</p>
    </dd>
    <dt>Term 3</dt>
    <dd>
        <p>Definition with lazy continuation.</p>
        <p>Second paragraph of the definition.</p>
    </dd>
</dl>

<hr>

<dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2a</dd>
    <dd>Definition 2b</dd>
</dl>
```
