/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from 'bignumber.js'

export interface MigrationsContract extends Truffle.Contract<MigrationsInstance> {
	'new'(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>
}

type AllEvents = never

export interface MigrationsInstance extends Truffle.ContractInstance {
	last_completed_migration(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	owner(txDetails?: Truffle.TransactionDetails): Promise<string>

	setCompleted: {
		(completed: number | BigNumber | string, txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(completed: number | BigNumber | string, txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(completed: number | BigNumber | string, txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(completed: number | BigNumber | string, txDetails?: Truffle.TransactionDetails): Promise<number>
	}
}
