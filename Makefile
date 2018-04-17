.pipinstall:
	@echo "Installing python packages"
	@cd backend && pip3 install -r requirements.txt

.yarninstall:
	@echo "Installing npm packages"
	@cd frontend && yarn install

install: .pipinstall .yarninstall

backend: .pipinstall
	@echo "Running backend tests"
	@cd backend && ./tests.sh

mocha: .yarninstall
	@echo "Running frontend tests"
	@cd frontend && yarn test

selenium: 
	@export SELENIUM_URL=soundtrackdb.me && cd frontend && python3 guitests.py

selenium-local: 
	@export SELENIUM_URL=localhost:3000 && cd frontend && python3 guitests.py

postman: .yarninstall
	@echo "Running production postman tests"
	newman run Postman.json --color -e Prod.postman_environment.json

postman-local: .yarninstall
	@echo "Running local postman tests"
	newman run Postman.json --color -e Local.postman_environment.json

issues:
	@echo "GitHub Issues: https://github.com/connormlewis/idb/issues"

stories:
	@echo "GitHub Stories: https://github.com/connormlewis/idb/issues?utf8=✓&q=label%3A%22user+story%22+"

github:
	@echo "GitHub Repo: https://github.com/connormlewis/idb"

website:
	@echo "Website Url: http://soundtrackdb.me"

report:
	@echo "GitBook Report: https://connormlewis.gitbooks.io/report/content/"

apidoc:
	@echo "GitBook API Docs: https://connormlewis.gitbooks.io/api/content/"

clean:
	rm -rf backend/__pycache__
	rm -rf backend/.pytest_cache/
	rm -f backend/.coverage
	rm -rf frontend/build
	rm -rf frontend/.nyc_output