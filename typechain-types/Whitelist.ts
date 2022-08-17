/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface WhitelistInterface extends utils.Interface {
  functions: {
    "addAddressToWhiteList()": FunctionFragment;
    "getAddressesListedCount()": FunctionFragment;
    "getMaxWhitelistAddresses()": FunctionFragment;
    "getWhitelistAddress(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAddressToWhiteList"
      | "getAddressesListedCount"
      | "getMaxWhitelistAddresses"
      | "getWhitelistAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAddressToWhiteList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressesListedCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxWhitelistAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAddressToWhiteList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressesListedCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxWhitelistAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistAddress",
    data: BytesLike
  ): Result;

  events: {
    "addressAdded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "addressAdded"): EventFragment;
}

export interface addressAddedEventObject {
  whitelistAddress: string;
}
export type addressAddedEvent = TypedEvent<[string], addressAddedEventObject>;

export type addressAddedEventFilter = TypedEventFilter<addressAddedEvent>;

export interface Whitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAddressToWhiteList(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddressesListedCount(overrides?: CallOverrides): Promise<[number]>;

    getMaxWhitelistAddresses(overrides?: CallOverrides): Promise<[number]>;

    getWhitelistAddress(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addAddressToWhiteList(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddressesListedCount(overrides?: CallOverrides): Promise<number>;

  getMaxWhitelistAddresses(overrides?: CallOverrides): Promise<number>;

  getWhitelistAddress(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addAddressToWhiteList(overrides?: CallOverrides): Promise<void>;

    getAddressesListedCount(overrides?: CallOverrides): Promise<number>;

    getMaxWhitelistAddresses(overrides?: CallOverrides): Promise<number>;

    getWhitelistAddress(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "addressAdded(address)"(
      whitelistAddress?: PromiseOrValue<string> | null
    ): addressAddedEventFilter;
    addressAdded(
      whitelistAddress?: PromiseOrValue<string> | null
    ): addressAddedEventFilter;
  };

  estimateGas: {
    addAddressToWhiteList(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddressesListedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxWhitelistAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    getWhitelistAddress(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddressToWhiteList(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddressesListedCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxWhitelistAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistAddress(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
