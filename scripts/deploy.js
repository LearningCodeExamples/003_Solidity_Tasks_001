// importsStorageFactoryStorageFactory
const { ethers, run, network } = require("hardhat")

// async main
async function main() {
  const StorageFactory = await ethers.getContractFactory("Storage")
  console.log("Deploying contract...")
  const Storage = await StorageFactory.deploy()
  await Storage.deployed()
  console.log(`Deployed contract to: ${Storage.address}`)
  console.log("Waiting for block confirmations...")
  //console.log(network.config.chainId)
  await Storage.deployTransaction.wait(6)
  await verify(Storage.address, [])
  

  const currentValue = await Storage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  // Update the current value
  const transactionResponse = await Storage.store(963369)
  await transactionResponse.wait(1)
  const updatedValue = await Storage.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })