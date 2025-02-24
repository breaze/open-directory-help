FROM node:22.14
RUN npm i -g @nestjs/cli
WORKDIR /app
COPY open-directory/ .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
