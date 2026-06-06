<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 💻 Shell

## Avoiding shells

In general, [shells](https://en.wikipedia.org/wiki/Shell_(computing)) should be avoided because they are:
- Not cross-platform, encouraging shell-specific syntax.
- Slower, because of the additional shell interpretation.
- Unsafe, potentially allowing [command injection](https://en.wikipedia.org/wiki/Code_injection#Shell_injection) (see the [escaping section](escaping.md#shells)).

In almost all cases, plain JavaScript is a better alternative to shells. The [following page](bash.md) shows how to convert Bash into JavaScript.

## Specific shell

```js
import {execa} from 'execa';

await execa({shell: '/bin/bash'})`npm run "$TASK" && npm run test`;
```

## OS-specific shell

When the [`shell`](api.md#optionsshell) option is `true`, `sh` is used on Unix and [`cmd.exe`](https://en.wikipedia.org/wiki/Cmd.exe) is used on Windows.

`sh` and `cmd.exe` syntaxes are very different. Therefore, this is usually not useful.

```js
await execa({shell: true})`npm run build`;
```

On Windows, `cmd.exe` can find executable files using [`PATHEXT`](windows.md#executable-files). However, Execa already supports `PATHEXT`, [shebangs](windows.md#executable-files), and [files with spaces](windows.md#escaping) without a shell. `shell: true` also means shell-specific quoting is required, and it does not add Execa's shebang support.

<hr>

[**Next**: 📜 Scripts](scripts.md)\
[**Previous**: 💬 Escaping/quoting](escaping.md)\
[**Top**: Table of contents](../readme.md#documentation)
