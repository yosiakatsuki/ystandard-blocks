export function HorizonButtons( { children }: { children: React.ReactNode } ) {
	return (
		<div className="flex [&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button:not(:last-child)]:border-r-0 [&>button]:w-full [&>button]:justify-center [&>button]:border [&>button]:border-solid [&>button]:border-[var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))] [&>button]:text-center [&>button]:!shadow-none">
			{ children }
		</div>
	);
}
