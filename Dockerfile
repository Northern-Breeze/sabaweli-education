# pull official base image
FROM node:14.4-alpine3.11

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn
RUN yarn global add react-scripts@3.4.1

# add app
COPY . ./

# start app
CMD ["yarn", "start"]