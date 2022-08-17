import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

describe("Whitelist", function () {
  let Whitelist: ContractFactory;
  let whitelist: Contract;
  let deployer: SignerWithAddress;
  let accounts: SignerWithAddress[];
  let whitelistDeployedAddress: string;

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    Whitelist = await ethers.getContractFactory("Whitelist");
    whitelist = await Whitelist.deploy(10);
    await whitelist.deployed();
    whitelistDeployedAddress = whitelist.address;
  });

  describe("constructor", function () {
    it("intitiallizes the whitelist correctly", async () => {
      expect(whitelistDeployedAddress).equal(whitelist.address);
    });
  });

  describe("Address to whitelist success", function () {
    it("Add one address to whitelist", async () => {
      const signer = accounts[1];
      const wlc = await whitelist.connect(signer);
      await expect(wlc.addAddressToWhiteList())
        .to.emit(wlc, "addressAdded")
        .withArgs(signer.address);
    });

    it("Add ten address to whitelist", async () => {
      let wlc: Contract;
      for (let i = 1; i < 10; i++) {
        const signer = accounts[i];
        wlc = await whitelist.connect(signer);
        wlc.addAddressToWhiteList();
      }
      wlc = await whitelist.connect(accounts[15]);
      await expect(wlc!.addAddressToWhiteList())
        .to.emit(wlc!, "addressAdded")
        .withArgs(accounts[15].address);
    });
  });

  describe("Address to whitelist fail", function () {
    it("Sender has already been whitelisted", async () => {
      const signer = accounts[1];
      const wlc = await whitelist.connect(signer);
      await wlc.addAddressToWhiteList();
      await expect(wlc.addAddressToWhiteList())
        .to.be.revertedWithCustomError(wlc, "Whitelist_alreadyExist")
        .withArgs(signer.address, "Sender has already been whitelisted");
    });

    it("Whitelist limit overflow", async () => {
      let wlc: Contract;
      for (let i = 1; i <= 10; i++) {
        const signer = accounts[i];
        wlc = await whitelist.connect(signer);
        wlc.addAddressToWhiteList();
      }
      wlc = await whitelist.connect(accounts[15]);
      await expect(wlc.addAddressToWhiteList())
        .to.be.revertedWithCustomError(wlc, "Whitelist_limitOverflow")
        .withArgs("More addresses cant be added, limit reached");
    });
  });

  describe("Listed Addresses", function () {
    it("Max lited address", async () => {
      expect(await whitelist.getMaxWhitelistAddresses()).to.equal(10);
    });

    it("Listed address count", async () => {
      await whitelist.addAddressToWhiteList();
      expect(await whitelist.getAddressesListedCount()).to.equal(1);
    });
  });

  describe("Listed Address", function () {
    it("Address already listed succes", async () => {
      const signer = accounts[1];
      const wlc = whitelist.connect(signer);
      await wlc.addAddressToWhiteList();
      expect(await whitelist.getWhitelistAddress(signer.address)).true;
    });

    it("Address already listed fail", async () => {
      expect(await whitelist.getWhitelistAddress(accounts[2].address)).false;
    });
  });
});
