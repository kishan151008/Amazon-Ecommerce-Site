
export class SimpleScrapData {
    smallInfo: { heading: string, content: string }[] = []
    technicalDetails: { heading: string, content: string }[] = []
    aboutItem: string[] = []
    featureImages: string[] = []
    landingImages: string[] = []
}

export class ScrapData {
    info = {
        title: "",
        rating: 0,
        reviewCount: 0,
        price: 0,
        discountPrice: 0
    }
    smallInfo: { heading: string, content: string }[] = []
    technicalDetails: { heading: string, content: string }[] = []
    aboutItem: string[] = []
    featureImages: string[] = []
    landingImages: string[] = []

    toSimpleData() {
        let data = new SimpleScrapData()
        data.smallInfo = this.smallInfo
        data.technicalDetails = this.technicalDetails
        data.aboutItem = this.aboutItem
        data.featureImages = this.featureImages
        data.landingImages = this.landingImages

        return JSON.stringify(data)
    }
}


export interface CategoryData {
    categoryId: number,
    clicks: number,
    views: number,
    createAt: number,
    name: string,
    imageUrl: string,
    count: number
}


export interface ProductData {
    categoryId: number,
    productId: number,
    clicks: number,
    views: number,
    createAt: number,
    name: string,
    rating: number,
    reviewCount: number,
    price: number,
    discountPrice: number,
    affiliateUrl: string,
    allDetail: string,
    imageUrl: string
}