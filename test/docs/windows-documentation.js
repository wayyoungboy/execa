import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const readDocument = filePath => readFileSync(new URL(`../../${filePath}`, import.meta.url), 'utf8');

const windowsDocument = readDocument('docs/windows.md');
const shellDocument = readDocument('docs/shell.md');
const readme = readDocument('readme.md');

assert.match(windowsDocument, /^## Executable files$/m);
assert.match(windowsDocument, /PATHEXT/);
assert.match(windowsDocument, /cross-spawn/);
assert.match(windowsDocument, /shebang/);
assert.match(windowsDocument, /spaces/);
assert.match(windowsDocument, /shell: true/);

assert.match(shellDocument, /PATHEXT/);
assert.match(shellDocument, /shebang/);
assert.match(shellDocument, /shell: true/);

assert.match(readme, /PATHEXT/);
assert.match(readme, /files with spaces/);
