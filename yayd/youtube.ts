interface ConstructorData {
  url: string,
  onProgressCallback(): void | any | null,
  onCompleteCallback(): void | any | null,
  proxies?: Record<string, string | null>,
  useAuth: Boolean,
  allowAuthCache: Boolean,
  js: String | null,
  jsUrl: String,
  vidInfo: Record<string, number>,
  watchHtml: string,
  embedHtml: string,
  playerConfigArgs: Record<string, number>,
  ageRestricted: boolean,
  fmtStreams: string,
  initialData: string,
  metaData: string,
  videoId: string,
  watchUrl: string,
  embedUrl: string,
  streamMonostate: string,
  author: string,
  title: string,
  publishDate: Date,

}

class Youtube implements ConstructorData {
  url!: string;
  js!: String | null;
  useAuth!: Boolean;
  proxies?: Record<string, string | null> | undefined;
  allowAuthCache!: Boolean;
  jsUrl!: String;
  vidInfo!: Record<string, number>;
  watchHtml!: string
  embedHtml!: string
  playerConfigArgs!: Record<string, number>
  ageRestricted!: boolean
  fmtStreams!: string
  initialData!: string
  metaData!: string
  videoId!: string
  watchUrl!: string
  embedUrl!: string
  streamMonostate!: string
  author!: string
  title!: string
  publishDate!: Date
  constructor(url: string,
    onProgressCallback?: () => void | any | null,
    onCompleteCallback?: () => void | any | null,
    proxies?: Record<string, string | null>,
    useAuth: Boolean = false,
    allowAuthCache: Boolean = true) {

    this.ageRestricted = false;


  }

  onCompleteCallback() {

  }
  onProgressCallback() {

  }
}
