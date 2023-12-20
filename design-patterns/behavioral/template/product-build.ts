interface ProductInfoModel {
    key: string;
    name: string;
    description: string;
    // other properties of the product

    applicableVariants: any;
    scenes: any;
}

class Product { }
class ApplicableVariants { }
class SceneInfo { }

//abstract class representing product building
abstract class BuildProductInfo {
    product: Product;

    abstract getProuctInfoAndExtractProps(): Product;
    abstract getApplicableVariants(): ApplicableVariants;
    abstract getSceneInfo(): SceneInfo;
    abstract buildProductInfo(): ProductInfoModel;
}

//concrete class representing product building for v1 products
class BuildV1ProductInfoModel extends BuildProductInfo {
    constructor() {
        super();
    }
    getProuctInfoAndExtractProps(): Product {
        //logic to call v1 prouct api and extract properties for v1.
    }
    getApplicableVariants(): ApplicableVariants {
        //logic to get applicable variants for v1 product
    }
    getSceneInfo(): SceneInfo {
        //logic to get scene info for v1 product
    }
    buildProductInfo(): ProductInfoModel {
        //logic to build consolidated model for v1 product info
    }
}

//concrete class representing product building for v2 products
class BuildV2ProductInfoModel extends BuildProductInfo {
    constructor() {
        super();
    }
    getProuctInfoAndExtractProps(): Product {
        //logic to call v2 prouct api and extract properties for v2.
    }
    getApplicableVariants(): ApplicableVariants {
        //logic to get applicable variants for v2 product
    }
    getSceneInfo(): SceneInfo {
        //logic to get scene info for v2 product
    }
    buildProductInfo(): ProductInfoModel {
        //logic to build consolidated model for v2 product info
    }
}


/////////////////////////////////////////////
const buildV1Product = new BuildV1ProductInfoModel();
buildV1Product.getProuctInfoAndExtractProps();
buildV1Product.getApplicableVariants();
buildV1Product.getSceneInfo();
buildV1Product.buildProductInfo();

const buildV2Product = new BuildV2ProductInfoModel();
buildV2Product.getProuctInfoAndExtractProps();
buildV2Product.getApplicableVariants();
buildV2Product.getSceneInfo();
buildV2Product.buildProductInfo();
