export interface BasicProjectData {
    title: string,
    url: string,
    employer: string,
    role: string,
    description: string,
    medium: 'architecture' | 'urban planning' | 'product' | 'web' | 'physical',
    image?: string,
}