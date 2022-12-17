install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
package:
	sudo npm link

#calling functions of small tasks

fizzBuzz:
	node src/smallTasks/fizzBuzz.js
fibonacci:
	node src/smallTasks/fibonacci.js
numberFlip:
	node src/smallTasks/numberFlip.js
happyNumber:
	node src/smallTasks/happyNumber.js