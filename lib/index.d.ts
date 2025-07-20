export declare type Asset = {
	IconName: string;
	Id: number;
	Url: string;
	ImageRectSize: Vector2;
	ImageRectOffset: Vector2;
};

export declare const PackageVersion: string;
export declare const PackageName: string;

export declare const GetAsset: (iconName: string, iconSize?: number) => Asset;
export declare const GetAllAssets: (inputSize?: number) => Array<Asset>;
export declare const ImageLabel: (
	iconName: string,
	iconSize?: number,
	propertyOverrides?: Record<string, unknown>,
) => string;
