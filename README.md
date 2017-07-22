# Fullstack-challenge

Requeriments:

- NodeJS: 7.6.0
- Yarn: 0.27.0
- XCode (Mac only, iOS)
- Android (Optional)

## Server

### Setting

Need [create a app on Twitter](https://apps.twitter.com/app/new) and configure `.env` on `/<project>/server` with this keys:

```
TWITTER_CONSUMER_KEY=xxx-xxx
TWITTER_CONSUMER_SECRET=xxx-xxx
```

### Install & Run

```shellscript
cd server
yarn install
yarn start
```

### Update schema

```shellscript
cd server
yarn run update-schema
```

## Native

### Install & Run

```shellscript
cd native
yarn install

yarn run ios
//or
yarn run android
```

### Update schema

```shellscript
cd native
yarn run relay
```
