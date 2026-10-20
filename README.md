# Chatterly — Independent Messaging Platform

A responsive, WhatsApp-inspired messaging starter with original branding. It is a separate project and does not connect to or modify any other repository, app, or deployment.

## Included

- Responsive desktop and mobile interface
- Account registration and sign-in, password hashing with Node's `scrypt`, signed expiring bearer tokens
- User search and direct conversations
- Group conversations and member lists
- Persistent messages stored in a local JSON file
- Real-time message delivery, typing indicators, and online/offline presence with Socket.IO
- File attachments for supported images, video, audio, PDF and plain text files
- Delete-own-message action, profile display name/about editing, unread counts, and chat filters
- API health endpoint and a basic automated API test

## Requirements

- Node.js 20 or newer
- npm

## Run locally

1. Extract the ZIP.
2. Open a terminal in this folder.
3. Install dependencies: `npm install`
4. (Recommended) Copy `.env.example` to `.env` and set a long random `APP_SECRET` before using real accounts. If using `.env`, load it with your preferred environment-variable tool or shell; the app intentionally has no dotenv dependency.
5. Run checks: `npm test` and `npm run check`.
6. Start: `npm start`
7. Open `http://localhost:3000`.

For local testing, the default development secret is used if `APP_SECRET` is not set. Do not expose that default on a public deployment.

## Data and uploads

User records, password hashes, conversations and messages are written to `data/store.json`. Uploaded files are written to `uploads/`. These folders are local development storage, not a managed production database or object store. Back them up if you need to preserve local test data.

## Important production work still needed

This is a functional starter, not a production-scale WhatsApp replacement. Before public launch, add a managed database and object storage, HTTPS and secure session/token handling, rate limiting, abuse reporting and moderation, virus scanning and stricter file policy, account recovery, device/session management, encrypted backups, monitoring, privacy/data export and deletion workflows, and load/security testing. **End-to-end encryption is not implemented**; transport security depends on HTTPS at deployment, and the server can read stored message content. Do not describe this app as end-to-end encrypted. It does not include voice/video calls, broadcast channels, business tools, or verified WhatsApp interoperability.

This project uses its own name and visual design and is not affiliated with WhatsApp or Meta.
