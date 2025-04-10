serve:
	@bun build --watch --outfile public/bundle.js source/main.js &
	@bun public/index.html

build:
	@bun build --outfile public/bundle.js source/main.js

