watch:
	@bun build --watch --outfile public/bundle.js source/main.js &
	@python -m http.server -d public/

build:
	@bun build --outfile public/bundle.js source/main.js

serve:
	@python -m http.server -d public/

deploy:
	@tar czf dist.tgz public/*
	@scp dist.tgz web:~/dist.tgz
	@ssh -T web < scripts/deploy
