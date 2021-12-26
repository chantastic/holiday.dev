- the install script creates a directory
- you have to choose a deployment
- git is not initiliazid
- read the readme. It has specific instruction for each install
- cloudflare workers requires wrangler
- wrangler requires cargo and rust
  - https://doc.rust-lang.org/stable/cargo/getting-started/installation.html
  - curl https://sh.rustup.rs -sSf | sh

```
Welcome to Rust!

This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  /Users/chan/.rustup

This can be modified with the RUSTUP_HOME environment variable.

The Cargo home directory located at:

  /Users/chan/.cargo

This can be modified with the CARGO_HOME environment variable.

The cargo, rustc, rustup and other commands will be added to
Cargo's bin directory, located at:

  /Users/chan/.cargo/bin

This path will then be added to your PATH environment variable by
modifying the profile files located at:

  /Users/chan/.profile
  /Users/chan/.bashrc
  /Users/chan/.zshenv

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: aarch64-apple-darwin
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

```
Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source $HOME/.cargo/env
```

- `cargo install wrangler`
- if i need to update wrangler later

## Collecting app to to workers with wrangler
- https://developers.cloudflare.com/workers/cli-wrangler/authentication
- `wrangler login`
- `npm run deploy`

## Local dev
- `npm run dev` runs the remix dev server
- `npm start` runs the miniflare worker server
- `npm i concurrently` to run both with one command
- use concurrently to connect commands `"dev": "concurrently \"npm run start\" \"remix watch\""`
- add `/.mf` to `.gitignore` to not doxx yourself