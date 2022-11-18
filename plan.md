1. Add a Verify Contract function to deploy.js
   
2. Install the Hardhat Etherscan plugin
      ```yarn add @nomiclabs/hardhat-etherscan --save-dev```

3. Add the require statement to hardhat.config.js
      ```require("@nomiclabs/hardhat-etherscan")```

4. Add a const variable for the new .env variable.
      ```const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY```

5. At the bottom of hardhat.config.js add the following code under the ```solidity: "0.8.17",``` line.
```javascript
      etherscan: {
        apiKey: ETHERSCAN_API_KEY
      }
```

6. Add the new .env variable to .env
      ```ETHERSCAN_API_KEY=```

7. Run hardhat again to see the new verify contract task.
      ```yarn hardhat```

   You should see the new task at the bottom of the list.

```shell

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

```

8. Now run ``` yarn hardhat verify --help ``` to see the options for the verify task.

```shell
yarn hardhat verify --help
yarn run v1.22.19
$ /Documents/CODE/LearningCodeExamples/Solidity_Storage_002/node_modules/.bin/hardhat verify --help
Hardhat version 2.12.2

Usage: hardhat [GLOBAL OPTIONS] verify [--constructor-args <INPUTFILE>] [--contract <STRING>] [--libraries <INPUTFILE>] [--list-networks] [address] [...constructorArgsParams]

OPTIONS:

  --constructor-args	File path to a javascript module that exports the list of arguments. 
  --contract        	Fully qualified name of the contract to verify. Skips automatic detection of the contract. Use if the deployed bytecode matches more than one contract in your project. 
  --libraries       	File path to a javascript module that exports the dictionary of library addresses for your contract. Use if there are undetectable library addresses in your contract. Library addresses are undetectable if they are only used in the constructor for your contract. 
  --list-networks   	Print the list of supported networks 

POSITIONAL ARGUMENTS:

  address              	Address of the smart contract to verify 
  constructorArgsParams	Contract constructor arguments. Ignored if the --constructor-args option is used. (default: [])

verify: Verifies contract on Etherscan

For global options help run: hardhat help

Done in 0.38s.
```

9. After updating the code with the verify function, you can run ```yarn hardhat run scripts/deploy.js --network goerli``` to deploy the contract to the Goerli testnet.
    
```shell
yarn hardhat run scripts/deploy.js --network goerli
yarn run v1.22.19
$ /Documents/CODE/LearningCodeExamples/Solidity_Storage_002/node_modules/.bin/hardhat run scripts/deploy.js --network goerli
Compiled 1 Solidity file successfully
Deploying contract...
Deployed contract to: 0x6784a54625E379B5685Cc0593C64c6EF5cea71D4
Waiting for block confirmations...
Verifying contract...
Nothing to compile
Successfully submitted source code for contract
contracts/Storage.sol:Storage at 0x6784a54625E379B5685Cc0593C64c6EF5cea71D4
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Storage on Etherscan.
https://goerli.etherscan.io/address/0x6784a54625E379B5685Cc0593C64c6EF5cea71D4#code
Current Value is: 0
Updated Value is: 963369
Done in 144.13s.
```





