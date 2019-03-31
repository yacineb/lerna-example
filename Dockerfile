FROM node:10-alpine

WORKDIR /app

COPY --from=dependencies /dists/packages/project-c/ .


ENTRYPOINT [ "node","/app/index.js" ]