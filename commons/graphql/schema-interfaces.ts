export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JSON: any;
    DateTime: any;
    Time: any;
    Date: any;
    Long: any;
    Upload: any;
};

export type FileInfoInput = {
    name?: Maybe<Scalars["String"]>;
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsMe = {
    __typename?: "UsersPermissionsMe";
    id: Scalars["ID"];
    username: Scalars["String"];
    email: Scalars["String"];
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
    __typename?: "UsersPermissionsMeRole";
    id: Scalars["ID"];
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRegisterInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars["String"];
    password: Scalars["String"];
    provider?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
    __typename?: "UsersPermissionsLoginPayload";
    jwt?: Maybe<Scalars["String"]>;
    user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
    __typename?: "UserPermissionsPasswordPayload";
    ok: Scalars["Boolean"];
};

export enum Enum_Bar_City {
    Hanoi = "Hanoi",
    Hcm = "HCM",
}

export type Bar = {
    __typename?: "Bar";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    video?: Maybe<UploadFile>;
    contents?: Maybe<Scalars["JSON"]>;
    logo?: Maybe<UploadFile>;
    city?: Maybe<Enum_Bar_City>;
    location?: Maybe<Scalars["JSON"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    images?: Maybe<Array<Maybe<UploadFile>>>;
    drinks?: Maybe<Array<Maybe<Drink>>>;
};

export type BarImagesArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type BarDrinksArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type BarConnection = {
    __typename?: "BarConnection";
    values?: Maybe<Array<Maybe<Bar>>>;
    groupBy?: Maybe<BarGroupBy>;
    aggregate?: Maybe<BarAggregator>;
};

export type BarAggregator = {
    __typename?: "BarAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type BarGroupBy = {
    __typename?: "BarGroupBy";
    id?: Maybe<Array<Maybe<BarConnectionId>>>;
    created_at?: Maybe<Array<Maybe<BarConnectionCreated_At>>>;
    updated_at?: Maybe<Array<Maybe<BarConnectionUpdated_At>>>;
    name?: Maybe<Array<Maybe<BarConnectionName>>>;
    description?: Maybe<Array<Maybe<BarConnectionDescription>>>;
    video?: Maybe<Array<Maybe<BarConnectionVideo>>>;
    contents?: Maybe<Array<Maybe<BarConnectionContents>>>;
    logo?: Maybe<Array<Maybe<BarConnectionLogo>>>;
    city?: Maybe<Array<Maybe<BarConnectionCity>>>;
    location?: Maybe<Array<Maybe<BarConnectionLocation>>>;
    published_at?: Maybe<Array<Maybe<BarConnectionPublished_At>>>;
};

export type BarConnectionId = {
    __typename?: "BarConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionCreated_At = {
    __typename?: "BarConnectionCreated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionUpdated_At = {
    __typename?: "BarConnectionUpdated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionName = {
    __typename?: "BarConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionDescription = {
    __typename?: "BarConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionVideo = {
    __typename?: "BarConnectionVideo";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionContents = {
    __typename?: "BarConnectionContents";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionLogo = {
    __typename?: "BarConnectionLogo";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionCity = {
    __typename?: "BarConnectionCity";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionLocation = {
    __typename?: "BarConnectionLocation";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<BarConnection>;
};

export type BarConnectionPublished_At = {
    __typename?: "BarConnectionPublished_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<BarConnection>;
};

export type BarInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    video?: Maybe<Scalars["ID"]>;
    contents?: Maybe<Scalars["JSON"]>;
    drinks?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    logo?: Maybe<Scalars["ID"]>;
    city?: Maybe<Enum_Bar_City>;
    location?: Maybe<Scalars["JSON"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditBarInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    video?: Maybe<Scalars["ID"]>;
    contents?: Maybe<Scalars["JSON"]>;
    drinks?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    logo?: Maybe<Scalars["ID"]>;
    city?: Maybe<Enum_Bar_City>;
    location?: Maybe<Scalars["JSON"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateBarInput = {
    data?: Maybe<BarInput>;
};

export type CreateBarPayload = {
    __typename?: "createBarPayload";
    bar?: Maybe<Bar>;
};

export type UpdateBarInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditBarInput>;
};

export type UpdateBarPayload = {
    __typename?: "updateBarPayload";
    bar?: Maybe<Bar>;
};

export type DeleteBarInput = {
    where?: Maybe<InputId>;
};

export type DeleteBarPayload = {
    __typename?: "deleteBarPayload";
    bar?: Maybe<Bar>;
};

export type Category = {
    __typename?: "Category";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    bars?: Maybe<Array<Maybe<Bar>>>;
};

export type CategoryBarsArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type CategoryConnection = {
    __typename?: "CategoryConnection";
    values?: Maybe<Array<Maybe<Category>>>;
    groupBy?: Maybe<CategoryGroupBy>;
    aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryAggregator = {
    __typename?: "CategoryAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type CategoryGroupBy = {
    __typename?: "CategoryGroupBy";
    id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
    created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
    updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
    name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
    description?: Maybe<Array<Maybe<CategoryConnectionDescription>>>;
    published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>;
};

export type CategoryConnectionId = {
    __typename?: "CategoryConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionCreated_At = {
    __typename?: "CategoryConnectionCreated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
    __typename?: "CategoryConnectionUpdated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
    __typename?: "CategoryConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionDescription = {
    __typename?: "CategoryConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionPublished_At = {
    __typename?: "CategoryConnectionPublished_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<CategoryConnection>;
};

export type CategoryInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    bars?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditCategoryInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    bars?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateCategoryInput = {
    data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
    __typename?: "createCategoryPayload";
    category?: Maybe<Category>;
};

export type UpdateCategoryInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
    __typename?: "updateCategoryPayload";
    category?: Maybe<Category>;
};

export type DeleteCategoryInput = {
    where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
    __typename?: "deleteCategoryPayload";
    category?: Maybe<Category>;
};

export type Drink = {
    __typename?: "Drink";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    bar?: Maybe<Bar>;
    ingredients?: Maybe<Scalars["JSON"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    images?: Maybe<Array<Maybe<UploadFile>>>;
    characteristics: {Base:string, Type:string, Strength:string}
};

export type DrinkImagesArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type DrinkConnection = {
    __typename?: "DrinkConnection";
    values?: Maybe<Array<Maybe<Drink>>>;
    groupBy?: Maybe<DrinkGroupBy>;
    aggregate?: Maybe<DrinkAggregator>;
};

export type DrinkAggregator = {
    __typename?: "DrinkAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type DrinkGroupBy = {
    __typename?: "DrinkGroupBy";
    id?: Maybe<Array<Maybe<DrinkConnectionId>>>;
    created_at?: Maybe<Array<Maybe<DrinkConnectionCreated_At>>>;
    updated_at?: Maybe<Array<Maybe<DrinkConnectionUpdated_At>>>;
    name?: Maybe<Array<Maybe<DrinkConnectionName>>>;
    description?: Maybe<Array<Maybe<DrinkConnectionDescription>>>;
    bar?: Maybe<Array<Maybe<DrinkConnectionBar>>>;
    ingredients?: Maybe<Array<Maybe<DrinkConnectionIngredients>>>;
    published_at?: Maybe<Array<Maybe<DrinkConnectionPublished_At>>>;
};

export type DrinkConnectionId = {
    __typename?: "DrinkConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionCreated_At = {
    __typename?: "DrinkConnectionCreated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionUpdated_At = {
    __typename?: "DrinkConnectionUpdated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionName = {
    __typename?: "DrinkConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionDescription = {
    __typename?: "DrinkConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionBar = {
    __typename?: "DrinkConnectionBar";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionIngredients = {
    __typename?: "DrinkConnectionIngredients";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkConnectionPublished_At = {
    __typename?: "DrinkConnectionPublished_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<DrinkConnection>;
};

export type DrinkInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    bar?: Maybe<Scalars["ID"]>;
    images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    ingredients?: Maybe<Scalars["JSON"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditDrinkInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    bar?: Maybe<Scalars["ID"]>;
    images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    ingredients?: Maybe<Scalars["JSON"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateDrinkInput = {
    data?: Maybe<DrinkInput>;
};

export type CreateDrinkPayload = {
    __typename?: "createDrinkPayload";
    drink?: Maybe<Drink>;
};

export type UpdateDrinkInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditDrinkInput>;
};

export type UpdateDrinkPayload = {
    __typename?: "updateDrinkPayload";
    drink?: Maybe<Drink>;
};

export type DeleteDrinkInput = {
    where?: Maybe<InputId>;
};

export type DeleteDrinkPayload = {
    __typename?: "deleteDrinkPayload";
    drink?: Maybe<Drink>;
};

export type I18NLocale = {
    __typename?: "I18NLocale";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
};

export type LocaleInput = {
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type UploadFile = {
    __typename?: "UploadFile";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    name: Scalars["String"];
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    formats?: Maybe<Scalars["JSON"]>;
    hash: Scalars["String"];
    ext?: Maybe<Scalars["String"]>;
    mime: Scalars["String"];
    size: Scalars["Float"];
    url: Scalars["String"];
    previewUrl?: Maybe<Scalars["String"]>;
    provider: Scalars["String"];
    provider_metadata?: Maybe<Scalars["JSON"]>;
    related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnection = {
    __typename?: "UploadFileConnection";
    values?: Maybe<Array<Maybe<UploadFile>>>;
    groupBy?: Maybe<UploadFileGroupBy>;
    aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
    __typename?: "UploadFileAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
    sum?: Maybe<UploadFileAggregatorSum>;
    avg?: Maybe<UploadFileAggregatorAvg>;
    min?: Maybe<UploadFileAggregatorMin>;
    max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
    __typename?: "UploadFileAggregatorSum";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorAvg = {
    __typename?: "UploadFileAggregatorAvg";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
    __typename?: "UploadFileAggregatorMin";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
    __typename?: "UploadFileAggregatorMax";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileGroupBy = {
    __typename?: "UploadFileGroupBy";
    id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
    created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
    updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
    name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
    alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
    caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
    width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
    height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
    formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
    hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
    ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
    mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
    size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
    url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
    previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
    provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
    provider_metadata?: Maybe<
        Array<Maybe<UploadFileConnectionProvider_Metadata>>
    >;
};

export type UploadFileConnectionId = {
    __typename?: "UploadFileConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
    __typename?: "UploadFileConnectionCreated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
    __typename?: "UploadFileConnectionUpdated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
    __typename?: "UploadFileConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
    __typename?: "UploadFileConnectionAlternativeText";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
    __typename?: "UploadFileConnectionCaption";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
    __typename?: "UploadFileConnectionWidth";
    key?: Maybe<Scalars["Int"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
    __typename?: "UploadFileConnectionHeight";
    key?: Maybe<Scalars["Int"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
    __typename?: "UploadFileConnectionFormats";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
    __typename?: "UploadFileConnectionHash";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
    __typename?: "UploadFileConnectionExt";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
    __typename?: "UploadFileConnectionMime";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
    __typename?: "UploadFileConnectionSize";
    key?: Maybe<Scalars["Float"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
    __typename?: "UploadFileConnectionUrl";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
    __typename?: "UploadFileConnectionPreviewUrl";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
    __typename?: "UploadFileConnectionProvider";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
    __typename?: "UploadFileConnectionProvider_metadata";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
    name: Scalars["String"];
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    formats?: Maybe<Scalars["JSON"]>;
    hash: Scalars["String"];
    ext?: Maybe<Scalars["String"]>;
    mime: Scalars["String"];
    size: Scalars["Float"];
    url: Scalars["String"];
    previewUrl?: Maybe<Scalars["String"]>;
    provider: Scalars["String"];
    provider_metadata?: Maybe<Scalars["JSON"]>;
    related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditFileInput = {
    name?: Maybe<Scalars["String"]>;
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    formats?: Maybe<Scalars["JSON"]>;
    hash?: Maybe<Scalars["String"]>;
    ext?: Maybe<Scalars["String"]>;
    mime?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    url?: Maybe<Scalars["String"]>;
    previewUrl?: Maybe<Scalars["String"]>;
    provider?: Maybe<Scalars["String"]>;
    provider_metadata?: Maybe<Scalars["JSON"]>;
    related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type DeleteFileInput = {
    where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
    __typename?: "deleteFilePayload";
    file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
    __typename?: "UsersPermissionsPermission";
    id: Scalars["ID"];
    type: Scalars["String"];
    controller: Scalars["String"];
    action: Scalars["String"];
    enabled: Scalars["Boolean"];
    policy?: Maybe<Scalars["String"]>;
    role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
    __typename?: "UsersPermissionsRole";
    id: Scalars["ID"];
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
    users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleConnection = {
    __typename?: "UsersPermissionsRoleConnection";
    values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
    groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
    aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
    __typename?: "UsersPermissionsRoleAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleGroupBy = {
    __typename?: "UsersPermissionsRoleGroupBy";
    id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
    name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
    description?: Maybe<
        Array<Maybe<UsersPermissionsRoleConnectionDescription>>
    >;
    type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
    __typename?: "UsersPermissionsRoleConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
    __typename?: "UsersPermissionsRoleConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
    __typename?: "UsersPermissionsRoleConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
    __typename?: "UsersPermissionsRoleConnectionType";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateRoleInput = {
    data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
    __typename?: "createRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
    __typename?: "updateRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
    where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
    __typename?: "deleteRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
    __typename?: "UsersPermissionsUser";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    username: Scalars["String"];
    email: Scalars["String"];
    provider?: Maybe<Scalars["String"]>;
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
    __typename?: "UsersPermissionsUserConnection";
    values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
    groupBy?: Maybe<UsersPermissionsUserGroupBy>;
    aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
    __typename?: "UsersPermissionsUserAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserGroupBy = {
    __typename?: "UsersPermissionsUserGroupBy";
    id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
    created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
    updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
    username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
    email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
    provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
    confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
    blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
    role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
    __typename?: "UsersPermissionsUserConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
    __typename?: "UsersPermissionsUserConnectionCreated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
    __typename?: "UsersPermissionsUserConnectionUpdated_at";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
    __typename?: "UsersPermissionsUserConnectionUsername";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
    __typename?: "UsersPermissionsUserConnectionEmail";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
    __typename?: "UsersPermissionsUserConnectionProvider";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
    __typename?: "UsersPermissionsUserConnectionConfirmed";
    key?: Maybe<Scalars["Boolean"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
    __typename?: "UsersPermissionsUserConnectionBlocked";
    key?: Maybe<Scalars["Boolean"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
    __typename?: "UsersPermissionsUserConnectionRole";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    provider?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    resetPasswordToken?: Maybe<Scalars["String"]>;
    confirmationToken?: Maybe<Scalars["String"]>;
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<Scalars["ID"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditUserInput = {
    username?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    provider?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    resetPasswordToken?: Maybe<Scalars["String"]>;
    confirmationToken?: Maybe<Scalars["String"]>;
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<Scalars["ID"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateUserInput = {
    data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
    __typename?: "createUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
    __typename?: "updateUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
    where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
    __typename?: "deleteUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type Morph =
    | UsersPermissionsMe
    | UsersPermissionsMeRole
    | UsersPermissionsLoginPayload
    | UserPermissionsPasswordPayload
    | Bar
    | BarConnection
    | BarAggregator
    | BarGroupBy
    | BarConnectionId
    | BarConnectionCreated_At
    | BarConnectionUpdated_At
    | BarConnectionName
    | BarConnectionDescription
    | BarConnectionVideo
    | BarConnectionContents
    | BarConnectionLogo
    | BarConnectionCity
    | BarConnectionLocation
    | BarConnectionPublished_At
    | CreateBarPayload
    | UpdateBarPayload
    | DeleteBarPayload
    | Category
    | CategoryConnection
    | CategoryAggregator
    | CategoryGroupBy
    | CategoryConnectionId
    | CategoryConnectionCreated_At
    | CategoryConnectionUpdated_At
    | CategoryConnectionName
    | CategoryConnectionDescription
    | CategoryConnectionPublished_At
    | CreateCategoryPayload
    | UpdateCategoryPayload
    | DeleteCategoryPayload
    | Drink
    | DrinkConnection
    | DrinkAggregator
    | DrinkGroupBy
    | DrinkConnectionId
    | DrinkConnectionCreated_At
    | DrinkConnectionUpdated_At
    | DrinkConnectionName
    | DrinkConnectionDescription
    | DrinkConnectionBar
    | DrinkConnectionIngredients
    | DrinkConnectionPublished_At
    | CreateDrinkPayload
    | UpdateDrinkPayload
    | DeleteDrinkPayload
    | I18NLocale
    | UploadFile
    | UploadFileConnection
    | UploadFileAggregator
    | UploadFileAggregatorSum
    | UploadFileAggregatorAvg
    | UploadFileAggregatorMin
    | UploadFileAggregatorMax
    | UploadFileGroupBy
    | UploadFileConnectionId
    | UploadFileConnectionCreated_At
    | UploadFileConnectionUpdated_At
    | UploadFileConnectionName
    | UploadFileConnectionAlternativeText
    | UploadFileConnectionCaption
    | UploadFileConnectionWidth
    | UploadFileConnectionHeight
    | UploadFileConnectionFormats
    | UploadFileConnectionHash
    | UploadFileConnectionExt
    | UploadFileConnectionMime
    | UploadFileConnectionSize
    | UploadFileConnectionUrl
    | UploadFileConnectionPreviewUrl
    | UploadFileConnectionProvider
    | UploadFileConnectionProvider_Metadata
    | DeleteFilePayload
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsRoleConnection
    | UsersPermissionsRoleAggregator
    | UsersPermissionsRoleGroupBy
    | UsersPermissionsRoleConnectionId
    | UsersPermissionsRoleConnectionName
    | UsersPermissionsRoleConnectionDescription
    | UsersPermissionsRoleConnectionType
    | CreateRolePayload
    | UpdateRolePayload
    | DeleteRolePayload
    | UsersPermissionsUser
    | UsersPermissionsUserConnection
    | UsersPermissionsUserAggregator
    | UsersPermissionsUserGroupBy
    | UsersPermissionsUserConnectionId
    | UsersPermissionsUserConnectionCreated_At
    | UsersPermissionsUserConnectionUpdated_At
    | UsersPermissionsUserConnectionUsername
    | UsersPermissionsUserConnectionEmail
    | UsersPermissionsUserConnectionProvider
    | UsersPermissionsUserConnectionConfirmed
    | UsersPermissionsUserConnectionBlocked
    | UsersPermissionsUserConnectionRole
    | CreateUserPayload
    | UpdateUserPayload
    | DeleteUserPayload;

export type InputId = {
    id: Scalars["ID"];
};

export enum PublicationState {
    Live = "LIVE",
    Preview = "PREVIEW",
}

export type AdminUser = {
    __typename?: "AdminUser";
    id: Scalars["ID"];
    username?: Maybe<Scalars["String"]>;
    firstname: Scalars["String"];
    lastname: Scalars["String"];
};
