export function getQuoteTag(tag: string) {
	if (tag.length === 0) return '' as const;

	return `&tags=${tag}` as const;
}
