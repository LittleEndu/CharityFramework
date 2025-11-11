import { Patch } from '@placecharity/framework-types';

export const domEvents = (): Patch[] => {
	return [
		{
			name: 'domRightSidebar',
			find: "You don't have charges to paint. Wait to recharge.",
			replace: {
				match:
					/[a-zA-Z_$][\w$]*=[a-zA-Z_$][\w$]*=>{var ([a-zA-Z_$][\w$]*)=[a-zA-Z_$][\w$]*\(\),[^}]*?;(?=[^}]*?__click=\[\$.*?"size-5")/,
				replace: (orig, elem) =>
					`${orig};document.dispatchEvent(new CustomEvent('charity-right-sidebar',{detail:${elem}}));`,
			},
		},
	];
};
