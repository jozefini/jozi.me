import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: import.meta.env.SANITY_DATASET,
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2023-05-03'
}

export const client = createClient(config)
export const previewClient = createClient({
	...config,
	useCdn: false,
	token: import.meta.env.SANITY_API_TOKEN
})
