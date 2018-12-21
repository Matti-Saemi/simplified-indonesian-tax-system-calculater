FROM library/node:carbon-slim

# Add Some Argument variables
ARG location=/usr/src/app
ARG ENV_TYPE=start

# Node global packages
RUN yarn global add nodemon

RUN mkdir -p $location
WORKDIR $location
COPY . $location

# Run some commands, here needs to run `yarn`
# RUN yarn start
