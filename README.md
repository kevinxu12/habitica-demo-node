# Habitica_node

A demo node app for Runloop Node lambda functions and devboxes. The NPM package with type definitions is available [@runloop/runloop](https://www.npmjs.com/package/@runloop/runloop).

The demo performs the following

- Clones Habitica
- NPM install
- Uses file api
- Lints the repo

## How it works
The runloop package will 

See [platform.runloop.ai](https://platform.runloop.ai) to setup your accunt and inspect deployments, invocations, and devbox logs.

## Trigger an invocation of a RL function

```bash
curl -X 'POST' \
  'https://api.runloop.ai/v1/functions/habitica-demo/useDevbox/invoke_async' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' -H 'Authorization: Bearer ak_XXX' \
  -d '{
  "request": {}
}'
> {"id":"inv_2wuHDGq6CnStti0wf4LPI","function_name":"useDevbox","project_name":"habitica-demo","status":"running","result":null,"error":null}
```

## Get the status of an invocation

```bash
curl -X 'GET' \
  'https://api.runloop.ai/v1/functions/invocations/<id from above>' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' -H 'Authorization: Bearer ak_XXX' \
  -d '{
  "request": {}
}'
```
