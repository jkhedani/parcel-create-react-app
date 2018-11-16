# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:9.5 as build-stage

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .
RUN yarn build

# Install and configure `serve`.
RUN npm install -g pm2
CMD pm2 serve dist/ 3000
EXPOSE 3000