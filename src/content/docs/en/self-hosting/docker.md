---
title: "Installation: Docker"
description: Run Paragrafy via Docker Compose.
---

:::tip[Managed Cloud]
On [Managed Cloud](/en/managed-cloud/overview/), we handle the entire container/server setup
automatically — this step is skipped entirely.
:::

Docker and Docker Compose are the fastest and cleanest way to run Paragrafy.

## Prerequisites

- Docker & Docker Compose installed on the server.

## Quick Guide

1. Clone the **entire repository** (not just the Docker files!):

   ```bash
   git clone https://github.com/mineco-de/Paragrafy.git && cd Paragrafy
   ```

   The image is built from this local checkout (`COPY . /var/www/html/` in the Dockerfile) — it
   no longer fetches the code from GitHub itself, so that `docker compose up -d --build`
   reliably uses your current state instead of getting stuck on an old Docker layer cache.

2. Start the container in the background:

   ```bash
   docker compose up -d --build
   ```

## Persistence

`docker-compose.yaml` mounts `./data` to `/var/www/html/data` and sets
`PARAGRAFY_DATA_DIR=/var/www/html/data` — that's where `paragrafy_data.sqlite`, `config.php`,
`/backups`, and an optional `.env.local` live. Without this volume, the database and admin
credentials are lost on every `--build`. The container automatically sets the correct file
permissions on this folder at startup (via `docker-entrypoint.sh`), even if the host directory
didn't exist beforehand.

For a bare-metal/Apache setup (see [Installation: Apache](/en/self-hosting/apache/)),
`PARAGRAFY_DATA_DIR` isn't needed — the database and config then live directly in the project
folder as usual.

Next, continue with [Initial Setup & Cron Jobs](/en/self-hosting/cron-jobs/).
