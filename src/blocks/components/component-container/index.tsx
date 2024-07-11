export function ComponentContainer( {
	children,
}: {
	children: React.ReactNode;
} ) {
	return <div className="grid grid-cols-1 gap-4">{ children }</div>;
}
