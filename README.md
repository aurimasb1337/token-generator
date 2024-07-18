

# Token Generator Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Setup

1. **Environment Configuration:**

   Ensure you have a `.env` file in the root of your project with the following content:

NEXT_PUBLIC_ETH_PRIVATE_KEY=your_ethereum_wallet_private_key


2. **Install Dependencies:**

Run the following command to install all necessary dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Ensure sufficient funds:**
Make sure your wallet has the required fee for creating tokens.


Todos: 
[x] Fix the ether providers method by downgrading to version 5.x.x

[ ] Investigate Yup test function that should have prevented onSubmit from working

[ ] Investigate potential bugs with Receive fees switch

License
This project is licensed under the MIT License. See the LICENSE file for details.

