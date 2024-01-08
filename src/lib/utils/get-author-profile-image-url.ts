import { IMAGE_BASE_URL } from '@/constants/api';

export const getAuthorProfileImageUrl = (slug: string, size = 200) => {
	return `${IMAGE_BASE_URL}/${size}/${slug}.jpg`;
};
