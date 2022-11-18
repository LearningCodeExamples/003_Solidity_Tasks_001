# 003_Solidity_Tasks_001
Solidity storage contract example Validate Contract function

# Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

setup instructions for creating this project:


1. Create your new project folder
        ``` mkdir hardhat-simple-storage-basic ```

2. Enter your project root folder
        ``` cd hardhat-simple-storage-basic ```

3. Initialize your Node Project
        ``` yarn init ```

4. Open your project folder in vscode
   
5. Delete ``` "main": "index.js", ``` from package.json.


6. Install Hardhat Node Module
        ``` yarn add --dev hardhat ```

7. Create a Hardhat Project.
        ``` yarn hardhat ```


8. SELECT ``` ▸ Create a JavaScript project ``` and press ENTER.

```s

888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.12.2

? What do you want to do? … 
▸ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit

```

9. Start a local test network ``` yarn hardhat node ```

10. Create a simple Hardhat Task, Add this code to hardhat.config.js
    Add this code to print a list off all accounts, you can then run the command ``` hardhat accounts ``` in the terminal to see the list of accounts.

``` javascript

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

```
11.  Run your task command in the terminal to see it in action.

```
hardhat accounts
```

12. Run 'yarn hardhat' again, this time since you already have a project initialized, it will outpu all your available commnds you can use.

```
yarn hardhat
```

```shell
yarn run v1.22.19
$ /home/Documents/CODE/hardhat-simple-storage-basic/node_modules/.bin/hardhat
Hardhat version 2.12.2

Usage: hardhat [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config           	A Hardhat config file. 
  --emoji            	Use emoji in messages. 
  --flamegraph       	Generate a flamegraph of your Hardhat tasks 
  --help             	Shows this message, or a task's help if its name is provided 
  --max-memory       	The maximum amount of memory that Hardhat can use. 
  --network          	The network to connect to. 
  --show-stack-traces	Show stack traces (always enabled on CI servers). 
  --tsconfig         	A TypeScript config file. 
  --typecheck        	Enable TypeScript type-checking of your scripts/tests 
  --verbose          	Enables Hardhat verbose logging 
  --version          	Shows hardhat's version. 


AVAILABLE TASKS:

  accounts          	Prints the list of accounts
  check             	Check whatever you need
  clean             	Clears the cache and deletes all artifacts
  compile           	Compiles the entire project, building all artifacts
  console           	Opens a hardhat console
  coverage          	Generates a code coverage report for tests
  flatten           	Flattens and prints contracts and their dependencies
  gas-reporter:merge	
  help              	Prints this message
  node              	Starts a JSON-RPC server on top of Hardhat Network
  run               	Runs a user-defined script after compiling the project
  test              	Runs mocha tests
  typechain         	Generate Typechain typings for compiled contracts
  verify            	Verifies contract on Etherscan

To get help for a specific task run: npx hardhat help [task]

Done in 0.46s.

```

13. Compile the default test contract
    ``` yarn hardhat compile ```

14.  Deploy the default test contract
      ``` yarn hardhat run scripts/deploy.js ```

15. Rename the default contract Lock.sol to Storage.sol, delete all code and add this code instead:

```javascript

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Storage {
  uint256 favoriteNumber;

  struct People {
    uint256 favoriteNumber;
    string name;
  }

  // uint256[] public anArray;
  People[] public people;

  mapping(string => uint256) public nameToFavoriteNumber;

  function store(uint256 _favoriteNumber) public {
    favoriteNumber = _favoriteNumber;
  }

  function retrieve() public view returns (uint256) {
    return favoriteNumber;
  }

  function addPerson(string memory _name, uint256 _favoriteNumber) public {
    people.push(People(_favoriteNumber, _name));
    nameToFavoriteNumber[_name] = _favoriteNumber;
  }
}

```

16. compile contract
17. deploy contract
18. change network to goerli
19. setup alchemy account
20. edit hardhat.config.js
21. install .env module
22. add .env file
23. update hardhat.config.js with RPC_URL from .env file
24. add ``` require("dotenv").config(); ``` to > hardhat.config.js
25. create a new metamask account for testing purposes only
26. get private key of new metamask account and add it to your env file
        ``` PRIVATE_KEY=yourprivatekey ```
27. Then add it to your hardhat.config.js file as an account variable.
       
```javascript
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.17",
};
```

28. get some test eth from the faucet: https://goerlifaucet.com/
    ( Login with you Alchemy account )

29. deploy contract to goerli network with this command:
    ``` yarn hardhat run scripts/deploy.js --network goerli ```

30. Get the deployed contract address from terminal
31. Copy contract address and paste it into the Etherscan Goerli network search bar to verify the contract. https://goerli.etherscan.io/
