#  🎓 NCD.L2.sample--mail dApp
This repository contains a complete frontend applications (Vue.js, React) to work with
<a href="https://github.com/Learn-NEAR/NCD--messagebox" target="_blank">NCD.L1.messagebox smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
2. Angular (angular branch)

The goal of this repository is to make it as easy as possible to get started writing frontend with Vue.js, React, and Angular for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspirational purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## ⚡  Usage
![image](https://user-images.githubusercontent.com/15414351/173239812-6ce90ecf-b509-46fe-bd9c-6c296a623817.png)
<a href="" target="_blank">UI walkthrough</a>

You can use this app with contract ids that were deployed by the creators of this repo or you can use it with your own deployed contract ids.

Before pasting the id make sure that you deployed the correct smart contract, in other cases this code may not work as expected.

## Project setup
To deploy sample--promises to your account visit <a href="https://github.com/Learn-NEAR/NCD--messagebox" target="_blank">this repo (smart contract deployment instructions are inside):</a>

Also, you can find a contract example in that repo, check ```contacts/NCD--messagebox```


```
CONTRACT_ID = "put your contract id here"
...
```

After you fill up environment.ts file, you need to:

1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="" >Code walk-through video | TBA |</a>

### -- Contract's --

To work with message-contract we have separate functions inside ``` src/app/services/near.service.ts```.
```
  getMessageContract() {
    return new Contract(
      this.wallet.account(),
      environment.CONTRACT_ID,
      {
        viewMethods: ['retrieveMessages'],
        changeMethods: ['deleteAllMessages', 'sendMessage', 'summarize', 'transfer']
      }
    )
  }
```

### -- Near Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/services/near.service.ts ``` we are importing classes, functions, and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

The class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
this.near = new Near({
  networkId: environment.NETWORK_ID,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: environment.NODE_URL,
  walletUrl: environment.WALLET_URL,
  headers: {}
});
``` 
and creating wallet connection
```
// create wallet connection
this.wallet = new WalletConnection(this.near, "messagebox");
```


### -- Mail Service --

``` src/app/services/mail.service.ts ``` represent the main functional class of dApp

We use that container to encapsulate all data and functions related to our ideas:
```
  public myMessages: any[] = [];
  public isLoading = false;
  ...
  
  async loadMessages() {...};
  async handleSendMessage({target_account_id, message}: { target_account_id: any, message: any }) {...}
```

With dependency injection, we can share everything with components. ``` src/app/components/dashboard/dashboard.component.ts ``` as an example :
```
  constructor(public mailService: MailService) {
  }

  async loadData() {
    await this.mailService.loadMessages();
    this.messages = this.mailService.myMessages;
  }
```

## Examples
``` src/app/services/near.service.ts ```
### - Function | No Parameters -
```
async deleteAllMessages() {...}
```

### - Function | With Parameters -
```
setContract(contract: any) {...}
```
