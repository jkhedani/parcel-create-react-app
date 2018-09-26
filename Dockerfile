# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:9.5

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -sp 3000 dist
EXPOSE 3000