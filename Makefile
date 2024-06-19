GO := go

.PHONY: up
up: 
	$(GO) run ./cmd/server/server.go