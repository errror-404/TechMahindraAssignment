export interface Album {
  userId: number;
  id: number;
  title: string;
  favorite?: boolean;
}

export interface AlbumImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface AlbumState {
  albums: Album[];
}
