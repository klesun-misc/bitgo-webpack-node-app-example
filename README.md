There is this wonderful lib: [BitGoJS](https://github.com/BitGo/BitGoJS)

It's dependencies (that apparently include tests and source files) take around 450 MiB, whereas Lambdas service does not allow projects over 250 MiB

"So what? Just webpack it, no?", you may ask, but there are few not obvious points to keep in mind to make webpack compile a working bundle for node.
