import { Address, Hash, Hex } from "viem";

interface ActionClaimant {
  chainId: number;
  signature: string;
  fieldIndex: number;
  signatureName: string;
  signatureType: string;
}

interface ActionStepParameters {
  fieldIndex: number;
  fieldType: number;
  filterData: Hex;
  filterType: number;
}

export type ArrayLike<T> = Record<string, T>;

export interface ActionStep {
  actionType: number;
  chainId: number;
  parameters: ActionStepParameters;
  signature: Hex;
  signatureName: string;
  signatureType: string;
  targetContract: Address;
  targetContractName: string | null;
}

interface AllowList {
  type: string;
  owner: string;
  contractAddress: string;
}

interface Incentive {
  asset: Address;
  limit: string;
  reward: string;
  strategy: number;
  type: string;
}

interface Boost {
  actionClaimant: ActionClaimant;
  actionSteps: ArrayLike<ActionStep>;
  allowList: AllowList;
  id: string;
  incentives: ArrayLike<Incentive>;
  maxParticipants: string;
  protocolFee: string;
  referralFee: string;
}

interface BoostCreatedEvent {
  action: Address;
  allowList: Address;
  blockTimestamp: string;
  boostIndex: string;
  budget: Address;
  chainId: number;
  id: string;
  incentiveCount: string;
  owner: Address;
  txHash: Hash;
  validator: Address;
}

export interface BoostWithEvent {
  Boost: Boost;
  BoostCreatedEvent: BoostCreatedEvent;
}
