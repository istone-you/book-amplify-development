# ビルドステージ
FROM golang:1.16-alpine AS build

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .
RUN go build -o main .

# 実行ステージ
FROM alpine:latest

ENV PORT=3000
EXPOSE 3000

WORKDIR /app

COPY --from=build /app/main .

CMD ["./main"]