export function HorizonButtons( { children }: { children: React.ReactNode } ) {
	return (
		<div className="flex [&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button]:w-full [&>button]:justify-center [&>button]:text-center">
			{ children }
		</div>
	);
}
