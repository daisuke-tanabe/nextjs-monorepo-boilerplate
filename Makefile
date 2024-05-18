.PHONY: up
up:
	docker compose -f compose.dev.yaml watch

.PHONY: down
down:
	docker compose -f compose.dev.yaml down
