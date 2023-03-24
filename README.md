# Whatsapp Sender

Application responsible for sending messages to Whatsapp by receiving a request that must contain the recipient's number and the message to be forwarded.

## Installation

Install the project dependencies with npm.

```bash
  git clone https://github.com/cristhoffer-nunes/whatsapp-sender.git
  cd whatsapp-sender
  npm install
```

## Initializing

```bash
  1. npm run dev
  2. scan the QR code through your whatsapp
  3. after the application is connected to whastapp the server can be used
```

## API Documentation

#### Returns the status of the Whatsapp connection

```http
  GET /status
```

#### Sends the message

```http
  POST /sender
```

| Body      | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `number`  | `string` | **Required**. Recipient number   |
| `message` | `string` | **Required**. Message to be sent |

```
  {
    "number": "+<country code + cell phone number>",
    "message: "<your message>"
  }
```

#### Example

```
  {
    "number": "+5511983070000",
    "message: "Hello, this is an example message."
  }
```
