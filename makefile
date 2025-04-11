watch:
	@bun build --watch --outfile public/bundle.js source/main.js &
	@python -m http.server -d public/

build:
	@bun build --outfile public/bundle.js source/main.js

