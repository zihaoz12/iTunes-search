export interface Album {
  resultCount:number;
  results:[
    {
      artistName:string,
      collectionViewUrl: string,
      artworkUrl60: string,
      artworkUrl100: string,
    }
  ];
}
