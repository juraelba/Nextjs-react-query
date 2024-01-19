export interface ResponseData<T> {
    page: number
    total_pages: number
    total_results: number
    results: T
}

export interface QueryOptions {
    retry?: boolean
    cacheTime?: number
    staleTime?: number
    enabled?: boolean
    refetchInterval?: number | false
    refetchOnMount?: boolean | 'always'
    refetchOnWindowFocus?: boolean | 'always'
}

export interface CheckButtonType {
    label: string
    checked: boolean
}

export interface AvatarType {
    name: string
    url: string
}

export interface EventDataType {
    cardType: string
    mobile: boolean
    image?: string
    date: string
    title: string
    titleIcon?: string
    description: string
    teamMates?: string
    teamMatesAvatar?: string
    attending?: boolean
    avatars?: AvatarType[]
}