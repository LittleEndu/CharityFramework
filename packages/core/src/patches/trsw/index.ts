import { Patch } from '@placecharity/framework-types';

export const trswPatches = (): Patch[] => [
	{
		name: 'trswStubSend',
		find: "Service Workers are not supported/enabled in your browser. Some features might not work properly.",
		replace: {
			match: /return new Promise\(\((.),.\)=>{.*?}catch\(.\){.\(.\)}}\)/,
			replace: () => 'return Promise.resolve(null)',
		},
	},
];
